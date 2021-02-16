class CreateSongsOnPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :songs_on_playlists do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :songs_on_playlists, :playlist_id
    add_index :songs_on_playlists, :song_id
  end
end
