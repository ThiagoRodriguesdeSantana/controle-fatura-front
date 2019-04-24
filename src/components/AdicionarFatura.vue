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
      <button type="submit" class="btn btn-primary">Cancelar</button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import Fatura from "../services/Faturas.js";
import { error } from 'util';
export default {
  name: "AdicionarFatura",
  methods: {
    salvar: function() {
      Fatura.adicionar(this.fatura);
      
    }
  },
  data() {
    return {
      fatura: {
        idUsuario: "",
        nomeDaEmpresa: "",
        valor: 0,
        dataDeVencimento: new Date(),
        pagou: false
      }
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