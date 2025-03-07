
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

// Get the API key from environment variable
const resendApiKey = Deno.env.get('RESEND_API_KEY');
const toEmail = Deno.env.get('TO_EMAIL') || 'mayurbodkhe7918@gmail.com'; // Default fallback

// Initialize Resend with the API key
const resend = new Resend(resendApiKey);

// Set up CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Interface for the contact form data
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string; // Optional phone number
}

// Validate the contact form data
function validateContactForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim() === '') {
    return 'Name is required';
  }
  if (!data.email || data.email.trim() === '') {
    return 'Email is required';
  }
  if (!data.subject || data.subject.trim() === '') {
    return 'Subject is required';
  }
  if (!data.message || data.message.trim() === '') {
    return 'Message is required';
  }
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Invalid email format';
  }
  return null; // No validation errors
}

serve(async (req) => {
  console.log("Received request:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }

  try {
    // Parse the request body
    const requestData = await req.json();
    console.log("Received form data:", requestData);

    // Validate the contact form data
    const validationError = validateContactForm(requestData);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const { name, email, subject, message, phone } = requestData;

    // Send the email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: toEmail,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process contact form', 
        details: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
});
