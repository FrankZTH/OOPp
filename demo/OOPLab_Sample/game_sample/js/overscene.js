var i=0;

var OverScene=function(bookSelf){
    this.load=function(){
      this.x= Framework.Game.getCanvasWidth() / 2-300;
      this.y= Framework.Game.getCanvasHeight() / 2-150;

      this.begintime= Date.now();
  		this.now = 0;
  }



this.update = function() {
  //console.log('update');

    console.log(i);
    this.now=(Date.now()-this.begintime)/1000;
    if(i!=0) this.now=(Date.now()-this.begintime)/100;
    if(this.now>15){
      console.log("off.book", bookSelf);
      i++;
      delete bookSelf.clickBook;
      //刪除本身
    }
}


	this.draw=function(ctx){
    //console.log('draw');
		//parentCtx.fillStyle = (this.secondHandRotationRate > 0)?'green':'red';
    //parentCtx.fillRect(Framework.Game.getCanvasWidth()/2 , Framework.Game.getCanvasHeight()/2, 260, 90);
    ctx.font = '40pt Microsoft YaHei';
    ctx.fillStyle = 'red';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillText("釋放我 讓我離開這裡".substr(0,this.now), this.x, this.y);
	}

  this.click = function(e){
    //console.log(e);
    if(e.x >= 0 && e.x <= Framework.Game.getCanvasWidth() && e.y >= 0 && e.y <= Framework.Game.getCanvasHeight()) {
			return 1;
		}
  }
};
