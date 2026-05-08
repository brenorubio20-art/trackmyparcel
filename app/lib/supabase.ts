import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://osgoggijselitakbzfyi.supabase.co";

const supabaseKey =
  "sb_publishable_f4gUQqhnya0itk3t5fA8mQ_bAcoC55J";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );