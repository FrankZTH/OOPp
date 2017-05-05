var i=0;
var temp2=0;

var OverScene=function(bookSelf){
    this.load=function(){
      this.x= Framework.Game.getCanvasWidth() / 2-250;
      this.y= Framework.Game.getCanvasHeight() / 2-200;

      this.begintime= Date.now();
  		this.now = 0;
  }



this.update = function() {
  //console.log('update');
    console.log(i);
    this.now=(Date.now()-this.begintime)/1000;
    if(i!=0) this.now=(Date.now()-this.begintime)/100;
}

	this.draw=function(ctx){
    //console.log('draw');
		//parentCtx.fillStyle = (this.secondHandRotationRate > 0)?'green':'red';
    //parentCtx.fillRect(Framework.Game.getCanvasWidth()/2 , Framework.Game.getCanvasHeight()/2, 260, 90);
    ctx.font = '40pt Microsoft YaHei';
    ctx.fillStyle = 'red';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    //ctx.fillText("釋放我 讓我離開這裡".substr(0,this.now), this.x, (this.y)50);
    //ctx.fillText("釋放我 讓我離開這裡".substr(0,this.now), this.x, this.y);
    for(var temp = 0;temp<this.now;temp++){
        ctx.fillText("釋放我".substr(temp,1), this.x, this.y + temp * 55);
    }
    if(this.now>3){
      for(var temp2 = 0;temp2<this.now-3;temp2++){
        ctx.fillText("讓我離開這裡".substr(temp2,1), this.x+70, this.y + temp2 * 55);
      }
    }
    //ctx.fillText("釋放我 讓我離開這裡".substr(0,1), this.x, this.y);
    //ctx.fillText("釋放我 讓我離開這裡".substr(1,1), this.x, this.y+50);
    //ctx.fillText("釋放我 讓我離開這裡".substr(2,2), this.x, this.y+100);*/
	}

  this.click = function(e){
    //console.log(e);
    if(e.x >= 0 && e.x <= Framework.Game.getCanvasWidth() && e.y >= 0 && e.y <= Framework.Game.getCanvasHeight()) {
			return 1;
		}
  }

  this.delete = function(){
    console.log("off.book", bookSelf);
    i++;
    delete bookSelf.clickBook;
  }
};
