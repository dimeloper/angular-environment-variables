import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  public supabase!: SupabaseClient;
  supabaseUrl = import.meta.env.NG_APP_PUBLIC_SUPABASE_URL;
  supabaseKey = import.meta.env.NG_APP_PUBLIC_SUPABASE_ANON_KEY;

  constructor() {
    try {
      this.supabase = createClient(
        this.supabaseUrl,
        this.supabaseKey,
      );
    } catch (error) {
      console.error('Supabase initialisation failed, please doublecheck the key / secret values for the current environment.. ', error);
    }
  }

  get client(): SupabaseClient {
    return this.supabase;
  }
}
