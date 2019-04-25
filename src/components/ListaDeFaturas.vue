<template>
  <div class="container">
      <div class="row">
        <input class="col-md-4 linha" type="text" v-on:keyup="buscar" v-model="busca" placeholder="Buscar">
    </div>

    <br>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="display:none">Id</th>
          <th scope="col">Usuario</th>
          <th scope="col">Nome Da Empresa</th>
          <th scope="col">Valor</th>
          <th scope="col">Data De Vencimento</th>
          <th scope="col">Pagou</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fatura in faturas" :key="fatura._id">
          <td style="display:none">{{fatura._id}}</td>
          <td>{{fatura.idUsuario}}</td>
          <td>{{fatura.nomeDaEmpresa}}</td>
          <td>{{fatura.valor}}</td>
          <td>{{fatura.dataDeVencimento | moment('DD/MM/YYYY')}}</td>
          <td>{{fatura.pagou? 'Pagou' : 'Não Pagou'}}</td>
          <td>
            <router-link
              class="btn btn-primary"
              :to="{ name: 'AdicionarFatura', params: { id: fatura._id } }"
            >Editar</router-link>
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
import Vue from 'vue';
import Fatura from "../services/Faturas.js";
import router from "../router";
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
    moment,
})

export default {
  name: "ListaDeFaturas",
  methods: {
    Remover: function(fatura) {
      if (confirm("Deseja remover linha selecionada?")) {
        Fatura.remover(fatura._id).then(resp => {
          console.log(resp);
          this.faturas = resp.data;
          this.faturaBakup = resp.data;
      
        });
      }
    },
  
    buscar: function() {
      if (this.busca == "") {
        this.faturas = this.faturaBakup;
      }
      this.faturas = this.faturas.filter(item => {
        return item.nomeDaEmpresa.substring(0, this.busca.length) == this.busca;
      });
    }
  },
  mounted() {
    Fatura.listar().then(resp => {
      this.faturas = resp.data;
      this.faturaBakup = resp.data;
    });
  },
  data() {
    return {
      faturaBakup: [],
      faturas: [],
      busca: ""
    };
  }
};
</script>
<style>
.linha {
  margin-left: 45rem;
}
</style>