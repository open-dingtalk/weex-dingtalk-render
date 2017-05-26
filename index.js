import components from './components/index.js'
import { setVue } from './env/index.js';

function init(weex_vue_render){
  setVue(weex_vue_render);
  for (const name in components){
    __dingtalk__.__weex_vue__.registerComponent(name,components[name]);
  }
}

if (typeof window !== 'undefined' && window.weex) {
  init(window.weex)
}

export default init;
