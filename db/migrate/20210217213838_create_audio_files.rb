class CreateAudioFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :audio_files do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
