var OverScene=function(){
    this.load=function(){
      this.x= Framework.Game.getCanvasWidth() / 2;
      this.y= Framework.Game.getCanvasHeight() / 2;

      this.begintime= Date.now();
  		this.now = 0;
  }



this.update = function() {
  //console.log('update');
    this.now=(Date.now()-this.begintime)/1000;
    if(this.now>4){
      delete off.clickBook;
    }
}


	this.draw=function(ctx){
    //console.log('draw');
		//parentCtx.fillStyle = (this.secondHandRotationRate > 0)?'green':'red';
        //parentCtx.fillRect(Framework.Game.getCanvasWidth()/2 , Framework.Game.getCanvasHeight()/2, 260, 90);
        ctx.font = '65pt bold';
        ctx.fillStyle = 'red';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';

        ctx.fillText("釋放我".substr(0,this.now), this.x, this.y);
	}


};
