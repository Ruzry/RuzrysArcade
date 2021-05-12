import Phaser from 'phaser'
import ArcadeScene from './scenes/ArcadeScene'

import HelloWorldScene from './scenes/HelloWorldScene'
import LoadingScreenScene from './scenes/LoadingScreenScene'



const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [ArcadeScene]
}

export default new Phaser.Game(config)

