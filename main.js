const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-03'],
  vitamins: ['01-04'],
  journal: ['01-05'],
  water: ['01-06'],
  food: ['01-07']
}

nlwSetup.setData(data)
nlwSetup.load()
