<template>
  <div id="app">
    <WorkOrder msg="WorkOrder"/>
  </div>
</template>

<script>
import WorkOrder from './components/WorkOrder.vue'

export default {
  name: 'app',
  components: {
    WorkOrder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
</style>
