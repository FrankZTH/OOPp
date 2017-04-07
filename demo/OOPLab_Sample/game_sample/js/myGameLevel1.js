var MyGame = Framework.Class(Framework.Level , {

	load: function(){
        this.isStop = false;
        this.isPlayed = false;

        this.background = new Framework.Sprite(define.imagePath + 'brokentable.jpg');
        this.background.scale = 1.10;
        this.background.position = {
					x: Framework.Game.getCanvasWidth() / 2 ,
					y: Framework.Game.getCanvasHeight() / 2
        };

        this.rootScene.attach(this.background);

        this.audio = new Framework.Audio({
            LV1:{
								mp3: define.musicPath + 'LV1.mp3',
            }
        });
				//this.audio.play({name: 'LV1', loop: true});
				this.practice = new Practice();
				this.practice.load();

				this.downArrow = new downArrow();
				this.downArrow.load();

				this.book = new book();
				this.book.load();

				//this.clickBook = new clickBook();
				//this.now = 0;
				this.overScene = new OverScene();
				this.overScene.load();

				this.rootScene.attach(this.practice.pic);
				this.rootScene.attach(this.downArrow);
				this.rootScene.attach(this.book);
				//this.rootScene.attach(this.clickBook);
	},
	initialize: function() {

	},
	update:function(){


	},
	click: function (e) {
			console.log(e.x, e.y);
			if(this.downArrow.mousedown(e)==0){
				this.audio.stopAll();
	      Framework.Game.goToLevel('office');
			}
			else if(this.book.mousemove(e)==0){

			}
			//else if(this.book.mouseup(e)==0){}
			else
			{
					this.practice.pic.position.x+=(e.x-this.practice.pic.position.x);
			}
	},

	/*draw(ctx) {
		console.log('yo');
	}*/
	mousemove: function(e) {        //偵測滑鼠移動並播放圖片
        this.book.mousemove(e);
    },

	mousedown: function(e){
		this.book.mousedown(e);
	},

	mouseup: function(e){
		this.book.mouseup(e);
	}

});
