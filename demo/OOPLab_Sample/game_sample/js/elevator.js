var elevator = Framework.Class(Framework.Level , {

				load: function(){
					var open=false;
	        this.background = new Framework.Sprite(define.imagePath + 'elevator.png');
					this.change = new Framework.Sprite(define.imagePath + 'openElevator.png');
					this.mirror = new Framework.Sprite(define.imagePath + 'noMirror.png');
	        this.background.scale = 0.32;  //時鐘規模
					this.change.scale = 0.32;
					this.mirror.scale =0.32;
	        this.background.position = {  //以時鐘圖片的規模為原點
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2
	        };
					this.change.position = {
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2
	        };
					this.mirror.position = {
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2
	        };
					this.characterPosition = {
						x: Framework.Game.getCanvasWidth() / 2 ,
						y: Framework.Game.getCanvasHeight() / 2 + 100
					};
					this.chtwo = {
						x: this.characterPosition.x ,
					  y: Framework.Game.getCanvasHeight() / 2 -20
					};

	        this.character = new Character(define.imagePath+'character.png',{position:this.characterPosition,scale:0.15,runright:{from:0,to:3},runleft:{from:4,to:7},stopright:{from:0,to:0},stopleft:{from:4,to:4}});
					this.character2 = new Character(define.imagePath+'character.png',{position:this.chtwo,scale:0.09,runright:{from:0,to:3},runleft:{from:4,to:7},stopright:{from:0,to:0},stopleft:{from:4,to:4}});

	        this.audio = new Framework.Audio({
	            LV1:{
	                mp3: define.musicPath + 'LV1.mp3',
	            }
	        });
					this.audio.play({name: 'LV1', loop: true});


					this.rootScene.attach(this.background);
					this.rootScene.attach(this.character.sprite);

				},


				update:function(){
					this.character.update();
					this.character2.update();
				},
			  initialize: function() {
			  },

				mousemove: function(e) {        //偵測滑鼠移動並播放圖片
			  },

				mousedown: function(e){
					console.log(e);
					if(e.x>=877&&e.x<=883&&e.y>=311&&e.y<=317) {
						this.rootScene.attach(this.change);
						this.rootScene.detach(this.background);
						this.rootScene.detach(this.character.sprite);
						this.rootScene.attach(this.character2.sprite);
						this.rootScene.attach(this.mirror);
						this.rootScene.attach(this.character.sprite);
						open=true;
					}
					if(open==true){
						if(e.x>=627&&e.x<=808&&e.y>=103&&e.y<=518){
							Framework.Game.goToNextLevel();
						}
					}

				},

				mouseup: function(e){
					if(e.e.which!=3 && e.e.which!=2){
						this.character.move(e.x);
						this.character2.move(e.x);
					}
				}

});
