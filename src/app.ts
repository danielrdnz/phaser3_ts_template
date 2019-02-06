  import 'phaser';
  import Boot from './scene/boot';
  import Preload from './scene/preload';
    
    class App extends Phaser.Game {
    
        constructor(config : any) {
            
           super(config);
           this.scene.add('Boot', Boot);
           this.scene.add('Preload', Preload);
           this.scene.start('Boot', config);
        }
       
    }
    function startApp(): void {
        
        let gameConfig: any = {
            type: Phaser.CANVAS,
            parent: 'game',
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: '#FFFFFF',
            physics: {
                default: 'arcade',
                arcade: { debug: true }
            }
             
        };
        
        let app = new App(gameConfig);
        
        resize()
        window.addEventListener("resize",resize,false)
    }
       
    function resize() {
        var canvas = document.querySelector("canvas"), width = window.innerWidth, height = window.innerHeight;
        var wratio = width / height, ratio = canvas.width / canvas.height;
     
        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }
    
    window.onload = () => {
    
        startApp();
        
    
    };
