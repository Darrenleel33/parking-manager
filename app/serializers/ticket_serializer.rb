class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price_id, :car_id, :date, :hours, :days, :paid
end
