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
}

export default setupListeners
