-- First drop any existing policies
DROP POLICY IF EXISTS "Subscribers are viewable by authenticated users" ON public.subscribers;
DROP POLICY IF EXISTS "Subscribers are insertable by anyone" ON public.subscribers;
DROP POLICY IF EXISTS "Subscribers can be inserted anonymously" ON public.subscribers;

-- Enable RLS on the subscribers table
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

-- You can verify the policies with this query:
SELECT * FROM pg_policies WHERE tablename = 'subscribers';
