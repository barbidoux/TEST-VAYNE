/*
  # Create budgets table

  1. New Tables
    - `budgets`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `amount` (numeric)
      - `start_date` (date)
      - `end_date` (date)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `budgets` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id),
  amount numeric NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own budgets"
  ON budgets
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);