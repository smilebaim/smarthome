/* Screenshot + fit check helper untuk verifikasi tampilan NexaHome */
const puppeteer = require("puppeteer-core");
const path = require("path");

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const BASE = "http://localhost:3005";
const OUT = path.join(__dirname, "..");

const clickText = (text) => async (page) => {
  await page.evaluate((t) => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      b.textContent.replace(/\s+/g, " ").trim().includes(t),
    );
    if (btn) btn.click();
  }, text);
  await new Promise((r) => setTimeout(r, 650));
};

const withBust = (url) => {
  const [pathPart, hash] = url.split("#");
  return `${BASE}${pathPart}?v=${Date.now()}${hash ? "#" + hash : ""}`;
};

const shots = [
  { name: "preview-desktop", url: "/", vw: 1440, vh: 900 },
  { name: "preview-desktop-perangkat", url: "/#perangkat", vw: 1440, vh: 900 },
  {
    name: "preview-desktop-perangkat-detail",
    url: "/#perangkat",
    vw: 1440,
    vh: 900,
    action: clickText("Smart Hub"),
  },
  { name: "preview-desktop-protokol", url: "/#protokol", vw: 1440, vh: 900 },
  { name: "preview-desktop-ekosistem", url: "/#ekosistem", vw: 1440, vh: 900 },
  { name: "preview-desktop-panduan", url: "/#panduan", vw: 1440, vh: 900 },
  {
    name: "preview-desktop-panduan-ruangan",
    url: "/#panduan",
    vw: 1440,
    vh: 900,
    action: clickText("Per Ruangan"),
  },
  {
    name: "preview-desktop-panduan-checklist",
    url: "/#panduan",
    vw: 1440,
    vh: 900,
    action: clickText("Checklist"),
  },
  { name: "preview-desktop-anggaran", url: "/#anggaran", vw: 1440, vh: 900 },
  { name: "preview-desktop-faq", url: "/#faq", vw: 1440, vh: 900 },
  { name: "preview-desktop-kontak", url: "/#kontak", vw: 1440, vh: 900 },
  { name: "preview-tablet-perangkat", url: "/#perangkat", vw: 768, vh: 1024 },
  { name: "preview-tablet-fitur", url: "/#fitur", vw: 768, vh: 1024 },
  { name: "preview-laptop-1280", url: "/#perangkat", vw: 1280, vh: 720 },
  { name: "preview-mobile-360", url: "/", vw: 360, vh: 640, mobile: true },
  { name: "preview-mobile", url: "/", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-perangkat", url: "/#perangkat", vw: 390, vh: 844, mobile: true },
  {
    name: "preview-mobile-perangkat-detail",
    url: "/#perangkat",
    vw: 390,
    vh: 844,
    mobile: true,
    action: clickText("Lampu Pintar RGBW"),
  },
  {
    name: "preview-mobile-menu",
    url: "/",
    vw: 390,
    vh: 844,
    mobile: true,
    action: clickText("Menu"),
  },
  { name: "preview-mobile-panduan", url: "/#panduan", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-anggaran", url: "/#anggaran", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-faq", url: "/#faq", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-kontak", url: "/#kontak", vw: 390, vh: 844, mobile: true },
];

const pages = ["beranda", "fitur", "perangkat", "protokol", "ekosistem", "panduan", "anggaran", "faq", "kontak"];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: true,
    args: ["--disable-gpu", "--hide-scrollbars"],
  });
  const page = await browser.newPage();

  for (const s of shots) {
    await page.setViewport({
      width: s.vw,
      height: s.vh,
      deviceScaleFactor: 1,
      isMobile: !!s.mobile,
      hasTouch: !!s.mobile,
    });
    await page.goto(withBust(s.url), { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 1500));
    if (s.action) await s.action(page);
    await page.screenshot({ path: path.join(OUT, s.name + ".png") });
    console.log("captured", s.name);
  }

  // Fit check: does each page require vertical scrolling?
  for (const vp of [
    { label: "desktop 1440x900", width: 1440, height: 900 },
    { label: "laptop 1366x768", width: 1366, height: 768 },
    { label: "mobile 390x844", width: 390, height: 844, mobile: true },
  ]) {
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      isMobile: !!vp.mobile,
      hasTouch: !!vp.mobile,
    });
    for (const id of pages) {
      await page.goto(withBust(`/#${id}`), { waitUntil: "networkidle0" });
      await new Promise((r) => setTimeout(r, 450));
      const m = await page.evaluate(() => {
        const sec = document.querySelector("main section");
        if (!sec) return null;
        return {
          overflow: sec.scrollHeight - sec.clientHeight,
          docOverflow: document.documentElement.scrollHeight - window.innerHeight,
        };
      });
      console.log(`fit ${vp.label} ${id}: overflow=${m?.overflow}px doc=${m?.docOverflow}px`);
    }
  }

  await browser.close();
})();
