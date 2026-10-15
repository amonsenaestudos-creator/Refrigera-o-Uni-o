import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M8.2 3.5 10 7.7 7.6 9.2a14.7 14.7 0 0 0 7.2 7.2l1.5-2.4 4.2 1.8v3.1a2 2 0 0 1-2.2 2A17 17 0 0 1 3.1 5.7a2 2 0 0 1 2-2.2h3.1Z" /></svg>;
}

export function ArrowIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function MapPinIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function WrenchIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M14.7 6.3a4.5 4.5 0 0 0-5.8 5.8l-5.4 5.4a2.1 2.1 0 0 0 3 3l5.4-5.4a4.5 4.5 0 0 0 5.8-5.8l-2.8 2.8-3-3 2.8-2.8Z" /></svg>;
}

export function InstagramIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>;
}

export function GoogleIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M21 12.2c0-.7-.1-1.4-.2-2H12v3.7h5a4.3 4.3 0 0 1-1.9 2.8V19h3c1.8-1.6 2.9-4 2.9-6.8Z" /><path d="M12 21c2.5 0 4.6-.8 6.1-2.2l-3-2.3c-.8.6-1.9.9-3.1.9-2.4 0-4.5-1.7-5.2-3.9H3.7v2.4A9.2 9.2 0 0 0 12 21Z" /><path d="M6.8 13.5a5.5 5.5 0 0 1 0-3.1V8H3.7a9.1 9.1 0 0 0 0 7.9l3.1-2.4Z" /><path d="M12 6.5c1.4 0 2.6.5 3.5 1.4l2.7-2.6A9 9 0 0 0 3.7 8l3.1 2.4A5.5 5.5 0 0 1 12 6.5Z" /></svg>;
}

export function SnowflakeIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M12 2v20M4 7l16 10M20 7 4 17M8 4l4 3 4-3M8 20l4-3 4 3M4 11l4-1-1-4M20 13l-4 1 1 4M17 6l-1 4 4 1M7 18l1-4-4-1" /></svg>;
}

export function ClockIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

export function ChevronIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m8 10 4 4 4-4" /></svg>;
}

export function ShieldIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
}
