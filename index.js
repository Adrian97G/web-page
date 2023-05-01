var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(240)
  .typeString('La Ciudad de las Puertas Abiertas')
  .pauseFor(3000)
  .start();