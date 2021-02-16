class Song < ApplicationRecord
    validates :title, :album_id, :ORD, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist,
        through: :album,
        source: :artist

    has_many :songs_on_playlist,
    foreign_key: :song_id,
    class_name: :SongsOnPlaylist

    has_one_attached :song

    
end