
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQdfMeSKb3HVCHNKMdKMfcGZ3Ob0eH6oLguFHIlpN_aQstr3Q09ouZKBKkq9zUwzx3/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML="Form submitted successfully!!"
    setTimeout(function(){msg.innerHTML=""},5000) 
      form.reset()})
    .catch(error => console.error('Error!', error.message))
})
