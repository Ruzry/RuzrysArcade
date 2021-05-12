import Phaser from 'phaser'

const Orange = 0xFFAD00
const LightPurple = 0x832AEE

export default class LoadingScreenScene extends Phaser.Scene
{
    private centreX: number = 0;
    private centreY: number = 0;

    constructor()
    {
        super('loading-screen-Scene')
    }

    preload()
    {
        this.load.setBaseURL('http://labs.phaser.io')


    }

    create(){
        
        const {width, height} = this.scale
        this.centreX = width * 0.5
        this.centreY = height * 0.5
        
        this.createLoadingAnimation()

        var loadingText = this.add.text(this.centreX, this.centreY - 100, 'Loading...', {
            fontSize: 'Bold 34px',
            color: '#1985ff',   
        })
        loadingText.setOrigin(0.5)

    }

    createLoadingAnimation(){



        const leftBar = this.add.rectangle(this.centreX - 50, this.centreY, 40, 75, Orange, 1)
        const middleBar = this.add.rectangle(this.centreX, this.centreY, 40, 75, Orange, 1)
        const rightBar = this.add.rectangle(this.centreX + 50, this.centreY, 40, 75, Orange, 1)

        this.add.tween({
            targets: leftBar,
            scaleY: 2,
            duration: 100,
            repeat: -1,
            repeatDelay: 300,
            yoyo: true,
            ease: Phaser.Math.Easing.Bounce.In

        })

        this.add.tween({
            targets: middleBar,
            scaleY: 2,
            duration: 100,
            delay: 100,
            repeat: -1,
            repeatDelay: 300,
            yoyo: true,
            ease: Phaser.Math.Easing.Bounce.In

        })

        this.add.tween({
            targets: rightBar,
            scaleY: 2,
            duration: 100,
            delay: 200,
            repeat: -1,
            repeatDelay: 300,
            yoyo: true,
            ease: Phaser.Math.Easing.Bounce.In

        })
    }
}
