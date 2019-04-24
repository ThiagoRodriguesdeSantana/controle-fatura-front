import Vue from 'vue';
import Router from 'vue-router';
import AdicionarFatura from '@/components/AdicionarFatura';
import ListaDeFaturas from '@/components/ListaDeFaturas';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/lista',
      name: 'ListaDeFaturas',
      component: ListaDeFaturas,
    },
    {
      path: '/AdicionarFatura',
      name: 'AdicionarFatura',
      component: AdicionarFatura,
    },
  ],
});
