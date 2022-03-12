window.addEventListener('load', () => {
  let lastPosition = 0

  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('unseen', lastPosition < window.scrollY)
    lastPosition = window.scrollY
  })

  const colors = ['red', 'green', 'blue']
  let colorIndex = 1

  function toggleColor() {
    document.body.classList.remove(colors[colorIndex] ?? 0)
    colorIndex = (colorIndex + 1) % colors.length
    document.body.classList.add(colors[colorIndex])
  }

  document.body.addEventListener('keypress', ev => ev.currentTarget === ev.target && ev.code === 'KeyC' && toggleColor())
  toggleColor()

  let loadCount = 0

  document.querySelectorAll('video').forEach(videoElem =>
    videoElem.addEventListener('loadeddata', () => {
      videoElem.readyState > 2 && (loadCount > 1 ? document.body.classList.add('ready') : loadCount++)
    }))
  setInterval(() => document.querySelectorAll('video').forEach(videoElem => videoElem.classList.toggle('hide')), 5000)

  const showQuestions = () => document.body.classList.toggle('show-volunteer-questions', document.querySelector('main form #role')?.value)
  document.querySelector('main form #role').addEventListener('change', showQuestions)
  showQuestions()

  document.body.classList.add('ready')
})