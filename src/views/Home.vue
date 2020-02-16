<template>
  <div class="home">
    <WorkOrder msg="work order"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkOrder from './WorkOrder.vue'

export default {
  name: 'Home',
  components: {
    WorkOrder
  }
}
</script>
