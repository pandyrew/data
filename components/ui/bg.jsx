import Image from "next/image";

export default function BgStack() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[#0B1035]"
    >
      <Image
        src="/animations/sky_bg_grouped_final_blended.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto", display: "block" }}
        className="align-top"
      />
      <Image
        src="/animations/gradient_starsbg.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto", display: "block" }}
        className="align-top"
      />
      <Image
        src="/animations/cloud_grad.svg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto", display: "block" }}
        className="-mt-[clamp(80px,10vw,220px)] align-top"
      />
    </div>
  );
}
