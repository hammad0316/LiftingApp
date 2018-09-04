class LiftsController < ApplicationController
    def index
        @lifts = Lift.all

        @lifts.map do |lift|
            lift.muscle_groups.map! do |muscleGroup|
                MuscleGroup.find(muscleGroup).name
            end
        end

        @muscleGroups = MuscleGroup.all

        @users = User.all

        @users.map do |user|
            user.onerepmax.map! do |max|
                max["lift"] = Lift.find(max["lift"]).name
                max
            end
        end
        
    end
end
