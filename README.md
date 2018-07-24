[![Build Status](https://travis-ci.org/blove/ngrx-testing.svg?branch=master)](https://travis-ci.org/blove/ngrx-testing)

# NgRx Testing

This project is based on a presentation given at the Rocky Mountain Angular meetup.
Be sure to check out the [NgRx Testing slide deck](https://slides.com/blove/ngrx-testing-jasmine-marbles) as well.

## Blog Posts

Check out some blog posts I wrote to get you started with Jest in an Angular project and testing NgRx apps using jasmine-marbles:

* [Angular + Jest](https://brianflove.com/2018/05/26/angular-jest-testing/)
* [NgRx: Testing Components](https://brianflove.com/2018/05/27/ngrx-testing-components/)
* [NgRx: Testing Actions](https://brianflove.com/2018/05/28/ngrx-testing-actions/)
* [NgRx: Testing Effects](https://brianflove.com/2018/06/28/ngrx-testing-effects/)

## Serve

Start up the Angular CLI development server via:

```bash
$ ng serve
```

## Build

Build the app via:

```bash
$ ng build
```

## Test

This project uses Jest (instead of Karma) for running tests.
Run the full test suite via:

```bash
$ npm run test
```

You can also run the tests in a watch mode via:

```bash
$ npm run test:watch
```

This project uses Jest snapshot testing.
Update the snapshots via:

```bash
$ npm run test -- --updateSnapshot
```