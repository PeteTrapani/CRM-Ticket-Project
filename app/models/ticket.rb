class Ticket < ApplicationRecord
    belongs_to :user
    # skip_before_action :verify_authenticity_token
    validates :title, presence: true
    validates :issues, length: { minimum: 10 }
  end