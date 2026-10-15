import Image from "next/image";
import type { services } from "@/lib/site";
import { PhoneButton } from "./phone-button";

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      <div className="service-image">
        <Image src={service.image} alt={service.alt} width={560} height={420} sizes="(max-width: 760px) 100vw, 33vw" />
      </div>
      <div className="service-content">
        <p className="service-number" aria-hidden="true">0{service.id === "geladeiras" ? "1" : service.id === "freezers" ? "2" : "3"}</p>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <PhoneButton placement={`servico_${service.id}`} compact className="text-link" />
      </div>
    </article>
  );
}
