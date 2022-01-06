# Create Grader Class
class Grader
  # Initialize
  def initialize()
    # Create GetGrade Function
    def GetGrade()
      # Ask for name, assignment and grade
      puts "What is your name? "
      name = gets
      puts "What is your assignment name? "
      assignment = gets
      puts "what is your grade? "
      grade = gets.to_i
      puts "\r\n******************************\r\n" 
      # conditional for grade letter value
      if grade < 100 and grade >= 90
        puts name + " got an A on assignment: " + assignment
      elsif grade < 90 and grade >= 80
        puts name + " got a B on assignment: " + assignment
      elsif grade < 80 and grade >= 70
        puts name + " got a C on assignment: " + assignment
      elsif grade < 70 and grade >= 60
        puts name + " got a D on assignment: " + assignment
      elsif grade < 60
        puts name + " got an F on assignment: " + assignment
      else
        puts "Not a valid grade. Enter a number between 0 - 100"
      end
      # Say Goodbye
      puts "\r\n******************************\r\n"
      puts "Good bye :) \r\n"
    end
  end
end

# Call an instance of the class function.
Grader.new.GetGrade()