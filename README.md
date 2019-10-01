SplitTextJS
===========

[![NPM package][npm]][npm-url]

#### Light weight Javascript text splitter ####

This Javascript text splitter has been created to allow easy and seo friendly text splitting (for animations) in two lines of code, it's including words, letters, spaces and special characters splitting.

[Example](https://codepen.io/Saucy_/pen/aeWeRE) &mdash;
[Repository](https://github.com/SaucySpray/split-text) &mdash;
[Questions](http://stackoverflow.com/questions/tagged/split-text-js)

### Usage ###

Download the [file](https://registry.npmjs.org/split-text-js/-/split-text-js-1.0.2.tgz) and include it in your HTML
```html
<p class="text">This is my cool text!</p>

<script src="js/SplitTextJS.js"></script>
```

-----------

Or install and import it as a [module](https://www.npmjs.com/package/split-text-js)

```sh
$ npm install split-text-js
```

First, **import** _SplitTextJS_ :

```javascript
import SplitTextJS from 'split-text-js';
```

Then, **use** _SplitTextJS_ :

```html
<p class="text">This is my cool text!</p>
```

```javascript
// Select the DOM element wich contains the target text
const text = document.querySelector('.text');

// Split the text and store the result
const splittedText = new SplitTextJS(text);

// Now you can access your splitted text in the returned object

// Acces words :
const textWords = splittedText.words;

// Acces letters :
const textChars = splittedText.chars;

// Acces spaces :
const textSpaces = splittedText.spaces;

// Acces original text :
const textOriginal = splittedText.originalText;
```

If everything went well you should see [this](https://codesandbox.io/s/split-text-js-fkr7b).

### Change log ###

[Releases](https://github.com/SaucySpray/split-text/releases)


[npm]: https://img.shields.io/npm/v/split-text-js.svg
[npm-url]: https://www.npmjs.com/package/split-text-js