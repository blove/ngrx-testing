# NgRx Testing

This project is based on a presentation given at the Rocky Mountain Angular meetup.
Be sure to check out the [NgRx Testing slide deck](https://slides.com/blove/ngrx-testing/edit) as well.

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

## Help?!

I intend to write a blog post on the topic of testing NgRx using Jest that will explain much of the tests in this project.
I just haven't yet. 🐶

In the meantime, feel free to [check out my blog](http://brianflove.com).