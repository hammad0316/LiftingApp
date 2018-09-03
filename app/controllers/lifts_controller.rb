class LiftsController < ApplicationController
    def index
        @lifts = MuscleGroup.all
    end
end
