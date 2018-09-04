class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :email
      t.integer :lifts, array:true, default:[]
      t.json :onerepmax

      t.timestamps
    end
  end
end
