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
        ticket = Ticket.find_by(id: params[:id])
            if ticket
                render json: ticket
            else
                render json: { error: "ticket not found"}, status: :not_found
            end
    end

    def destroy
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.destroy
            render json: "ticket removed"
        else
            render json: { error: "ticket is not found"}, status: :not_found
        end
    end


end
