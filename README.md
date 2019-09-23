# Split Text

> Javascript text splitter for easy and seo friendly animations, allows text, word, spaces and special characters splitting.

-------------------------

## Features
- Split text based on __spaces__.
- Group words on **"wrapper"** spans, letters on **"char"** spans, and spaces on **"spacer"** spans.
- Returns an object **"splitText"** wich contains each splitted texts.

## Get started
**_/src/js/ThreeScene.js_**
[THREE.JS documentation - Creating a scene](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)
**this.container**

-------------------------

Creating mesh is acheived by defining a geometry and a material, see [how to create a mesh](https://threejs.org/docs/#api/en/objects/Mesh). And it's the same for our elements here (masks, cylinders, and gltf models), except that GLTF models need a GLTF loader, the [THREEJS.GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) works well, but since we are using webpack, it's easier to use [this custom loader](https://www.npmjs.com/package/three-gltf-loader).

## Requirements
You only need <b>node.js</b> and <b>npm</b> pre-installed and you’re good.

```sh
$ npm install split-text
```

## Setup
Install dependencies
```sh
$ npm install split-text
```