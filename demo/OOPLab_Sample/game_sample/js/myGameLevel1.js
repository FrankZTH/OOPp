var MyGame = Framework.Class(Framework.Level , {

	load: function(){

        this.background = new Framework.Sprite(define.imagePath + 'brokentable.jpg');
        this.background.scale = 1.10;
        this.background.position = {
					x: Framework.Game.getCanvasWidth() / 2 ,
					y: Framework.Game.getCanvasHeight() / 2
        };
				this.characterPosition = {
					x: Framework.Game.getCanvasWidth() / 2 ,
				  y: Framework.Game.getCanvasHeight() / 2+100
				};
        this.character = new Character(define.imagePath+'character.png',{position:this.characterPosition,scale:0.1,runright:{from:0,to:3},runleft:{from:4,to:7},stopright:{from:0,to:0},stopleft:{from:4,to:4}});
        this.audio = new Framework.Audio({
            LV1:{
								mp3: define.musicPath + 'LV1.mp3',
            }
        });
				this.audio.play({name: 'LV1', loop: true});

				this.downArrow = new downArrow();
				this.downArrow.load();

				this.book = new book();
				this.book.load();

				this.overScene = new OverScene();
				this.overScene.load();

				this.clickBook = new clickBook(this.self);
				this.clickBook.load();
				this.rootScene.attach(this.background);
				this.rootScene.attach(this.character.sprite);
				this.rootScene.attach(this.book);
				this.rootScene.attach(this.downArrow);
	},
	initialize: function() {

	},
	update:function(){
		this.character.update();

	},
	click: function (e) {
		console.log(e);
			if(this.downArrow.mousedown(e)==0&&this.character.judge()==1){
				this.audio.stopAll();
	      Framework.Game.goToLevel('office');
			}
	},

	mousemove: function(e) {        //偵測滑鼠移動並播放圖片
    this.book.mousemove(e);
  },

	mousedown: function(e){
		console.log(e);
		console.log(e.e.which);
		this.book.mousedown(e);
	},

	mouseup: function(e){
		if(this.book.mouseup(e)==0){this.downArrow.mousedown(e);}
		else if(e.e.which!=3 && e.e.which!=2)this.character.move(e.x);
	}

});
