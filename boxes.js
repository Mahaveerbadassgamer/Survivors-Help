class boxes{
    constructor(x, y, width, height){
    
    
        var box_options ={
            restitution: 0.3
        }
    
        this.box = Bodies.rectangle(x, y, width, height, box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    
    
    }
    
    display(){
    
        var position = this.box.position;
        var angle= this.box.angle;
    
        push();
        translate(position.x, position.y)
        rotate(angle)
        fill("Blue")
        angleMode(RADIANS);
        rectMode(CENTER);
        rect(0,0, this.width,this.height);
        pop();
    }
    
    
    
    
    }