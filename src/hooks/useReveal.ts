import { useEffect } from "react";

// Что плавно появляется при прокрутке. Атрибуты data-* React не трогает,
// поэтому остальные компоненты менять не нужно.
const SELECTOR = [
  "section > h2",
  "section > .sub",
  ".chips",
  ".prog",
  ".w",
  ".pc",
  ".gal",
  ".st",
  ".facts",
  ".form",
  ".about1 > *",
].join(",");

export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const mark = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.reveal) return;
        const i = Array.from(el.parentElement?.children ?? []).indexOf(el);
        el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`);
        el.dataset.reveal = "out";
      });
    };

    // показываем всё, что уже попало в окно браузера
    const check = () => {
      raf = 0;
      const vh = window.innerHeight || root.clientHeight;
      document
        .querySelectorAll<HTMLElement>('[data-reveal="out"]')
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.94 && r.bottom > 0) el.dataset.reveal = "in";
        });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    const onDomChange = () => {
      mark();
      schedule();
    };

    mark();
    // только теперь включаем «скрытое» состояние в CSS
    root.classList.add("js-reveal");
    schedule();

    // capture: ловим прокрутку в любом контейнере, не только в window
    window.addEventListener("scroll", schedule, { passive: true, capture: true });
    window.addEventListener("resize", schedule);
    const mo = new MutationObserver(onDomChange);
    mo.observe(document.getElementById("root") ?? document.body, {
      childList: true,
      subtree: true,
    });
    // страховка на случай, если события прокрутки не дошли
    const timer = window.setInterval(check, 600);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      mo.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
