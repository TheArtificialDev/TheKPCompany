import { supabase } from './supabase';
import * as EmailValidator from 'email-validator';

// Common disposable email domains list
const disposableEmailDomains = [
  'mailinator.com', 'yopmail.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com', 
  'guerrillamail.info', 'sharklasers.com', 'grr.la', 'getairmail.com', 'mailnesia.com',
  'mailnator.com', 'mailmetrash.com', 'tempr.email', 'trash-mail.com', 'trashmail.com',
  'temp-mail.org', 'temp-mail.io', 'fakeinbox.com', 'tempinbox.com', 'dispostable.com',
  'tempmailaddress.com', 'emailondeck.com', 'easytrashmail.com', 'mailtrash.net', 
  'maildrop.cc', 'inboxalias.com', 'tempmail.ninja', 'throwawaymail.com', 'getnada.com',
  'spamgourmet.com', 'throwawaymail.com', 'tempmailer.com', 'tempemail.co', 'mailinator2.com',
  'fake-email.com', 'mailbox.org', 'temp-email.com', 'disposable-email.com', 'mintemail.com'
];

export interface SubscriptionResult {
  success: boolean;
  message: string;
  data?: unknown;
}

export const subscriptionService = {
  /**
   * Validates if an email is properly formatted and not from a known disposable domain
   */
  validateEmail(email: string): { valid: boolean; reason?: string } {
    // Check basic email format
    if (!EmailValidator.validate(email)) {
      return { valid: false, reason: 'Invalid email format' };
    }

    // Check against disposable email domains
    const domain = email.split('@')[1].toLowerCase();
    if (disposableEmailDomains.includes(domain)) {
      return { valid: false, reason: 'Temporary or disposable email addresses are not allowed' };
    }

    return { valid: true };
  },

  /**
   * Submits a subscription to Supabase - simplified version without verification
   */
  async subscribeEmail(email: string): Promise<SubscriptionResult> {
    // First validate the email
    const validation = this.validateEmail(email);
    if (!validation.valid) {
      return {
        success: false,
        message: validation.reason || 'Invalid email'
      };
    }

    try {
      // Check if email already exists to prevent duplicates
      const { data: existingEmails } = await supabase
        .from('subscribers')
        .select('email')
        .eq('email', email)
        .limit(1);
      
      if (existingEmails && existingEmails.length > 0) {
        return {
          success: false,
          message: 'This email is already subscribed'
        };
      }
      
      // Insert the new subscription with simplified data
      const { data, error } = await supabase
        .from('subscribers')
        .insert([
          { 
            email,
            subscribed_at: new Date().toISOString(),
            status: 'active', // Directly mark as active since we're not verifying
            user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null
          }
        ]);

      if (error) {
        throw error;
      }
      return {
        success: true,
        message: 'Thank you for signing up! We\'ll keep you updated on our latest news and features.',
        data
      };    } catch (_error) {
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      };
    }
  }
};
