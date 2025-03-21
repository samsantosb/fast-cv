import { boolean, integer, pgEnum, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const userStatusEnum = pgEnum('user_status', ['active', 'inactive', 'suspended'])

export const users = pgTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  googleId: varchar('google_id', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  picture: text('picture'),
  isActive: boolean('is_active').notNull().default(true),
  status: userStatusEnum('status').notNull().default('active'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}) 