<template>
  <div class="task-form">
    <h2 class="task-title">Add New Task</h2>
    <form @submit.prevent="addTask">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="newTask.title" required>
      <label for="status">Status:</label>
      <select id="status" v-model="newTask.status" required>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <label for="description">Description:</label>
      <textarea id="description" v-model="newTask.description"></textarea>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        title: '',
        status: 'To Do',
        description: ''
      }
    };
  },
  methods: {
    addTask() {
      this.$emit('add', this.newTask);
      this.newTask = {
        title: '',
        status: 'To Do',
        description: ''
      };
    }
  }
}
</script>

<style scoped>
.task-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adding a subtle box-shadow for depth */
}

.task-title {
  font-size: 1.5rem; /* Increasing the font size for the title */
  margin-bottom: 20px; /* Adding some space below the title */
}

label {
  display: block; /* Ensuring each label occupies a new line */
  margin-bottom: 8px; /* Adding some space below each label */
}

input[type="text"],
select,
textarea {
  width: 100%; /* Making sure input fields take up the full width */
  padding: 10px; /* Adding padding for better visual appeal */
  margin-bottom: 15px; /* Adding some space below each input */
  border: 1px solid #ccc; /* Adding a border for input fields */
  border-radius: 5px; /* Adding border radius for rounded corners */
  font-size: 1rem; /* Setting a standard font size for consistency */
}

textarea {
  resize: vertical; /* Allowing vertical resizing for the textarea */
}

button[type="submit"] {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button[type="submit"]:hover {
  background-color: #45a049; /* Darker green on hover */
}

button[type="submit"]:focus {
  outline: none; /* Removing default focus outline */
}

button[type="submit"]:active {
  background-color: #3e8e41; /* Darker green when pressed */
}
</style>
