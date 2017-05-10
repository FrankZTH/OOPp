var office = Framework.Class(Framework.Level , {

				load: function(){

	        this.background = new Framework.Sprite(define.imagePath + 'office.png');
					this.change = new Framework.Sprite(define.imagePath + 'inside.jpg');
	        this.background.scale = 0.32;  //時鐘規模
					this.change.scale = 0.32;
	        this.background.position = {  //以時鐘圖片的規模為原點
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2
	        };
					this.change.position = {
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2
	        };
					this.characterPosition = {x: Framework.Game.getCanvasWidth() / 2 ,
															      y: Framework.Game.getCanvasHeight() / 2+100};
	        this.character = new Character(define.imagePath+'character.png',{position:this.characterPosition,scale:0.2,runright:{from:0,to:3},runleft:{from:4,to:7},stopright:{from:0,to:0},stopleft:{from:4,to:4}});
					this.characterBack = new Framework.Sprite(define.imagePath + 'back.png');
					this.characterBack.position = {
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2+150
	        };
					this.characterBack.scale=0.3;
	        this.audio = new Framework.Audio({
	            LV1:{
	                mp3: define.musicPath + 'LV1.mp3',

	            }
	        });
					this.audio.play({name: 'LV1', loop: true});


					this.card = new card();
					this.card.load();


					this.rootScene.attach(this.background);
					this.rootScene.attach(this.card);
					this.rootScene.attach(this.character.sprite);

				},


				update:function(){
					this.character.update();
				},
			  initialize: function() {
			  },

				mousemove: function(e) {        //偵測滑鼠移動並播放圖片
			    this.card.mousemove(e);
			  },

				mousedown: function(e){
					console.log(e);
					this.card.mousedown(e);
					if(e.e.which==3){
						this.rootScene.detach(this.characterBack);
						this.rootScene.detach(this.change);
					}
				},

				mouseup: function(e){
					if(this.card.mouseup(e)==1){
						if(e.x>=446&&e.x<=484&&e.y>=230&&e.y<=276&&this.character.sprite.position.x<754&&this.character.sprite.position.x>506){
							this.rootScene.attach(this.change);
							this.rootScene.attach(this.card);
							this.rootScene.attach(this.characterBack);
						}
					}
					else if(e.e.which!=3 && e.e.which!=2) this.character.move(e.x);
				}

});
