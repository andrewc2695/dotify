class Artist < ApplicationRecord
    validates :name, presence: true
    has_one_attached :photo

    has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :songs,
        through: :albums,
        source: :songs_on_album
end