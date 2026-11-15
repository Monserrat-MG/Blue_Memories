// Efectos ligeros de la portada. La navegación funciona también sin JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  const jacket = document.querySelector(".jacket");
  if (!jacket || !window.matchMedia("(hover: hover)").matches) return;
  jacket.addEventListener("pointermove", (event) => {
    const rect = jacket.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    jacket.style.transform = `rotateY(${-13 + x * 8}deg) rotateX(${y * -5}deg) rotateZ(${2 + x}deg)`;
  });
  jacket.addEventListener("pointerleave", () => {
    jacket.style.transform = "";
  });
});
