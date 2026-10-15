import { siteConfig } from "@/lib/site";
import { ContactLink } from "./contact-link";
import { PhoneIcon } from "./icons";

export function PhoneButton({
  placement,
  className = "button button-primary",
  compact = false,
}: {
  placement: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <ContactLink
      href={siteConfig.phoneHref}
      eventName="phone_click"
      placement={placement}
      className={className}
      aria-label={`Ligar agora para ${siteConfig.phoneDisplay}`}
    >
      <PhoneIcon width={20} height={20} />
      <span>{compact ? "Ligar agora" : `Ligar agora: ${siteConfig.phoneDisplay}`}</span>
    </ContactLink>
  );
}
