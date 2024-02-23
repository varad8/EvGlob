
  <div align="center">
  <h1 align="center">Ev Glob</h1>
  <h3>Codebase for the Ev Glob platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Angular-004E89?logo=Angular&style=flat" alt='Angular\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Firebase-004E89?logo=Firebase&style=flat" alt='Firebase\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express-004E89?logo=Express&style=flat" alt='Express\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Nodemailer-004E89?logo=Nodemailer&style=flat" alt='Nodemailer\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Stripe-004E89?logo=Stripe&style=flat" alt='Stripe\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Chart.js-004E89?logo=Chart.js&style=flat" alt='Chart.js"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This project is an Angular application with a frontend and backend. The frontend is built using Angular, and the backend is built using Node.js and Express. The project includes a variety of components, services, and modules, as well as a custom authentication system. The project also includes a tailwindcss configuration file for styling.

---

## 🌟 Features

 Here is a list of features of the project:<br>
* Angular frontend
* Node.js and Express backend
* Custom authentication system
* Variety of components, services, and modules
* Tailwindcss configuration file for styling

---

## 📁 Repository Structure

```sh
├── .angular
│   └── cache
│       └── 17.1.0
│           ├── EvGlob
│           │   └── .tsbuildinfo
│           └── vite
│               └── deps
│                   ├── @angular_cdk_layout.js
│                   ├── @angular_cdk_layout.js.map
│                   ├── @angular_common.js
│                   ├── @angular_common.js.map
│                   ├── @angular_common_http.js
│                   ├── @angular_common_http.js.map
│                   ├── @angular_core.js
│                   ├── @angular_core.js.map
│                   ├── @angular_fire_compat.js
│                   ├── @angular_fire_compat.js.map
│                   ├── @angular_fire_compat_auth.js
│                   ├── @angular_fire_compat_auth.js.map
│                   ├── @angular_fire_compat_firestore.js
│                   ├── @angular_fire_compat_firestore.js.map
│                   ├── @angular_fire_compat_storage.js
│                   ├── @angular_fire_compat_storage.js.map
│                   ├── @angular_forms.js
│                   ├── @angular_forms.js.map
│                   ├── @angular_google-maps.js
│                   ├── @angular_google-maps.js.map
│                   ├── @angular_platform-browser.js
│                   ├── @angular_platform-browser.js.map
│                   ├── @angular_router.js
│                   ├── @angular_router.js.map
│                   ├── chunk-55HBGNYY.js
│                   ├── chunk-55HBGNYY.js.map
│                   ├── chunk-7TA7XNMB.js
│                   ├── chunk-7TA7XNMB.js.map
│                   ├── chunk-7WFCSKEP.js
│                   ├── chunk-7WFCSKEP.js.map
│                   ├── chunk-AR2SKMNP.js
│                   ├── chunk-AR2SKMNP.js.map
│                   ├── chunk-CYMIXUQE.js
│                   ├── chunk-CYMIXUQE.js.map
│                   ├── chunk-MJV6UDH2.js
│                   ├── chunk-MJV6UDH2.js.map
│                   ├── chunk-MUL57NPQ.js
│                   ├── chunk-MUL57NPQ.js.map
│                   ├── chunk-OI5GLHID.js
│                   ├── chunk-OI5GLHID.js.map
│                   ├── chunk-OLXSZ3RF.js
│                   ├── chunk-OLXSZ3RF.js.map
│                   ├── chunk-PNBMWJC3.js
│                   ├── chunk-PNBMWJC3.js.map
│                   ├── chunk-UGXVUWTG.js
│                   ├── chunk-UGXVUWTG.js.map
│                   ├── chunk-XWDDYQYX.js
│                   ├── chunk-XWDDYQYX.js.map
│                   ├── chunk-YYUKKWTU.js
│                   ├── chunk-YYUKKWTU.js.map
│                   ├── index.esm-72OGEC4M.js
│                   ├── index.esm-72OGEC4M.js.map
│                   ├── ng2-charts.js
│                   ├── ng2-charts.js.map
│                   ├── ngx-webstorage.js
│                   ├── ngx-webstorage.js.map
│                   ├── package.json
│                   ├── rxjs.js
│                   ├── rxjs.js.map
│                   ├── rxjs_operators.js
│                   ├── rxjs_operators.js.map
│                   └── _metadata.json
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── server
│   ├── .env
│   └── server.js
├── src
│   ├── app
│   │   ├── AdminDataService
│   │   │   ├── adminservices.service.spec.ts
│   │   │   └── adminservices.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── adminlogin
│   │   │   │   ├── adminlogin.component.css
│   │   │   │   ├── adminlogin.component.html
│   │   │   │   ├── adminlogin.component.spec.ts
│   │   │   │   └── adminlogin.component.ts
│   │   │   ├── alertmodal
│   │   │   │   └── bookingmodal
│   │   │   │       ├── bookingmodal.component.css
│   │   │   │       ├── bookingmodal.component.html
│   │   │   │       ├── bookingmodal.component.spec.ts
│   │   │   │       └── bookingmodal.component.ts
│   │   │   ├── evadminlogin
│   │   │   │   ├── evadminlogin.component.css
│   │   │   │   ├── evadminlogin.component.html
│   │   │   │   ├── evadminlogin.component.spec.ts
│   │   │   │   └── evadminlogin.component.ts
│   │   │   ├── evadminregister
│   │   │   │   ├── evadminregister.component.css
│   │   │   │   ├── evadminregister.component.html
│   │   │   │   ├── evadminregister.component.spec.ts
│   │   │   │   └── evadminregister.component.ts
│   │   │   ├── evcard
│   │   │   │   ├── evcard.component.css
│   │   │   │   ├── evcard.component.html
│   │   │   │   ├── evcard.component.spec.ts
│   │   │   │   └── evcard.component.ts
│   │   │   ├── evdetailspage
│   │   │   │   ├── evdetailspage.component.css
│   │   │   │   ├── evdetailspage.component.html
│   │   │   │   ├── evdetailspage.component.spec.ts
│   │   │   │   └── evdetailspage.component.ts
│   │   │   ├── evfeatures
│   │   │   │   ├── evfeatures.component.css
│   │   │   │   ├── evfeatures.component.html
│   │   │   │   ├── evfeatures.component.spec.ts
│   │   │   │   └── evfeatures.component.ts
│   │   │   ├── evtestimonial
│   │   │   │   ├── evtestimonial.component.css
│   │   │   │   ├── evtestimonial.component.html
│   │   │   │   ├── evtestimonial.component.spec.ts
│   │   │   │   └── evtestimonial.component.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── herosection
│   │   │   │   ├── herosection.component.css
│   │   │   │   ├── herosection.component.html
│   │   │   │   ├── herosection.component.spec.ts
│   │   │   │   └── herosection.component.ts
│   │   │   ├── home
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   └── home.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.css
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   ├── not-found
│   │   │   │   ├── not-found.component.css
│   │   │   │   ├── not-found.component.html
│   │   │   │   ├── not-found.component.spec.ts
│   │   │   │   └── not-found.component.ts
│   │   │   ├── register
│   │   │   │   ├── register.component.css
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.spec.ts
│   │   │   │   └── register.component.ts
│   │   │   └── searchevform
│   │   │       ├── searchevform.component.css
│   │   │       ├── searchevform.component.html
│   │   │       ├── searchevform.component.spec.ts
│   │   │       └── searchevform.component.ts
│   │   ├── EvDataService
│   │   │   ├── adminservice.service.spec.ts
│   │   │   └── adminservice.service.ts
│   │   ├── guards
│   │   │   ├── auth.guard.spec.ts
│   │   │   ├── auth.guard.ts
│   │   │   ├── sauth.guard.spec.ts
│   │   │   ├── sauth.guard.ts
│   │   │   ├── userauth.guard.spec.ts
│   │   │   └── userauth.guard.ts
│   │   ├── model
│   │   │   ├── admin-profile-model.ts
│   │   │   ├── bookingmodel.ts
│   │   │   ├── ev-admin-profile.ts
│   │   │   ├── ratingmodel.ts
│   │   │   └── user-profile.ts
│   │   ├── modules
│   │   │   └── admin
│   │   │       ├── admin-routing.module.ts
│   │   │       ├── admin.module.ts
│   │   │       └── components
│   │   │           ├── admin-dashboard
│   │   │           │   ├── admin-dashboard.component.css
│   │   │           │   ├── admin-dashboard.component.html
│   │   │           │   ├── admin-dashboard.component.spec.ts
│   │   │           │   └── admin-dashboard.component.ts
│   │   │           ├── analytics
│   │   │           │   ├── analytics.component.css
│   │   │           │   ├── analytics.component.html
│   │   │           │   ├── analytics.component.spec.ts
│   │   │           │   └── analytics.component.ts
│   │   │           ├── booking
│   │   │           │   ├── booking.component.css
│   │   │           │   ├── booking.component.html
│   │   │           │   ├── booking.component.spec.ts
│   │   │           │   └── booking.component.ts
│   │   │           ├── feedback
│   │   │           │   ├── feedback.component.css
│   │   │           │   ├── feedback.component.html
│   │   │           │   ├── feedback.component.spec.ts
│   │   │           │   └── feedback.component.ts
│   │   │           ├── payments
│   │   │           │   ├── payments.component.css
│   │   │           │   ├── payments.component.html
│   │   │           │   ├── payments.component.spec.ts
│   │   │           │   └── payments.component.ts
│   │   │           ├── profile
│   │   │           │   ├── profile.component.css
│   │   │           │   ├── profile.component.html
│   │   │           │   ├── profile.component.spec.ts
│   │   │           │   └── profile.component.ts
│   │   │           ├── settings
│   │   │           │   ├── settings.component.css
│   │   │           │   ├── settings.component.html
│   │   │           │   ├── settings.component.spec.ts
│   │   │           │   └── settings.component.ts
│   │   │           └── sidebar
│   │   │               ├── sidebar.component.css
│   │   │               ├── sidebar.component.html
│   │   │               ├── sidebar.component.spec.ts
│   │   │               └── sidebar.component.ts
│   │   ├── modules_admin
│   │   │   └── superadmin
│   │   │       ├── scomponents
│   │   │       │   ├── bookingev
│   │   │       │   │   ├── bookingev.component.css
│   │   │       │   │   ├── bookingev.component.html
│   │   │       │   │   ├── bookingev.component.spec.ts
│   │   │       │   │   └── bookingev.component.ts
│   │   │       │   ├── details
│   │   │       │   │   ├── details.component.css
│   │   │       │   │   ├── details.component.html
│   │   │       │   │   ├── details.component.spec.ts
│   │   │       │   │   └── details.component.ts
│   │   │       │   ├── sanalytics
│   │   │       │   │   ├── sanalytics.component.css
│   │   │       │   │   ├── sanalytics.component.html
│   │   │       │   │   ├── sanalytics.component.spec.ts
│   │   │       │   │   └── sanalytics.component.ts
│   │   │       │   ├── sdashboard
│   │   │       │   │   ├── sdashboard.component.css
│   │   │       │   │   ├── sdashboard.component.html
│   │   │       │   │   ├── sdashboard.component.spec.ts
│   │   │       │   │   └── sdashboard.component.ts
│   │   │       │   ├── sevstations
│   │   │       │   │   ├── sevstations.component.css
│   │   │       │   │   ├── sevstations.component.html
│   │   │       │   │   ├── sevstations.component.spec.ts
│   │   │       │   │   └── sevstations.component.ts
│   │   │       │   ├── sprofile
│   │   │       │   │   ├── sprofile.component.css
│   │   │       │   │   ├── sprofile.component.html
│   │   │       │   │   ├── sprofile.component.spec.ts
│   │   │       │   │   └── sprofile.component.ts
│   │   │       │   └── ssettings
│   │   │       │       ├── ssettings.component.css
│   │   │       │       ├── ssettings.component.html
│   │   │       │       ├── ssettings.component.spec.ts
│   │   │       │       └── ssettings.component.ts
│   │   │       ├── superadmin-routing.module.ts
│   │   │       └── superadmin.module.ts
│   │   ├── shared
│   │   │   ├── auth.service.spec.ts
│   │   │   └── auth.service.ts
│   │   ├── user-module
│   │   │   ├── user-module-routing.module.ts
│   │   │   ├── user-module.module.ts
│   │   │   └── usercomponents
│   │   │       ├── useranalytics
│   │   │       │   ├── useranalytics.component.css
│   │   │       │   ├── useranalytics.component.html
│   │   │       │   ├── useranalytics.component.spec.ts
│   │   │       │   └── useranalytics.component.ts
│   │   │       ├── userbooking
│   │   │       │   ├── userbooking.component.css
│   │   │       │   ├── userbooking.component.html
│   │   │       │   ├── userbooking.component.spec.ts
│   │   │       │   └── userbooking.component.ts
│   │   │       ├── userdashboard
│   │   │       │   ├── userdashboard.component.css
│   │   │       │   ├── userdashboard.component.html
│   │   │       │   ├── userdashboard.component.spec.ts
│   │   │       │   └── userdashboard.component.ts
│   │   │       ├── userfeedback
│   │   │       │   ├── userfeedback.component.css
│   │   │       │   ├── userfeedback.component.html
│   │   │       │   ├── userfeedback.component.spec.ts
│   │   │       │   └── userfeedback.component.ts
│   │   │       ├── userprofile
│   │   │       │   ├── userprofile.component.css
│   │   │       │   ├── userprofile.component.html
│   │   │       │   ├── userprofile.component.spec.ts
│   │   │       │   └── userprofile.component.ts
│   │   │       └── usersetting
│   │   │           ├── usersetting.component.css
│   │   │           ├── usersetting.component.html
│   │   │           ├── usersetting.component.spec.ts
│   │   │           └── usersetting.component.ts
│   │   └── UserDataService
│   │       ├── userservices.service.spec.ts
│   │       └── userservices.service.ts
│   ├── environments
│   │   ├── environment.development.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```

---

## 💻 Code Summary

<details><summary>\.angular\cache\17.1.0\vite\deps</summary>

| File | Summary |
| ---- | ------- |
| @angular_cdk_layout.js |  The code defines several classes and functions related to layout and media queries in the Angular CDK library.The main function of the code is to provide a way to detect changes in the layout of a web page, such as when the user resizes their browser window or rotates their device. This is done by using the `matchMedia` API, which allows developers to listen for changes in the media query that matches the current viewport size.The code also defines several constants and functions related to media queries, such as `Breakpoints`, which provides a set of predefined media queries for common breakpoints, and `splitQueries`, which splits a list of media queries into individual queries.Overall, the code appears to be focused on providing a way to detect changes in the layout of a web page and respond to those changes in a flexible and efficient manner. |
| @angular_common.js |  The code imports various modules and constants from the `@angular/common` package, including those related to internationalization, formatting, and DOM manipulation. It also exports several of these modules and constants for use in other parts of the application. |
| @angular_common_http.js |  The code is a TypeScript module that exports various classes and functions related to the Angular HTTP client, including the `HttpClient` class, which is used for making HTTP requests, and various interceptors and other components that are used to customize the behavior of the HTTP client. |
| @angular_core.js |  The code imports various symbols from the `@angular/core` module and exports them. It also defines some new symbols, such as `ɵɵdefineComponent`, `ɵɵdefineDirective`, and `ɵɵdefineInjectable`.The primary function of this code is to provide a way to define Angular components, directives, and services using TypeScript decorators. It allows developers to write code that is more concise and easier to read, while still providing the necessary metadata for the Angular framework to function correctly. |
| @angular_fire_compat.js |  The code imports and exports various AngularFire-related modules and functions, primarily for use in the AngularFire compatibility layer. |
| @angular_fire_compat_auth.js |  The code imports and exports various modules and constants related to the AngularFireAuth library, which provides authentication and authorization functionality for Angular applications. |
| @angular_fire_compat_firestore.js |  The code defines a new class called `bc` that extends the `Ub` class. It also defines several other functions and variables, including `P`, `i`, `g`, `h`, `j`, `m`, `l`, `u`, `v`, `B`, `A`, `L`, `G`, `Y`, `C`, `F`, `ca`, `J`, `O`, `M`, `ba`, `h`, `g`, `o`, `s`, `aa`, `S`, `i`, `B`, `A`, `L`, `G`, `Y`, `C`, `F`, `ca`, `J`, `O`, `M`, `ba`, `h`, `g`, `o`, `s`, `aa`, `S`, `i`, `B`, `A`, `L`, `G`, `Y`, `C`, `F`, `ca`, `J`, `O`, `M`, `ba`, `h`, `g`, `o`, `s`, `aa`, `S`, `i`, `B`, `A`, `L`, `G`, `Y`, `C`, `F`, `ca`, `J`, `O`, `M`, `ba`, `h`, `g`, `o`, `s`, `aa`, `S`, `i`, `B`, `A`, `L`, `G`, `Y`, ` |
| @angular_fire_compat_storage.js |  The code defines a function named `handlerCheck` that takes a single argument, `cndn`. If `cndn` is falsy, the function throws an error.The function is used to ensure that the result of an asynchronous operation is not null or undefined. It is typically used in conjunction with the `then` method of a promise, as follows:```promise.then(result => {  handlerCheck(result);  // Do something with the result});```If the result of the promise is null or undefined, the `handlerCheck` function will throw an error, which will be caught by the `catch` block of the `then` method.The `handlerCheck` function is defined as follows:```function handlerCheck(cndn) {  if (!cndn) {    throw unknown();  }}```The function checks whether `cndn` is truthy using the `!` operator. If `cndn` is falsy, the function throws an error.The `unknown` function is defined elsewhere in the code and returns a `StorageError` object with the code `StorageErrorCode.UNKNOWN`. This error is thrown when an unknown error occurs. |
| @angular_forms.js |  Summarize the code in a single, brief phrase, focusing exclusively on its primary function. Aim for extreme conciseness, providing just enough to understand its main purpose, ensuring the explanation is strictly a single sentence and no longer than 100 words.The code defines a directive that provides a synchronous validator function composed of all the synchronous validators registered with this directive. |
| @angular_google-maps.js |  This code defines a component that renders an embedded Google Map and provides various inputs and outputs for interacting with the map. The component is designed to be used in conjunction with other components that provide additional functionality, such as markers or polylines.The component's primary function is to initialize the Google Maps JavaScript API and create a new map instance. It also provides several inputs and outputs for binding to events on the map, such as click and bounds_changedThe component uses the Angular ElementRef service to get a reference to the DOM element where the map will be rendered, and the NgZone service to ensure that change detection is triggered when events are fired on the map.The component also defines several internal methods for handling changes to its inputs, such as setting the map's center and zoom properties, and subscribing to events on the map. These methods are marked with the @private decorator, indicating that they should not be called directly from outside the component.Overall, this component provides a convenient way to integrate Google Maps into an Angular application, while still allowing for fine-grained control over the map's behavior and appearance. |
| @angular_platform-browser.js |  The code is a module that exports various Angular platform-browser related classes and functions, including the `BrowserModule`, `DomSanitizer`, `EventManager`, and `HydrationFeatureKind` classes, as well as several other utility functions. |
| @angular_router.js |  The code you provided summarizes the primary function of the code, which is to import various Angular modules and define a `Router` component that uses the `RouterModule` to navigate between different views.The `Router` component is responsible for managing the application's navigation stack and rendering the appropriate view based on the current URL. It does this by using the `RouterModule` to parse the current URL and determine which components should be rendered in each outlet.The `RouterModule` is responsible for parsing the current URL and determining which components should be rendered in each outlet. It does this by using the `Route` objects defined in the `AppRoutingModule` to match the current URL against the routes defined in the module.The `Route` objects are used to define the mappings between URLs and components. They can also be used to define additional metadata about the route, such as the name of the outlet to render the component in or any additional parameters that should be passed to the component.Overall, the code you provided defines a basic router that can be used to navigate between different views in an Angular application. |
| chunk-55HBGNYY.js |  ```   * @returns An array of existing elements with the same attributes and values if found,   * the new elements if no match is found, or `null` if the tag parameter is not defined.   */  addTags(tags, forceCreation = false) {    if (!tags || tags.length === 0)      return null;    const result = [];    for (const tag of tags) {      const element = this._getOrCreateElement(tag, forceCreation);      if (element) {        result.push(element);      }    }    return result;  }  /**   * Retrieves a specific `<meta>` tag element in the current HTML document.   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute   * values in the provided tag definition, and verifies that all other attribute values are equal.   * @param tag The definition of a `<meta>` element to match.   * @returns The existing element with the same attributes and values if found,   * or `null` if the tag parameter is not defined.   */  getTag(tag) {    if (!tag)      return null;    return this._getExistingElement(tag);  }  /**   * Retrie |
| chunk-7TA7XNMB.js |  This code defines a `Logger` class that provides a simple logging interface for Firebase products. It allows you to set the log level and attach a custom log handler.The `Logger` class has methods for each of the standard log levels (`debug`, `log`, `info`, `warn`, and `error`), as well as a `setLogLevel` method that allows you to change the log level at runtime.The `setUserLogHandler` function allows you to attach a custom log handler to a `Logger` instance. The handler will be called with the same arguments as the corresponding log method, and can be used to send logs to a server or other destination.The `setLogLevel` and `setUserLogHandler` functions are both exposed on the `Logger` class itself, so you can call them directly on any instance of the class. However, it's more common to use the `firebase.logger().setLogLevel()` and `firebase.logger().setUserLogHandler()` functions, which apply to all instances of the `Logger` class. |
| chunk-7WFCSKEP.js |  The code defines a class called `AsyncScheduler` that extends the `Scheduler` class. It has two constructors, one that takes no arguments and the other that takes a `SchedulerAction` constructor and an optional `now` function. The `now` function is used to get the current time.The `AsyncScheduler` class has three methods:* `flush`: This method schedules the given action to be executed. If there are no pending actions, it will schedule the action to be executed as soon as possible. If there are pending actions, it will add the new action to the list of pending actions.* `schedule`: This method schedules the given action to be executed at the specified time. If the time is in the past, it will be scheduled to be executed immediately.* `add`: This method adds the given action to the list of pending actions.The `AsyncScheduler` class also has a private field called `actions` that stores the list of pending actions. It also has a private field called `_active` that indicates whether the scheduler is currently executing actions.The `AsyncScheduler` class implements the `Scheduler` interface, which defines the following methods:* `now`: This method returns the current time.* `schedule`: This method schedules the given action to be executed at the specified time.* `add`: This method |
| chunk-AR2SKMNP.js |  The code defines a set of utility functions for working with objects and generators in JavaScript, including methods for spreading properties, restoring objects, and creating asynchronous iterators. |
| chunk-CYMIXUQE.js |  The code defines a class called `HttpClient` that is used to make HTTP requests. It has several methods for different types of requests, such as `get()`, `post()`, and `delete()`. Each method takes a URL and an options object as parameters and returns an observable of the response.The `request()` method is the core method of the `HttpClient` class. It takes a request object as its first parameter and an options object as its second parameter. The request object contains information about the request, such as the method, URL, and body. The options object contains information about how the request should be made, such as whether it should report progress, what type of response it should expect, and so on.The `request()` method creates an observable of the response by calling the `handle()` method of the `HttpHandler` class. The `HttpHandler` class is responsible for handling the request and returning the response. In this case, the `HttpHandler` class is an instance of the `_FetchBackend` class, which uses the `fetch()` function to make the request.The `fetch()` function is a built-in function in JavaScript that makes an HTTP request. It takes a URL as its first parameter and an options object as its second parameter. The options object can contain information about the request, such as the method, headers, and body.The `createRequestInit()` method creates an options object for the |
| chunk-MJV6UDH2.js |  The code defines two functions, `partition` and `race`, which are both used to manipulate observables in the RxJS library. The `partition` function takes a predicate function and an observable as arguments and returns an array of two observables, one containing elements that pass the predicate and the other containing elements that do not. The `race` function takes any number of observables as arguments and returns a single observable that emits the first value from any of the input observables to emit. |
| chunk-MUL57NPQ.js |  This code is the main entry point for the Firebase JavaScript SDK. It imports various modules and defines several functions that are used throughout the SDK.The primary function of this code is to import the Firebase JavaScript SDK and define a few functions that are used to interact with it. These functions include:* `registerVersion`: registers the version of the Firebase JavaScript SDK with the Firebase console.* `getApps`: gets all the apps that have been created with the Firebase JavaScript SDK.* `registerVersion`: registers the version of the Firebase JavaScript SDK with the Firebase console.These functions are used by other parts of the SDK to interact with the Firebase services. They are not intended to be used directly by developers. |
| chunk-OI5GLHID.js |  This code is a collection of various utility functions and classes for working with observables in RxJS. It includes:* `animationFrames`: A function that creates an observable that emits animation frames.* `asapScheduler`: A scheduler that schedules work to be executed as soon as possible, but after the current frame.* `asap`: A shortcut for creating an observable that emits values as soon as possible.* `queueScheduler`: A scheduler that schedules work to be executed at the end of the current JavaScript event loop.* `queue`: A shortcut for creating an observable that emits values at the end of the current JavaScript event loop.* `animationFrameScheduler`: A scheduler that schedules work to be executed on the next animation frame.* `animationFrame`: A shortcut for creating an observable that emits values on the next animation frame.* `VirtualTimeScheduler`: A class that implements a virtual time scheduler for testing purposes.* `VirtualAction`: A class that represents a virtual action in a virtual time scheduler.* `isObservable`: A function that checks if a value is an observable.* `lastValueFrom`: A function that returns the last value from an observable.* `firstValueFrom`: A function that returns the first value from an observable.* `bindCallback`: A function that converts a node-style |
| chunk-OLXSZ3RF.js |  This code is a part of the Angular framework, specifically in the `core` module. It defines several functions and classes that are used for dependency injection, change detection, and other core features of Angular.The main function defined in this code is `inject`, which is used to inject dependencies into a class. It takes a token (which can be a type or an instance) and returns the corresponding value. The `flags` parameter is used to specify additional options for the injection.The code also defines several other functions and classes related to dependency injection, such as `Injector`, `Provider`, and `NgModule`. These are used to create and manage instances of injectors, which are responsible for resolving dependencies.Overall, this code is an important part of the Angular framework, as it provides the foundation for dependency injection and change detection. |
| chunk-PNBMWJC3.js |  This code is the main entry point for the `@firebase/app-check` library, which provides an API for using Firebase App Check in a web application. It imports several other modules and defines several functions that can be used to interact with the Firebase App Check service.The primary function of this code is to provide a way to initialize the Firebase App Check service and obtain tokens for use in verifying the integrity of requests to your server. It also provides a way to listen for changes to the token and automatically refresh it when necessary.The code imports several other modules from the `@firebase/app` and `@firebase/util` libraries, as well as the `rxjs` library for working with asynchronous operations. It also defines several functions that can be used to interact with the Firebase App Check service, including `initializeAppCheck`, `getToken`, `getLimitedUseToken`, `onTokenChanged`, and `setTokenAutoRefreshEnabled`. |
| chunk-UGXVUWTG.js |  This code defines a set of functions for performing API requests to the Firebase Authentication backend. It includes functions for sending requests to create and verify accounts, sign in with email and password, and send password reset emails. The code also includes error handling and mapping of server errors to client-side errors.The main function of this code is `_performApiRequest`, which takes an `auth` object, a HTTP method (e.g. GET or POST a path to the API endpoint, and a request body (if applicable). It returns a promise that resolves to the server's response.The function first checks if the request should be sent to the emulator, and if so, it returns a promise that resolves to the emulator's response. If not, it sends the request to the production API using the `FetchProvider` class.The function then handles any errors that occur during the request, including network timeouts and server errors. If a server error occurs, it maps the error to a client-side error using the `SERVER_ERROR_MAP` constant. If no error occurs, it returns the server's response.The code also includes functions for sending requests to the password update and delete endpoints, as well as functions for handling the OAuth redirect flow. |
| chunk-XWDDYQYX.js |  */new Date(year, month, date);  if (isNaN(newDate.getTime())) {    throw new Error(`Invalid date - ${year}/${month}/${date}`);  }  return newDate;}function toDate(value) {  if (value instanceof Date) {    return value;  }  if (typeof value === umber {    return new Date(value);  }  if (typeof value === string {    const match = ISO8601_DATE_REGEX.exec(value);    if (match) {      const year = +match[1];      const month = +match[2] - 1;      const date = +match[3];      const hours = match[4] ? +match[4] : 0;      const minutes = match[5] ? +match[5] : 0;      const seconds = match[6] ? +match[6] : 0;      const ms = match[7] ? +match[7].substr(0, 3) : 0;      const offsetHours = match[9] ? +match[9] * 60 : 0;      const offsetMinutes = match[10] ? +match[10 |
| chunk-YYUKKWTU.js |  The code defines an AngularFireAuth module that provides a compatibility layer for the Firebase Authentication API. It imports various dependencies, including firebase and ɵAngularFireSchedulers, and defines an AngularFireAuth class that extends the proxyPolyfillCompat class. The class has several properties and methods related to authentication, such as authState, user, idToken, and credential, which are observables of the current authentication state and user information. The module also exports several injection tokens, including USE_EMULATOR, SETTINGS, TENANT_ID, LANGUAGE_CODE, USE_DEVICE_LANGUAGE, and PERSISTENCE. |
| index.esm-72OGEC4M.js |  The code imports three modules and defines a source mapping URL for the file. |
| ng2-charts.js |  The code defines a class called `Color` that provides methods for working with colors. It has several properties and methods, including:* `_rgb`: A property that stores the color as an object with `r`, `g`, `b`, and `a` properties.* `valid`: A property that indicates whether the color is valid.* `rgbString()`: A method that returns a string representation of the color in RGB format.* `hexString()`: A method that returns a string representation of the color in hexadecimal format.* `hslString()`: A method that returns a string representation of the color in HSL format.* `mix()`: A method that mixes two colors together.* `interpolate()`: A method that interpolates between two colors.* `clone()`: A method that clones the color.* `alpha()`: A method that sets the alpha channel of the color.* `clearer()`: A method that makes the color more transparent.* `greyscale()`: A method that converts the color to greyscale.* `opaquer()`: A method that makes the color less transparent.* `negate()`: A method that negates the color.* `lighten()`: A method that lightens the color.* `darken()`: A method that darkens |
| ngx-webstorage.js |  This code is the implementation of a library for storing data in web browsers using various storage strategies. It provides a set of classes and functions for interacting with the storage, including `SyncStorage`, `AsyncStorage`, and `StorageStrategyStub`.The main function of this code is to provide a way to store and retrieve data in web browsers using different storage strategies, such as local storage, session storage, or in-memory storage. The code also includes a cache mechanism to improve performance by reducing the number of requests to the storage.The library is designed to be used in Angular applications and provides a set of services and providers that can be injected into components and services. The `LocalStorageService` and `SessionStorageService` services provide synchronous access to the storage, while the `AsyncStorage` service provides asynchronous access. The `StorageStrategyStub` service is a stub implementation that can be used for testing purposes.The code also includes a configuration mechanism that allows users to customize the behavior of the library by setting the `prefix`, `separator`, and `caseSensitive` options. These options are used to normalize the keys used in the storage and to determine how they are compared.Overall, this code is a useful library for storing data in web browsers using different storage strategies, and it can be used in a variety of applications, including Angular applications. |
| rxjs.js |  The code is a collection of RxJS functions and classes, which are used to create and manipulate observables in JavaScript. |
| rxjs_operators.js |  The code imports and exports a collection of RxJS operators for use in building reactive applications. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code defines an Express.js server that listens on port 3000 and handles POST requests to the send-booking-email endpoint. It uses Nodemailer to send an email with a generated invoice attached to the booking data received in the request body. The email is sent using the Gmail service and requires authentication credentials. The server also includes middleware to parse JSON bodies and enable CORS. |

</details>

---

<details><summary>\src\app\AdminDataService</summary>

| File | Summary |
| ---- | ------- |
| adminservices.service.spec.ts |  The code defines a unit test for the AdminservicesService class, which is used to inject and configure the service for testing purposes. |
| adminservices.service.ts |  The code defines a service class for an Angular application that provides methods for updating admin details, uploading and deleting profile images, and updating the profile image on Firestore. |

</details>

---

<details><summary>\src\app</summary>

| File | Summary |
| ---- | ------- |
| app-routing.module.ts |  The code defines a routing module for an Angular application, which sets up routes for various components and guards. |
| app.component.spec.ts |  The code defines a suite of unit tests for the AppComponent component, using the TestBed and RouterTestingModule from the Angular testing framework. |
| app.component.ts |  The code defines an Angular component with a selector of app-root and a title of EvGlob |
| app.module.ts |  The code defines an Angular module called AppModule, which imports various dependencies and declares several components, including the AppComponent, LoginComponent, RegisterComponent, and more. |

</details>

---

<details><summary>\src\app\components\adminlogin</summary>

| File | Summary |
| ---- | ------- |
| adminlogin.component.spec.ts |  The code defines a unit test for the AdminloginComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| adminlogin.component.ts |  The code defines an Angular component for the admin login page, with a form to enter email and password, and a method to handle the login process. |

</details>

---

<details><summary>\src\app\components\alertmodal\bookingmodal</summary>

| File | Summary |
| ---- | ------- |
| bookingmodal.component.spec.ts |  The code defines a unit test for the BookingmodalComponent component, which is used to create a fixture and detect changes in the component. |
| bookingmodal.component.ts |  The code defines a component for a modal window with an output event emitter to close the modal. |

</details>

---

<details><summary>\src\app\components\evadminlogin</summary>

| File | Summary |
| ---- | ------- |
| evadminlogin.component.spec.ts |  The code defines a unit test for the EvadminloginComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| evadminlogin.component.ts |  The code defines an Angular component for the EVAdminLogin page, which includes a login form with email and password fields, a forgot password feature, and a method to validate the email format. |

</details>

---

<details><summary>\src\app\components\evadminregister</summary>

| File | Summary |
| ---- | ------- |
| evadminregister.component.spec.ts |  The code defines a unit test for the EvadminregisterComponent component, which is used to register new users in an event management system. |
| evadminregister.component.ts |  The code defines an Angular component for the EVAdmin registration page, with a form to input email and password, and a method to call the `evadminregister` method of the `AuthService` class after validating the input. |

</details>

---

<details><summary>\src\app\components\evcard</summary>

| File | Summary |
| ---- | ------- |
| evcard.component.spec.ts |  The code defines a unit test for the EvcardComponent component, which is a part of an Angular application. The test creates a fixture for the component and checks that it is truthy. |
| evcard.component.ts |  The code defines an Angular component that displays a list of EV admin profiles, with pagination and filtering capabilities. |

</details>

---

<details><summary>\src\app\components\evdetailspage</summary>

| File | Summary |
| ---- | ------- |
| evdetailspage.component.spec.ts |  The code defines a unit test for the EvdetailspageComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| evdetailspage.component.ts |  The code is a TypeScript class that defines a component for displaying details of an electric vehicle (EV) station. It imports various dependencies, such as the Angular core library and Google Maps API, and defines several properties and methods related to the EV station, including populating markers on a map, handling booking logic, and displaying a payment modal. The component also includes a helper function to format time in the HH:mm format. |

</details>

---

<details><summary>\src\app\components\evfeatures</summary>

| File | Summary |
| ---- | ------- |
| evfeatures.component.spec.ts |  The code defines a unit test for the EvfeaturesComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| evfeatures.component.ts |  The code defines an Angular component called EvfeaturesComponent, which is used to display a set of features for electric vehicles. |

</details>

---

<details><summary>\src\app\components\evtestimonial</summary>

| File | Summary |
| ---- | ------- |
| evtestimonial.component.spec.ts |  The code defines a unit test for the EvtestimonialComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| evtestimonial.component.ts |  The code defines a component in Angular that displays a list of testimonials, with pagination and filtering capabilities. |

</details>

---

<details><summary>\src\app\components\footer</summary>

| File | Summary |
| ---- | ------- |
| footer.component.spec.ts |  The code defines a unit test for the FooterComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| footer.component.ts |  The code defines a FooterComponent class in Angular, which is used to display the footer content on the web page. |

</details>

---

<details><summary>\src\app\components\herosection</summary>

| File | Summary |
| ---- | ------- |
| herosection.component.spec.ts |  The code defines a unit test for the HerosectionComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| herosection.component.ts |  The code defines a component for the hero section of an Angular application, with a selector, template, and stylesheet. |

</details>

---

<details><summary>\src\app\components\home</summary>

| File | Summary |
| ---- | ------- |
| home.component.spec.ts |  The code is a unit test for the HomeComponent component in an Angular application, which creates a fixture and component instance, configures the testing module with the component, and asserts that the component is truthy. |
| home.component.ts |  The code defines a component class for the app-home selector in an Angular application, with a template and style URL. |

</details>

---

<details><summary>\src\app\components\login</summary>

| File | Summary |
| ---- | ------- |
| login.component.spec.ts |  The code defines a unit test for the LoginComponent component in an Angular application, using Jest and TestBed. |
| login.component.ts |  The code defines a login component for an Angular application, with a user login function, forgot password functionality, and email validation. |

</details>

---

<details><summary>\src\app\components\modal</summary>

| File | Summary |
| ---- | ------- |
| modal.component.spec.ts |  The code defines a unit test for the ModalComponent component, which is used to create and manipulate a modal dialog in an Angular application. |
| modal.component.ts |  The code defines a component in Angular that allows users to enter their credit card information and pay an amount. It includes a form with input fields for the card number, expiration date, and CVV, as well as a button to initiate the payment. The component also includes a list of available credit cards and a dropdown menu to select the country of the card. The component's primary function is to validate the entered credit card information and display an error message if the information is invalid, or to initiate the payment if the information is valid. |

</details>

---

<details><summary>\src\app\components\navbar</summary>

| File | Summary |
| ---- | ------- |
| navbar.component.spec.ts |  The code defines a unit test for the NavbarComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| navbar.component.ts |  The code defines a NavbarComponent in Angular, which has a dark mode toggle and a mobile device detection feature. |

</details>

---

<details><summary>\src\app\components\not-found</summary>

| File | Summary |
| ---- | ------- |
| not-found.component.spec.ts |  The code defines a unit test for the NotFoundComponent component, which is used to verify that the component is created correctly. |
| not-found.component.ts |  The code defines a component for displaying a Not Found page in an Angular application. |

</details>

---

<details><summary>\src\app\components\register</summary>

| File | Summary |
| ---- | ------- |
| register.component.spec.ts |  The code defines a unit test for the RegisterComponent component in an Angular application, using Jest and TestBed. |
| register.component.ts |  The code defines a RegisterComponent in Angular, which has an email and password input field and a userRegister() method that calls the AuthService's userregister() method to register a new user. |

</details>

---

<details><summary>\src\app\components\searchevform</summary>

| File | Summary |
| ---- | ------- |
| searchevform.component.spec.ts |  The code defines a unit test for the SearchevformComponent component in an Angular application, using Jest and TestBed. |
| searchevform.component.ts |  The code defines a component in Angular that allows users to search for available electric vehicle (EV) charging slots based on their location and preferred time. It retrieves data from an API, filters it based on the user's input, and displays the results in a modal window. |

</details>

---

<details><summary>\src\app\EvDataService</summary>

| File | Summary |
| ---- | ------- |
| adminservice.service.spec.ts |  The code defines a unit test for the AdminserviceService class, which is used to inject and configure the service for testing purposes. |
| adminservice.service.ts |  The code defines a service class for an Angular application that provides methods for managing user profiles, including retrieving, updating, and deleting profile data. The service also includes methods for uploading and downloading profile pictures, as well as methods for approving or rejecting user accounts. Additionally, the service includes methods for retrieving booking data and rating data by station ID. |

</details>

---

<details><summary>\src\app\guards</summary>

| File | Summary |
| ---- | ------- |
| auth.guard.spec.ts |  The code defines a unit test for the AuthGuard component, which is used to protect routes in an Angular application. |
| auth.guard.ts |  The code defines an AuthGuard class that implements the CanActivate interface and checks if the user is logged in as an EV admin before allowing them to access a route. |
| sauth.guard.spec.ts |  The code defines a unit test for the SauthGuard component, which is used to protect routes in an Angular application. |
| sauth.guard.ts |  The code defines a guard class for the Angular router that checks if a super admin is logged in before allowing access to a route. |
| userauth.guard.spec.ts |  The code defines a unit test for the UserAuthGuard component, which is used to protect routes and ensure that only authenticated users can access them. |
| userauth.guard.ts |  The code defines a UserAuthGuard class that implements the CanActivate interface and checks if the user is logged in before allowing them to access a route. If the user is not logged in, they are redirected to the login page. |

</details>

---

<details><summary>\src\app\model</summary>

| File | Summary |
| ---- | ------- |
| admin-profile-model.ts |  The code defines an interface for an admin profile model, with properties such as first name, last name, email, and role. |
| bookingmodel.ts |  The code defines an interface for a booking model, which includes properties such as user ID, event ID, station ID, and payment details. |
| ev-admin-profile.ts |  The code defines an interface for an event administrator profile, including fields for basic information, timings, location, and image, as well as nested objects for profile details and account status. |
| ratingmodel.ts |  The code defines an interface for a rating model with properties for document ID, station ID, user ID, rating, and feedback message. |
| user-profile.ts |  The code defines an interface for a user profile, with properties for first name, last name, email, mobile number, date of birth, updated and created dates, address, profile picture, location, user ID, account type, and ID. |

</details>

---

<details><summary>\src\app\modules\admin</summary>

| File | Summary |
| ---- | ------- |
| admin-routing.module.ts |  The code defines a routing module for an admin dashboard in an Angular application, with routes to various components such as the dashboard, bookings, profile, ratings, and settings. |
| admin.module.ts |  The code defines an Angular module called AdminModule that imports various components and modules, including the CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, and declares several components such as AdminDashboardComponent, SidebarComponent, SettingsComponent, ProfileComponent, AnalyticsComponent, BookingComponent, PaymentsComponent, and FeedbackComponent. |

</details>

---

<details><summary>\src\app\modules\admin\components\admin-dashboard</summary>

| File | Summary |
| ---- | ------- |
| admin-dashboard.component.spec.ts |  The code defines a unit test for the AdminDashboardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| admin-dashboard.component.ts |  The code defines a component for an admin dashboard, which displays information about the logged-in user and provides functionality for logging out and toggling a sidebar. |

</details>

---

<details><summary>\src\app\modules\admin\components\analytics</summary>

| File | Summary |
| ---- | ------- |
| analytics.component.spec.ts |  The code defines a unit test for the AnalyticsComponent component in an Angular application, using Jest and TestBed. It creates a fixture for the component, sets up the testing module with the component declaration, creates the component instance, and runs a simple test to ensure it is truthy. |
| analytics.component.ts |  The code defines an Angular component called AnalyticsComponent that displays analytics data for a fictional electric vehicle (EV) charging station. The component retrieves booking data from a remote API, calculates various metrics such as today's bookings count, total bookings count, visited users count, and not visited users count, and then displays the data in a chart format. Additionally, the component generates random colors for each station ID to differentiate between them in the chart. |

</details>

---

<details><summary>\src\app\modules\admin\components\booking</summary>

| File | Summary |
| ---- | ------- |
| booking.component.spec.ts |  The code defines a unit test for the BookingComponent component, which creates an instance of the component and checks if it is truthy. |
| booking.component.ts |  The code defines a BookingComponent in Angular, which retrieves bookings from an API and allows the user to filter and update their status. |

</details>

---

<details><summary>\src\app\modules\admin\components\feedback</summary>

| File | Summary |
| ---- | ------- |
| feedback.component.spec.ts |  The code defines a unit test for the FeedbackComponent component in an Angular application, using Jest and TestBed. |
| feedback.component.ts |  The code defines a component for displaying ratings and filtering them based on user input. It retrieves ratings from an API and displays them in a table, with the option to filter by rating or search term. The component also allows users to rate each rating and update the stars accordingly. |

</details>

---

<details><summary>\src\app\modules\admin\components\payments</summary>

| File | Summary |
| ---- | ------- |
| payments.component.spec.ts |  The code defines a unit test for the PaymentsComponent component in an Angular application, using Jest and TestBed. |
| payments.component.ts |  The code defines a PaymentsComponent class in Angular, which is used to display payment information and handle user interactions. |

</details>

---

<details><summary>\src\app\modules\admin\components\profile</summary>

| File | Summary |
| ---- | ------- |
| profile.component.spec.ts |  The code defines a unit test for the ProfileComponent component in an Angular application, using Jest and TestBed. |
| profile.component.ts |  The code defines a ProfileComponent in Angular, which fetches EvAdminProfile data from the AdminserviceService and displays it on the page. |

</details>

---

<details><summary>\src\app\modules\admin\components\settings</summary>

| File | Summary |
| ---- | ------- |
| settings.component.spec.ts |  The code defines a unit test for the `SettingsComponent` component, which is used to verify its functionality and ensure it meets certain requirements. |
| settings.component.ts |  The code defines a component in Angular that allows an admin to update their profile information, including their name, date of birth, mobile number, and location. It also allows the admin to upload a profile picture and an EV image for their electric vehicle. Additionally, the component provides a form to update the timing, rate, description, title, and coordinates of the EV. |

</details>

---

<details><summary>\src\app\modules\admin\components\sidebar</summary>

| File | Summary |
| ---- | ------- |
| sidebar.component.spec.ts |  The code defines a unit test for the SidebarComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| sidebar.component.ts |  The code defines a SidebarComponent in Angular, which has a dark mode feature and a mobile device detection. It also includes methods for toggling the sidebar and updating the body class when the dark mode changes. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\bookingev</summary>

| File | Summary |
| ---- | ------- |
| bookingev.component.spec.ts |  The code defines a unit test for the BookingevComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| bookingev.component.ts |  The code defines a component in an Angular application that displays booking information for a specific station. It retrieves the booking data from an API, filters it by date and user ID, and calculates the expected end time for each booking based on its start time and duration. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\details</summary>

| File | Summary |
| ---- | ------- |
| details.component.spec.ts |  The code defines a unit test for the `DetailsComponent` component, which is used to verify its functionality and ensure it meets certain requirements. |
| details.component.ts |  The code defines a component for displaying details of an event administrator profile, using the Angular framework. It imports various dependencies, sets up a route and a service to retrieve the profile data, and provides methods for formatting date and time values. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sanalytics</summary>

| File | Summary |
| ---- | ------- |
| sanalytics.component.spec.ts |  The code defines a unit test for the SanalyticsComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sanalytics.component.ts |  The code is a TypeScript class that represents the SanalyticsComponent component in an Angular application. It imports various services and models, and defines several properties and methods for displaying data on a dashboard. The primary function of the component appears to be to display statistics and charts related to bookings and user profiles, as well as to provide actions for approving or disapproving user profiles. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sdashboard</summary>

| File | Summary |
| ---- | ------- |
| sdashboard.component.spec.ts |  The code defines a unit test for the SdashboardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| sdashboard.component.ts |  The code defines a component called SdashboardComponent, which displays an admin dashboard. It imports various dependencies such as the Angular CDK, common directives, and services. The component has several properties and methods, including a dark mode toggle, a sidebar toggle, and a logout method. The component also listens to window resize events and updates the body class based on the current dark mode setting. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sevstations</summary>

| File | Summary |
| ---- | ------- |
| sevstations.component.spec.ts |  The code defines a unit test for the SevstationsComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| sevstations.component.ts |  The code defines a component for the app-sevstations selector, with a template and style URL, and exports it as a class named SevstationsComponent. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sprofile</summary>

| File | Summary |
| ---- | ------- |
| sprofile.component.spec.ts |  The code defines a unit test for the SprofileComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sprofile.component.ts |  The code defines an Angular component for the superadmin profile page, which fetches the admin profile data from the server and displays it in the template. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\ssettings</summary>

| File | Summary |
| ---- | ------- |
| ssettings.component.spec.ts |  The code defines a unit test for the SsettingsComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| ssettings.component.ts |  The code defines an Angular component for managing the settings of an admin user, including uploading a profile image and updating other details such as first name, last name, date of birth, mobile number, and address. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin</summary>

| File | Summary |
| ---- | ------- |
| superadmin-routing.module.ts |  The code defines a routing module for the superadmin feature of an Angular application, which includes routes for various components and child routes. |
| superadmin.module.ts |  The code defines an Angular module called SuperadminModule, which imports various dependencies such as CommonModule, SuperadminRoutingModule, FormsModule, and NgChartsModule. It also declares several components, including SdashboardComponent, SprofileComponent, SsettingsComponent, SevstationsComponent, SanalyticsComponent, DetailsComponent, and BookingevComponent. Additionally, it provides a configuration for the NgChartsModule. |

</details>

---

<details><summary>\src\app\shared</summary>

| File | Summary |
| ---- | ------- |
| auth.service.spec.ts |  The code defines a unit test for the AuthService class, which is used to verify its functionality and ensure it meets certain requirements. |
| auth.service.ts |  The code defines an AuthService class that provides authentication and authorization functionality for different user types, including evadmin, superadmin, and user. The service uses the AngularFireAuth library to handle authentication with Firebase Authentication and the AngularFirestore library to interact with Firestore. It also uses the Router library to navigate between pages and the SessionStorageService library to store user information in session storage. The service has several methods for logging in, registering, and retrieving user profiles, as well as methods for checking if a user is logged in and for signing out. |

</details>

---

<details><summary>\src\app\user-module</summary>

| File | Summary |
| ---- | ------- |
| user-module-routing.module.ts |  The code defines a routing module for the UserModule, which contains routes for various user-related components and redirects to the analytics component by default. |
| user-module.module.ts |  The code defines a UserModuleModule that imports and exports various components related to user functionality, including dashboard, booking, feedback, profile, settings, and analytics. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\useranalytics</summary>

| File | Summary |
| ---- | ------- |
| useranalytics.component.spec.ts |  The code defines a unit test for the UseranalyticsComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| useranalytics.component.ts |  The code defines a component in an Angular application that displays analytics for a user, including the number of bookings made by the user and the number of users visited by the user. The component retrieves data from a service and uses it to populate charts and calculate various statistics. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userbooking</summary>

| File | Summary |
| ---- | ------- |
| userbooking.component.spec.ts |  The code defines a unit test for the UserbookingComponent component, which is a part of an Angular application. It sets up the testing environment, creates a fixture for the component, and runs a simple test to ensure that the component is created successfully. |
| userbooking.component.ts |  The code defines a component in Angular that displays a list of bookings for a user, along with the ability to filter and search the bookings. It also includes a modal window that allows the user to rate their experience at a station. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userdashboard</summary>

| File | Summary |
| ---- | ------- |
| userdashboard.component.spec.ts |  The code defines a unit test for the UserdashboardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| userdashboard.component.ts |  The code defines a component for a user dashboard, with a dark mode toggle and a sidebar that can be opened and closed on mobile devices. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userfeedback</summary>

| File | Summary |
| ---- | ------- |
| userfeedback.component.spec.ts |  The code defines a unit test for the UserfeedbackComponent component, which is a part of an Angular application. The test creates a fixture for the component and checks that it is truthy. |
| userfeedback.component.ts |  The code defines a component in Angular that displays user feedback and allows users to rate stations. It retrieves ratings data from a service, filters it based on user input, and displays the filtered ratings in a modal. The component also allows users to rate stations by clicking on stars, and saves the rating data to the database when the Rate Now button is clicked. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userprofile</summary>

| File | Summary |
| ---- | ------- |
| userprofile.component.spec.ts |  The code defines a unit test for the UserprofileComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| userprofile.component.ts |  The code defines a UserprofileComponent in Angular, which fetches user profile data from the AuthService and stores it in the userProfile property. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\usersetting</summary>

| File | Summary |
| ---- | ------- |
| usersetting.component.spec.ts |  The code defines a unit test for the UsersettingComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| usersetting.component.ts |  The code defines a component for managing user settings, including selecting a profile image, updating personal details, and deleting the previous profile picture. |

</details>

---

<details><summary>\src\app\UserDataService</summary>

| File | Summary |
| ---- | ------- |
| userservices.service.spec.ts |  The code defines a unit test for the UserservicesService class, which is used to inject and configure the service for testing purposes. |
| userservices.service.ts |  The primary function of this code is to provide a set of services for managing user data, including retrieving and updating user profiles, booking data, and ratings. The service also includes methods for uploading and deleting profile images, as well as searching for EV admin profiles by location. |

</details>

---

<details><summary>\src\environments</summary>

| File | Summary |
| ---- | ------- |
| environment.development.ts |  The code defines an environment object with production set to true, firebase configuration, and publish and client secret keys for a payment gateway. |
| environment.ts |  The code defines an empty object named environment for storing environment-related data. |

</details>

---

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| main.ts |  The code bootstraps the Angular application by calling `platformBrowserDynamic().bootstrapModule(AppModule)` and catching any errors that may occur. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that sets various theme values, including colors, fonts, spacing, and shadows. |

</details>

---

## 🚀 Getting Started

 To get started with this project, follow these steps:<br>
1. Install the necessary dependencies by running `npm install` in your terminal.
2. Run `ng serve` to start the development server and navigate to `http://localhost:4200/` in your browser to view the application.
3. To build the application for production, run `ng build --configuration=production`.
4. To test the application, run `ng test`.
5. To deploy the application to Firebase, follow the instructions in the Firebase documentation.
6. To use the custom authentication system, create a new component that implements the `AuthService` interface and provide it in the root module.
7. To use the custom payment system, create a new component that implements the `PaymentService` interface and provide it in the root module.
8. To use the custom booking system, create a new component that implements the `BookingService` interface and provide it in the root module.
9. To use the custom analytics system, create a new component that implements the `AnalyticsService` interface and provide it in the root module.
10. To use the custom feedback system, create a new component that implements the `FeedbackService` interface and provide it in the root module.

Note: This is a basic getting started guide and there are many other things you can do with this project, such as adding more components,

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
