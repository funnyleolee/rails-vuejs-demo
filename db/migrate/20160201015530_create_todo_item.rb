class CreateTodoItem < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_items do |t|
      t.references :todo_list
      t.string :description
      t.datetime :completed_at
      t.timestamps
    end
  end
end
