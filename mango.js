class Mango {
    constructor(x,y,radius) {
      var options = {

          isStatic: true,
          restitution:0,
          friction:1,
          
      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.image = loadImage("mango.png")
      this.image.set.scale = 0.000001
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);

      fill("yellow"); 
      image(this.image,pos.x, pos.y,this.radius);
    }
  }; 