var card = function() {
	this.load = function() {
		this.self = this;
		this.card = new Framework.Sprite(define.imagePath + 'card.png');
		this.card.position={
			x: Framework.Game.getCanvasWidth() / 6.5-10,
			y: Framework.Game.getCanvasHeight() / 4 *3.2 -10
		}
		this.card.rotation = 0;
		this.card.scale=0.03;
		this.card.rotation=-22;
		this.isStart=false;
		this.rotation = 0;
		this.now = 0;
	};

	this.initialize = function(){
		this.isStart=false;
		this.card.position=this.position;
		this.position=this.start_position;
	};

	this.putinbag = function() {
		this.card.position={
			x:Framework.Game.getCanvasWidth()-100,
			y:Framework.Game.getCanvasHeight()/5
		}
		this.position=this.card.position;
	};
	this.update = function() {
		this.card.position={
		}
	};

	this.draw = function(ctx){
		this.card.draw(ctx);
	};

	this.mousedown = function(e){
		if(e.x >= this.card.position.x - 40 && e.x <= this.card.position.x + 40 && e.y >= this.card.position.y - 20 && e.y <= this.card.position.y + 20) {
			this.isStart=true;
			console.log("mousedown");
			this.putinbag();
			this.mousemove(e);
			return 1;
		}
		else {
			return 0;
		}
	};

	this.mouseup = function(e){
		if(this.isStart){
			console.log("mouseup");
			this.isStart=false;
			this.card.position={
				x:Framework.Game.getCanvasWidth()-100,
				y:Framework.Game.getCanvasHeight()/5
			}
			return 1;
		}
		else return 0;
	};

	this.mousemove= function(e) {        /////////當滑鼠點到圖形就讓圖形跟滑鼠動
		this.currentTouch = { x: e.x, y: e.y };
		if(this.isStart == true){
			console.log(e);
			this.card.position.x=this.currentTouch.x;
			this.card.position.y=this.currentTouch.y;
		}
  };
};
