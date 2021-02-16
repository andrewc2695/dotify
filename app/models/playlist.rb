class Playlist < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
    has_many :songs_on_playlist,
    foreign_key: :playlist_id,
    class_name: :SongsOnPlaylist

    has_many :songs,
    through: :songs_on_playlist,
    source: :song
end
