
  <div align="center">
  <h1 align="center">Ev</h1>
  <h3>Codebase for the Ev platform</h3>
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

 Angular, Node.js, Express, Tailwind CSS, Authentication, Components, Services, Modules, Custom Authentication System

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
│   │   │   └── sauth.guard.ts
│   │   ├── model
│   │   │   ├── admin-profile-model.ts
│   │   │   ├── bookingmodel.ts
│   │   │   ├── ev-admin-profile.ts
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
| @angular_cdk_layout.js |  The code defines several classes and functions related to layout and media queries in the Angular CDK (Component Development Kit).The main function of the code is to provide a way to detect changes in the layout of a web page, such as the size of the viewport or the orientation of the device. This is useful for building responsive applications that adapt to different screen sizes and orientations.The code defines several classes:* `MediaMatcher`: a class that provides a way to match media queries against the current viewport size and orientation.* `BreakpointObserver`: a class that provides a way to observe changes in the layout of a web page, such as the size of the viewport or the orientation of the device.* `_Platform`: a class that provides information about the platform on which the application is running.* `_LayoutModule`: a module that exports the `MediaMatcher` and `BreakpointObserver` classes.The code also defines several functions:* `coerceArray`: a function that converts a value to an array if it is not already an array.* `createEmptyStyleRule`: a function that creates an empty style rule in the document head if the browser is WebKit or Blink.* `noopMatchMedia`: a function that returns a no-op implementation of the `matchMedia` function if the browser does not support it.* ` |
| @angular_common.js |  The code is a module that exports various Angular components and services related to internationalization (i18n) and localization (l10n). |
| @angular_common_http.js |  The code imports and exports various HTTP-related classes and functions from the `@angular/common/http` module, which provides a client for making HTTP requests in Angular applications. |
| @angular_core.js |  The code imports various symbols from the `@angular/core` module and exports them. It also defines some new symbols, such as `ɵɵdefineComponent`, `ɵɵdefineDirective`, and `ɵɵdefineInjectable`.The primary function of this code is to provide a set of utilities for building Angular applications, including components, directives, and services. |
| @angular_fire_compat.js |  The code imports and exports various AngularFire-related modules and functions, primarily for use in the `@angular_fire_compat.js` file. |
| @angular_fire_compat_auth.js |  The code imports various modules and exports several AngularFireAuth-related constants and functions. |
| @angular_fire_compat_firestore.js |  The code defines a class called `bc` that represents an XMLHttpRequest object. It has several methods and properties, including:* `setTimeout`: sets the timeout for the request* `i`: sets the URL of the request* `g`: sets the HTTP method (GET or POST)* `h`: sets the headers of the request* `j`: sets the callback function for the request* `m`: sets the data to be sent with the request* `W`: sets the timeout for the request* `U`: sets the event listeners for the request* `P`: sets the interval for the watchdog timer* `nb`: handles the readystatechange event* `Pa`: handles the response from the server* `cancel`: cancels the request* `lb`: handles the timeout event* `pc`: handles the error event* `I`: handles the abort event* `J`: handles the progress event* `M`: handles the incremental data event* `ba`: handles the download progress event* `aa`: handles the upload progress event* `S`: handles the ready state change event* `L`: handles the ready state change event* `K`: handles the ready state change event* `G`: handles the ready state change event* `F`: handles the ready state change event* `Eb`: handles the |
| @angular_fire_compat_storage.js |  The code defines a function named `handlerCheck` that takes a single argument, `cndn`. If `cndn` is falsy, the function throws an error.The function is used to ensure that the response from the server is valid and contains the expected data. It is called at various points in the code, such as when parsing the response from the server or when checking the status of the request.The function is defined as follows:```typescriptfunction handlerCheck(cndn) {  if (!cndn) {    throw unknown();  }}```The function uses the `throw` statement to throw an error if `cndn` is falsy. The error thrown is an instance of the `StorageError` class, which is defined elsewhere in the code. The `unknown()` function is used to create an instance of the `StorageError` class with a specific error message.Overall, the purpose of the `handlerCheck` function is to ensure that the response from the server is valid and contains the expected data. It is used throughout the code to check the status of the request and to handle errors that may occur during the request. |
| @angular_forms.js |  Summarize the code in a single, brief phrase, focusing exclusively on its primary function. Aim for extreme conciseness, providing just enough to understand its main purpose, ensuring the explanation is strictly a single sentence and no longer than 100 words.The code defines a directive that provides a synchronous validator function composed of all the synchronous validators registered with this directive. |
| @angular_google-maps.js |  This code defines a component that renders an embedded Google Map and provides various inputs and outputs for interacting with the map. The component is designed to be used in conjunction with other components that provide additional functionality, such as markers or polylines.The component's primary function is to initialize the Google Maps JavaScript API and create a new map instance. It does this by using the `google.maps.Map` constructor, which takes a reference to the HTML element that will contain the map and an options object that specifies various properties of the map, such as its center and zoom level.The component also provides several inputs that can be used to customize the map, such as `center`, `zoom`, and `options`. These inputs are bound to the component's properties, which are updated whenever they change. Whenever the component's properties are updated, the map is also updated accordingly.In addition to the inputs, the component also provides several outputs that can be used to listen for events on the map, such as `boundsChanged`, `centerChanged`, and `click`. These outputs are emitted when the corresponding events occur on the map.Overall, this component provides a convenient way to embed a Google Map in an Angular application and interact with it using familiar Angular syntax. |
| @angular_platform-browser.js |  The code is a module that exports various Angular platform-browser related classes and functions, including the `BrowserModule`, `DomSanitizer`, and `EventManager` classes, as well as several other utility functions. |
| @angular_router.js |  The code you provided summarizes the primary function of the `Router` class in Angular. The `Router` class is responsible for managing client-side navigation and routing within an application. It does this by providing a set of APIs that allow developers to navigate between different views and manage the state of the application.The `Router` class is a key part of the Angular framework, and it plays a crucial role in enabling the development of complex, scalable, and maintainable applications. By understanding how the `Router` class works, developers can use it to create powerful and flexible routing systems that meet the needs of their applications. |
| chunk-55HBGNYY.js |  a new element without checking whether one already exists.   * @returns The existing elements with the same attributes and values if found,   * the new elements if no match is found, or `null` if the tag parameter is not defined.   */  addTags(tags, forceCreation = false) {    const doc = this._doc;    const head = doc.head || doc.querySelector(head || doc.documentElement;    const metaElements = [];    tags.forEach((tag) => {      const meta = this._getOrCreateElement(tag, forceCreation);      if (meta) {        metaElements.push(meta);      }    });    return metaElements;  }  /**   * Retrieves an existing `<meta>` tag element in the current HTML document.   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute   * values in the provided tag definition, and verifies that all other attribute values are equal.   * @param tag The definition of a `<meta>` element to match.   * @returns The existing element with the same attributes and values if found,   * or `null` if the tag parameter is not defined or no matching element is found.   */  getTag(tag) {    if (!tag |
| chunk-7TA7XNMB.js |  The code you provided is a summary of the main function of the Firebase SDK, which is to provide a way for developers to interact with Firebase services.The function takes in two parameters:* `name`: This is the name of the service being initialized.* `options`: This is an object that contains configuration options for the service.The function first checks if the service has already been initialized. If it has, it returns the existing instance. Otherwise, it creates a new instance and stores it in the `instances` array.The function then sets the log level for the instance based on the value of the `logLevel` property in the `options` object. If the `logLevel` property is not specified, it defaults to `LogLevel.INFO`.The function then calls the `initializeApp` method on the service instance, passing in the `options` object. This method is responsible for setting up the service and preparing it for use.Finally, the function returns the newly created instance.Overall, this function provides a way for developers to initialize Firebase services and set their configuration options. |
| chunk-7WFCSKEP.js |  This code defines a custom scheduler that schedules actions to be executed asynchronously. It uses the `setInterval` function to schedule actions for execution at a later time, and it maintains a list of scheduled actions to be executed.The `AsyncScheduler` class extends the `Scheduler` class and overrides its `flush` method to execute the scheduled actions. The `flush` method takes an optional `action` argument, which is used to schedule a specific action to be executed. If no `action` is provided, all scheduled actions are executed.The `AsyncScheduler` also defines a `schedule` method that schedules an action to be executed at a later time. This method creates a new `AsyncAction` instance and adds it to the list of scheduled actions. The `AsyncAction` instance is responsible for executing the action at the appropriate time.The `AsyncScheduler` also defines a `now` method that returns the current timestamp. This method is used by the `AsyncAction` instances to determine when to execute the action.Overall, this code defines a custom scheduler that can be used to schedule actions to be executed asynchronously in a future turn of the event loop. |
| chunk-AR2SKMNP.js |  The code defines a set of utility functions for working with objects and arrays in JavaScript, including methods for spreading properties and values, creating new objects from existing ones, and iterating over collections. |
| chunk-CYMIXUQE.js |  The code defines a class called `HttpClient` that is used to make HTTP requests. It has several methods, including `get()`, `post()`, `put()`, `delete()`, and `patch()`. Each of these methods takes a URL and an options object as parameters and returns an observable that emits the response from the server.The `request()` method is the underlying method that makes the actual HTTP request. It takes a `HttpRequest` object as a parameter and returns an observable of `HttpEvent` objects. The `HttpEvent` objects can be either `HttpSentEvent`, `HttpHeaderResponse`, `HttpResponse`, or `HttpProgressEvent`.The `createRequestInit()` method creates the options object for the `fetch()` function. It sets the `method`, `headers`, `body`, and other properties based on the `HttpRequest` object.The `doRequest()` method is responsible for making the actual HTTP request. It uses the `fetch()` function to send the request and returns an observable of `HttpEvent` objects.The `handle()` method is the entry point for the `HttpClient` class. It takes a `HttpRequest` object and returns an observable of `HttpEvent` objects. It calls the `doRequest()` method to make the actual HTTP request and returns the result. |
| chunk-MJV6UDH2.js |  The code defines two functions, `partition` and `race`, which are both used to manipulate observables in the RxJS library. The `partition` function takes a predicate function and returns an array of two observables, where one observable contains elements that pass the predicate and the other contains elements that do not. The `race` function takes any number of observables as arguments and returns an observable that emits the first value from any of the input observables to emit. |
| chunk-MUL57NPQ.js |  This code is the main entry point for the Firebase JavaScript SDK. It imports various modules and defines a few functions, including `registerVersion`, which registers the version of the SDK with Firebase, and `getApps`, which returns an array of all Firebase apps that have been created.The code also imports the `Observable` class from RxJS, which is used to create observables that can be used to handle asynchronous events in the SDK.Overall, this code is responsible for setting up the Firebase SDK and providing a way to interact with it. |
| chunk-OI5GLHID.js |  This code is a collection of various utility functions for working with Observables in RxJS. It includes functions for creating and manipulating Observables, as well as functions for working with event emitters and other common use cases.Here are some of the key functions in this code:* `animationFrames`: Creates an Observable that emits animation frames.* `asapScheduler`: Creates a scheduler that schedules work to be executed on the next microtask.* `queueScheduler`: Creates a scheduler that schedules work to be executed on the next macrotask.* `animationFrameScheduler`: Creates a scheduler that schedules work to be executed on the next animation frame.* `VirtualTimeScheduler`: Creates a scheduler that uses virtual time to schedule work.* `VirtualAction`: Creates an action that can be scheduled on a VirtualTimeScheduler.* `isObservable`: Checks if a value is an Observable.* `lastValueFrom`: Returns the last value from an Observable.* `firstValueFrom`: Returns the first value from an Observable.* `bindCallback`: Creates an Observable from a callback function.* `bindNodeCallback`: Creates an Observable from a Node.js-style callback function.* `defer`: Creates an Observable from a factory function.* `connectable`: Creates |
| chunk-OLXSZ3RF.js |  This code is part of the Angular framework, specifically in the `core` module. It defines several functions and classes that are used for dependency injection, change detection, and other core features of Angular.The main function defined in this code snippet is `inject`, which is a decorator function that can be used to inject dependencies into a class constructor. The function takes a token (which can be a type or an instance) and returns a new function that wraps the original constructor and injects the dependencies before calling it.The `inject` function also has some other features, such as support for optional dependencies and the ability to specify a custom factory function for creating instances.Overall, this code is an important part of the Angular framework, as it provides a way to manage dependencies and simplify the process of creating objects with dependencies. |
| chunk-PNBMWJC3.js |  This code is a module for the Firebase App Check service, which provides a way to protect your backend resources from abuse and ensure that only your app can access them. It exports several functions and classes related to App Check, including `initializeAppCheck`, `getToken`, `getLimitedUseToken`, `onTokenChanged`, and `setTokenAutoRefreshEnabled`.The primary function of this code is to provide a way to initialize and use the Firebase App Check service in an Angular application. It does this by providing a factory function for the `AppCheck` class, which is used to interact with the App Check service. The factory function takes an instance of the `FirebaseApp` class as an argument and returns an instance of the `AppCheck` class.The `AppCheck` class has several methods for interacting with the App Check service, including `getToken`, `getLimitedUseToken`, `onTokenChanged`, and `setTokenAutoRefreshEnabled`. These methods are used to get a token for the current user, get a limited-use token for a specific resource, listen for changes to the user's token, and enable or disable automatic token refreshes.Overall, this code is a module for the Firebase App Check service, which provides a way to protect your backend resources from abuse and ensure that only your app can access them. It exports several functions and classes related to App Check, including ` |
| chunk-UGXVUWTG.js |  This code is a JavaScript module that exports several functions and variables related to Firebase Authentication. The main function, `_performApiRequest`, performs an API request to the Firebase backend with the given parameters. It returns a promise that resolves to the server response if successful, or rejects with an error if the request fails or the server returns an error.The module also exports several other functions and variables that are used by the `_performApiRequest` function, such as `FetchProvider`, which provides a way to fetch data from the network, and `DEFAULT_API_TIMEOUT_MS`, which specifies the default timeout for API requests.The module also includes some constants and error messages that are used throughout the code. For example, `SERVER_ERROR_MAP` maps error codes returned by the server to corresponding error messages, and `PROVIDER_ID` defines the different authentication providers supported by Firebase. |
| chunk-XWDDYQYX.js |  */new Date(year, month, date);  return newDate;}function toDate(value) {  if (value instanceof Date) {    return value;  }  if (typeof value === umber {    return new Date(value);  }  if (typeof value === string {    const parts = value.split(-    if (parts.length > 1) {      return createDate(+parts[0], +parts[1] - 1, +parts[2]);    }  }  return new Date(NaN);}function getNamedFormat(locale, format) {  const data = findLocaleData(locale);  const formats = data[LocaleDataIndex.Formats];  if (!formats) {    return null;  }  const namedFormats = formats[    0    /* ɵLocaleDataIndex.DateFormat */  ];  if (namedFormats) {    return namedFormats[format];  }  return null;}function getDateFormatter(format) {  switch (format) {    case y      return formatYear;    case M      return formatMonth;    case d      return formatDay |
| chunk-YYUKKWTU.js |  The code defines an AngularFireAuth module that provides an AngularFireAuth service, which is a wrapper around the Firebase Authentication API. The service exposes several observables for authentication state, user, and ID token, as well as methods for signing in and out. The module also includes a proxy polyfill for compatibility with older versions of the Firebase SDK. |
| index.esm-72OGEC4M.js |  The code imports three modules and defines a source mapping URL for the file. |
| ng2-charts.js |  The code defines a class called `Color` that represents a color in RGB or HSL format. It has several methods for manipulating the color, such as `mix`, `interpolate`, and `rotate`. It also has a number of static methods for parsing and converting between different color formats, such as `rgbParse`, `hueParse`, and `nameParse`.The class is designed to be used with the `chart.js` library, which provides a number of utility functions for working with colors. However, it can also be used independently.The main function of the class is the `constructor`, which takes an input value and parses it into an internal representation of the color. This representation is stored in the `_rgb` property. The `valid` property is set to `true` if the input value was successfully parsed, and `false` otherwise.The class also has a number of getters and setters for accessing and modifying the color's properties. For example, the `rgbString` getter returns a string representation of the color in RGB format, while the `hexString` getter returns a string representation of the color in hexadecimal format. The `alpha` setter sets the alpha channel of the color, and the `clone` method creates a copy of the color object.In addition to these methods, the class also has a number of utility methods for manipulating |
| ngx-webstorage.js |  This code is the implementation of a library for storing data in web browsers using different storage strategies. It provides a set of services and decorators for storing and retrieving data, as well as a configuration mechanism for customizing the behavior of the library.The main function of this code is to provide a way to store and retrieve data in web browsers using different storage strategies, such as local storage, session storage, or in-memory storage. The library also provides a way to configure the behavior of the storage strategies, such as setting a prefix for the keys used in storage.The code defines several classes and functions, including:* `StorageStrategies`: an enum that defines the different storage strategies available in the library.* `CompatHelper`: a class that provides helper methods for checking whether a storage strategy is available in the current environment.* `DefaultPrefix`, `DefaultSeparator`, and `DefaultIsCaseSensitive`: constants that define the default values for the prefix, separator, and case sensitivity options for the storage key manager.* `StorageKeyManager`: a class that manages the storage keys used by the library, providing methods for normalizing and denormalizing keys, as well as configuring the prefix, separator, and case sensitivity options.* `SyncStorage` and `AsyncStorage`: abstract base classes that define the interface for synchronous and asynchronous storage strategies, respectively. |
| rxjs.js |  The code is a collection of RxJS operators and functions, which are used to manipulate and transform observables in reactive programming. |
| rxjs_operators.js |  The code imports and exports various RxJS operators for use in building reactive applications. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code is a Node.js server that listens on port 3000 and handles incoming POST requests to the send-booking-email endpoint. It uses Express, Body-Parser, Nodemailer, and CORS middleware to parse JSON bodies, send emails, and handle cross-origin resource sharing (CORS) requests. The server generates a random invoice number, masks card numbers, and sends an email with booking details and payment information to the user's email address. |

</details>

---

<details><summary>\src\app\AdminDataService</summary>

| File | Summary |
| ---- | ------- |
| adminservices.service.spec.ts |  The code defines a unit test for the AdminservicesService class, which is used to manage administrative tasks in an Angular application. |
| adminservices.service.ts |  The code defines a service class for an Angular application that provides methods for updating admin details, uploading and deleting profile images, and updating the profile image on Firestore. |

</details>

---

<details><summary>\src\app</summary>

| File | Summary |
| ---- | ------- |
| app-routing.module.ts |  The code defines a routing module for an Angular application, which sets up routes for various components and guards. |
| app.component.spec.ts |  The code defines a suite of unit tests for the AppComponent component, using the Jest testing framework and the Angular TestBed utility. The tests verify that the component is created, has the correct title, and renders its title in the DOM. |
| app.component.ts |  The code defines an Angular component with a selector of app-root and a title of EvGlob |
| app.module.ts |  The code defines an Angular module called AppModule, which imports various dependencies such as BrowserModule, AppRoutingModule, FormsModule, and ReactiveFormsModule. It also declares several components, including AppComponent, LoginComponent, RegisterComponent, NotFoundComponent, HomeComponent, NavbarComponent, HerosectionComponent, SearchevformComponent, EvcardComponent, EvfeaturesComponent, EvtestimonialComponent, FooterComponent, EvadminloginComponent, EvadminregisterComponent, AdminloginComponent, EvdetailspageComponent, and ModalComponent. |

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
| evadminlogin.component.ts |  The code defines an Angular component for the EVAdminLogin page, which includes a login form with email and password fields, a forgot password feature, and a method to validate email format. |

</details>

---

<details><summary>\src\app\components\evadminregister</summary>

| File | Summary |
| ---- | ------- |
| evadminregister.component.spec.ts |  The code defines a unit test for the EvadminregisterComponent component, which is used to register new users in an event management system. |
| evadminregister.component.ts |  The code defines an Angular component for the EV admin registration form, with a constructor that injects an AuthService and a method called evregister() that validates the email and password fields and calls the evadminregister() method of the AuthService if the validation passes. |

</details>

---

<details><summary>\src\app\components\evcard</summary>

| File | Summary |
| ---- | ------- |
| evcard.component.spec.ts |  The code defines a unit test for the EvcardComponent component, which is a component in an Angular application. The test creates a fixture for the component and checks that it is truthy. |
| evcard.component.ts |  The code defines an Angular component that displays a list of EV admin profiles, with pagination and filtering capabilities. |

</details>

---

<details><summary>\src\app\components\evdetailspage</summary>

| File | Summary |
| ---- | ------- |
| evdetailspage.component.spec.ts |  The code defines a unit test for the EvdetailspageComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| evdetailspage.component.ts |  The code is a TypeScript class that defines a component for displaying details of an Electric Vehicle (EV) station. It imports various dependencies, such as the Angular core, Google Maps, and HTTP client, and defines several properties and methods related to the EV station, including its location, availability, and booking logic. The component also includes a payment modal for making payments and a helper function to format dates. |

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
| evtestimonial.component.spec.ts |  The code defines a unit test for the EvtestimonialComponent component in an Angular application, using Jest and TestBed. |
| evtestimonial.component.ts |  The code defines a component in Angular that displays a list of testimonials with pagination, allowing users to navigate through the testimonials by page. |

</details>

---

<details><summary>\src\app\components\footer</summary>

| File | Summary |
| ---- | ------- |
| footer.component.spec.ts |  The code defines a unit test for the FooterComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| footer.component.ts |  The code defines a FooterComponent class in Angular, which is used to display a footer element on the page. |

</details>

---

<details><summary>\src\app\components\herosection</summary>

| File | Summary |
| ---- | ------- |
| herosection.component.spec.ts |  The code defines a unit test for the HerosectionComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| herosection.component.ts |  The code defines a component for the hero section of an Angular application, with a selector, template, and stylesheet. |

</details>

---

<details><summary>\src\app\components\home</summary>

| File | Summary |
| ---- | ------- |
| home.component.spec.ts |  The code defines a unit test for the HomeComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to ensure that the component is created successfully. |
| home.component.ts |  The code defines a component class for the app-home selector in an Angular application, with a template and style URLs. |

</details>

---

<details><summary>\src\app\components\login</summary>

| File | Summary |
| ---- | ------- |
| login.component.spec.ts |  The code defines a unit test for the LoginComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| login.component.ts |  The code defines a login component for an Angular application, with a userLogin() method that validates the user's email and password and calls the userLogin() method of the AuthService if the validation is successful. It also includes a forgotPasswordUsingEmail() method that sends a password reset email to the user's email address if it is valid, and an openForgotPasswordModal() method that opens a modal dialog for the user to enter their email address to request a password reset. |

</details>

---

<details><summary>\src\app\components\modal</summary>

| File | Summary |
| ---- | ------- |
| modal.component.spec.ts |  The code defines a unit test for the ModalComponent component in an Angular application, using Jest and TestBed. |
| modal.component.ts |  The code defines a component for a payment modal, which allows users to enter their credit card information and pay an amount. It includes various input fields for the card number, expiration date, and CVV, as well as a dropdown menu for selecting the country of origin. The component also includes a function to validate the entered card information and display a loading spinner while the payment is being processed. |

</details>

---

<details><summary>\src\app\components\navbar</summary>

| File | Summary |
| ---- | ------- |
| navbar.component.spec.ts |  The code defines a unit test for the NavbarComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
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
| register.component.spec.ts |  The code defines a unit test for the RegisterComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| register.component.ts |  The code defines a RegisterComponent in Angular, which has an email and password input field and a userRegister() method that calls the AuthService's userregister() method to register a new user. |

</details>

---

<details><summary>\src\app\components\searchevform</summary>

| File | Summary |
| ---- | ------- |
| searchevform.component.spec.ts |  The code defines a unit test for the SearchevformComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| searchevform.component.ts |  The code defines an Angular component with a selector of app-searchevform and exports its class, which contains a method called onSearch() |

</details>

---

<details><summary>\src\app\EvDataService</summary>

| File | Summary |
| ---- | ------- |
| adminservice.service.spec.ts |  The code defines a unit test for the AdminserviceService class, which is used to inject and configure the service for testing purposes. |
| adminservice.service.ts |  The code defines a service class for an Angular application that provides methods for managing user profiles, including updating profile fields, uploading and deleting profile pictures, and retrieving profile data. |

</details>

---

<details><summary>\src\app\guards</summary>

| File | Summary |
| ---- | ------- |
| auth.guard.spec.ts |  The code defines a unit test for the AuthGuard component, which is used to protect routes in an Angular application. |
| auth.guard.ts |  The code defines an AuthGuard class that implements the CanActivate interface and checks if the user is logged in as an EV admin before allowing them to access a route. |
| sauth.guard.spec.ts |  The code defines a unit test for the SauthGuard component, which is used to protect routes in an Angular application. |
| sauth.guard.ts |  The code defines a guard service that checks if the user is logged in as an admin and redirects to the login page if not, using the Angular Router. |

</details>

---

<details><summary>\src\app\model</summary>

| File | Summary |
| ---- | ------- |
| admin-profile-model.ts |  The code defines an interface for an admin profile model, with properties for first and last name, email, date of birth, address, registered as, created by, date of creation, mobile number, account type, role, and profile picture. |
| bookingmodel.ts |  The code defines an interface for a booking model, with properties for user ID, event ID, station ID, booking slot, and other relevant details. |
| ev-admin-profile.ts |  The code defines an interface for an event administrator profile, including fields for basic information, timings, location, and image, as well as nested objects for profile and account status. |
| user-profile.ts |  The code defines an interface for a user profile object with properties such as firstname, lastname, email, mobile, and more. |

</details>

---

<details><summary>\src\app\modules\admin</summary>

| File | Summary |
| ---- | ------- |
| admin-routing.module.ts |  The code defines a routing module for an Angular application, with routes for the admin dashboard and its child components. |
| admin.module.ts |  The code defines an Angular module called AdminModule that imports various components and modules, including the CommonModule, AdminRoutingModule, FormsModule, and HttpClientModule. It also declares several components and exports them for use in other parts of the application. |

</details>

---

<details><summary>\src\app\modules\admin\components\admin-dashboard</summary>

| File | Summary |
| ---- | ------- |
| admin-dashboard.component.spec.ts |  The code defines a unit test for the AdminDashboardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| admin-dashboard.component.ts |  The code defines a component for an admin dashboard, which fetches data from the server and displays it to the user. It also includes functionality for toggling a sidebar and changing the theme (dark mode) based on user preferences. |

</details>

---

<details><summary>\src\app\modules\admin\components\analytics</summary>

| File | Summary |
| ---- | ------- |
| analytics.component.spec.ts |  The code defines a unit test for the AnalyticsComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| analytics.component.ts |  The code defines an Angular component called AnalyticsComponent with a selector, template, and style. |

</details>

---

<details><summary>\src\app\modules\admin\components\booking</summary>

| File | Summary |
| ---- | ------- |
| booking.component.spec.ts |  The code defines a unit test for the BookingComponent component, which creates an instance of the component and verifies that it is truthy. |
| booking.component.ts |  The code defines a BookingComponent class in Angular, which is used to manage the booking process and display relevant information. |

</details>

---

<details><summary>\src\app\modules\admin\components\payments</summary>

| File | Summary |
| ---- | ------- |
| payments.component.spec.ts |  The code defines a unit test for the PaymentsComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| payments.component.ts |  The code defines a PaymentsComponent class in Angular, which is used to display payment information. |

</details>

---

<details><summary>\src\app\modules\admin\components\profile</summary>

| File | Summary |
| ---- | ------- |
| profile.component.spec.ts |  The code is a unit test for the ProfileComponent component in an Angular application, which creates a fixture and instance of the component, and checks if it is truthy. |
| profile.component.ts |  The code defines a ProfileComponent in Angular, which fetches EvAdminProfile data from an API and displays it on the page. |

</details>

---

<details><summary>\src\app\modules\admin\components\settings</summary>

| File | Summary |
| ---- | ------- |
| settings.component.spec.ts |  The code defines a unit test for the `SettingsComponent` component, which is used to verify its functionality and ensure it meets certain requirements. |
| settings.component.ts |  The code defines a component in Angular that allows an admin to update their profile information, including their name, date of birth, mobile number, and location. It also allows the admin to upload an image for their profile and EV image, and update their EV details such as timing, rate, description, title, coordinates, and location. |

</details>

---

<details><summary>\src\app\modules\admin\components\sidebar</summary>

| File | Summary |
| ---- | ------- |
| sidebar.component.spec.ts |  The code defines a unit test for the SidebarComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| sidebar.component.ts |  The code defines a SidebarComponent in Angular, which has a dark mode feature and a mobile device detection feature. It also includes methods for toggling the sidebar and updating the body class when the dark mode changes. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\bookingev</summary>

| File | Summary |
| ---- | ------- |
| bookingev.component.spec.ts |  The code defines a unit test for the BookingevComponent component, which is a part of an Angular application. The test creates a fixture for the component and checks if it is truthy. |
| bookingev.component.ts |  The code defines a component in an Angular application that displays booking information for a specific station. It retrieves the booking data from a service, filters it by date and user ID, and calculates the expected end time for each booking based on its start time and duration. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\details</summary>

| File | Summary |
| ---- | ------- |
| details.component.spec.ts |  The code defines a unit test for the `DetailsComponent` component, which is used to verify its functionality and ensure it meets certain requirements. |
| details.component.ts |  The code defines a component for displaying details of an admin profile, using the Angular framework. It imports various dependencies, sets up a route and a service to retrieve data, and defines a function to format time values. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sanalytics</summary>

| File | Summary |
| ---- | ------- |
| sanalytics.component.spec.ts |  The code defines a unit test for the SanalyticsComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sanalytics.component.ts |  The code is a TypeScript class that represents the sanalytics component in an Angular application. It fetches data from various services and populates charts with the data, including a bar chart showing the total payable amount for each station per month and year, and a pie chart showing the number of bookings for each station per month and year. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sdashboard</summary>

| File | Summary |
| ---- | ------- |
| sdashboard.component.spec.ts |  The code defines a unit test for the SdashboardComponent component, which is used to verify its functionality and ensure it meets certain requirements. |
| sdashboard.component.ts |  The code defines a component for an admin dashboard, with a dark mode toggle and a sidebar that can be opened and closed on mobile devices. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sevstations</summary>

| File | Summary |
| ---- | ------- |
| sevstations.component.spec.ts |  The code defines a unit test for the SevstationsComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| sevstations.component.ts |  The code defines a component in Angular, specifically the SevstationsComponent, which is used to display data related to SEV stations. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\sprofile</summary>

| File | Summary |
| ---- | ------- |
| sprofile.component.spec.ts |  The code defines a unit test for the SprofileComponent component, which is used to test its functionality and ensure it meets certain requirements. |
| sprofile.component.ts |  The code defines an Angular component that retrieves the profile data of a superadmin or admin user from the server using the AuthService, and stores it in the `adminProfile` property. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin\scomponents\ssettings</summary>

| File | Summary |
| ---- | ------- |
| ssettings.component.spec.ts |  The code defines a unit test for the SsettingsComponent component in an Angular application, using Jest and TestBed. It sets up the testing environment, creates a fixture for the component, and runs a simple test to verify that the component is created successfully. |
| ssettings.component.ts |  The code defines an Angular component for managing the settings of an admin user, including selecting a profile image, updating personal details, and uploading a new profile picture. |

</details>

---

<details><summary>\src\app\modules_admin\superadmin</summary>

| File | Summary |
| ---- | ------- |
| superadmin-routing.module.ts |  The code defines a routing module for the superadmin feature of an Angular application, with routes for various components and sub-routes. |
| superadmin.module.ts |  The code defines a module for the Superadmin feature of an Angular application, which imports and exports various components and modules, including routing, forms, and charts. |

</details>

---

<details><summary>\src\app\shared</summary>

| File | Summary |
| ---- | ------- |
| auth.service.spec.ts |  The code defines a unit test for the AuthService class, which is used to verify its functionality and ensure it meets certain requirements. |
| auth.service.ts |  The code defines an AuthService class that provides authentication and authorization functionality for different user types, including evadmin, superadmin, and user. The service uses the AngularFireAuth library to handle authentication and the AngularFirestore library to interact with a Firestore database. It also uses the Router library to navigate between pages and the LocalStorageService and SessionStorageService libraries to store and retrieve user information in session storage. The service has several methods for logging in, registering, and retrieving user profiles, as well as methods for checking if a user is already logged in and signing out. |

</details>

---

<details><summary>\src\app\UserDataService</summary>

| File | Summary |
| ---- | ------- |
| userservices.service.spec.ts |  The code defines a unit test for the UserservicesService class, which is used to inject and test the service in an Angular application. |
| userservices.service.ts |  The code defines a service class for managing user data and booking data in an Angular application, using Firestore as the database. The primary functions of the service are to get EV admin profiles, get EV admin data by user ID, save booking data, check slot availability, and get booking data by station ID, date, and booking slot. |

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
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that sets various theme values, including colors, fonts, spacing, and box shadows. |

</details>

---

## 🚀 Getting Started

 Getting Started with EvGlob<br>=================================

EvGlob is an Angular application with a frontend and backend. The frontend is built using Angular, and the backend is built using Node.js and Express. This guide will help you get started with EvGlob and provide an overview of the project structure and components.

Project Structure
-----------------

The project structure for EvGlob is as follows:

* `src`: This directory contains all the source code for the application.
* `server`: This directory contains the server-side code for the application.
* `angular.json`: This file contains configuration settings for the Angular CLI.
* `package.json`: This file contains metadata about the project, including dependencies and scripts.
* `README.md`: This file contains information about the project, including its purpose and how to use it.

Components
------------

EvGlob includes several components, which are the building blocks of the application. These components include:

* `app.component.ts`: This component is the root component of the application and is responsible for rendering the main layout of the application.
* `adminlogin.component.ts`: This component is used to render the admin login page.
* `evadminlogin.component.ts`: This component is used to render the event admin login page.
* `evadminregister.component.

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
