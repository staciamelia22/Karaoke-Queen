from sys import argv

script, age, height, weight = argv

print("The script is called: ", script)
print("Your first variable is: ", age)
print("Your second variable is: ", height)
print("Your third variable is: ", weight)

age = input("How old are you? ")
height = input("How tall are you? ")
weight = input("How much do you weigh? ")

print(f"So you are {age} old, {height} tall and {weight} heavy.")