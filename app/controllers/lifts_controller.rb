class LiftsController < ApplicationController
    def index
        @muscleGroups = MuscleGroup.all
        @lifts = Lift.all        
    end
end
