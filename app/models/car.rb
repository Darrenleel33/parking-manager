class Car < ApplicationRecord
    has_many :tickets
    has_many :prices, through: :tickets
end
