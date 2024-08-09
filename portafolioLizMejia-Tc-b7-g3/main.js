var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Estudiante de Ingeniería de Software')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Técnico en Programación')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Desarrolladora Front End Jr')
    .pauseFor(2500)
    .start();