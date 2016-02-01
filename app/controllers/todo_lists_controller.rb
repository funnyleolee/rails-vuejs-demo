class TodoListsController < ApplicationController
  def index
    @todo_lists = TodoList.order updated_at: :desc
  end

  def new
    @form = TodoListForm.new TodoList.new
  end
end
