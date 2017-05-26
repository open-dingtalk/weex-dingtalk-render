'use strict';

const _css = '.dd-web{position: relative;width: 100%;height: 100%;border: none;box-sizing: border-box;}';

var ddWeb = {
  name: 'dd-web',
  props: {
    src: String
  },
  mounted() {
    if (this.$el) {
      this.$emit('pagestart');
      this.$el.addEventListener('load', event => {
        this.$emit('pagefinish');
      });
    }
  },
  methods: {
    goBack() {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward() {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload() {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },
  render(createElement) {
    return createElement('iframe', {
      attrs: {
        src: this.src
      }
    });
  },
  _css
};

var components = {
  'dd-web': ddWeb
};

const dingtalk = {
  __weex_vue__: null
};

window.__dingtalk_global__ = window;
window.__dingtalk__ = dingtalk;

function setVue(weex_vue_render) {
  if (!weex_vue_render) {
    throw new Error('[Weex Vue Render] weex-vue-render not found. Please make sure weex-vue-render runtime is imported.');
  }
  __dingtalk__.__weex_vue__ = weex_vue_render;
}

function init(weex_vue_render) {
  setVue(weex_vue_render);
  for (const name in components) {
    __dingtalk__.__weex_vue__.registerComponent(name, components[name]);
  }
}

if (typeof window !== 'undefined' && window.weex) {
  init(window.weex);
}

module.exports = init;
//# sourceMappingURL=weex-dingtalk-render.js.map
