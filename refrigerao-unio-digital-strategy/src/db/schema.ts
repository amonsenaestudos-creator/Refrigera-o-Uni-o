import { index, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const contactEvents = pgTable(
  "contact_events",
  {
    id: serial("id").primaryKey(),
    eventType: varchar("event_type", { length: 40 }).notNull(),
    placement: varchar("placement", { length: 80 }).notNull(),
    source: varchar("source", { length: 80 }).notNull(),
    pagePath: varchar("page_path", { length: 160 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("contact_events_created_at_idx").on(table.createdAt),
    index("contact_events_type_idx").on(table.eventType),
  ],
);
