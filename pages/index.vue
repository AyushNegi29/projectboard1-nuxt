<template>
  <div class="container">
    <StatusColumn status="To Do" />
    <StatusColumn status="In Progress" />
    <StatusColumn status="Done" />
  </div>
</template>

<script>
import StatusColumn from '~/components/StatusColumn.vue';

export default {
  components: {
    StatusColumn
  }
}
</script>

<style>
.container {
  display: flex;
  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Replace 'path/to/your/image.jpg' with the actual path to your image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
}
</style>
