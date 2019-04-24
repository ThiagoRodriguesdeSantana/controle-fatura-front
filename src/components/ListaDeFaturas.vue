<template>
<div class="container">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Usuario</th>
        <th scope="col">Nome Da Empresa</th>
        <th scope="col">Valor</th>
        <th scope="col">Data De Vencimento</th>
        <th scope="col">Pagou</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="fatura in faturas" :key="fatura.idFatura">
        <td>{{fatura.idFatura}}</td>
        <td>{{fatura.idUsuario}}</td>
        <td>{{fatura.nomeDaEmpresa}}</td>
        <td>{{fatura.valor}}</td>
        <td>{{fatura.dataDeVencimento}}</td>
        <td>{{fatura.pagou}}</td>
        <td>
          <button class="btn btn-primary" v-on:click="Editar(fatura)">Editar</button>
        </td>
         <td>
          <button class="btn btn-danger" v-on:click="Remover(fatura)">Remover</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
/* eslint-disable */
import Fatura from '../services/Faturas.js'
export default {
  name: "ListaDeFaturas",
  methods: {
    Editar: function(fatura) {
     alert(fatura.idFatura +' '+ fatura.nomeDaEmpresa)
    },
    Remover: function(fatura){
      alert('Remover')
    }
  },
  mounted(){
    Fatura.listar().then(resp=>{
      console.log(resp.data)
      this.faturas = resp.data;
    })
  },
  data() {
    return {
      faturas: []
    };
  }
};
</script>