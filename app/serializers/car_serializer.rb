class CarSerializer < ActiveModel::Serializer
  attributes :id, :Owner, :licensePlate, :vehicleMake, :vehicleModel, :color
end
