var office = Framework.Class(Framework.Level , {

	load: function(){

        this.isStop = false;
        this.isPlayed = false;

        this.background = new Framework.Sprite(define.imagePath + 'office.jpg');
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

});
