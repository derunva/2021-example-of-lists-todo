<template lang="pug">
  .tasks
    TasksListHeader
    TaskForm
    .tasks--list
      Task
      Task
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

<style lang="sass" scoped>
.tasks
  background: #fff
  margin-bottom: 30px
  border-radius: 2px 2px 15px 15px
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, .5)
  .task
    &:last-child
      border-radius: 0 0 15px 15px
</style>
