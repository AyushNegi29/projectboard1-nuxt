<template>
  <div class="task-detail">
    <h2>Task Details</h2>
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="task.title" required>
    </div>
    <div>
      <label for="status">Status:</label>
      <select id="status" v-model="task.status" required>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" v-model="task.description"></textarea>
    </div>
    <button @click="updateTask">Update Task</button>
    <button @click="deleteTask">Delete Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        id: null,
        title: '',
        status: '',
        description: ''
      }
    };
  },
  mounted() {
    // Fetch task details from API or local storage based on the task ID
    // For now, let's assume task details are passed as props
    this.task = this.$route.params.task;
  },
  methods: {
    updateTask() {
      // Emit event to update task details
      this.$emit('update', this.task);
      // Redirect back to task list or close modal
      this.$router.push('/');
    },
    deleteTask() {
      // Emit event to delete task
      this.$emit('delete', this.task);
      // Redirect back to task list or close modal
      this.$router.push('/');
    }
  }
}
</script>

<style>
.task-detail {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
</style>
