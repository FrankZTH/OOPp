var MyMenu = Framework.exClass(Framework.GameMainMenu , {
	//初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';  //Loading%數顏色
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },

	load: function(){
		//Animation Sprite會用到的圖片資源

				this.startGame = new Framework.Sprite(define.imagePath + 'NTUT1.png');
        //為了讓之後的位置較好操控, new出一個位於中心點且可以黏貼任何東西的容器
        //注意, Position都是用中心點
        this.center = new Framework.Scene();  //背景圖中心
        this.center.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
				this.startGame.scale=0.7;
        //由於scrollBar將會被attach到this.center上
        //故x設為0, 表示x也是要正中心

        this.startGame.position = {
            x: this.center.x,
            y: this.center.y
        };

        this.audio = new Framework.Audio({
            song1:{
                mp3: define.musicPath + 'Scared.mp3'
            }
        });

        this.audio.play({name: 'song1', loop: true});
        this.center.attach(this.startGame);
        this.rootScene.attach(this.center);

        //this.photo.start();

	},

    initialize: function() {

    },

    update:function(){
    },

    draw: function(parentCtx) {
        this.rootScene.draw(parentCtx);
    },

    click: function(e) {
        if (e) {
            console.log(e.x, e.y);
        }
        this.previousTouch = { x: e.x, y: e.y };
        if (e.x>=this.startGame.position.x) {
            Framework.Game.goToLevel('elevator');
        }
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.mousedown({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },

    touchend: function (e) {
        this.mouseup();
    },

    touchmove: function (e) {
        this.mousemove({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
});
