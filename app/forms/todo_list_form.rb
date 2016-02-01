class TodoListForm < Reform::Form
  property :name
  validates :name, presence: true

  collection :todo_items do
    property :description
    property :completed_at
  end
end
