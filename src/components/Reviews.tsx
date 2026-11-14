import type { FC } from "react";

type Props = { onCta: () => void };

const Reviews: FC<Props> = ({ onCta }) => (
  <section id="reviews">
    <h2>Родители говорят о нас</h2>
    <p className="sub">Здесь скоро появятся отзывы наших родителей.</p>

    <div className="empty">
      <div className="em2">💬</div>
      <p>Станьте первым — напишите нам</p>
      <button className="btn b" onClick={onCta}>
        Оставить отзыв
      </button>
    </div>
  </section>
);

export default Reviews;
