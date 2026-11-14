import type { FC } from "react";

const Toast: FC<{ message: string | null }> = ({ message }) => (
  <div
    className={`toast${message ? " on" : ""}`}
    role="status"
    aria-live="polite"
  >
    {message}
  </div>
);

export default Toast;
