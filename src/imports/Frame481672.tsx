"use client";
function Frame1() {
  return (
    <div className="h-[42.749px] relative shrink-0 w-[8.395px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39507 42.7493">
        <g id="Frame 9">
          <rect fill="var(--fill-0, black)" height="32.3543" id="Rectangle 1" width="2" x="3.19753" />
          <circle cx="4.19753" cy="38.5518" id="Ellipse 1" r="3.69753" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal gap-[12px] items-start leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">
      <p className="opacity-90 relative shrink-0">Intro</p>
      <p className="opacity-90 relative shrink-0">Capabilities</p>
      <p className="opacity-30 relative shrink-0">Technology</p>
      <p className="opacity-30 relative shrink-0">Services</p>
      <p className="opacity-30 relative shrink-0">Contact</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full">
      <Frame1 />
      <Frame />
    </div>
  );
}