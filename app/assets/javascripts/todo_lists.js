$(document).ready(function() {

  new Vue({
    el: '#todo-list-form',

    data: {
      todo_list: {
        name: '',
        todo_items: []
      },
      new_todo_description: ''
    },

    methods: {
      addTodoItem: function() {
        var description = this.new_todo_description.trim()
        if (description) {
          this.todo_list.todo_items.push({ description: description });
          this.new_todo_description = '';
        }
      }
    }
  });
});
