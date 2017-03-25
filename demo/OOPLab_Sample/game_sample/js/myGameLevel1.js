var MyGame = Framework.Class(Framework.Level , {

	load: function(){

        this.isStop = false;
        this.isPlayed = false;

        this.background = new Framework.Sprite(define.imagePath + 'brokentable.jpg');
        this.background.scale = 1.10;  //時鐘規模
        this.background.position = {  //以時鐘圖片的規模為原點
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
				this.rootScene.attach(this.practice.pic);

				this.downArrow = new Framework.Sprite(define.imagePath + 'downArrow.png');
				this.downArrow.scale = 0.15;
        this.downArrow.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 4 * 3.5
        };
				this.rootScene.attach(this.downArrow);

	},
	click: function (e) {
	    console.log(e.x, e.y);

	    if(e.x >= this.downArrow.position.x-40 && e.x <= this.downArrow.position.x + 40 &&
				 e.y >= this.downArrow.position.y-52.5 && e.y <= this.downArrow.position.y + +52.5)
			{
				this.audio.stopAll();
				Framework.Game.goToLevel('office');
				return;
	    }
			else
			{
	          this.practice.pic.position.x+=(e.x-this.practice.pic.position.x);
 			}
	},

  initialize: function() {

  },
});
