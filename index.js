import Vue from 'vue'

new Vue({
  el: '#app',
  data:{
    // name: ''
    edad : 0,
    contador:0,
    numero : 1,
     lenguajes: ['C', 'C++', 'C#', 'Java', 'Ruby', 'Kotlin'],
   articulos: [{
                    codigo: 1, 
                    descripcion: 'papas',
                    precio: 12.52
                   },{
                    codigo: 2, 
                    descripcion: 'naranjas',
                    precio: 21
                   },{
                    codigo: 3, 
                    descripcion: 'peras',
                    precio: 18.20
                   }]
  },
   methods: {
        incrementar: function() {
          this.contador = this.contador + 1;
        }
      }
  // template: '<h1>hello Vue</h1>'
})