class Price < ApplicationRecord
    has_many :tickets
    has_many :tickets, through: :cars
end
