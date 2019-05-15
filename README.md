# css-testing-rumors

Companion Code to the "Don't Believe the Rumors: CSS Testing is Possible" talk

## How to run Testing Bookstore

Easy as pie. Just `npm install` (or `npm ci` is even better), and you're done.

Once it's installed, `npm start` and navigate with your browser to http://localhost:3000.

## How to run the tests

Once the Testing Bookstore is running (in another command prompt), just `npx cypress open` and you get
the Cypress interactive UI, from which you can run whichever test you like.

If you want to run the tests that uses [eyes-cypress](https://www.npmjs.com/package/@applitools/eyes-cypress), you
should first (register at Applitools), get the API key, and do:

```sh
export APPLITOOLS_API_KEY=...
```

If you're on Mac or Linux, or

```sh
set APPLITOOLS_API_KEY=...
```

and _then_ run `npx cypress open`.
