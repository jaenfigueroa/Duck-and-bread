let pan = document.getElementById('pan')

window.addEventListener('mousemove', (evento) => {
  pan.style.top = `${evento.clientY - 95}px`
  pan.style.left = `${evento.clientX - 95}px`
})


const audio = document.getElementById('audio')

setInterval(() => {
  audio.play()
}, 7000);