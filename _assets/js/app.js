new Vue({

  el: '#app',

  data: {

    isActive: false

  }, // data

  methods: {

    toggleActive: function(){
      this.isActive = !this.isActive;
    }

  }  // methods

})