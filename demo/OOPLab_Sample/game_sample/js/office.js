var office = Framework.Class(Framework.Level , {

	load: function(){

        this.isStop = false;
        this.isPlayed = false;

        this.background = new Framework.Sprite(define.imagePath + 'office.png');
        this.background.scale = 0.32;  //時鐘規模
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
				this.audio.play({name: 'LV1', loop: true});

				this.practice = new Practice();
				this.practice.load();

				this.book = new book();
				this.book.load();

				this.rootScene.attach(this.practice.pic);
				},


			  initialize: function() {
			  },

				click: function (e) {
						this.practice.move(e);
				},

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
