class TicketsController < ApplicationController
  
    def index
      render json: Ticket.all
    end
  
    def create
      ticket = @current_user.tickets.create!(ticket_params)
      render json: ticket, status: :created
    end
  
    private
  
    def ticket_params
      params.permit(:title, :issues)
    end
  
  end