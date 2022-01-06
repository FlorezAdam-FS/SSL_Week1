class Grader
  def initialize()
    def GetGrade()
      puts "What is your name? "
      name = gets
      puts "What is your assignment name? "
      assignment = gets
      puts "what is your grade? "
      grade = gets.to_i

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
    end
  end
end

Grader.new.GetGrade()