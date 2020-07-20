import {
  defineComponent,
  h
} from '@vue/runtime-core';

export default defineComponent({
  render() {
    // 创建虚拟节点
    const vnode = h("circle", {
      x: 150,
      y: 150
    }, [h("circle", {
      x: 200,
      y: 0
    })])
    console.log(vnode);
    return vnode;

  }
})