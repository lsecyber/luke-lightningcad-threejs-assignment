## Outline

* [Getting started](#getting-started)
* [Assignment](#assignment)
* [Moving Forward](#moving-forward)

## Getting started

This assignment uses [three.js](https://threejs.org) as its base. A scene, camera, and renderer are already setup
in `index.html`. The camera is configured to be consistent with the 2D axes of an HTML canvas. Consequently, "up" 
is in the direction of the negative Z axis, the X axis goes to the right and the Y axis comes toward the viewer.
When `index.html` is viewed in a browser, the `index.js` module will be automatically loaded, which should start the
program.

To properly serve the application, you will need to run a local web server so that packages can be loaded. One way to do
this is by using Python's built-in `http.server` module. Just run the command `python3 -m http.server PORT` in the top
level directory of this project. Substitute the desired port number for `PORT` in the Python command. You may use other
http servers if you choose. There are no other commands to run. All the packages are pulled in through CDN's and tests
are run through the browser.

The global object `application` is available in `index.js`. You will primarily interact with the `application` object
using the methods `addShape` and `add3DShape`. To remove all shapes from the scene, you can invoke 
`application.clear()`. Feel free to explore other methods available on `application` and modify the `Application` class
as needed.

Examples:

```JavaScript
const square = new THREE.Shape([new THREE.Vector2(-2, -2), new THREE.Vector2(2, -2), new THREE.Vector2(2, 2), new THREE.Vector2(-2, 2)])
application.addShape(square, '#FF7800')
```

```JavaScript
const cube = new THREE.BoxGeometry(2, 2, 2)
application.add3DShape(cube, '#FF7800')
```

The controls for navigating are mouse wheel to zoom, right-click and drag to pan, and left-click and drag to rotate
(only applicable when 3D shapes are added.)

Tests are written in [jasmine](https://jasmine.github.io/api/4.5/matchers.html). To run the tests visit `/tests.html`
with a web browser. Test files should be added in the `spec/` directory. You will need to add an import for test files
that you create to `specLoader.js`.

## Assignment

Create a shed that can be resized via the width, length, and height inputs. The shed should have four separate walls and
a roof.

To aid in responding to width, length, and height changes, the `application` object features three separate callbacks
that can be set. The callbacks are expected to take a single argument, which will be the corresponding input value. The
callbacks are set as follows:

```JavaScript
application.setWidthChangedCallback(widthCallback)
application.setLengthChangedCallback(lengthCallback)
application.setHeightChangedCallback(heightCallback)
```

## Moving Forward

For extra credit, add a door to one of the walls. There should be an opening in the wall where the door is located.

Additionally, you can make a gable roof with two roof panels and two gables.
