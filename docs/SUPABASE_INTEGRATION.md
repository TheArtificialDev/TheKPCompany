# Supabase Integration Documentation

## Overview

TheKPCompany website uses Supabase as its backend database and API service, primarily for storing email subscriptions. This document details the integration, security measures, and best practices.

## Supabase Setup

### Project Configuration

1. **Project Creation**:
   - Create a new Supabase project through the [Supabase Dashboard](https://app.supabase.com)
   - Choose a region closest to your target audience
   - Set a secure database password

2. **Environment Variables**:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Database Initialization**:
   - Run the SQL scripts in `supabase-setup-simple.sql` and `supabase-fix-rls.sql`
   - These scripts create the necessary tables and security policies

### Client Setup

The Supabase client is initialized in `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if the required environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
```

## Database Schema

### Subscribers Table

```sql
CREATE TABLE public.subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'active',
    subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

### Indexes

```sql
-- Create index on email for faster lookups
CREATE INDEX idx_subscribers_email ON public.subscribers(email);
```

### Triggers

```sql
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
```

## Security Implementation

### Row Level Security (RLS)

Supabase uses Row Level Security to control access to table data:

```sql
-- Enable RLS on the subscribers table
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (for the signup form)
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
```

### API Security

1. **Anon Key Limitations**:
   - The anon key is restricted by RLS policies
   - Cannot access tables without explicit policies
   - Used only for public operations (signup)

2. **Server-Side API Routes**:
   - API routes validate all inputs
   - Error handling prevents information leakage
   - Rate limiting can be added for production

## Data Access Patterns

### Subscribing a New Email

```typescript
// Subscription service method
async subscribeEmail(email: string): Promise<SubscriptionResult> {
  // Validation logic...
  
  try {
    // Check for duplicates
    const { data: existingEmails } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .limit(1);
    
    if (existingEmails && existingEmails.length > 0) {
      return { success: false, message: 'Already subscribed' };
    }

    // Insert new subscription
    const { data, error } = await supabase
      .from('subscribers')
      .insert([
        { 
          email,
          subscribed_at: new Date().toISOString(),
          status: 'active',
          user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null
        }
      ]);

    if (error) throw error;
    
    return { success: true, message: 'Thank you for signing up!' };
  } catch (error) {
    // Error handling...
  }
}
```

### Future Data Access Patterns

In future iterations, additional patterns could include:

1. **Fetching Subscribers** (admin functionality):
   ```typescript
   const { data, error } = await supabase
     .from('subscribers')
     .select('*')
     .order('subscribed_at', { ascending: false });
   ```

2. **Unsubscribing** (user functionality):
   ```typescript
   const { data, error } = await supabase
     .from('subscribers')
     .update({ status: 'unsubscribed' })
     .eq('email', email);
   ```

## Technical Decisions

### Why Supabase?

1. **Serverless Architecture**:
   - Complements Next.js serverless approach
   - Reduces operational complexity
   - Scales automatically

2. **PostgreSQL Backend**:
   - Powerful, reliable database
   - Full SQL capabilities
   - Complex queries and constraints

3. **Built-in Security**:
   - Row Level Security
   - JWT-based authentication
   - Role-based access control

4. **Development Speed**:
   - Quick setup and iteration
   - Auto-generated API
   - Excellent developer experience

5. **Future Extensibility**:
   - Authentication system
   - Storage capabilities
   - Realtime subscriptions

### Alternatives Considered

1. **Firebase**:
   - Pros: Similar serverless approach, good free tier
   - Cons: NoSQL structure, less powerful queries, vendor lock-in

2. **MongoDB Atlas**:
   - Pros: Flexible schema, good scaling
   - Cons: Additional auth layer needed, complex security setup

3. **Custom Backend**:
   - Pros: Complete control, custom functionality
   - Cons: Higher maintenance, longer development time

## Performance Considerations

1. **Indexing**:
   - Email field is indexed for faster lookups
   - Additional indexes can be added as needed

2. **Connection Pooling**:
   - Supabase handles connection pooling automatically
   - Optimized for serverless environments

3. **Query Optimization**:
   - Limit queries to necessary fields
   - Use appropriate filters and limits

## Security Best Practices

1. **Environment Variables**:
   - Never commit API keys to the repository
   - Use different keys for development and production

2. **RLS Policies**:
   - Always use RLS for table access control
   - Test policies thoroughly
   - Least privilege principle

3. **Input Validation**:
   - Validate all user inputs on both client and server
   - Sanitize data before database operations

4. **Error Handling**:
   - Avoid exposing sensitive information in errors
   - Log errors for monitoring but sanitize logs

## Maintenance Guide

### Monitoring

1. **Supabase Dashboard**:
   - Monitor database usage
   - Check error logs
   - Review query performance

2. **Application Monitoring**:
   - Log Supabase interactions
   - Track API errors
   - Monitor subscription rates

### Migrations

For schema changes:

1. Create migration SQL files
2. Test migrations in development
3. Apply migrations to production
4. Verify data integrity

### Backup and Recovery

1. **Regular Backups**:
   - Supabase provides automated backups
   - Export data periodically as additional protection

2. **Point-in-Time Recovery**:
   - Available in paid Supabase plans
   - Configure retention period based on needs

## Future Enhancements

1. **Authentication**:
   - Implement user authentication for admin access
   - Secure dashboard for subscriber management

2. **Enhanced Analytics**:
   - Track open rates and engagement
   - Analyze subscriber demographics

3. **Custom Webhooks**:
   - Trigger external actions on new subscriptions
   - Integrate with marketing tools

4. **Data Enrichment**:
   - Collect additional opt-in information
   - Segment subscribers for targeted communication

5. **Advanced Security**:
   - Implement IP-based rate limiting
   - Add bot protection measures

## Troubleshooting

### Common Issues

1. **RLS Policy Failures**:
   - Symptom: Inserts or queries fail with permission errors
   - Solution: Review and update RLS policies

2. **Connection Issues**:
   - Symptom: Cannot connect to Supabase
   - Solution: Check API keys and URL, verify network access

3. **Duplicate Entries**:
   - Symptom: Unique constraint violations
   - Solution: Implement proper duplicate checking

### Debugging

1. **Enable Detailed Logging**:
   ```typescript
   const { data, error } = await supabase
     .from('subscribers')
     .insert([...])
     .debug();
   ```

2. **Check Supabase Logs**:
   - SQL query logs in Supabase dashboard
   - API request logs in dashboard

3. **Test Directly in Dashboard**:
   - Use the Table Editor to test operations
   - Compare with application behavior
