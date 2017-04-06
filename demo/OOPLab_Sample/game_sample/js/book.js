var j=0;
var book = function() {
	this.load = function() {
		this.self = this;
		this.book = new Framework.Sprite(define.imagePath + 'book.png');
		this.book.position={
			x: Framework.Game.getCanvasWidth() / 6.5-10,
			y: Framework.Game.getCanvasHeight() / 4 *3.2 -10
		}
		this.book.rotation = 0;
		this.book.scale=0.4;
		this.book.rotation=-22;
		this.isStart=false;
		this.rotation = 0;
		this.now = 0;

	};

	this.initialize = function(){
		this.isStart=false;
		this.book.position=this.position;
		this.position=this.start_position;
	};

	this.putinbag = function() {
		this.book.position={
			x:Framework.Game.getCanvasWidth()-100,
			y:Framework.Game.getCanvasHeight()/5
		}
		this.position=this.book.position;
	};
	this.update = function() {
		this.book.position={
		}
		if(this.clickBook)
			this.clickBook.update();
	};

	this.draw = function(ctx){
		this.book.draw(ctx);
		if(this.clickBook)
			this.clickBook.draw(ctx);
	};

	/*this.click= function(e){
		console.log(e);
		if(e.x >= this.book.position.x - 57 && e.x <= this.book.position.x + 57 && e.y >= this.book.position.y - 40 && e.y <= this.book.position.y + 40) {
			this.putinbag();
			this.clickBook = new clickBook(this.self);
			this.clickBook.load();
			this.begintime= Date.now();
			return 0;
		}
		else {
				return 1;
		}
	};*/

	this.mousedown = function(e){
		if(e.x >= this.book.position.x - 57 && e.x <= this.book.position.x + 57 && e.y >= this.book.position.y - 40 && e.y <= this.book.position.y + 40) {
			this.isStart=true;
			this.putinbag();
			this.clickBook = new clickBook(this.self);
			this.clickBook.load();
			this.mousemove(e);
			j++;
			return 0;
		}
		else {
			return 1;
		}
	};

	this.mouseup = function(e){
		if(this.isStart){
			console.log("mouseup");
			this.isStart=false;
			this.book.position={
				x:Framework.Game.getCanvasWidth()-100,
				y:Framework.Game.getCanvasHeight()/5
			}
		}
	};

	this.mousemove= function(e) {        /////////當滑鼠點到圖形就讓圖形跟滑鼠動
		this.currentTouch = { x: e.x, y: e.y };
		if(this.isStart == true){
			console.log(e);
			this.book.position.x=this.currentTouch.x;
			this.book.position.y=this.currentTouch.y;
		}
  };
};
