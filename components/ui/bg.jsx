export default function BgStack() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[#0B1035]"
    >
      <img src="/animations/sky_bg_grouped_final.svg" alt="" className="block w-full h-auto align-top" />
      <img src="/animations/gradient_starsbg.svg" alt="" className="block w-full h-auto align-top" />
      <img src="/animations/cloud_grad.svg" alt="" className="block w-full h-auto -mt-[clamp(80px,10vw,220px)] align-top" />
    </div>
  );
}
