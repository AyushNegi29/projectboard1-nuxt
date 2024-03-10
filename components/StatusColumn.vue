<template>
  <div class="status-column">
    <h2>{{ status }} ({{ tasks.length }})</h2>
    <draggable class="task-list" v-model="tasks" :group="{ name: 'tasks', pull: true, put: true }" @end="onDragEnd">
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <TaskCard :task="task" />
      </div>
    </draggable>
    <button @click="openTaskForm" class="task-btn">New Task</button>
    <div v-if="showTaskForm" class="task-form">
      <TaskForm @add="addTask" />
    </div>
  </div>
</template>

<script>
import TaskCard from '~/components/TaskCard.vue';
import TaskForm from '~/components/TaskForm.vue';
import draggable from 'vuedraggable';

export default {
  props: {
    status: String,
  },
  components: {
    TaskCard,
    TaskForm,
    draggable,
  },
  data() {
    return {
      tasks: [],
      showTaskForm: false,
    };
  },
  mounted() {
    // Load tasks from localStorage when component is mounted
    this.loadTasks();
  },
  methods: {
    loadTasks() {
      // Retrieve tasks from localStorage
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      this.tasks = tasks.filter(task => task.status === this.status);
    },
    saveTasks() {
      // Save tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    addTask(newTask) {
      // Assign a unique ID to the new task
      newTask.id = Date.now();
      // Add the task to the tasks array
      this.tasks.push(newTask);
      // Save tasks to localStorage
      this.saveTasks();
      // Hide the task form modal
      this.showTaskForm = false;
    },
    openTaskForm() {
      // Show the task form modal
      this.showTaskForm = true;
    },
    onDragEnd(evt) {
      // Handle task reordering here if needed
      console.log('Drag end', evt);
    },
  },
};
</script>

<style scoped>
.status-column {
    background-color: #b3b3b36b;
    border-radius: 10px;
    box-shadow: 1px 3px 11px 0px;
    flex: 1;
    margin: 10px;
    padding: 20px;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  margin-bottom: 10px; /* Spacing between task cards */
}

.task-item:last-child {
  margin-bottom: 0; /* No bottom margin for the last task card */
}

.task-item:hover {
  cursor: grab; /* Change cursor on hover to indicate draggable */
}

.task-form {
  margin-top: 20px; /* Spacing between task list and form */
}

.task-form input[type="text"],
.task-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-form button {
  background-color: #007bff; /* Primary color for buttons */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}
.task-btn{
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 12px 20px;
}

.task-form button:hover {
  background-color: #0056b3; /* Darker shade of primary color on hover */
}

.task-form button:disabled {
  background-color: #ccc; /* Disable button color */
  cursor: not-allowed;
}

.task-form button:disabled:hover {
  background-color: #ccc; /* No hover effect for disabled button */
}
</style>
