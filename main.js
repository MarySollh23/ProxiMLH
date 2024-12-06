// Crear el aplicativo Pixi
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x87CEEB, // Color de fondo (cielo)
  });
  
  // Agregar el canvas al body del HTML
  document.body.appendChild(app.view);
  
  // Crear un sprite de una abeja (puedes usar cualquier imagen)
  const bee = PIXI.Sprite.from('bee.png'); // Reemplaza con la ruta correcta de la imagen
  bee.x = app.screen.width / 2;
  bee.y = app.screen.height / 2;
  bee.anchor.set(0.5); // Establece el ancla del sprite al centro
  
  // Agregar el sprite a la escena
  app.stage.addChild(bee);
  
  // Animación de rotación
  app.ticker.add(() => {
    bee.rotation += 0.01;
  });
  
  // Evento de clic del mouse para mover la abeja
  app.view.addEventListener('click', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    bee.x = mouseX;
    bee.y = mouseY;
  });
  
  // Agregar transparencia (fade out)
  app.ticker.add(() => {
    if (bee.alpha > 0) {
      bee.alpha -= 0.01; // Reduce la opacidad
    }
  });
  
  // Escalado (zoom in y zoom out)
  app.ticker.add(() => {
    bee.scale.x = Math.sin(app.ticker.lastTime * 0.01) * 0.5 + 1;
    bee.scale.y = bee.scale.x;
  });  