# Angular Environment Variables

A sample Angular app that showcases how `@ngx-env/builder` can be used to introduce Environment Variables and different app environments within an Angular application.

## Add package and adjust angular configuration

- open a terminal
- go to the project root folder
- execute `ng add @ngx-env/builder`

## Define Environment variables

- create `.env` file in your local project directory
- add it in your `.gitignore`
- extend the `Env` interface within `env.d.ts` so that the new variables and their types are added below `NODE_ENV` (e.g. `readonly NG_APP_ENV: string;`)
- add your environment variables and their values within your local `.env` file with the following format:

```env
NG_APP_PUBLIC_SUPABASE_URL=https://test.supabase.co
NG_APP_PUBLIC_SUPABASE_ANON_KEY=keykeykeyvaluevalue
```

Note that all the environment variables should be prefixed with `NG_`.

## Differentiate environments across serve and build tasks

You could possible use the default `NODE_ENV` values to differentiate between e.g. `development` and `production` environments, however I prefer having my own app environment values which I've defined within `package.json`.

Example:

```json
"scripts": {
  "start:dev": "NG_APP_ENV=dev ng serve",
  "start:staging": "NG_APP_ENV=staging ng serve",
  "start:production": "NG_APP_ENV=production ng serve",
  "build": "NG_APP_ENV=production ng build"
}
```

By doing this you will also be able to differentiate pieces of implementation depending on the app environment, e.g. if you want to show a teaser component only on production or staging.

## Usage in components / templates

You can import the actual values of your environment variables in your components as such:

```ts
supabaseUrl = import.meta.env.NG_APP_PUBLIC_SUPABASE_URL;
```

Basically the `import.meta.env` object will include all the environment variables you've defined.

## Deployment / usage in production

Once your local setup is complete, you can overwrite the values of the variables you defined, just by defining them on the production system environment (e.g. `export NG_APP_PUBLIC_SUPABASE_URL="environment.specific.url"`), or by creating an `.env` file in there, including all the enviroment specific values (e.g. staging values on the testsystem, production values on the live server).
