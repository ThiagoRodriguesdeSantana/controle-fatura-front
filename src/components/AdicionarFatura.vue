<template>
  <div class="container">
    <form class="form-group col-md-12" @submit.prevent="salvar">
      <div class="row">
        <label for="txtUsuario" class="col-md-3">Usuário:</label>
        <input
          id="txtUsuario"
          class="form-control form-control-sm col-md-1"
          type="text"
          placeholder="Usuário"
          v-model="fatura.idUsuario"
        >
        <div class="col-md-8">
          <label for="txtUsuario" class="col-md-9 pagou">Pagou:</label>
          <input
            id="txtUsuario"
            class="col-md-2"
            type="checkbox"
            placeholder="Usuário"
            v-model="fatura.pagou"
          >
        </div>
      </div>
      <br>
      <div class="row">
        <label for="txtNomeEmpresa" class="col-md-3">Nome da Empresa:</label>
        <input
          id="txtNomeEmpresa"
          class="form-control form-control-sm col-md-8"
          type="text"
          placeholder="Nome da Empresa"
          v-model="fatura.nomeDaEmpresa"
        >
      </div>
      <br>
      <div class="row">
        <label for="txtValor" class="col-md-3">Valor</label>
        <input
          id="txtValor"
          class="form-control form-control-sm col-md-2 currency"
          type="number"
          placeholder="R$"
          v-model="fatura.valor"
        >
        <label for="txtDataDeVencimento" class="col-md-3">Data de Vencimento</label>
        <input
          id="txtDataDeVencimento"
          class="form-control form-control-sm col-md-3"
          type="date"
          placeholder="Data de Vencimento"
          v-model="fatura.dataDeVencimento"
        >
      </div>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Salvar</button>
       <router-link class="btn btn-primary" :to="{ name: 'ListaDeFaturas'}">Cancelar</router-link>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import Fatura from "../services/Faturas.js";
import { error } from "util";

function objetoVazio() {
  return {
    idUsuario: "",
    nomeDaEmpresa: "",
    valor: 0,
    dataDeVencimento:"",
    pagou: false
  };
}

export default {
  name: "AdicionarFatura",
  methods: {
    salvar: function() {
      console.log(this.id);
      
      if (this.id != 0) {
        Fatura.editar(this.fatura);
      } else {
        Fatura.adicionar(this.fatura);
      }
    },
  },
  created() {
    if(this.$route.params.id){
       this.id = this.$route.params.id;
    }
    else{
       this.id = 0;
    }
    
   
  },
  mounted() {
    if (this.id != 0) {
      Fatura.consultar(this.id).then(resp => {
        this.fatura = resp.data;
      });
    } 
  },
  data() {
    return {
      fatura: objetoVazio(),
      id: 0
    };
  }
};
</script>
<style>
label,
input {
  text-align: left;
  margin-bottom: -1rem;
}
.pagou {
  text-align: right;
}
</style>