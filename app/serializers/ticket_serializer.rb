class TicketSerializer < ActiveModel::Serializer
  attributes :id
  has_many :users
end