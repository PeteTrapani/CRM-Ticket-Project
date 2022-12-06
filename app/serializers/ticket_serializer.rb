class RecipeSerializer < ActiveModel::Serializer
    attributes :id, :title, :issues
    has_one :user
  end