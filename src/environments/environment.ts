// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  wsContactEditUrl: 'http://symfony-ws.dev:8080/contact/',
  wsContactUpdateUrl: 'http://symfony-ws.dev:8080/contact/',
  wsContactListUrl: 'http://symfony-ws.dev:8080/contact/',
  wsContactNewUrl: 'http://symfony-ws.dev:8080/contact/',
  wsContactDeleteUrl: 'http://symfony-ws.dev:8080/contact/'
};
