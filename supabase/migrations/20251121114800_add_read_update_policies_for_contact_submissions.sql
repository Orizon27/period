/*
  # Add read and update policies for contact submissions

  1. Changes
    - Add SELECT policy to allow anonymous users to read contact submissions (for admin page)
    - Add UPDATE policy to allow anonymous users to update read/archived status (for admin page)
  
  2. Security
    - These policies allow the admin page to function without authentication
    - In production, you may want to add proper authentication
*/

CREATE POLICY "Anyone can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);