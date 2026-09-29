import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  pgEnum,
  unique,
  foreignKey,
  index,
  check,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const workspaceRoleEnum = pgEnum('workspace_role', ['owner', 'admin', 'member']);
export const dealStageEnum = pgEnum('deal_stage', [
  'inquiry',
  'negotiating',
  'brief',
  'creating',
  'review',
  'approved',
  'published',
  'invoiced',
  'paid',
  'lost'
]);
export const deliverableStatusEnum = pgEnum('deliverable_status', [
  'not_started',
  'drafting',
  'review',
  'approved',
  'published'
]);

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  full_name: text('full_name').notNull(),
  avatar_url: text('avatar_url'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const workspaces = pgTable('workspaces', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: text('name').notNull(),
  timezone: text('timezone').default('UTC').notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const workspaceMembers = pgTable('workspace_members', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  workspace_id: uuid('workspace_id')
    .notNull()
    .references(() => workspaces.id, { onDelete: 'cascade' }),
  user_id: uuid('user_id')
    .notNull()
    .references(() => profiles.id, { onDelete: 'cascade' }),
  role: workspaceRoleEnum('role').notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => [
  unique('workspace_members_workspace_user_unique').on(t.workspace_id, t.user_id),
  index('workspace_members_user_id_idx').on(t.user_id),
]);

export const brands = pgTable('brands', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  workspace_id: uuid('workspace_id')
    .notNull()
    .references(() => workspaces.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  industry: text('industry'),
  website: text('website'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  archived_at: timestamp('archived_at', { withTimezone: true }),
}, (t) => [
  unique('brands_id_workspace_id_unique').on(t.id, t.workspace_id),
  index('brands_workspace_id_name_idx').on(t.workspace_id, t.name),
]);

export const deals = pgTable('deals', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  workspace_id: uuid('workspace_id').notNull(),
  brand_id: uuid('brand_id').notNull(),
  title: text('title').notNull(),
  stage: dealStageEnum('stage').default('inquiry').notNull(),
  deal_value_minor: integer('deal_value_minor'),
  currency: text('currency').default('USD').notNull(),
  inquiry_source: text('inquiry_source'),
  start_date: timestamp('start_date', { withTimezone: true }),
  deadline: timestamp('deadline', { withTimezone: true }),
  revision_allowance: integer('revision_allowance'),
  usage_rights_scope: text('usage_rights_scope'),
  usage_rights_duration_days: integer('usage_rights_duration_days'),
  usage_rights_starts_at: timestamp('usage_rights_starts_at', { withTimezone: true }),
  usage_rights_ends_at: timestamp('usage_rights_ends_at', { withTimezone: true }),
  usage_rights_notes: text('usage_rights_notes'),
  payment_terms_days: integer('payment_terms_days'),
  payment_terms_notes: text('payment_terms_notes'),
  internal_notes: text('internal_notes'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  archived_at: timestamp('archived_at', { withTimezone: true }),
}, (t) => [
  unique('deals_id_workspace_id_unique').on(t.id, t.workspace_id),
  foreignKey({
    columns: [t.brand_id, t.workspace_id],
    foreignColumns: [brands.id, brands.workspace_id],
    name: 'deals_brand_workspace_fk'
  }).onDelete('restrict'),
  check('deals_deal_value_minor_check', sql`${t.deal_value_minor} >= 0`),
  check('deals_currency_check', sql`${t.currency} ~ '^[A-Z]{3}$'`),
  check('deals_revision_allowance_check', sql`${t.revision_allowance} >= 0`),
  check('deals_usage_rights_duration_days_check', sql`${t.usage_rights_duration_days} >= 0`),
  check('deals_payment_terms_days_check', sql`${t.payment_terms_days} >= 0`),
  check('deals_usage_rights_dates_check', sql`${t.usage_rights_ends_at} >= ${t.usage_rights_starts_at}`),
  index('deals_workspace_id_stage_idx').on(t.workspace_id, t.stage),
  index('deals_workspace_id_deadline_idx').on(t.workspace_id, t.deadline),
  index('deals_workspace_id_brand_id_idx').on(t.workspace_id, t.brand_id),
]);

export const deliverables = pgTable('deliverables', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  workspace_id: uuid('workspace_id').notNull(),
  deal_id: uuid('deal_id').notNull(),
  title: text('title').notNull(),
  content_format: text('content_format').notNull(),
  status: deliverableStatusEnum('status').default('not_started').notNull(),
  due_at: timestamp('due_at', { withTimezone: true }),
  publish_url: text('publish_url'),
  revision_count: integer('revision_count').default(0).notNull(),
  sort_order: integer('sort_order').default(0).notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (t) => [
  foreignKey({
    columns: [t.deal_id, t.workspace_id],
    foreignColumns: [deals.id, deals.workspace_id],
    name: 'deliverables_deal_workspace_fk'
  }).onDelete('cascade'),
  check('deliverables_revision_count_check', sql`${t.revision_count} >= 0`),
  check('deliverables_sort_order_check', sql`${t.sort_order} >= 0`),
  index('deliverables_workspace_id_deal_id_idx').on(t.workspace_id, t.deal_id),
  index('deliverables_workspace_id_status_due_at_idx').on(t.workspace_id, t.status, t.due_at),
]);
