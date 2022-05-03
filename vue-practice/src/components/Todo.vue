<script>
let id = 1;

export default {
  data() {
    return {
      newTodo: "",
      todos: [],
      completedTodos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo == "") return;

      this.todos.push({
        id: id++,
        text: this.newTodo,
      });
      this.newTodo = "";
    },
    removeTodo(event, id) {
      this.todos = this.todos.filter((t) => t.id != id);
    },
    completeTodo(event, id) {
      const completedTodo = this.todos.find(t => t.id == id);
      if (!completedTodo) return;

      this.completedTodos.push(completedTodo);
      this.removeTodo(event, id);
    },
    markTodoPending(event, id){
      const pendingTodo = this.completedTodos.find((ct) => ct.id == id);

      if(!pendingTodo) return;

      this.todos.push(pendingTodo);

      this.completedTodos = this.completedTodos.filter(ct => ct.id != id);
      }
    },
  };
</script>

<template>
  <div id="textbox">
    <input v-model="newTodo" type="text" />
    <button @click="addTodo" placeholder="Enter the task here">Add</button>
    <br />
    <div>
      <h3>My tasks:</h3>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" @click="completeTodo($event, todo.id)"/>
          {{ todo.text }}
          <button @click="removeTodo($event, todo.id)">X</button>
        </li>
      </ul>
    </div>
    <div>
      <h3>Completed:</h3>
      <ul>
        <li v-for="todo in completedTodos" :key="todo.id">
          <input type="checkbox" checked @click="markTodoPending($event, todo.id)"/>
          <s>{{ todo.text }}</s>
        </li>
      </ul>
    </div>
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

ul {
  list-style-type: none;
}
</style>
