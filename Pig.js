class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,52,52);
    this.image = loadImage("sprites/enemy.png");
    this.im = loadImage("sprites/enemyDamaged.png");
     this.vis=255
     this.abc=false
    }
 
  display(){

    if(this.body.speed<4){
      super.display()
    }
    else{
      if(this.abc===false){
      World.remove(world,this.body)
     score=score+100
     this.abc=true 
    }
    push()
    tint(255,this.vis)
    this.vis=this.vis-5
    image(this.im,this.body.position.x,this.body.position.y,52,52)
    pop()
}}
}