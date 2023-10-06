// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: 'http://localhost:3000/posts',

  firebaseConfig: {
    apiKey: "AIzaSyAxYQKbs-O6Tn52CKtSB8BOwCpSiqv7fNw",
    authDomain: "auth2-96c29.firebaseapp.com",
    projectId: "auth2-96c29",
    storageBucket: "auth2-96c29.appspot.com",
    messagingSenderId: "500102301668",
    appId: "1:500102301668:web:be682ae0225c69819069f1"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
