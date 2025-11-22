/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting
      - `email` (text) - Email address of the submitter
      - `subject` (text) - Subject of the message
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp of when the submission was created
      - `read` (boolean) - Whether the message has been read by an admin
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone to insert submissions (public contact form)
    - No read policies - admin will access via service role key
  
  3. Important Notes
    - The table is locked down by default with RLS enabled
    - Only INSERT is publicly allowed for the contact form
    - Admin page will use service role to bypass RLS for reading submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
