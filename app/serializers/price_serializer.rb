class PriceSerializer < ActiveModel::Serializer
  attributes :id, :hourly, :wholeDay
end
