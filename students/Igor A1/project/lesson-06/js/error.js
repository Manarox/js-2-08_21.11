Vue.component('error', {
  
  props:    ['errorMsg'],
  
  template: `<p>{{errorMsg}}</p>`,
  
  methods: {
    log(msg) {
      console.error(msg);
      alert(msg);
    }
  }
  
});