class Album < ApplicationRecord
    validates :title, :artist_id, :year, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs_on_album,
        foreign_key: :album_id,
        class_name: :Song

    has_one_attached :photo
end