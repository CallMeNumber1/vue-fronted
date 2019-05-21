<template>
  <div id="app">
    <sidebar id="sidebar" />
    <div id="routerview">
      <router-view :key="$route.path" />
    </div>
    <alertdialog />
  </div>
</template>
<script>
import { getMain } from "./api/Main";
export default {
  components: {
    sidebar: () => import("@/main/views/Sidebar"),
    alertdialog: () => import("@/components/AlertDialog")
  },
  data: () => ({
    isAdmin: false
  }),
  created() {
    getMain();
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
#sidebar {
  width: 280px;
  margin: 5px;
  display: inline-block;
  border: 1px solid red;
}
#routerview {
  vertical-align: top;
  margin: 5px;
  border: 1px solid red;
  width: calc(100vw - 320px);
  height: 95vh;
  display: inline-block;
}
</style>
