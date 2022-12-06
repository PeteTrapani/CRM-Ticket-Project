class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.text :issues
      t.timestamps
    end
  end
end
