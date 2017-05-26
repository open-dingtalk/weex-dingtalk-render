
const _css = '.dd-web{position: relative;width: 100%;height: 100%;border: none;box-sizing: border-box;}';

export default {
  name: 'dd-web',
  props:{
    src: String
  },
  mounted (){
    if (this.$el){
      this.$emit('pagestart');
      this.$el.addEventListener('load', event => {
        this.$emit('pagefinish')
      });
    }
  },
  methods:{
    goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back()
      }
    },
    goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward()
      }
    },
    reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload()
      }
    }
  },
  render(createElement){
    return createElement('iframe',{
      attrs: {
        src: this.src
      }
    })
  },
  _css
}
