import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(
  "https://qxmxgrkvordlsjkrntrc.supabase.co",  // Nueva URL de Supabase
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bXhncmt2b3JkbHNqa3JudHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzYwNzEsImV4cCI6MjAyOTE1MjA3MX0.Bt90PhJ_qotu-KlBrZTZp3isoQ6fu4bupGvQhxmkK1M"  // Nueva clave API
);