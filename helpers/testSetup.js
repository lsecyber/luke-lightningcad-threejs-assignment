import Application from '../models/Application.js'

const width = 1800
const height = 1400
const application = new Application(width, height)

// TODO: Should this cue a render cycle and just not add the dom element to the body?
// const renderer = application.renderer()
// document.body.appendChild(renderer.domElement)
// renderer.setAnimationLoop(timestamp => application.render(timestamp))

window.application = application
