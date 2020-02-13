<template>
  <div class="home">
    <WorkOrder msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkOrder from '@/components/WorkOrder.vue'

export default {
  name: 'Home',
  components: {
    WorkOrder
  }
}
</script>
