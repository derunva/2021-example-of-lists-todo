<template lang="pug">
  .tasks
    TasksListHeader
    TaskForm
    .tasks--list
      Task
</template>

<script>
import TasksListHeader from '@/components/TasksListHeader'
import TaskForm from '@/components/TaskForm'
import Task from '@/components/Task'

export default {
  components: {
    TasksListHeader,
    TaskForm,
    Task
  }
}
</script>

<style lang="css" scoped>
</style>
