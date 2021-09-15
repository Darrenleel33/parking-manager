class TicketsController < ApplicationController
   
    def index
        render json: Ticket.all        
    end

    def create
        ticket = Ticket.create!(ticket_params)
            # byebug
            if ticket
                render json: ticket
            else
                render json: { error: "Unable to create"}, status: :not_found
            end
    end

    def show
        ticket = find_ticket
            if ticket
                render json: ticket
            else
                render json: { error: "ticket not found"}, status: :not_found
            end
    end

    def destroy
        ticket = find_ticket
        if ticket
            ticket.destroy
            render json: "ticket removed"
        else
            render json: { error: "ticket is not found"}, status: :not_found
        end
    end

    private

    def find_ticket
        Ticket.find_by(id: params[:id])
    end

    def ticket_params
        params.permit(:car_id, :price_id, :date, :hours, :days, :paid )
    end


end
