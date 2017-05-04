var clickBook = function(bookSelf) {
	this.load = function() {
		this.book = new Framework.Sprite(define.imagePath + 'openingbook.png');
		this.book.position={
			x: Framework.Game.getCanvasWidth() / 2,
			y: Framework.Game.getCanvasHeight() / 2
		}
		this.book.rotation = 0;
    this.book.scale=3;
		this.position = {
			x:100,
			y:100
		}
		this.rotation = 0;

		this.overScene = new OverScene(bookSelf);
		this.overScene.load();
		console.log("clickbookTRUE");
	};

	this.initialize = function(){

	};

	this.update = function() {
		this.overScene.update();
	};

	this.draw = function(ctx){
		this.book.draw(ctx);
		this.overScene.draw(ctx);
	};

	this.mousedown = function(e){
    	console.log(e.e.which);
			if(e.e.which==3){
				this.overScene.delete();
			}
	};
};
