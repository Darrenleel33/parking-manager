class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :Owner
      t.string :licensePlate
      t.string :vehicleMake
      t.string :vehicleModel
      t.string :color

      t.timestamps
    end
  end
end
