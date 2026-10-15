import { SnowflakeIcon } from "./icons";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="Refrigeração União">
      <span className="brand-mark" aria-hidden="true">
        <span>RU</span>
        <SnowflakeIcon width={15} height={15} />
      </span>
      {!compact && (
        <span className="brand-copy">
          <strong>Refrigeração</strong>
          <b>União</b>
        </span>
      )}
    </span>
  );
}
