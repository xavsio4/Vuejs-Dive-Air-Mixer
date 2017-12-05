/*
** Dive trip Tools using Vuejs
** Author: Xavier Villamuera (xavier.Villamuera@gmail.com)
*/


var app = new Vue({
  el: "#dtt",
  data: {
    ppoval:'1.4',
    eanval:'0.32',
    mod:(((0.9/0.22)-1)*10),
    depthval: this.mod,
    eanx: this.eanval,
    ead:((((1-0.22)*((((0.9/0.22)-1)*10)+10))/0.79)-10),
  },
  computed: {
    ppodsp : function () { this.calcmod(); return this.ppoval+' bar'; },
    eandsp : function () { this.calcmod(); return (this.eanval*100).toFixed(2)+' %'; },
    depthdsp : function () { this.calcbest(); return this.depthval.toFixed(2)+' m'; },
  },
  methods:
  {
    calcmod : function() {
      this.mod = ((this.ppoval/this.eanval)-1)*10;
      this.ead = (((1-this.eanval)*(this.mod+10))/0.79)-10;
      this.depthval=this.mod;
    },

    calcbest : function() {
      this.eanval =  (this.ppoval/((this.depthval/10)+1));
      if (this.eanval < 0.21) this.eanval = 0.21;
      this.eanx = this.eanval*100;
      }
  }
});
