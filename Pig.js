class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,52,52);
    this.image = loadImage("sprites/enemy.png");
    this.im = loadImage("sprites/enemyDamaged.png");
     this.vis=255
  }
 
  display(){

    if(this.body.speed<4){
      super.display()
    }
    else{
      World.remove(world,this.body)
  
  push()
  tint(255,this.vis)
  this.vis=this.vis-5
  image(this.im,this.body.position.x,this.body.position.y,52,52)
  pop()
  }}
}