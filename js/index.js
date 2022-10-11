const theCanvas = document.getElementById('canvas');
const ctx = theCanvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

  function startGame() {

    const road = new Image();
    road.src = "./images/road.png"

    const car = new Image();
    car.src = "./images/car.png"

    let roadX = 0;
    let roadY = 0;

    let carX = 224
    let carY = 450

    ctx.drawImage(road, roadX, roadY, 500, 700)
    ctx.drawImage(car, carX, carY, 50, 70)
  }

  class Car {
    constructor() {
      this.x = 224;
      this.y = 450;
  
      // Load the image
      const car = new Image();
      car.addEventListener('load', () => {
        // Once image loaded => draw
        this.car = car;
        this.draw();
      });
      car.src = './images/car.png';
    }
        moveLeft() {
      car.x -= 10;
    }
    moveRight() {
      car.x += 10;
    }
      draw() {
      ctx.drawImage(this.car, this.x, this.y, 50, 70);
    }
    }

    class Road {
      constructor() {
        this.x = 0;
        this.y = 0;
    
        // Load the image
        const road = new Image();
        road.addEventListener('load', () => {
          // Once image loaded => draw
          this.road = road;
          this.draw();
        });
        road.src = './images/road.png';
      }
        draw() {
        ctx.drawImage(this.road, this.x, this.y, 500, 700);
      }
      }

    const car = new Car
    const road = new Road

  window.addEventListener('keydown', (e) =>{
    switch(e.keyCode){
      case 37: //left
      car.moveLeft()
      console.log('move left')
      if(car.x < 0){
            car.x = 0;
      }
        break;
      case 39: //right
      car.moveRight()
      console.log('move right')
      if(car.x > canvas.width-50){
         car.x = 450;
      }

    }
    updateCanvas()
  })
  

  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
   road.draw()
    car.draw();
  }
 