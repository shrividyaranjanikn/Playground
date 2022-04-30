<script>
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if(this.newTodo == "") return;
      
      this.todos.push({
        id: id++,
        text: this.newTodo
      });
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <div id="textbox">
      <h2>Todo List</h2>
      <input v-model="newTodo" type="text" />
      <button @click="addTodo" placeholder="Enter the task here">Add</button>
      <br />
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
      </ul>
  </div>
</template>

<style>
#textbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
}

button {
  background-color: #00008b;
  color: white;
}
</style>
