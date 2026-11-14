import { useEffect } from "react";

// Что плавно появляется при прокрутке. Атрибуты data-* React не трогает,
// поэтому остальные компоненты менять не нужно.
const SELECTOR = [
  "section > h2",
  "section > .sub",
  ".chips",
  ".prog",
  ".w",
  ".calc",
  ".rev figure",
  ".empty",
  ".form",
  ".about1 > *",
].join(",");

export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;

    let rafId = 0;
    let scheduled = false;

    const isInView = (el: HTMLElement) => {
      const vh = window.innerHeight || root.clientHeight;
      const r = el.getBoundingClientRect();
      return r.top < vh * 0.94 && r.bottom > 0;
    };

    // Проставляет data-reveal всем подходящим элементам.
    // Уже видимым сразу ставим "in", чтобы не было мигания.
    const mark = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.reveal) return;

        const parent = el.parentElement;
        const i = parent
          ? Array.prototype.indexOf.call(parent.children, el)
          : 0;
        const delay = Math.min(Math.max(i, 0), 6) * 80;
        el.style.setProperty("--d", `${delay}ms`);

        el.dataset.reveal = isInView(el) ? "in" : "out";
      });
    };

    const check = () => {
      scheduled = false;
      rafId = 0;

      document
        .querySelectorAll<HTMLElement>('[data-reveal="out"]')
        .forEach((el) => {
          if (isInView(el)) el.dataset.reveal = "in";
        });
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      rafId = requestAnimationFrame(check);
    };

    const onDomChange = () => {
      mark();
      schedule();
    };

    // 1) Помечаем всё, что есть, до включения скрытого состояния
    mark();
    // 2) Только теперь включаем CSS со скрытым состоянием
    root.classList.add("js-reveal");

    // 3) На всякий случай ещё раз проверяем видимость
    schedule();

    // capture: ловим прокрутку в любом контейнере, не только в window
    window.addEventListener("scroll", schedule, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", schedule);

    const mo = new MutationObserver(onDomChange);
    mo.observe(document.getElementById("root") ?? document.body, {
      childList: true,
      subtree: true,
    });

    // страховка на случай, если события прокрутки не дошли
    const timer = window.setInterval(check, 600);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.clearInterval(timer);
      window.removeEventListener("scroll", schedule, { capture: true });
      window.removeEventListener("resize", schedule);
      mo.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
