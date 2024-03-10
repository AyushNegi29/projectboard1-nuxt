<template>
  <div class="task-card" @click="viewDetails">
    <h3>{{ task.title }}</h3>
    <p>Status: {{ task.status }}</p>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    viewDetails() {
      // Navigate to task detail page with router.push()
      this.$router.push({ name: 'task-detail', params: { task: this.task } });
    }
  }
}
</script>

<style scoped>
.task-card {
  background-color: #ffffffba; /* Light gray background */
  padding: 15px; /* Increased padding for better spacing */
  margin: 10px; /* Margin around the task card */
  border-radius: 8px; /* Slightly rounded corners */
  cursor: pointer; /* Pointer cursor to indicate interactivity */
  transition: background-color 0.3s; /* Smooth transition for background color */
}

.task-card h3 {
  margin-top: 0; /* Remove default margin for heading */
  margin-bottom: 10px; /* Add some spacing below the heading */
}

.task-card p {
  margin-bottom: 8px; /* Add spacing between paragraphs */
}

.task-card:hover {
  background-color: #e0e0e0; /* Lighter background color on hover */
}
</style>
