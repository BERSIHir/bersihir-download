// year stamp
document.getElementById("year").textContent = new Date().getFullYear();

// copy sha
const toast = document.getElementById("toast");
let toastTimer;
function flash(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}
document.querySelectorAll(".copyhash").forEach((el) => {
  el.addEventListener("click", async () => {
    const h = el.dataset.hash;
    try {
      await navigator.clipboard.writeText(h);
      el.classList.add("copied");
      flash("sha256 copied — " + h.slice(0, 10) + "…");
      setTimeout(() => el.classList.remove("copied"), 1400);
    } catch {
      flash("copy failed");
    }
  });
});

// smooth anchor
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// platform hint — quietly highlight the matching card
const ua = navigator.userAgent || "";
const isIOS = /iPhone|iPad|iPod/i.test(ua);
const isAndroid = /Android/i.test(ua);
if (isIOS || isAndroid) {
  const sel = isIOS ? '[data-platform="ios"]' : '[data-platform="android"]';
  document.querySelectorAll(".card" + sel).forEach((c) => {
    c.style.borderColor = isIOS ? "rgba(242,177,78,0.45)" : "rgba(181,239,92,0.45)";
  });
}
