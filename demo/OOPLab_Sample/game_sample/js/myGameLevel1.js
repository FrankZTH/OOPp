var MyGame = Framework.Class(Framework.Level , {

	load: function(){
				var off = this;
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
				this.practice = new Practice();
				this.practice.load();

				this.downArrow = new downArrow();
				this.downArrow.load();

				this.book = new book(off);
				this.book.load();

				//this.clickBook = new clickBook();
				//this.now = 0;


				this.rootScene.attach(this.practice.pic);
				this.rootScene.attach(this.downArrow);
				this.rootScene.attach(this.book);

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
			else if(this.book.mousedown(e)==0){

			}

			else
			{
						this.practice.pic.position.x+=(e.x-this.practice.pic.position.x);
			}
	},

	/*draw(ctx) {
		console.log('yo');
	}*/


});
