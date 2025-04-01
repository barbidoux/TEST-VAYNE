/*
  # Create transactions table

  1. New Tables
    - `transactions`
      - `id` (uuid, primary key)
      - `account_id` (uuid, foreign key)
      - `category_id` (uuid, foreign key)
      - `description` (text)
      - `amount` (numeric)
      - `date` (date)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `transactions` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id),
  category_id uuid REFERENCES categories(id),
  description text NOT NULL,
  amount numeric NOT NULL,
  date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);