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
      <tr v-for="fatura in faturas" :key="fatura._id">
        <td>{{fatura._id}}</td>
        <td>{{fatura.idUsuario}}</td>
        <td>{{fatura.nomeDaEmpresa}}</td>
        <td>{{fatura.valor}}</td>
        <td>{{fatura.dataDeVencimento}}</td>
        <td>{{fatura.pagou}}</td>
        <td>
          <router-link class="btn btn-primary" :to="{ name: 'AdicionarFatura', params: { id: fatura._id } }">Editar</router-link>
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
import router from '../router'


export default {
  name: "ListaDeFaturas",
  methods: {
    Remover: function(fatura){

      if(confirm("Deseja remover linha selecionada?")){
        Fatura.remover(fatura._id).then(resp=>{
          console.log(resp)
          this.faturas = resp.data
        })
      }
    },
  },
  mounted(){
    Fatura.listar().then(resp=>{
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