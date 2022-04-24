<script>

let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        {
          id:id++,
          text:"Learn Vue JS"
        }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        id:id++,
        text: this.newTodo
      })
      this.newTodo = ''
    }
  }
}
</script>

<template>
  <div id="textbox">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" type="text"/>
      <button @click="addTodo" placeholder="Enter the task here">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.text}}</li>
    </ul>   
  </div>
</template>
