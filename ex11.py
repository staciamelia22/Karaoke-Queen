#prints the question; end waits for the user to enter their
#input; press enter to move onto the next print command
print("How old are you?", end=' ')
#stores the users input from the previous 'end' command
#and saves it as the value of the var
age = input()
print("How tall are you?", end=' ')
height = input()
print("How much do you weigh?", end=' ')
weight = input()
print("What is the value of 'x'?", end=' ')
#int() is supposed to convert a string into an integer
x = int(input())

#this line prints out the string with the vars inserted, 
#which now have values assigned
#without the 'f', the {var} will literally included in the
#printed out string (f = formatting)
print(f"So, you're {age} od, {height} tall and {weight} heavy.")
print(f"'X' is equal to {x}.")