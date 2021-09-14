class CreatePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :prices do |t|
      t.integer :initial
      t.integer :hourly
      t.integer :wholeDay
      
      t.timestamps
    end
  end
end
