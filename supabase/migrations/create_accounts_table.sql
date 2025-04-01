/*
  # Create accounts table

  1. New Tables
    - `accounts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `balance` (numeric)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `accounts` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  balance numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own accounts"
  ON accounts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);