import sys
class Grader:
    def GetGrade():
      name = input("What is your name? ")
      print(name)
      assignment = input("What is your assignment name? ")
      print(assignment)
      grade = int(input("what is your grade? "))
      print(grade)

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
      else:
        print("Not a valid grade. Enter a number between 0 - 100")


object = Grader.GetGrade()
