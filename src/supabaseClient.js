import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cidsyohjrwchyracvkst.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZHN5b2hqcndjaHlyYWN2a3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3OTc2NTEsImV4cCI6MjA2MjM3MzY1MX0.ARSp-oCCCFekRC2-vFljNc1QDwHvDAeEMieFDTuzHbA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
