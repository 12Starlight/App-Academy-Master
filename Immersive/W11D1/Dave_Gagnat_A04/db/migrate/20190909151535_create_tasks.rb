class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.text :body, null: false
      t.boolean :completed, null: false, default: false
      t.integer :list_id, null: false

      t.timestamps
    end
    add_index :tasks, :list_id
  end
end
