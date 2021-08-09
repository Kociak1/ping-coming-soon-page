const submit = document.querySelector('form')
const input = document.querySelector('#email')
const Message = document.querySelector('.error')

submit.addEventListener('submit', e => {
    if((input.value.length == 0) || input.value == undefined ) {
        e.preventDefault()
        input.classList.add('err')
        Message.textContent = 'Whoops! It looks like you forgot to add your email'
    }
    const reg = /\S{3,20}@\S{2,20}\.\w{2,7}/
    if(!reg.test(input.value)) {
        e.preventDefault()
        input.classList.add('err')
        Message.textContent = 'Please provide a valid email address'
    }
})


