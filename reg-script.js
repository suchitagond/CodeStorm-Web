const scriptURL = 'https://script.google.com/macros/s/AKfycbz62-Fqjr6_8qcfrMLT9owGMD3u7W-ITML77vjqLOfnN8bO__OAn012FiMb_oTGBsc/exec'
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