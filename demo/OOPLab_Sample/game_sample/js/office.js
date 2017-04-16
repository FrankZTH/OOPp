var office = Framework.Class(Framework.Level , {

	load: function(){

        this.background = new Framework.Sprite(define.imagePath + 'office.png');
        this.background.scale = 0.32;  //時鐘規模
        this.background.position = {  //以時鐘圖片的規模為原點
					x: Framework.Game.getCanvasWidth() / 2 ,
					y: Framework.Game.getCanvasHeight() / 2
        };
				this.characterPosition = {x: Framework.Game.getCanvasWidth() / 2 ,
														      y: Framework.Game.getCanvasHeight() / 2+100};
        this.character = new Character(define.imagePath+'character.png',{position:this.characterPosition,scale:0.23,runright:{from:0,to:3},runleft:{from:4,to:7},stopright:{from:0,to:0},stopleft:{from:7,to:7}});


        this.audio = new Framework.Audio({
            LV1:{
                mp3: define.musicPath + 'LV1.mp3',

            }
        });
				this.audio.play({name: 'LV1', loop: true});



				this.book = new book();
				this.book.load();
				this.rootScene.attach(this.background);
				this.rootScene.attach(this.character.sprite);
				},


				update:function(){
					this.character.update();
				},
			  initialize: function() {
			  },

				click: function (e) {
						this.character.move(e.x);
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
