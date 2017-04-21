var Character = function(file, options) {
    this.url = file;
    this.temp;
    this.int;
    //AnimationSprite當圖片是一整張圖片(連續圖), 而非Array時一定要給col, row三個(url是一定要的)
    this.sprite = new Framework.AnimationSprite({url:this.url,col:4,row:2,loop:true,speed:0.7});
    //以下這句話的意思是當options.position為undefined時this.sprite.position = x: 0, y: 0}
    //若options.position有值, 則this.sprite.position = options.position
    //原因是在JS中, undefined會被cast成false

    this.sprite.position = options.position || {x:0,y:0};
    this.sprite.scale = options.scale || 1;

    //由於0會被cast成false, 故不能用上面的方法來簡化
    this.sprite.rotation = (Framework.Util.isUndefined(options.rotation))?0:options.rotation;

    //播放人物在跑步的圖
    this.runright = function() {
        this.sprite.start({ from: options.runright.from, to: options.runright.to, loop: true });
    };
    this.runleft = function() {
        this.sprite.start({ from: options.runleft.from, to: options.runleft.to, loop: true });
    };
    this.stopright = function() {
        this.sprite.start({ from: options.stopright.from, to: options.stopright.to, loop: true });
    };
    this.stopleft = function() {
        this.sprite.start({ from: options.stopleft.from, to: options.stopleft.to, loop: true });
    };
    this.move = function(x){
        this.int = x-this.sprite.position.x;
        this.temp = x;
        if(this.temp-this.sprite.position.x>0){
          this.runright();
          //console.log(this.sprite.position.x);

        }
        else if(this.temp-this.sprite.position.x<0){
          this.runleft();
        }
        this.sprite.update();
    };
    this.update = function(){
      if(this.temp>this.sprite.position.x){
        this.sprite.position.x += 1;
      }
      else if(this.temp<this.sprite.position.x){
        this.sprite.position.x -= 1;
      }
      else if(this.int >0){
        this.stopright();
      }
      else if(this.int <0){
        this.stopleft();
      }
    }
    this.judge = function(){
      if(this.temp == this.sprite.position.x){
        return 1;
      }
      else{
        return 0;
      }
    }



};
