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

        //繪製Sprite的boundry (Debug用)


        //載入要被播放的音樂清單
        //資料夾內只提供mp3檔案, 其餘的音樂檔案, 請自行轉檔測試

        this.audio = new Framework.Audio({
            LV1:{
                mp3: define.musicPath + 'LV1.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
				/*this.downArrow = new Framework.Sprite(define.imagePath + 'downArrow.png');
				this.downArrow.scale = 0.15;
        this.downArrow.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 4 * 3.5
        };
				this.rootScene.attach(this.downArrow);
        this.audio.play({name: 'LV1', loop: true});

				touchstart: function (e) {
		        //為了要讓Mouse和Touch都有一樣的事件
		        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
		        this.click({ x: e.touches[0].clientX, y: e.touches[0].clientY });
		    },

		    click: function (e) {

		        console.log(e.x, e.y);
		        if (!this.downArrow.position) {
		            return;
		        }
		        if(e.x >= this.downArrow.position.x && e.x <= this.downArrow.position.x + 597 && e.y >= this.downArrow.position.y && e.y <= this.downArrow.position.y + 800) {
							this.audio.stopAll();
							Framework.Game.goToLevel('office');
							return;
		        }
		    },
        //播放時, 需要給name, 其餘參數可參考W3C




		this.practice = new practice();
		this.practice.load();
		this.rootScene.attach(this.practice.pic);

		//this.gameMap=new GameMap();
		//this.gameMap.load();
		//this.rootScene.attach(this.gameMap);

		this.position = {
			x: 100,
			y: 100
		}


	},

    initialize: function() {


    },

    update: function() {
        var game = this;
        this.rootScene.update();
        this.practice.update();
		//this.Practice.update();
        //以下為當被攻擊時會停下來, 並且當被攻擊的動畫播放完時便繼續跑的Scenario

    },

    draw:function(parentCtx){
        //this.pic.draw();//飛機圖
    },

    keydown:function(e, list){
    	this.practice.keydown(e, list);
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.click({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },

    click: function (e) {

        console.log(e.x, e.y);
        if (!this.rectPosition) {
            return;
        }
        //暫停
        if(e.x >= this.rectPosition.x && e.x <= this.rectPosition.x + 260 && e.y >= this.rectPosition.y && e.y <= this.rectPosition.y + 90) {
            if(!this.isClockStop) {

                this.isClockStop = true;
                //Audio可以一次暫停所有的音樂
                this.audio.pauseAll();
            } else {
                this.isClockStop = false;

                //Audio也可以針對一首歌進行操作(繼續播放)
                this.audio.resume('song2');
            }
        }
        /*else if(e.x >= this.clock.upperLeft.x && e.x <= this.clock.lowerRight.x && e.y >= this.clock.upperLeft.y && e.y <= this.clock.lowerRight.y) {
            //由於Click Me在太小的螢幕的情況下會蓋到Clock, 導致點擊Click Me時, 會回到前一個Level,
            //故使用else if, 並優先選擇Click Me會觸發的條件
            this.audio.stopAll();
            Framework.Game.goToPreviousLevel();
            return;
        }*/
    },
});
