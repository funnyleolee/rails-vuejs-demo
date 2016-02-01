$(document).ready(function() {

  new Vue({
    el: '#todo-list-form',

    data: {
      todo_list: {
        name: '',
        todo_items: []
      },
      new_todo_item: {
        description: ''
      }
    },

    methods: {
      addTodoItem: function() {
        if (this.new_todo_item.description.trim()) {
          this.todo_list.todo_items.push($.extend({}, this.new_todo_item));
          this.new_todo_item.description = '';
        }
      }
    }
  });
});
