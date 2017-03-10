var practice = function() {
	this.load = function() {
		this.pic = new Framework.Sprite(define.imagePath + 'character.png');
		this.pic.position={
			x:1200,
			y:500//100會與原本的圖重疊
		}
		this.pic.rotation = 0;
		this.pic.scale = 0.1;
		this.position = {
			x:100,
			y:100
		}
		this.rotation = 0;
		
	};
	
	this.initialize = function(){
		
	};
	
	this.update = function() {
		//this.position = {
		//	x: this.position.x + 1,
		//	y: this.position.y
		//}
		//this.rotation += 1;
		//this.pic.position = this.position;
		//this.pic.rotation = this.rotation;
		this.keydown=function(e,list){  //根據指令做出對應動作
			if(e.key === 'Right'){
				this.pic.position.x += 10;
			}
			if(e.key === 'Left'){
				this.pic.position.x -= 10;
			}
		}
	};
		
	this.draw = function(ctx){
		this.pic.draw(ctx);
	};
};