// components/BgStack.tsx
export default function BgStack() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 pointer-events-none">
      <img src="/animations/sky_bg_grouped.svg" alt="" className="block w-full h-auto" />
      <img src="/animations/gradient_starsbg.svg" alt="" className="block w-full h-auto" />
      {/* <img src="/animations/cloud_bands.svg" alt="" className="block w-full h-auto" /> */}
    </div>
  );
}
