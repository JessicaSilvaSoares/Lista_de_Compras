const checkbox = document.getElementsByName('concluido')
const checkboxArray = [...checkbox]
const btnOpenModelCreate = document.querySelector('#open-model-create')
const btnCloseModelCreate = document.querySelector('#close-model-create')
const modelCreate = document.querySelector('#model-create')
const form = document.querySelector('[form-validate]')
let msgError = document.querySelector('[msg-error]')


checkboxArray.forEach(el => el.addEventListener('change', (e) => {
    const input = e.target
    const form = input.parentNode
    form.submit()
}))

if (modelCreate) {
    btnOpenModelCreate.addEventListener('click', () => modelCreate.classList.add('open'))
    btnCloseModelCreate.addEventListener('click', () => modelCreate.classList.remove('open'))
}

form.addEventListener( 'submit', (e) => {
    e.preventDefault()
    const inputs = form.querySelectorAll('[input-validate]')
    const inputsArray = [...inputs]
    
    inputsArray.forEach(el =>  {
        const label = el.parentNode
        let templateMsg = msgError.cloneNode(true)
        let msg = label.querySelectorAll('[msg-error]')
        
        if (el.value === '') {
            templateMsg.textContent = 'Preencha este Campo'

            if (msg.length === 0) label.appendChild(templateMsg)
            
            if (!el.classList.contains('error')) el.classList.add('error')
            
        } else {
           
            if (msg.length === 1) label.removeChild(msg[0]);
            el.classList.remove('error')
        }
    })

    let formError = form.querySelectorAll('.error')

    if (formError.length === 0) form.submit()
})