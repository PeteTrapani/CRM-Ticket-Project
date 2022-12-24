class ProductionSerializer < ActiveModel::Serializer
    attributes :id, :title, :genre, :description, :budget, :image, :director, :ongoing
    # has_one :production
    has_many :users
  
    def production
      {title:object.production.title}
    end 
end