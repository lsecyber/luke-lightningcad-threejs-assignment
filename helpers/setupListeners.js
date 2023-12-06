const setupListeners = (application) => {
  document.getElementById('widthInput').addEventListener('change', event => {
    const newValue = parseFloat(event.target.value)
    if (isFinite(newValue)) application.widthChanged(newValue)
  })

  document.getElementById('lengthInput').addEventListener('change', event => {
    const newValue = parseFloat(event.target.value)
    if (isFinite(newValue)) application.lengthChanged(newValue)
  })

  document.getElementById('heightInput').addEventListener('change', event => {
    const newValue = parseFloat(event.target.value)
    if (isFinite(newValue)) application.heightChanged(newValue)
  })

  document.getElementById('gableRoofInput').addEventListener('change', event => {
    const newValue = event.target.checked
    application.gableRoofChanged(newValue)
  })

  const wallWithDoorInput = document.getElementById('wallWithDoorInput')
  const doorOnWallOneButton = document.getElementById('doorOnWallOneButton')
  const doorOnWallTwoButton = document.getElementById('doorOnWallTwoButton')
  const doorOnWallThreeButton = document.getElementById('doorOnWallThreeButton')
  const doorOnWallFourButton = document.getElementById('doorOnWallFourButton')

  document.getElementById('doorOnWallOneButton').addEventListener('click', event => {
    wallWithDoorInput.value = '1'
    wallWithDoorInput.dispatchEvent(new Event('change'))
    event.target.disabled = true
    doorOnWallTwoButton.disabled = false
    doorOnWallThreeButton.disabled = false
    doorOnWallFourButton.disabled = false

  })
  document.getElementById('doorOnWallTwoButton').addEventListener('click', event => {
    wallWithDoorInput.value = '2'
    wallWithDoorInput.dispatchEvent(new Event('change'))
    event.target.disabled = true
    doorOnWallOneButton.disabled = false
    doorOnWallThreeButton.disabled = false
    doorOnWallFourButton.disabled = false
  })
  document.getElementById('doorOnWallThreeButton').addEventListener('click', event => {
    wallWithDoorInput.value = '3'
    wallWithDoorInput.dispatchEvent(new Event('change'))
    event.target.disabled = true
    doorOnWallOneButton.disabled = false
    doorOnWallTwoButton.disabled = false
    doorOnWallFourButton.disabled = false
  })
  document.getElementById('doorOnWallFourButton').addEventListener('click', event => {
    wallWithDoorInput.value = '4'
    wallWithDoorInput.dispatchEvent(new Event('change'))
    event.target.disabled = true
    doorOnWallOneButton.disabled = false
    doorOnWallTwoButton.disabled = false
    doorOnWallThreeButton.disabled = false
  })

  wallWithDoorInput.addEventListener('change', event => {
    const newValue = parseInt(event.target.value)
    if (isFinite(newValue)) application.wallWithDoorChanged(newValue)
  })
}

export default setupListeners
