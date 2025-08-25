export default function Bg() {
  return (
    <div className="bg-wrap" aria-hidden="true">
      <img
        src="/animations/sky_bg_grouped.svg"
        alt=""
        className="bg-svg"
      />

      <style>{`
        .bg-wrap {
          position: relatieve;   /* cover the whole viewport */
          inset: 0;
          z-index: -1;
          overflow: hidden;
        }

        .bg-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          display: block;
        }

      `}</style>
    </div>
  );
}
