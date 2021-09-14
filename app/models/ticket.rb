class Ticket < ApplicationRecord
    belongs_to :car
    belongs_to :price
end
