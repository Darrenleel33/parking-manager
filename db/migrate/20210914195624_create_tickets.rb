class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :car_id
      t.integer :price_id
      t.date :date
      t.integer :hours
      t.integer :days
      t.boolean :paid

      t.timestamps
    end
  end
end
