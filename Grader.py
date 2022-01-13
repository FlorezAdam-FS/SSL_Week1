# Create Grader Class
class Grader:
    # Create Get Grade function
    def GetGrade():
      # ask for users name, assignment, and grade
      name = input("What is your name? ")
      
      assignment = input("What is your assignment name? ")
      grade = int(input("what is your grade? "))
      print("\r\n******************************\r\n"); 
      # conditional for the grade letter value
      if (grade < 100 and grade >= 90):
        print(name + " got an A on assignment: " + assignment)
      elif (grade < 90 and grade >= 80):
        print(name + " got a B on assignment: " + assignment)
      elif (grade < 80 and grade >= 70):
        print(name + " got a C on assignment: " + assignment)  
      elif (grade < 70 and grade >= 60):
        print(name + " got a D on assignment: " + assignment)
      elif (grade < 60):
        print(name + " got an F on assignment: " + assignment)
      elif (grade < 0 or grade > 100):
        print("Not a valid grade. Enter a number between 0 - 100")
      # Say goodbye
      print("\r\n******************************\r\n");  
      print("Good Bye :)\r\n");

# Create an instance of the class function
Grader.GetGrade()
