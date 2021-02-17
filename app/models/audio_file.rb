class AudioFile < ApplicationRecord
    validates :name, presence: true

    has_one_attached :audio

    has_many :songs,
    foreign_key: :audio_id,
    class_name: :Song
    
end
