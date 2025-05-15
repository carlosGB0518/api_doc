import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebrenljiuksqycrqgspo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicmVubGppdWtzcXljcnFnc3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzE3NzIsImV4cCI6MjA2Mjg0Nzc3Mn0.P89PFgmmmv0mNtqtPvhmLcNfIMBZJKcBs5FvRGm9TgY';
export const supabase = createClient(supabaseUrl, supabaseKey);eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9