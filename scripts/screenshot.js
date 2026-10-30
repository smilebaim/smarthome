/* Screenshot helper untuk verifikasi tampilan NexaHome */
const puppeteer = require("puppeteer-core");
const path = require("path");

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const BASE = "http://localhost:3005";
const OUT = path.join(__dirname, "..");

const shots = [
  { name: "preview-desktop", url: "/", vw: 1440, vh: 900 },
  { name: "preview-desktop-perangkat", url: "/#perangkat", vw: 1440, vh: 900 },
  { name: "preview-desktop-protokol", url: "/#protokol", vw: 1440, vh: 900 },
  { name: "preview-mobile", url: "/", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-perangkat", url: "/#perangkat", vw: 390, vh: 844, mobile: true },
  { name: "preview-mobile-kontak", url: "/#kontak", vw: 390, vh: 844, mobile: true },
];

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
    await page.goto(BASE + s.url, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 1600));
    await page.screenshot({ path: path.join(OUT, s.name + ".png") });
    console.log("captured", s.name);
  }

  await browser.close();
})();
