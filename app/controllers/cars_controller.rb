class CarsController < ApplicationController
    def index
        render json: Car.all
    end

    def show
        car = find_car
        render json: car
    end

    def create
        cars = Car.create!(car_param)
           
            if cars
                render json: cars
            else
                render json: { error: "Unable to create"}, status: :not_found
            end
    end
    def update
        car = Car.find_by(id: params[:id])
        if car
          car.update(car_param)
          render json: car
        else
          render json: { error: "Car not found" }, status: :not_found
        end
      end
    
    def destroy
        car = find_car
        car.destroy
        if car.destroy
            render json: "Car removed"
        else
            render json: { error: "Car is not found"}, status: :not_found
        end
    end

    private

    def find_car
        Car.find_by(id: params[:id])
    end
    def car_param
        params.permit(:Owner, :licensePlate, :vehicleMake, :vehicleModel, :color)
    end

end
