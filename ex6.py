# variable for the amount of types of people
types_of_people = 10
# var 'x' equals to a f-string, which includes the first var from before
x = f"There are {types_of_people} types of people."

# binary var equals a string
binary = "binary"
# do_not var equals a string
do_not = "don't"
# var 'y' equals to a f-string, which includes the previous two var's
y = f"Those who know {binary} and those who {do_not}."

# prints the var x
print(x)
# prints the var y
print(y)

# insert the x f-string into the below string
print(f"I said: {x}")
# insert the y f-sting into the below string
print(f"I also said: '{y}'")

# defines the 'hilarious' var
hilarious = False
# defines the 'joke_evaluation var, and leaves an open argument'
joke_evaluation = "Isn't that joke so funny?! '{}'"
# prints the string for the joke_evaluation var and uses the 
# 'hilarious' var for the argument
print(joke_evaluation.format(hilarious))
# using the f-string leads to the {} showing up in the output
print(joke_evaluation, (f"{hilarious}"))

# defines var 'w' with a string
w = "This is the left side of..."
# defines var 'e' with a string
e = "a string with a right side."

#prints both of the strings listed above into one string
print(w + e)