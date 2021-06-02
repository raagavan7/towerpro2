class Block{

    constructor(x, y, width, height) {

        var options = {

          restitution : 0.4,
          friction : 0.0,
          isStatic : false

        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }

      display(){

        
        if(this.body.speed <5.3){
          var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

         }else{
           World.remove(world,this.body);
           push();
           this.Visiblity=this.Visiblity - 5;
           pop();
         }
        
      }
}