import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Creating contact_submissions table...');

try {
  const { error: tableError } = await supabase
    .from('contact_submissions')
    .select('id')
    .limit(1);

  if (tableError && tableError.code === '42P01') {
    console.log('Table does not exist. Please run the SQL manually in Supabase dashboard.');
    console.log('SQL is in create_table.sql file');
  } else if (tableError) {
    console.error('Error checking table:', tableError);
  } else {
    console.log('Table already exists!');
  }
} catch (error) {
  console.error('Error:', error);
}
