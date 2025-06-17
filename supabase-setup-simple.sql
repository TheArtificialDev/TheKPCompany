-- Simplified SQL script to create subscribers table in Supabase

-- Create the subscribers table with minimal fields
CREATE TABLE public.subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'active',
    subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add comment to the table
COMMENT ON TABLE public.subscribers IS 'Table to store newsletter subscribers';

-- Create index on email
CREATE INDEX idx_subscribers_email ON public.subscribers(email);

-- Create trigger to update the updated_at column
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_subscribers_timestamp
BEFORE UPDATE ON public.subscribers
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Set up Row Level Security (RLS)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create proper RLS policies for a public signup form
-- Allow inserts from anonymous users
CREATE POLICY "Allow anonymous inserts to subscribers"
ON public.subscribers
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to view all subscribers
CREATE POLICY "Allow authenticated users to view subscribers"
ON public.subscribers
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to manage all subscribers
CREATE POLICY "Allow authenticated users to manage subscribers"
ON public.subscribers
FOR ALL
TO authenticated
USING (true);

-- This SQL should be run in the Supabase SQL Editor to set up the table
