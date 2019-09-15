class TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
  
    @task.list_id = params[:list_id]
    @task.save
    flash[:errors] = @task.errors.full_messages
    redirect_to list_url(@task.list)
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    redirect_to list_url(task.list)
  end


  private
  def task_params
    params.require(:task).permit(:body)
  end
end
