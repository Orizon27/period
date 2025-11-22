/*
  # Add archived column to contact_submissions table

  1. Changes
    - Add `archived` boolean column to `contact_submissions` table with default value of false
    - This allows admins to archive contact submissions instead of deleting them
  
  2. Security
    - No changes to RLS policies needed
    - Column is nullable with default false value
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'archived'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN archived boolean DEFAULT false;
  END IF;
END $$;