import { createClient } from '@supabase/supabase-js'

const URL = 'https://areqbxxcpmqtnoqjowme.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZXFieHhjcG1xdG5vcWpvd21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNDgxMTIsImV4cCI6MjA0NTgyNDExMn0.lKEgZsuiOXmvmYBhtf3gF08CCX_PVr59Qt96SAveZfY';

export const supabase = createClient(URL, API_KEY);