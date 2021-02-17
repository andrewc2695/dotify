class AddAudio < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :audio_id, :integer, null: false 
  end
end
