class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
<<<<<<< HEAD
      t.integer :lifts, array:true, default:[]
=======
      t.integer :lifts, array:true, default: []
>>>>>>> 960ea19af2495af13187edbb8003481d7581b004
      t.string :email

      t.timestamps
    end
  end
end
