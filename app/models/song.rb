class Song < ApplicationRecord
    validates :title, :album_id, :ORD, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist

    has_one_attached :song

    
end