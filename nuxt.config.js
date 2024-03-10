export default {
  // Other configurations
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'task-detail',
        path: '/task/:id',
        component: resolve(__dirname, 'pages/TaskDetail.vue')
      });
    }
  }
}
