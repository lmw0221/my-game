import {
  createRenderer
} from '@vue/runtime-core';
import {
  Graphics,
  Text
} from 'pixi.js';

// 创建渲染器
const renderer = createRenderer({
  createElement(type) {
    // 基于type 创建图形
    let element;
    if (type === 'circle') {
      // 画圆
      // pixi
      element = new Graphics();
      element.beginFill(0xff0000, 1)
      element.drawCircle(0, 0, 50)
      element.endFill()
    }
    return element;
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  patchProp(el, key, prevValue, nextValue) {
    console.log('-------patchProp-------');
    console.log(el);
    console.log(key);
    console.log(prevValue);
    console.log(nextValue);
    // pixi
    // el.x = nextValue
    el[key] = nextValue
  },
  setElementText(node, text) {
    console.log('elementText');
    console.log(node);
    console.log(text);
    const canvasText = new Text(text)
    node.addChild(canvasText)
  }
});

export function createApp(rootComponent) {
  // 调用 renderer
  return renderer.createApp(rootComponent)
}