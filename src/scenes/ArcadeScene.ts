import Phaser from 'phaser'

export default class ArcadeScene extends Phaser.Scene
{
    constructor()
    {
        super('Arcade')
    }

    preload()
    {
        this.load.setBaseURL('http://localhost:8080')
        this.load.image('arcade','static/images/arcade.jpg')
        
        //**TODO***
        // Once that has been sorted, move to LoadingScreenScene loading them in from file into cache to they can be displayed while loading
        //Then added to the scene within ArcadeScene
        //https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
        //https://github.com/johwiese/Phaser3-Loading-screen-asset-organization/blob/master/assets/json/assets.json
        //https://jwiese.eu/en/blog/2018/04/phaser-3-loading-screen-asset-organization/
    }

    create()
    {
        var arcadeImage = this.add.image(400, 300, 'arcade')
  

    }
}