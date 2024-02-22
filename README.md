
  <div align="center">
  <h1 align="center">EvGlob</h1>
  <h3>Codebase for the EvGlob platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Angular-004E89?logo=Angular&style=flat" alt='Angular\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Firebase-004E89?logo=Firebase&style=flat" alt='Firebase\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express-004E89?logo=Express&style=flat" alt='Express\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Nodemailer-004E89?logo=Nodemailer&style=flat" alt='Nodemailer\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Stripe-004E89?logo=Stripe&style=flat" alt='Stripe\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-PayPal-004E89?logo=PayPal&style=flat" alt='PayPal"' />
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
| @angular_cdk_layout.js |  The code defines several modules and services related to layout and media queries in Angular.The `LayoutModule` is an empty module that can be imported by other modules to bring in the providers for the `MediaMatcher` and `BreakpointObserver`.The `MediaMatcher` service is used to evaluate media queries and determine whether a given query matches the current viewport size. It uses the `matchMedia` API to do this, but also includes a workaround for certain WebKit-based browsers that have issues with the `matchMedia` API.The `BreakpointObserver` service is used to observe changes in matching media queries and emit events when the matching state of a given query changes. It takes a list of media queries as input and returns an observable that emits an object with the matching state of each query.The `Breakpoints` object is a collection of predefined media queries that can be used to define breakpoints in a responsive design. |
| @angular_common.js |  The code imports various modules and constants from the `@angular/common` package, including those related to internationalization, formatting, and DOM manipulation. It also exports several of these modules and constants for use in other parts of the application. |
| @angular_common_http.js |  The code is a TypeScript module that exports various classes and functions related to the Angular HTTP client, including the `HttpClient` class, which is used for making HTTP requests, and various interceptors and other components that are used to handle HTTP requests and responses. |
| @angular_core.js |  The code imports various symbols from the `@angular/core` module and exports them. It also defines several constants and functions.The primary function of this code is to provide a set of utilities and services for building and working with Angular applications. |
| @angular_fire_compat.js |  The code imports and exports various AngularFire-related modules and functions, primarily for use in the `@angular_fire_compat.js` file. |
| @angular_fire_compat_auth.js |  The code imports various modules and exports them, primarily for use in the AngularFireAuth library. |
| @angular_fire_compat_firestore.js |  The code defines a class called `bc` that represents an XMLHttpRequest object. It has several methods and properties, including:* `setTimeout`: Sets the timeout for the request.* `i`: Sets the URL for the request.* `g`: Sets the HTTP method for the request (GET, POST, etc.).* `h`: Sets the headers for the request.* `j`: Sets the callback function for the request.* `m`: Sets the data for the request (for POST requests).* `P`: Sets the timeout interval for the request.* `nb`: Handles the response from the server.* `Pa`: Handles the error from the server.* `cancel`: Cancels the request.* `lb`: Handles the timeout for the request.* `s`: Sets the status of the request (0 = pending, 1 = complete, 2 = error, 3 = aborted).* `v`: Sets the response text for the request.* `ca`: Sets the response code for the request.* `J`: Sets whether the request is still in progress.* `O`: Sets the number of times the request has been retried.* `M`: Sets the maximum number of times the request should be retried.* `ba`: S |
| @angular_fire_compat_storage.js |  The code defines a function named `handlerCheck` that takes a single argument, `cndn`. If `cndn` is falsy, the function throws an error.The function is used to ensure that the result of an asynchronous operation is not null or undefined. It is typically used in conjunction with the `then` method of a promise, as follows:```promise.then(result => {  handlerCheck(result);  // Do something with the result});```If the result of the promise is null or undefined, the `handlerCheck` function will throw an error, which will be caught by the `catch` block of the `then` method.The `handlerCheck` function is defined as follows:```function handlerCheck(cndn) {  if (!cndn) {    throw unknown();  }}```It checks whether the value of `cndn` is truthy. If it is not, it throws an error. The `unknown` function is called to create an instance of the `StorageError` class with the `UNKNOWN` error code.The `handlerCheck` function is used throughout the code to ensure that the results of asynchronous operations are not null or undefined. It is an important part of the code's error handling mechanism. |
| @angular_forms.js |  Summarize the code in a single, brief phrase, focusing exclusively on its primary function. Aim for extreme conciseness, providing just enough to understand its main purpose, ensuring the explanation is strictly a single sentence and no longer than 100 words.The code defines a directive that provides a synchronous validator function composed of all the synchronous validators registered with this directive. |
| @angular_google-maps.js |  This code defines a component that renders an embedded Google Map and provides various inputs and outputs for interacting with the map. The component uses the Google Maps JavaScript API to render the map and provides a simple way to bind events from the map to the component's outputs.The component has several inputs that can be used to customize the map, such as `center`, `zoom`, and `options`. It also has several outputs that can be used to listen for events on the map, such as `boundsChanged` and `centerChanged`.The component also provides a `googleMap` output that can be used to access the underlying `google.maps.Map` object. This can be useful for more advanced use cases where you need to access the full range of functionality provided by the Google Maps JavaScript API.Overall, this component is designed to be a simple way to add a Google Map to your Angular application and provide a convenient way to interact with the map. |
| @angular_platform-browser.js |  The code is a module that exports various Angular platform-browser related classes and functions, including the `BrowserModule`, `DomSanitizer`, and `EventManager` classes, as well as several other utility functions. |
| @angular_router.js |  The code you provided summarizes the primary function of the code, which is to import various Angular modules and define a `Router` class that extends the `Router` class from `@angular/router`. The `Router` class is responsible for managing navigation between views in an Angular application.The `Router` class has several important methods, including `navigateByUrl()`, `navigate()`, and `createUrlTree()`. These methods are used to navigate between views and create URLs for views.The `Router` class also has several other important properties, such as `config`, `urlSerializer`, and `outletMap`. These properties are used to manage the configuration of the router, serialize URLs, and map outlets to views.Overall, the code you provided defines a `Router` class that is an essential part of any Angular application that uses routing. |
| chunk-55HBGNYY.js |  a new element without checking whether one already exists.   * @returns The existing elements with the same attributes and values if found,   * the new elements if no match is found, or `null` if the tag parameter is not defined.   */  addTags(tags, forceCreation = false) {    if (!tags || tags.length === 0)      return null;    const doc = this._doc;    const head = doc.head || doc.querySelector(head    const metaTags = [];    for (let i = 0; i < tags.length; i++) {      const tag = tags[i];      const metaTag = this._getOrCreateElement(tag, forceCreation);      if (metaTag) {        metaTags.push(metaTag);      }    }    return metaTags;  }  /**   * Retrieves an existing `<meta>` tag element in the current HTML document.   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute   * values in the provided tag definition, and verifies that all other attribute values are equal.   * @param tag The definition of a `<meta>` element to match.   * @returns The existing element with the same attributes and values if found,   * or |
| chunk-7TA7XNMB.js |  This code defines a `Logger` class that provides a simple way to log messages according to Firebase's logging scheme. It also provides a few convenience methods for logging at different levels (e.g. `debug`, `info`, `warn`, `error`).The `Logger` class has the following properties and methods:* `name`: The name of the logger instance.* `logLevel`: The current log level for the instance. Can be set to one of the following values: `LogLevel.DEBUG`, `LogLevel.VERBOSE`, `LogLevel.INFO`, `LogLevel.WARN`, or `LogLevel.ERROR`.* `logHandler`: A function that will be called with each log message. The function should take the following arguments:t+ `instance`: The logger instance that generated the log message.t+ `level`: The log level of the message.t+ `...args`: Any additional arguments passed to the log method.* `userLogHandler`: A function that will be called with each log message, after any user-defined log handler has been called. The function should take the same arguments as `logHandler`.The `Logger` class also provides several convenience methods for logging at different levels:* `debug(...args)`: Log a debug message.* `log(...args)`: Log a verbose message.* `info(...args)` |
| chunk-7WFCSKEP.js |  The code defines a class called `AsyncScheduler` that extends the `Scheduler` class. It has two constructor parameters:* `SchedulerAction`: A function that takes a scheduler and an action as arguments and returns a new `SchedulerAction`.* `now`: A function that returns the current time.The `AsyncScheduler` class has the following methods:* `flush(action)`: This method is called when an action needs to be executed. It first checks if there are any pending actions in the `actions` array. If there are, it executes them one by one until there are no more pending actions or an error occurs. If an error occurs, it stops executing actions and returns the error. Otherwise, it adds the given action to the `actions` array and returns `undefined`.* `schedule(state, delay)`: This method schedules an action to be executed after a specified delay. It creates a new `SchedulerAction` instance with the given state and delay and adds it to the `actions` array. It then calls the `flush` method to execute the action immediately if there are no other pending actions.The `AsyncScheduler` class also has the following properties:* `actions`: An array of pending actions.* `_active`: A boolean indicating whether the scheduler is currently executing actions.The code defines a `SchedulerAction` |
| chunk-AR2SKMNP.js |  The code defines a set of utility functions for working with objects and generators in JavaScript, including methods for spreading properties, restoring object properties, exporting values, and creating asynchronous iterators. |
| chunk-CYMIXUQE.js |  The code defines a class called `HttpClient` that implements the `HttpHandler` interface. It has a single method called `handle()` which takes an instance of `HttpRequest` as an argument and returns an observable of `HttpEvent`.The `handle()` method is responsible for creating an HTTP request and sending it to the server. It does this by using the `fetch()` function, which is a built-in browser API for making HTTP requests. The `fetch()` function returns a promise that resolves with an instance of `Response`, which represents the response from the server.The `handle()` method also handles errors by calling the `observer.error()` method on the observable returned by the `of()` operator. This causes the observable to emit an error event, which can be caught by subscribers who are listening to the observable.The `handle()` method also sets up a timeout for the request using the `setTimeout()` function. If the request takes longer than 10 seconds to complete, the `observer.error()` method is called with a `TimeoutError` object.Overall, the `HttpClient` class provides a simple way to make HTTP requests in Angular applications. It abstracts away the details of creating and sending HTTP requests, allowing developers to focus on building their applications rather than dealing with the underlying HTTP protocol. |
| chunk-MJV6UDH2.js |  The code defines two functions, `partition` and `race`, which are both operators for the RxJS library. The `partition` function takes a predicate function and returns an array of two observables, one containing elements that pass the predicate and another containing elements that do not. The `race` function takes any number of observables as arguments and returns an observable that emits the first value from any of the input observables to emit. |
| chunk-MUL57NPQ.js |  This code is a collection of various utility functions and classes used by the AngularFire library. It is not intended to be executed on its own, but rather imported and used by other modules.The primary function of this code is to provide a set of utilities for working with Firebase and Angular applications, such as scheduling tasks in the correct zone, handling observables, and providing lazy loading of Firebase SDKs. |
| chunk-OI5GLHID.js |  This code is a collection of various utility functions for working with Observables in RxJS. It includes functions for creating and manipulating Observables, as well as functions for working with events and other asynchronous operations.Here are some of the key functions in this code:* `animationFrames`: Creates an Observable that emits animation frames.* `asapScheduler`: Creates a scheduler that schedules work to be executed on the next animation frame.* `queueScheduler`: Creates a scheduler that schedules work to be executed on the next microtask.* `animationFrameScheduler`: Creates a scheduler that schedules work to be executed on the next animation frame.* `VirtualTimeScheduler`: Creates a scheduler that uses virtual time to schedule work.* `VirtualAction`: Creates an action that can be scheduled on a VirtualTimeScheduler.* `isObservable`: Determines whether an object is an Observable.* `lastValueFrom`: Returns the last value from an Observable.* `firstValueFrom`: Returns the first value from an Observable.* `bindCallback`: Creates an Observable from a callback function.* `bindNodeCallback`: Creates an Observable from a Node.js-style callback function.* `defer`: Creates an Observable that defers the subscription to another Observable.* `connectable`: |
| chunk-OLXSZ3RF.js |  This code is a part of the Angular framework, specifically in the `core` module. It's responsible for creating and managing instances of components, directives, and pipes.The code defines several classes and functions that are used to create and manage these instances. Some of the key classes and functions include:* `Injector`: This class is responsible for creating and managing instances of services and other dependencies. It also provides a way to retrieve instances of services and other dependencies.* `ComponentFactoryResolver`: This class is responsible for resolving component factories, which are used to create and manage instances of components.* `DirectiveResolver`: This class is responsible for resolving directive metadata, which is used to create and manage instances of directives.* `PipeResolver`: This class is responsible for resolving pipe metadata, which is used to create and manage instances of pipes.* `Reflector`: This class is responsible for reflecting on metadata for components, directives, and pipes. It provides a way to retrieve information about these components and directives.* `ViewCompiler`: This class is responsible for compiling views, which are used to render instances of components.* `TemplateParser`: This class is responsible for parsing templates, which are used to create views.* `ElementSchemaRegistry`: This class is responsible for retrieving information about elements and attributes. It provides a way to retrieve |
| chunk-PNBMWJC3.js |  This code is the main entry point for the `@firebase/app-check` package, which provides a service for Firebase App Check. It exports several functions and classes that are used to initialize and interact with the App Check service.The `initializeAppCheck()` function is used to initialize the App Check service for a Firebase app. It takes an optional `options` object that can be used to configure the service. The `getToken()` function is used to get a token from the App Check service. It takes an optional `forceRefresh` boolean parameter that can be used to force a refresh of the token. The `getLimitedUseToken()` function is similar to `getToken()`, but it returns a limited use token that can be used to make a single call to a Firebase service. The `onTokenChanged()` function is used to listen for changes to the token. It takes an observer function that will be called when the token changes. The `setTokenAutoRefreshEnabled()` function is used to enable or disable automatic token refreshing.The `AppCheck` class is used to interact with the App Check service. It has several methods that can be used to get a token, listen for changes to the token, and enable or disable automatic token refreshing.Overall, this code is responsible for providing a way to use Firebase App Check in an Angular application. |
| chunk-UGXVUWTG.js |  This code defines a set of functions that perform API requests to the Firebase Authentication backend. The functions are designed to be used by other parts of the SDK, such as the `auth` module.The main function of the module is `_performApiRequest`, which takes an `auth` object, a HTTP method (such as GET or POST a path to the API endpoint, and an optional request body. It returns a promise that resolves with the server's response.The function first checks if the user is currently in an emulator environment, and if so, it sets the `canInitEmulator` property of the `auth` object to `false`. This prevents the SDK from automatically initializing the emulator when the user navigates to a page that requires authentication.Next, the function creates a new `NetworkTimeout` instance, which is used to handle network timeouts. The `NetworkTimeout` class is defined in the `network-timeout` module.The function then calls `fetch` with the appropriate arguments, using the `FetchProvider` class to provide a polyfill for the `fetch` API. The `FetchProvider` class is also defined in this module.If the response is successful (i.e. the server returned a 200 status code), the function returns the JSON-parsed response. If the response is not successful, the function throws an error.The ` |
| chunk-XWDDYQYX.js |  */new Date(year, month, date);  return newDate;}function toDate(value) {  if (value instanceof Date) {    return value;  }  if (typeof value === umber {    return new Date(value);  }  if (typeof value === string {    const parts = value.split(-    if (parts.length > 1) {      return createDate(+parts[0], +parts[1] - 1, +parts[2]);    }  }  return new Date(NaN);}function getNamedFormat(locale, format) {  const namedFormats = NAMED_FORMATS[locale];  if (namedFormats && format in namedFormats) {    return namedFormats[format];  }  return null;}function getDateFormatter(value) {  switch (value) {    case y      return formatYear;    case M      return formatMonth;    case d      return formatDay;    case E      return formatWeekday;    case H      return formatHour;    case h      return formatHourClock12;    case  |
| chunk-YYUKKWTU.js |  The code defines an AngularFireAuth module that provides an AngularFireAuth service, which is a wrapper around the Firebase Authentication SDK. The service provides observables for authentication state, user, and ID token, as well as methods for signing in and out. The module also exports several injection tokens used by the service. |
| index.esm-72OGEC4M.js |  The code imports three modules and defines a source mapping URL for the file. |
| ng2-charts.js |  The code defines a class called `Color` that provides methods for working with colors. It has several static methods for parsing and manipulating color values, as well as instance methods for modifying the color object.The `Color` class is used in Chart.js to handle color-related operations, such as parsing color strings, converting between different color models, and interpolating between colors. It is also used by other libraries that use Chart.js, such as chartjs-plugin-colorschemes.Here are some key features of the `Color` class:* Parsing color strings: The `Color` class provides several static methods for parsing color strings, such as `rgb`, `rgba`, `hsl`, and `hsla`. These methods return a color object that contains the red, green, blue, and alpha components of the color.* Converting between color models: The `Color` class provides several static methods for converting between different color models, such as `rgbToHsl` and `hslToRgb`. These methods take a color object as input and return a new color object with the converted color components.* Interpolating between colors: The `Color` class provides several static methods for interpolating between colors, such as `interpolate` and `mix`. These methods take two color objects as input and return a new color object that represents the interpolated color.* Modifying color |
| ngx-webstorage.js |  This code is the implementation of a library for storing data in web browsers using various storage strategies. The library provides a set of services and providers that can be used to store and retrieve data in different storage strategies, such as local storage, session storage, and in-memory storage.The code defines several classes and functions, including:* `StorageStrategies`: an enum that defines the available storage strategies.* `CompatHelper`: a class that provides helper methods for checking if a storage strategy is available.* `DefaultPrefix`, `DefaultSeparator`, and `DefaultIsCaseSensitive`: constants that define the default prefix, separator, and case sensitivity for storage keys.* `StorageKeyManager`: a class that manages the normalization and denormalization of storage keys.* `SyncStorage` and `AsyncStorage`: classes that provide synchronous and asynchronous access to storage strategies, respectively.* `StrategyCacheService`: a service that caches the results of storage operations.* `LOCAL_STORAGE`, `SESSION_STORAGE`, and `STORAGE_STRATEGIES`: injection tokens for the local storage, session storage, and available storage strategies, respectively.* `LocalStorageProvider`, `SessionStorageProvider`, and `Strategies`: providers that provide instances of the `LocalStorageService`, `SessionStorageService`, and `StrategyIndex |
| rxjs.js |  The code is a collection of RxJS functions and classes, which are used to create and manipulate observables in the ReactiveX programming model. |
| rxjs_operators.js |  The code imports and exports various RxJS operators for use in building reactive applications. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code is an Express.js server that listens on port 3000 and handles POST requests to the send-booking-email endpoint. It uses Nodemailer to send an email with a booking invoice to the user's email address, based on the request body data. |

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
| app-routing.module.ts |  The code defines a routing module for an Angular application, which sets up routes for various components and guards. The primary function of the code is to define the structure of the application's URL space and how it should be navigated, with each route leading to a specific component or guard. |
| app.component.spec.ts |  The code defines a suite of unit tests for the AppComponent component, using Jest and Angular testing libraries. |
| app.component.ts |  The code defines an Angular component with a selector of app-root and a title of EvGlob |
| app.module.ts |  The code defines an Angular module called AppModule, which imports various dependencies such as BrowserModule, AppRoutingModule, FormsModule, and ReactiveFormsModule. It also declares several components, services, and providers, and sets up the application's routing and bootstrapping. |

</details>

---

<details><summary>\src\app\components\adminlogin</summary>

| File | Summary |
| ---- | ------- |
| adminlogin.component.spec.ts |  The code defines a unit test for the AdminloginComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| adminlogin.component.ts |  The code defines an Angular component for the admin login page, with a form to enter email and password, and a method to handle the login process. |

</details>

---

<details><summary>\src\app\components\evadminlogin</summary>

| File | Summary |
| ---- | ------- |
| evadminlogin.component.spec.ts |  The code defines a unit test for the EvadminloginComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| evadminlogin.component.ts |  The code defines an Angular component for the EVAdmin login page, with a form for entering email and password, and a method for logging in. It also includes a modal for resetting password using email. |

</details>

---

<details><summary>\src\app\components\evadminregister</summary>

| File | Summary |
| ---- | ------- |
| evadminregister.component.spec.ts |  The code defines a unit test for the EvadminregisterComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| evadminregister.component.ts |  The code defines an Angular component for the EVAdmin registration page, with a form to input email and password, and a method to call the `evadminregister` method of the `AuthService` class after validating the input. |

</details>

---

<details><summary>\src\app\components\evcard</summary>

| File | Summary |
| ---- | ------- |
| evcard.component.spec.ts |  The code defines a unit test for the EvcardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| evcard.component.ts |  The code defines an Angular component that displays a list of EV admin profiles, with pagination and filtering capabilities. |

</details>

---

<details><summary>\src\app\components\evdetailspage</summary>

| File | Summary |
| ---- | ------- |
| evdetailspage.component.spec.ts |  The code defines a unit test for the EvdetailspageComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| evdetailspage.component.ts |  The code is a TypeScript class that defines a component for displaying details of an Electric Vehicle (EV) station. It imports various dependencies, such as Angular components and services, and defines several properties and methods related to the EV station, including booking slots, payment modal, and generating invoices. The primary function of the code is to display information about an EV station and allow users to book a slot and make a payment. |

</details>

---

<details><summary>\src\app\components\evfeatures</summary>

| File | Summary |
| ---- | ------- |
| evfeatures.component.spec.ts |  The code defines a unit test for the EvfeaturesComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| evfeatures.component.ts |  The code defines an Angular component called EvfeaturesComponent, which is used to display a set of features for an electric vehicle. |

</details>

---

<details><summary>\src\app\components\evtestimonial</summary>

| File | Summary |
| ---- | ------- |
| evtestimonial.component.spec.ts |  The code defines a unit test for the EvtestimonialComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| evtestimonial.component.ts |  The code defines a component in Angular that displays a list of testimonials with pagination, allowing users to navigate through the testimonials by page. |

</details>

---

<details><summary>\src\app\components\footer</summary>

| File | Summary |
| ---- | ------- |
| footer.component.spec.ts |  The code defines a unit test for the FooterComponent component in an Angular application, using Jest and TestBed. |
| footer.component.ts |  The code defines a FooterComponent class in Angular, which is used to display the footer section of an application. |

</details>

---

<details><summary>\src\app\components\herosection</summary>

| File | Summary |
| ---- | ------- |
| herosection.component.spec.ts |  The code defines a unit test for the HerosectionComponent component in an Angular application, using Jest and TestBed. It sets up a testing module with the component declared, creates a fixture for the component, and runs a simple test to ensure that the component is created. |
| herosection.component.ts |  The code defines a component for the app-herosection selector, with a template and style URL, and exports it as a class. |

</details>

---

<details><summary>\src\app\components\home</summary>

| File | Summary |
| ---- | ------- |
| home.component.spec.ts |  The code defines a unit test for the HomeComponent component in an Angular application, using Jest and TestBed. |
| home.component.ts |  The code defines a component class for the app-home selector in an Angular application, with a template and style URL. |

</details>

---

<details><summary>\src\app\components\login</summary>

| File | Summary |
| ---- | ------- |
| login.component.spec.ts |  The code defines a unit test for the LoginComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| login.component.ts |  The code defines a login component in Angular, which allows users to enter their email and password to log in to the application. It also includes a forgot password feature that sends a reset link to the user's email address if the email is valid. |

</details>

---

<details><summary>\src\app\components\modal</summary>

| File | Summary |
| ---- | ------- |
| modal.component.spec.ts |  The code defines a unit test for the ModalComponent component, which is used to create and manipulate a modal window in an Angular application. |
| modal.component.ts |  The code defines a component for a payment modal, which allows users to enter their credit card information and pay an amount. The component has various properties and methods for handling the input of the credit card number, expiration date, and CVV, as well as a method for paying the amount and a property for displaying a loading indicator while the payment is being processed. |

</details>

---

<details><summary>\src\app\components\navbar</summary>

| File | Summary |
| ---- | ------- |
| navbar.component.spec.ts |  The code defines a unit test for the NavbarComponent component in an Angular application, using Jest and TestBed. It creates a fixture for the component, sets up the testing module with the component declaration, creates the component instance, and runs a simple test to ensure that it is truthy. |
| navbar.component.ts |  The code defines a NavbarComponent in Angular, which has a dark mode feature that can be toggled on and off. The component also updates the body class based on the dark mode state and observes the mobile device breakpoint to update a boolean value indicating whether the device is mobile or not. |

</details>

---

<details><summary>\src\app\components\not-found</summary>

| File | Summary |
| ---- | ------- |
| not-found.component.spec.ts |  The code defines a unit test for the NotFoundComponent component in an Angular application, using Jest and TestBed. |
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
| searchevform.component.spec.ts |  The code defines a unit test for the SearchevformComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| searchevform.component.ts |  The code defines a component in Angular that allows users to search for available slots for electric vehicle charging stations based on their location and preferred time. It retrieves data from an API, filters it based on the user's input, and displays the results in a modal window. |

</details>

---

<details><summary>\src\app\EvDataService</summary>

| File | Summary |
| ---- | ------- |
| adminservice.service.spec.ts |  The code defines a unit test for the AdminserviceService class, which is used to inject and configure the service for testing purposes. |
| adminservice.service.ts |  The code defines a service class for an Angular application that provides various methods for interacting with the Firebase Firestore and Storage services. The primary function of the service is to provide a set of methods for retrieving, updating, and deleting data in the Firestore database, as well as uploading and downloading files from the Storage service. |

</details>

---

<details><summary>\src\app\guards</summary>

| File | Summary |
| ---- | ------- |
| auth.guard.spec.ts |  The code defines a unit test for the AuthGuard component, which is used to protect routes in an Angular application. |
| auth.guard.ts |  The code defines an Angular service class called AuthGuard that implements the CanActivate interface and checks if the user is logged in as an EV admin before allowing them to access a route. |
| sauth.guard.spec.ts |  The code defines a unit test for the SauthGuard component, which is used to protect routes in an Angular application. |
| sauth.guard.ts |  The code defines a guard service that checks if the user is logged in as an admin and redirects to the login page if not, using the Angular Router. |
| userauth.guard.spec.ts |  The code defines a unit test for the UserAuthGuard component in an Angular application, using Jest and TestBed to configure and inject the guard for testing. |
| userauth.guard.ts |  The code defines a UserAuthGuard class that implements the CanActivate interface and checks if the user is logged in before allowing them to access a route. If the user is not logged in, they are redirected to the login page. |

</details>

---

<details><summary>\src\app\model</summary>

| File | Summary |
| ---- | ------- |
| admin-profile-model.ts |  The code defines an interface for an admin profile model, with properties for first and last name, ID, email, date of birth, address, registered as, created by, date of creation, mobile number, account type, role, and profile picture. |
| bookingmodel.ts |  The code defines an interface for a booking model with properties related to user, event, station, booking slot, and payment details. |
| ev-admin-profile.ts |  The code defines an interface for an event administrator profile, including fields for basic information, timings, location, and image, as well as nested objects for profile details and account status. |
| ratingmodel.ts |  The code defines an interface for a rating model with properties for document ID, station ID, user ID, rating, and feedback message. |
| user-profile.ts |  The code defines an interface for a user profile object with properties such as first name, last name, email, mobile number, date of birth, and more. |

</details>

---

<details><summary>\src\app\modules\admin</summary>

| File | Summary |
| ---- | ------- |
| admin-routing.module.ts |  The code defines a routing module for an admin dashboard, with routes for various components such as analytics, bookings, profile, ratings, and settings. |
| admin.module.ts |  The code defines an Angular module called AdminModule that imports various components and modules, including the CommonModule, AdminRoutingModule, FormsModule, HttpClientModule, and declares several components such as AdminDashboardComponent, SidebarComponent, SettingsComponent, ProfileComponent, AnalyticsComponent, BookingComponent, PaymentsComponent, and FeedbackComponent. |

</details>

---

<details><summary>\src\app\modules\admin\components\admin-dashboard</summary>

| File | Summary |
| ---- | ------- |
| admin-dashboard.component.spec.ts |  The code defines a unit test for the AdminDashboardComponent component, which is a part of an Angular application. The test creates a fixture for the component and checks that it is truthy. |
| admin-dashboard.component.ts |  The code defines a component for an admin dashboard, which displays information about the logged-in user and provides functionality for logging out and toggling a sidebar. |

</details>

---

<details><summary>\src\app\modules\admin\components\analytics</summary>

| File | Summary |
| ---- | ------- |
| analytics.component.spec.ts |  The code defines a unit test for the AnalyticsComponent component in an Angular application, using Jest and TestBed. It sets up the testing module, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| analytics.component.ts |  The code is a component in an Angular application that displays analytics for a booking system. It retrieves data from the backend using the AdminserviceService and AuthService, and then calculates various statistics such as today's bookings count, total bookings count, visited users count, and not visited users count. It also generates charts for the booking counts and total payable amounts by station, month, and year. |

</details>

---

<details><summary>\src\app\modules\admin\components\booking</summary>

| File | Summary |
| ---- | ------- |
| booking.component.spec.ts |  The code defines a unit test for the BookingComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to ensure that the component is created successfully. |
| booking.component.ts |  The code defines a BookingComponent in Angular, which retrieves bookings from an API and allows the user to filter and update their status. |

</details>

---

<details><summary>\src\app\modules\admin\components\feedback</summary>

| File | Summary |
| ---- | ------- |
| feedback.component.spec.ts |  The code defines a unit test for the FeedbackComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| feedback.component.ts |  The code defines a component called FeedbackComponent that displays ratings and allows the user to filter them based on a search term or select a rating from a range of 1 to 5. |

</details>

---

<details><summary>\src\app\modules\admin\components\payments</summary>

| File | Summary |
| ---- | ------- |
| payments.component.spec.ts |  The code defines a unit test for the PaymentsComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| payments.component.ts |  The code defines a component called PaymentsComponent in an Angular application, with a selector of app-payments template URL, and style URL. |

</details>

---

<details><summary>\src\app\modules\admin\components\profile</summary>

| File | Summary |
| ---- | ------- |
| profile.component.spec.ts |  The code defines a unit test for the ProfileComponent component, which is a part of an Angular application. |
| profile.component.ts |  The code defines a ProfileComponent in Angular, which fetches EvAdminProfile data from an API and displays it on the page. It also includes a getDayOfWeek() method to return an array of day names and a formatTime() method to format a time object into a string. |

</details>

---

<details><summary>\src\app\modules\admin\components\settings</summary>

| File | Summary |
| ---- | ------- |
| settings.component.spec.ts |  The code defines a unit test for the `SettingsComponent` component, which is used to verify its functionality and ensure it meets certain requirements. |
| settings.component.ts |  The code defines a component in Angular that allows an admin to update their profile information, including their name, date of birth, mobile number, and location. It also allows the admin to upload a profile picture and an EV image. Additionally, it provides a form to update the EV's details, such as its title, description, rate, and timings. |

</details>

---

<details><summary>\src\app\modules\admin\components\sidebar</summary>

| File | Summary |
| ---- | ------- |
| sidebar.component.spec.ts |  The code defines a unit test for the SidebarComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| sidebar.component.ts |  The code defines a SidebarComponent in Angular, which manages the visibility of the sidebar based on the device's screen size and the user's preference for dark mode. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\bookingev</summary>

| File | Summary |
| ---- | ------- |
| bookingev.component.spec.ts |  The code defines a unit test for the BookingevComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| bookingev.component.ts |  The code defines a component in an Angular application that displays booking information for a specific station. It retrieves the booking data from an API, filters it by date and user ID, and calculates the expected end time for each booking based on its start time and duration. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\details</summary>

| File | Summary |
| ---- | ------- |
| details.component.spec.ts |  The code defines a unit test for the `DetailsComponent` component, which is a component in an Angular application. The test creates an instance of the component and verifies that it is truthy. |
| details.component.ts |  The code defines a component for displaying details of an admin profile, using the Angular framework. It imports various dependencies, sets up a route and a service to retrieve data, and defines a function to format time values. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sanalytics</summary>

| File | Summary |
| ---- | ------- |
| sanalytics.component.spec.ts |  The code defines a unit test for the SanalyticsComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sanalytics.component.ts |  The code is a TypeScript class that represents the sanalytics component in an Angular application. It fetches data from various services and populates charts with the data, including a bar chart showing the total payable amount for each station per month and year, and a line chart showing the number of bookings for each station per month and year. The class also includes functions for generating random colors and formatting month and year labels. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sdashboard</summary>

| File | Summary |
| ---- | ------- |
| sdashboard.component.spec.ts |  The code defines a unit test for the SdashboardComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sdashboard.component.ts |  The code defines a component for an admin dashboard, with a dark mode toggle and a sidebar that can be opened and closed on mobile devices. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sevstations</summary>

| File | Summary |
| ---- | ------- |
| sevstations.component.spec.ts |  The code defines a unit test for the SevstationsComponent component in an Angular application, using Jest and TestBed. It creates a fixture for the component, sets up the testing module with the component declaration, and then runs a simple test to verify that the component is created. |
| sevstations.component.ts |  The code defines a component in Angular, specifically the SevstationsComponent, which is used to display data related to SEV stations. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sprofile</summary>

| File | Summary |
| ---- | ------- |
| sprofile.component.spec.ts |  The code defines a unit test for the SprofileComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sprofile.component.ts |  The code defines an Angular component that retrieves the admin profile data for a logged-in user with the superadmin or admin account type, and sets it as a property of the component. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\ssettings</summary>

| File | Summary |
| ---- | ------- |
| ssettings.component.spec.ts |  The code defines a unit test for the SsettingsComponent component in an Angular application, using Jest and TestBed. |
| ssettings.component.ts |  The code defines an Angular component for managing the settings of a superadmin or admin account, including updating their profile details, uploading a profile picture, and saving changes. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin</summary>

| File | Summary |
| ---- | ------- |
| superadmin-routing.module.ts |  The code defines a routing module for the superadmin feature of an Angular application, which includes routes for various components such as the dashboard, analytics, profile, settings, and booking. |
| superadmin.module.ts |  The code defines an Angular module called SuperadminModule, which imports various dependencies and exports components related to the superadmin dashboard. |

</details>

---

<details><summary>\src\app\shared</summary>

| File | Summary |
| ---- | ------- |
| auth.service.spec.ts |  The code defines a unit test for the AuthService class, which is used to verify its functionality and ensure it meets certain requirements. |
| auth.service.ts |  The code defines an AuthService class that provides authentication and authorization functionality for the application. It has several methods, including login, register, logout, and forgot password. The service uses AngularFireAuth to handle authentication and Firestore to store user profiles. The service also uses session storage to store user information and handles routing to different pages based on the user's account type. |

</details>

---

<details><summary>\src\app\user-module</summary>

| File | Summary |
| ---- | ------- |
| user-module-routing.module.ts |  The code defines a routing module for the UserModule, which contains routes for various user-related components and redirects to the analytics component by default. |
| user-module.module.ts |  The code defines a UserModuleModule, which imports and exports various components and modules related to the user module of an Angular application. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\useranalytics</summary>

| File | Summary |
| ---- | ------- |
| useranalytics.component.spec.ts |  The code defines a unit test for the UseranalyticsComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| useranalytics.component.ts |  The code defines a component in Angular that displays analytics for a user, including the number of bookings made by the user, the number of bookings made today, and the number of users visited and not visited. The component also displays a chart showing the total payable amount for each station and month, as well as a chart showing the number of bookings made per month for each station. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userbooking</summary>

| File | Summary |
| ---- | ------- |
| userbooking.component.spec.ts |  The code defines a unit test for the UserbookingComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| userbooking.component.ts |  The code defines a component in an Angular application that displays bookings made by a user and allows the user to rate the station they visited. |

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
| userfeedback.component.spec.ts |  The code defines a unit test for the UserfeedbackComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| userfeedback.component.ts |  The code defines a component in Angular that displays user feedback for a specific station, allowing users to rate the station and provide feedback. The component fetches ratings data from a service and filters it based on search terms and rating options. It also allows users to toggle a modal window to view and rate a specific booking, and saves the rating data to the database when the user submits their feedback. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\userprofile</summary>

| File | Summary |
| ---- | ------- |
| userprofile.component.spec.ts |  The code defines a unit test for the UserprofileComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| userprofile.component.ts |  The code defines a UserprofileComponent in Angular, which fetches the user profile data from the AuthService and stores it in the userProfile property. |

</details>

---

<details><summary>\src\app\user-module\usercomponents\usersetting</summary>

| File | Summary |
| ---- | ------- |
| usersetting.component.spec.ts |  The code defines a unit test for the UsersettingComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| usersetting.component.ts |  The code defines a component in Angular that allows users to update their profile information, including their name, date of birth, mobile number, address, and location. It also allows users to upload a profile picture. |

</details>

---

<details><summary>\src\app\UserDataService</summary>

| File | Summary |
| ---- | ------- |
| userservices.service.spec.ts |  The code defines a unit test for the UserservicesService class, which is used to inject and configure the service for testing purposes. |
| userservices.service.ts |  The code defines a service class for managing user data and booking data in an EV charging station application. It provides methods for retrieving EV admin profiles, saving booking data, checking slot availability, updating user details, uploading profile images, deleting profile pictures, updating profile images on Firestore, getting user bookings by userId, saving or updating ratings to Firestore, getting rating data by userId and stationId, getting ratings by userId, and getting EV admin profiles by location. |

</details>

---

<details><summary>\src\environments</summary>

| File | Summary |
| ---- | ------- |
| environment.development.ts |  The code defines an environment object with production set to true, firebase configuration, and publish and client secret keys. |
| environment.ts |  The code defines an empty object named environment for storing environment-related data. |

</details>

---

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| main.ts |  The code bootstraps the Angular application by calling `platformBrowserDynamic().bootstrapModule(AppModule)` and catches any errors that may occur during the bootstrap process. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that sets up various theme values, including colors, fonts, spacing, and shadows. |

</details>

---

## 🚀 Getting Started

 To get started with this project, follow these steps:<br>
1. Install the necessary dependencies by running `npm install` in your terminal.
2. Run `ng serve` to start the development server and navigate to `http://localhost:4200/` in your browser to view the application.
3. To build the application for production, run `ng build --configuration=production`.
4. To run unit tests, run `ng test`.
5. To run end-to-end tests, run `ng e2e`.
6. To deploy the application to Firebase, run `firebase deploy`.
7. To deploy the application to a hosting platform such as Heroku or AWS, run `npm run deploy`.

Note: This guide assumes that you have Node.js and npm installed on your system. If you don't have them installed, you can download them from the official websites.

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
