const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Day already exists')
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
/*const data = {
  run: ['01-01', '01-02', '01-03'],
  vitamins: ['01-04'],
  journal: ['01-05'],
  water: ['01-06'],
  food: ['01-07']
}*/

nlwSetup.setData(data)
nlwSetup.load()
