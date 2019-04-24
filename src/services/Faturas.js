/* eslint-disable */

import { http } from './config';



export default {

  FaturaObj:{},

  listar: () => {
    return http.get('faturas')
  },
  adicionar: (fatura) => {

    return http.post('faturas/fatura', fatura).then(response => {
      console.log(response);
      if (response.statusText == 'OK') {
        alert('salvo com sucesso!')
      }
    }).catch(function (error) {
      console.log(error);
    });
  },

  editar: (fatura) => {

    return http.put('faturas/fatura', fatura).then(response => {
      console.log(response);
      if (response.statusText == 'OK') {
        alert('salvo com sucesso!')
      }
    }).catch(function (error) {
      console.log(error);
    });
  },

  consultar: (id) =>{
    var url = 'faturas/'+id
    return http.get(url)
  },

  remover: (id) =>{
    var url = 'faturas/'+id
    return http.delete(url).then(resp=>{
      return http.get('faturas')
    })
  }
}

