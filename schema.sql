-- Database Model for Budget Gestion Application (Supabase + Powens API Connector Data)

-- Users Table (Supabase Auth Users)
-- Supabase handles user management, so we might only need a profile table if we want extra user data.
-- If you need custom fields, create a profile table.


CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id), -- Links to Supabase auth.users
    username VARCHAR(255) UNIQUE,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Powens Connector Data Table (Only Data Needed for Powens Connection)
CREATE TABLE powens_connector_data (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    powens_connector_id VARCHAR(255) UNIQUE NOT NULL, -- Powens Connector ID (for API calls)
    powens_access_token VARCHAR(2048) NOT NULL, -- Powens Access Token (encrypted)
    powens_refresh_token VARCHAR(2048), -- Powens Refresh Token (encrypted, optional)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories Table (e.g., Groceries, Rent, Salary)
CREATE TABLE categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    category_name VARCHAR(255) NOT NULL,
    category_type VARCHAR(50) NOT NULL, -- Income or Expense
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Transactions Table (User-Categorized Powens Transactions)
CREATE TABLE transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    powens_transaction_id VARCHAR(255) UNIQUE NOT NULL, -- Powens Transaction ID (for linking)
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Budgets Table
CREATE TABLE budgets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    budget_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Recurring Transactions Table (User-defined)
CREATE TABLE recurring_transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    description TEXT,
    frequency VARCHAR(50) NOT NULL, -- e.g., Daily, Weekly, Monthly, Yearly
    start_date DATE NOT NULL,
    end_date DATE, -- Optional end date for recurring transactions.
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Savings Goals Table
CREATE TABLE savings_goals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    goal_name VARCHAR(255) NOT NULL,
    target_amount DECIMAL(10, 2) NOT NULL,
    target_date DATE NOT NULL,
    current_amount DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SavingsGoalContributions Table (Records individual contributions to a goal)
CREATE TABLE savings_goal_contributions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    goal_id UUID REFERENCES savings_goals(id) ON DELETE CASCADE,
    contribution_date DATE NOT NULL,
    contribution_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies (Row Level Security) - Example (Implement these in Supabase Dashboard)
-- Similar RLS policies as before, ensuring user specific access.
