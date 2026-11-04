// Renders the scenes of the Steadily short videos to 1080x1920 PNGs.
// Usage: node marketing/video/render-scenes.js marketing/video/videos.json <outDir>
// Each scene is HTML drawn with the landing page's design tokens, screenshotted with Playwright.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const CSS = `
:root{--bg:#FBF8F3;--bg2:#F3EEE5;--card:#fff;--ink:#14302B;--muted:#556A64;--line:#E6DFD3;--brand:#1F6F5C;--soft:#E3F0EB;--accent:#E9894A;--accentSoft:#FCEBDD;--danger:#B4442F}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:540px;height:960px;overflow:hidden}
body{font-family:Inter,system-ui,sans-serif;color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased;position:relative}
body.dark{background:#10201C;color:#EEF5F2}
body.brand{background:var(--brand);color:#fff}
.serif{font-family:Fraunces,Georgia,serif}
.top{position:absolute;left:34px;right:44px;top:118px}
.cap{font-family:Fraunces,Georgia,serif;font-weight:650;font-size:38px;line-height:1.12;letter-spacing:-.01em}
.cap.small{font-size:31px}
.cap .hl{background:linear-gradient(transparent 58%,rgba(233,137,74,.45) 58%);padding:0 2px}
body.dark .cap .hl,body.brand .cap .hl{background:linear-gradient(transparent 58%,rgba(233,137,74,.6) 58%)}
.sub{margin-top:14px;font-size:19px;line-height:1.4;color:var(--muted);font-weight:500}
body.dark .sub,body.brand .sub{color:rgba(255,255,255,.82)}
.center{position:absolute;left:36px;right:44px;top:50%;transform:translateY(-58%);text-align:center}
.emoji{font-size:84px;margin-bottom:22px}
.badge{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:var(--accentSoft);color:#B5541A;padding:6px 11px;border-radius:99px;margin-bottom:14px}
.logo{position:absolute;left:34px;top:28px;display:flex;align-items:center;gap:8px;font-weight:700;font-size:16px;opacity:.9}
.mark{width:24px;height:24px;border-radius:7px;background:var(--brand);display:grid;place-items:center}
body.brand .mark{background:#fff}
.mark svg{width:15px;height:15px}
/* phone */
.phone{position:absolute;left:50%;transform:translateX(-50%) scale(.9);transform-origin:top center;top:330px;width:300px;height:560px;background:var(--card);border:9px solid var(--ink);border-radius:42px;padding:34px 16px 16px;display:flex;flex-direction:column;gap:10px;box-shadow:0 30px 60px -28px rgba(20,48,43,.55);overflow:hidden}
body.dark .phone{border-color:#2B3D38}
.phone:before{content:"";position:absolute;top:8px;left:50%;transform:translateX(-50%);width:82px;height:20px;border-radius:20px;background:var(--ink)}
.phone.high{top:300px}
.tile{background:var(--bg);border:1px solid var(--line);border-radius:15px;padding:11px 13px;color:var(--ink)}
.tile small{display:block;color:var(--muted);font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:4px}
.row{display:flex;justify-content:space-between;align-items:center}
.pill{background:var(--accentSoft);color:#B5541A;font-size:11px;font-weight:700;padding:4px 9px;border-radius:99px}
.rings{display:grid;grid-template-columns:repeat(3,1fr);text-align:center;gap:6px}
.ring{width:58px;height:58px;margin:2px auto 4px;border-radius:50%;display:grid;place-items:center}
.ring:after{content:attr(data-v);width:44px;height:44px;border-radius:50%;background:var(--bg);display:grid;place-items:center;font-size:11px;font-weight:700}
.rings span{font-size:10.5px;color:var(--muted);font-weight:600}
.hello{font-size:11.5px;color:var(--muted)} .hello b{display:block;font-family:Fraunces,Georgia,serif;font-size:17px;color:var(--ink)}
.gen{color:#9AA3A0}
.btnx{background:var(--brand);color:#fff;text-align:center;font-weight:700;border-radius:13px;padding:12px;font-size:14px}
.btnx.grey{background:#C9CFCC}
/* cards */
.cards{position:absolute;left:34px;right:44px;top:300px;display:flex;flex-direction:column;gap:14px}
.card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px 20px;color:var(--ink);box-shadow:0 14px 30px -24px rgba(20,48,43,.5)}
.card .q{font-family:Fraunces,Georgia,serif;font-size:19px;line-height:1.35}
.card cite{display:block;margin-top:8px;font-style:normal;font-size:12.5px;color:var(--muted)}
.stars{color:#E0A100;font-size:14px;letter-spacing:2px;margin-bottom:6px}
.food{display:flex;align-items:center;gap:18px;font-size:22px;font-weight:600}
.food .e{font-size:46px}
/* promise */
.pnum{font-family:Fraunces,Georgia,serif;font-size:150px;line-height:1;color:var(--accent)}
.ptitle{font-family:Fraunces,Georgia,serif;font-size:40px;font-weight:650;margin-top:8px;line-height:1.1}
.pbody{font-size:21px;line-height:1.45;margin-top:16px;color:var(--muted)}
/* chart */
.chart{position:absolute;left:34px;right:44px;top:330px}
.bar{margin-bottom:18px}
.bar .lab{display:flex;justify-content:space-between;font-weight:600;font-size:17px;margin-bottom:6px}
.bar .track{height:22px;background:var(--bg2);border-radius:99px;overflow:hidden}
.bar .fill{height:100%;background:var(--brand);border-radius:99px}
.bar.hot .fill{background:var(--accent)}
.foot{font-size:13px;color:var(--muted);margin-top:10px}
/* end */
.cta{display:inline-block;margin-top:26px;background:#fff;color:var(--brand);font-weight:800;font-size:22px;padding:16px 26px;border-radius:16px}
body.light .cta{background:var(--brand);color:#fff}
.notif{position:absolute;left:28px;right:36px;top:420px;background:rgba(255,255,255,.93);border-radius:22px;padding:14px 16px;color:#14302B;box-shadow:0 20px 40px -20px rgba(0,0,0,.6)}
.notif .h{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#556A64;margin-bottom:6px}
.notif .t{font-size:17px;line-height:1.35}
.lock{position:absolute;left:0;right:0;top:220px;text-align:center;color:#fff}
.lock .time{font-size:84px;font-weight:300;letter-spacing:-2px}
.lock .date{font-size:18px;opacity:.85}
.label{margin-top:12px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.notif .label{margin-top:10px;color:#556A64 !important}
.cards.big{top:290px;gap:18px}
.cards.big .q{font-size:30px;font-weight:650}
body.dark .label{color:rgba(255,255,255,.6)}
`;

const LOGO = (light) => `<div class="logo"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="${light ? "#1F6F5C" : "#fff"}" stroke-width="2.8" stroke-linecap="round"><path d="M3 15c3 0 4-6 7-6s3 6 6 6 3-3 5-3"/></svg></span>Steadily</div>`;

const lbl = (s) => (s.label ? `<div class="label">${esc(s.label)}</div>` : "");

function ring(p, v, color) {
  return `<div class="ring" style="background:conic-gradient(${color} ${p}%, var(--line) 0)" data-v="${v}"></div>`;
}

const SCREENS = {
  blank: () => `
    <div class="hello gen">Good morning<b class="gen" style="color:#7d8784">Welcome! Let's get started</b></div>
    <div class="tile"><small>Your history</small><div style="height:110px;display:grid;place-items:center;color:#9AA3A0;font-size:13px;border:2px dashed #DCD8D0;border-radius:10px">No data yet</div></div>
    <div class="tile"><small>Shots logged</small><div style="font-size:26px;font-weight:700;color:#9AA3A0">0</div></div>
    <div class="tile"><small>Weight</small><div style="font-size:15px;color:#9AA3A0">— no entries —</div></div>
    <div style="flex:1"></div><div class="btnx grey">Get started</div>`,
  paywall: () => `
    <div style="text-align:center;margin-top:14px"><div style="font-size:44px">🔒</div>
    <div class="serif" style="font-size:24px;font-weight:650;margin-top:8px">Unlock your history</div>
    <div style="font-size:13px;color:var(--muted);margin-top:6px">Start your free trial to view past logs</div></div>
    <div class="tile" style="margin-top:12px"><div class="row"><b style="font-size:14px">Annual</b><b style="font-size:14px">$79.99/yr</b></div><div style="font-size:11px;color:var(--muted);margin-top:4px">after 3-day free trial · auto-renews</div></div>
    <div class="tile"><div class="row"><b style="font-size:14px">Monthly</b><b style="font-size:14px">$14.99/mo</b></div></div>
    <div style="flex:1"></div><div class="btnx" style="background:#2b2b2b">Start free trial</div>
    <div style="text-align:center;font-size:10px;color:#B8BDBB">Restore · Terms</div>`,
  dashboard: () => `
    <div class="hello">Good morning<b>Week 58 · Your full history</b></div>
    <div class="tile row"><div><small>Next dose</small><b style="font-size:15px">Friday · 8:00 am</b></div><span class="pill">2 days</span></div>
    <div class="tile"><small>Today</small><div class="rings"><div>${ring(72, "86g", "var(--brand)")}<span>Protein</span></div><div>${ring(55, "14g", "var(--accent)")}<span>Fiber</span></div><div>${ring(80, "2.0L", "#4A90C2")}<span>Water</span></div></div></div>
    <div class="tile"><small>Weight · 14 months</small><svg viewBox="0 0 260 60" style="width:100%;height:60px"><path d="M0 8 C 30 10, 50 16, 70 20 S 110 30, 130 34 S 170 42, 190 45 S 230 48, 260 49" fill="none" stroke="#1F6F5C" stroke-width="3" stroke-linecap="round"/><circle cx="258" cy="49" r="4" fill="#1F6F5C"/></svg></div>
    <div class="tile row" style="font-size:12.5px"><span>⬇︎ Export all data</span><b style="color:var(--brand)">CSV · PDF</b></div>`,
  manual: () => `
    <div class="hello">Log food<b>Breakfast</b></div>
    ${["Greek yogurt, plain, 0%… 1 cup?", "Search: “cottage cheese 2%”", "Serving size: 1/2 cup (113 g)", "Search: “protein shake choc…”", "Add another item…", "Search: “egg, scrambled, 1 la…”"].map((t) => `<div class="tile" style="font-size:13px;color:var(--muted)">${t}</div>`).join("")}
    <div style="flex:1"></div><div class="btnx grey">Save (6 items)</div>`,
  snap: () => `
    <div class="hello">Snap your plate<b>Lunch</b></div>
    <div style="position:relative;height:250px;border-radius:16px;background:#2E3B37;display:grid;place-items:center;overflow:hidden">
      <div style="font-size:96px">🥗</div>
      <div style="position:absolute;inset:22px;border:3px solid rgba(255,255,255,.85);border-radius:14px;clip-path:polygon(0 0,22% 0,22% 4%,4% 4%,4% 22%,0 22%,0 78%,4% 78%,4% 96%,22% 96%,22% 100%,78% 100%,78% 96%,96% 96%,96% 78%,100% 78%,100% 22%,96% 22%,96% 4%,78% 4%,78% 0,100% 0,100% 100%,0 100%)"></div>
    </div>
    <div class="tile" style="text-align:center"><small>Estimated</small><b style="font-size:22px;color:var(--brand)">≈ 32 g protein</b><div style="font-size:12px;color:var(--muted)">6 g fiber · edit before saving</div></div>
    <div class="btnx">Add to today</div>`,
  maintenance: () => `
    <div class="hello">Life after the shot<b>Staying steady</b></div>
    <div class="tile"><small>7-day average vs your range</small>
      <svg viewBox="0 0 260 150" style="width:100%;height:150px">
        <rect x="0" y="45" width="260" height="55" rx="8" fill="#E3F0EB"/>
        <text x="6" y="40" font-size="10" fill="#556A64" font-family="Inter">Your range (set with your doctor)</text>
        <path d="M0 80 C 30 78, 60 74, 90 76 S 150 70, 180 72 S 230 68, 260 70" fill="none" stroke="#1F6F5C" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="258" cy="70" r="5" fill="#1F6F5C"/>
      </svg>
      <div style="font-size:12.5px;color:var(--brand);font-weight:700">Within your range · 9 weeks</div></div>
    <div class="tile row" style="font-size:13px"><span>Protein · 7-day avg</span><b>92 g</b></div>
    <div class="tile row" style="font-size:13px"><span>Steps · 7-day avg</span><b>7,840</b></div>
    <div class="tile row" style="font-size:13px"><span>Doctor summary</span><b style="color:var(--brand)">PDF ↗</b></div>`,
  form: () => `
    <div class="hello">Early access<b>Join the waitlist</b></div>
    <div class="tile" style="font-size:13px;color:var(--muted)">you@example.com</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">${["Starting soon", "On it now", "Stepping down", "Stopped"].map((t, i) => `<span style="font-size:11.5px;padding:6px 10px;border-radius:99px;border:1px solid var(--line);${i === 1 ? "background:#1F6F5C;color:#fff;border-color:#1F6F5C" : "background:var(--bg)"}">${t}</span>`).join("")}</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">${["Weekly injection", "Daily pill"].map((t, i) => `<span style="font-size:11.5px;padding:6px 10px;border-radius:99px;border:1px solid var(--line);${i === 0 ? "background:#1F6F5C;color:#fff;border-color:#1F6F5C" : "background:var(--bg)"}">${t}</span>`).join("")}</div>
    <div style="flex:1"></div><div class="btnx">Join the waitlist</div>
    <div style="text-align:center;font-size:11px;color:var(--muted)">Free core forever · Export anytime</div>`,
};

function sceneHtml(s) {
  const theme = s.theme || "light";
  const light = theme === "light";
  let body = "";
  if (s.type === "caption") {
    body = `<div class="center">${s.emoji ? `<div class="emoji">${s.emoji}</div>` : ""}<div class="cap">${s.text}</div>${s.sub ? `<div class="sub">${s.sub}</div>` : ""}</div>`;
  } else if (s.type === "phone") {
    body = `<div class="top">${s.badge ? `<div class="badge">${esc(s.badge)}</div>` : ""}<div class="cap ${s.small ? "small" : ""}">${s.text}</div>${lbl(s)}</div><div class="phone ${s.high ? "high" : ""}">${SCREENS[s.screen]()}</div>`;
  } else if (s.type === "cards") {
    body = `<div class="top"><div class="cap small">${s.text}</div>${lbl(s)}</div><div class="cards ${s.big ? "big" : ""}">${s.cards.map((c) => `<div class="card">${c.stars ? `<div class="stars">${c.stars}</div>` : ""}<div class="q">${c.q}</div>${c.cite ? `<cite>${esc(c.cite)}</cite>` : ""}</div>`).join("")}</div>`;
  } else if (s.type === "foods") {
    body = `<div class="top"><div class="cap small">${s.text}</div>${s.foot ? `<div class="label">${esc(s.foot)}</div>` : ""}</div><div class="cards" style="top:330px">${s.items.map((i) => `<div class="card food"><span class="e">${i.e}</span>${esc(i.t)}</div>`).join("")}</div>`;
  } else if (s.type === "promise") {
    body = `<div class="center" style="text-align:left"><div class="pnum">${s.n}</div><div class="ptitle">${s.title}</div><div class="pbody">${s.body}</div></div>`;
  } else if (s.type === "chart") {
    const max = Math.max(...s.bars.map((b) => b.v));
    body = `<div class="top"><div class="cap small">${s.text}</div></div><div class="chart">${s.bars.map((b) => `<div class="bar ${b.hot ? "hot" : ""}"><div class="lab"><span>${esc(b.l)}</span><span>${b.v}%</span></div><div class="track"><div class="fill" style="width:${(b.v / max) * 100}%"></div></div></div>`).join("")}<div class="foot">${esc(s.foot)}</div></div>`;
  } else if (s.type === "lock") {
    body = `<div class="lock"><div class="time">9:41</div><div class="date">Tuesday, November 18</div></div><div class="notif"><div class="h"><span class="mark" style="width:20px;height:20px;border-radius:6px"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round"><path d="M3 15c3 0 4-6 7-6s3 6 6 6 3-3 5-3"/></svg></span>STEADILY · now</div><div class="t">${s.notif}</div>${lbl(s)}</div><div class="top" style="top:640px"><div class="cap small">${s.text}</div></div>`;
  } else if (s.type === "end") {
    body = `<div class="center">${s.emoji ? `<div class="emoji">${s.emoji}</div>` : ""}<div class="cap">${s.text}</div>${s.sub ? `<div class="sub">${s.sub}</div>` : ""}<div class="cta">${esc(s.cta || "Waitlist → link in bio")}</div></div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body class="${theme}">${LOGO(theme === "brand")}${body}</body></html>`;
}

(async () => {
  const [specPath, outDir] = process.argv.slice(2);
  const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
  for (const video of spec.videos) {
    const dir = path.join(outDir, video.id);
    fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < video.scenes.length; i++) {
      await page.setContent(sceneHtml(video.scenes[i]), { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(dir, String(i + 1).padStart(2, "0") + ".png") });
    }
    console.log(video.id, video.scenes.length, "scenes");
  }
  await browser.close();
})();
