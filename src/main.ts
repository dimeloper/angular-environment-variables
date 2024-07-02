import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Environment: {{ ngxEnv }}</h1>
    <ul>
      <li>Supabase URL: {{ supabaseUrl }}</li>
      <li>Supabase Key: {{ supabaseKey }}</li>
    </ul>
    <a target="_blank" href="https://github.com/chihab/dotenv-run/tree/main/packages/angular">
      Learn more about ngx-env/builder
    </a>
  `,
})
export class App {
  ngxEnv = import.meta.env.NG_APP_ENV;
  supabaseUrl = import.meta.env.NG_APP_PUBLIC_SUPABASE_URL;
  supabaseKey = import.meta.env.NG_APP_PUBLIC_SUPABASE_ANON_KEY;
}

bootstrapApplication(App);
