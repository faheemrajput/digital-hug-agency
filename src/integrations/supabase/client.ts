// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yidhykhashitcbrhokgf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZGh5a2hhc2hpdGNicmhva2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMjk0NDgsImV4cCI6MjA0OTkwNTQ0OH0.c9hLiHnyj23hs_eDsn8QX4fK7tFQ51YZhMrbsLwADRQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);