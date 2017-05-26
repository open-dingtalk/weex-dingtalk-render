import './global.js';

export function setVue(weex_vue_render){
  if (!weex_vue_render){
    throw new Error('[Weex Vue Render] weex-vue-render not found. Please make sure weex-vue-render runtime is imported.');
  }
  __dingtalk__.__weex_vue__ = weex_vue_render;
}
