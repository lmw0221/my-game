import {createApp} from './src/runtime-canvas';
import App from './src/App';
import * as PIXI from 'pixi.js';
console.log(PIXI);

// template => render()`
const app = createApp(App)
console.log(app);

const game = new PIXI.Application({
  width: 500,
  height: 400
})


document.body.appendChild(game.view)

// mount 
createApp(App).mount(game.stage)


console.log(game);