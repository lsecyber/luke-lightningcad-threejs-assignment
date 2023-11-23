import Application from '../models/Application.js'
import setupListeners from './setupListeners.js'

const application = new Application(window.innerWidth, window.innerHeight)

setupListeners(application)

// cue the rendering
const renderer = application.renderer()
document.body.appendChild(renderer.domElement)
renderer.setAnimationLoop(timestamp => application.render(timestamp))

window.application = application
