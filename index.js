const personForm = document.querySelector('form');

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const list = document.querySelector('.rosterList')

 const personName = form.personName.value
  const name = document.createElement('li')
  name.textContent = personName
  
  list.insertBefore(name, list.firstChild)

}

personForm.addEventListener('submit', handleSubmit);