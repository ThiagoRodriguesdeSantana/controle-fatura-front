<template>
  <div id="app">
     <sidebar-menu :menu="menu"/>
    <router-view/>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default {
  name: 'App',
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Menu',
        },

        {
          title: 'Faturas',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/lista',
              title: 'Listar Faturas',
            },
            {
              href: '/AdicionarFatura',
              title: 'Nova Fatura',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
