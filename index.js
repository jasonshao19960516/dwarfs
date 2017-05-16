const personForm = document.querySelector('form');

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = hairColor;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';
  return colorDiv;
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

 const personName = form.personName.value
  const name = document.createElement("p")
  name.textContent = personName

  const hairColor = form.hairColor.value
   const colorDiv = renderColor(hairColor)

  const age = form.age.value
   const ageX = document.createElement("p")
  ageX.textContent = age

  const birthplace = form.birthplace.value
  const birth = document.createElement("p")
  birth.textContent = birthplace
  
  details.appendChild(name)
  details.appendChild(colorDiv)
  details.appendChild(ageX)
  details.appendChild(birth)

}

personForm.addEventListener('submit', handleSubmit);