# Web components and React

![Screenshot](https://user-images.githubusercontent.com/449385/30446989-8af5d3b2-993f-11e7-9b83-abc3e66946fe.png)

A small example of using a polyfilled web component inside a React app made with Create React App.

Status: archived. Made in 2017, not maintained. The component uses HTML Imports and the original Custom Elements API (`document.registerElement`), which browsers have since removed.

Live: https://superhighfives.github.io/web-components-and-react/

## Running it

```sh
yarn
yarn start
yarn deploy   # builds, then publishes build/ to GitHub Pages (needs the gh-pages CLI installed)
```

It uses React 15 and react-scripts 1, so it needs an old version of Node.

## How it works

- `public/hello-world.html` defines a `<hello-world>` element with a template and shadow DOM, and `public/index.html` loads it with an HTML import.
- `src/App.js` loads the `webcomponentsjs` polyfills and renders `<hello-world who='Al' />` like any other element.
