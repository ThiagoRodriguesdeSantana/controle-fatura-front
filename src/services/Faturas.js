/* eslint-disable */

import {http} from './config';

export default{
  listar:()=>{
    return http.get('faturas')
  },
  adicionar:(fatura)=>{

    console.log(fatura);
    alert(fatura.nomeDaEmpresa);
    return http.post('faturas/fatura',fatura).then(response => {
      console.log(response);
      if (response.statusText == 'OK') {
          alert('salvo com sucesso!')
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

