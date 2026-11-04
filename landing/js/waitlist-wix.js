// Steadily waitlist on Wix Forms.
// Renders the fields of the owner's form from its live schema (so edits in the Wix dashboard
// show up without a code change) in the page's own design, and submits through the Wix forms
// store. The "Traffic source" field is never shown: it is filled from the visitor's link.
import { createFormStore, FORM_ERROR } from "/js/wix/form-store.js";

const esc = (v) => String(v == null ? "" : v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const isSourceField = (f) => /traffic source/i.test(f.label || "");
const INPUT_TYPES = { email: "email", url: "url", phone: "tel", password: "password", number: "number", date: "date", time: "time", datetime: "datetime-local" };

function trafficSource() {
  const p = new URLSearchParams(location.search);
  const parts = ["utm_source", "utm_campaign", "utm_medium", "utm_content"].map((k) => p.get(k)).filter(Boolean);
  if (parts.length) return parts.join(" / ").slice(0, 300);
  try {
    if (document.referrer) return ("ref: " + new URL(document.referrer).hostname).slice(0, 300);
  } catch (_) { /* ignore */ }
  return "direct";
}

function fieldHtml(f) {
  const id = "f_" + f.target;
  const err = '<p class="field-err" data-err-for="' + esc(f.target) + '"></p>';
  const label = f.showLabel === false ? ' aria-label="' + esc(f.label) + '"' : "";
  if (isSourceField(f)) {
    return '<input type="hidden" name="' + esc(f.target) + '">';
  }
  switch (f.control) {
    case "radio":
      return '<fieldset><legend>' + esc(f.label) + '</legend><div class="chips">' +
        (f.choices || []).map((c) =>
          '<label><input type="radio" name="' + esc(f.target) + '" value="' + esc(c.value) + '"><span>' + esc(c.label) + "</span></label>"
        ).join("") + "</div>" + err + "</fieldset>";
    case "select":
      return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label><select id="' + id + '" name="' + esc(f.target) + '"' + label + '>' +
        '<option value="">' + esc(f.placeholder || "Choose one") + "</option>" +
        (f.choices || []).map((c) => '<option value="' + esc(c.value) + '">' + esc(c.label) + "</option>").join("") +
        "</select>" + err + "</div>";
    case "checkbox":
      return '<div class="field"><label><input type="checkbox" name="' + esc(f.target) + '"> ' + esc(f.label) + "</label>" + err + "</div>";
    case "textarea":
      return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label><textarea id="' + id + '" name="' + esc(f.target) + '" rows="3"></textarea>' + err + "</div>";
    case "payment":
    case "appointment":
    case "file":
    case "signature":
    case "unknown":
      return '<div class="field"><label>' + esc(f.label) + '</label><p class="muted">This question can only be answered in the full form.</p></div>';
    default: {
      const type = INPUT_TYPES[f.control] || "text";
      const auto = f.control === "email" ? ' autocomplete="email"' : "";
      return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label><input id="' + id + '" name="' + esc(f.target) +
        '" type="' + type + '"' + auto + ' placeholder="' + esc(f.placeholder || "") + '"' + (f.readOnly ? " disabled" : "") + ">" + err + "</div>";
    }
  }
}

export function mount(formId) {
  const formEl = document.getElementById("waitlist");
  const inner = document.getElementById("fields-inner");
  const btn = document.getElementById("submit");
  const formErr = document.getElementById("err");
  const thanksText = formEl.querySelector(".thanks p");
  const store = createFormStore({ formId });
  let built = false;
  let done = false;

  inner.innerHTML = '<p class="muted">Loading the form…</p>';
  btn.disabled = true;

  function build(s) {
    const fields = s.form.fields;
    inner.innerHTML = fields.map(fieldHtml).join("");
    const src = fields.find(isSourceField);
    if (src) store.setValue(src.target, trafficSource());
    built = true;
  }

  function render(s) {
    if (s.closed && s.form) {
      inner.innerHTML = '<p class="muted">' + esc(s.form.disabledMessage || "The waitlist is closed right now. Please check back soon.") + "</p>";
      btn.style.display = "none";
      return;
    }
    if (!s.form) {
      formErr.textContent = s.errors[FORM_ERROR] ? "The signup form couldn't load. Please refresh the page." : "";
      btn.disabled = true;
      return;
    }
    if (!built) build(s);

    s.form.fields.forEach((f) => {
      const msg = s.errors[f.target] || "";
      const slot = inner.querySelector('[data-err-for="' + CSS.escape(f.target) + '"]');
      if (slot) slot.textContent = msg;
      inner.querySelectorAll('[name="' + CSS.escape(f.target) + '"]').forEach((el) => {
        if (msg) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
      });
    });
    formErr.textContent = s.errors[FORM_ERROR] || "";
    btn.disabled = Boolean(s.loading);
    btn.setAttribute("aria-busy", s.loading ? "true" : "false");
    btn.textContent = s.loading ? "Joining…" : (s.form.submitText || "Join the waitlist");

    if (s.outcome && !done) {
      done = true;
      if (s.outcome.url) {
        if (s.outcome.newTab) window.open(s.outcome.url, "_blank", "noopener"); else location.assign(s.outcome.url);
        return;
      }
      if (s.outcome.message && thanksText) {
        thanksText.textContent = s.outcome.message + " Know someone on a GLP-1 who's tired of losing their data? Share this page with them.";
      }
      formEl.classList.add("done");
      if (window.plausible) window.plausible("Signup");
    }
  }

  formEl.addEventListener("input", (e) => {
    const el = e.target;
    if (!el.name || el.type === "radio" || el.type === "checkbox" || el.tagName === "SELECT") return;
    store.setValue(el.name, el.value);
  });
  formEl.addEventListener("change", (e) => {
    const el = e.target;
    if (!el.name) return;
    if (el.type === "checkbox") store.setValue(el.name, el.checked);
    else if (el.type === "radio" || el.tagName === "SELECT") store.setValue(el.name, el.value);
  });
  formEl.addEventListener("focusout", (e) => {
    const el = e.target;
    if (el.name && el.type !== "radio") store.validate(el.name);
  });
  formEl.addEventListener("submit", (e) => {
    store.submit(e);
  });

  store.subscribe(render);
  render(store.getState());
  store.start();
}
