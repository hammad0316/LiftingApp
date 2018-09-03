class CreateLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.string :name
<<<<<<< HEAD
      t.integer :muscle_groups, array:true, default:[]
=======
      t.integer :muscle_groups, array:true, default: []
>>>>>>> 960ea19af2495af13187edbb8003481d7581b004

      t.timestamps
    end
  end
end
