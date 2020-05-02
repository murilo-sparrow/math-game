function configMarcar(button, checked) {
    const divNumeros = button.parentElement
    const inputs = divNumeros.querySelectorAll('input')
    inputs.forEach(input => input.checked = checked)
}