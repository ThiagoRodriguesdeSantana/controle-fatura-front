/* eslint-disable */

import {http} from './config';

export default{
  listar:()=>{
    return http.get('faturas')
  },
  adicionar:(fatura)=>{

    console.log(fatura);
    alert(fatura.nomeDaEmpresa);
    http.post('/faturas/fatura', data=>{fatura});
  }
}

