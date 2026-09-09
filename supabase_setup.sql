-- ============================================================
-- AIADMK GPD Web - Supabase Members Table Setup
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/eymtjolkcnvllfdzipbq/sql/new
-- ============================================================

-- Create members table
CREATE TABLE IF NOT EXISTS members (
  id          BIGSERIAL PRIMARY KEY,
  card_id     TEXT UNIQUE NOT NULL,        -- e.g. ADMK-GPD-2026-12345
  email       TEXT NOT NULL,
  full_name   TEXT NOT NULL,
  father_name TEXT DEFAULT '',
  dob         TEXT DEFAULT '',             -- stored as DD/MM/YYYY string
  age         INTEGER DEFAULT 0,
  blood_group TEXT DEFAULT '',
  phone       TEXT NOT NULL,
  union_ward  TEXT DEFAULT '',
  join_date   TEXT DEFAULT '',             -- stored as DD/MM/YYYY string
  pin         TEXT DEFAULT '',
  photo       TEXT DEFAULT '',             -- compressed base64 or URL
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- If you already created the table previously, run this to add photo support:
ALTER TABLE members ADD COLUMN IF NOT EXISTS photo TEXT DEFAULT '';

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Allow anyone with the anon key to INSERT (register)
CREATE POLICY "Allow public insert"
  ON members FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone with the anon key to SELECT (admin view, count)
CREATE POLICY "Allow public select"
  ON members FOR SELECT
  TO anon
  USING (true);

-- Allow anyone with the anon key to UPDATE (re-register same card)
CREATE POLICY "Allow public update"
  ON members FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anyone with the anon key to DELETE (admin delete)
CREATE POLICY "Allow public delete"
  ON members FOR DELETE
  TO anon
  USING (true);
