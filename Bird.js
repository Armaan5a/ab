class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/yellow.png");
    this.im= loadImage("sprites/smoke.png");
    this.array=[]
  }

  display() {
    super.display();
  
     if(this.body.velocity.x>1.5 && this.body.position.x>220){
    var pos =[this.body.position.x,this.body.position.y]
     this.array.push(pos)
     }
     for(var i=0;i<this.array.length;i=i+1){
       image(this.im,this.array[i][0],this.array[i][1])
     }
  }
}
