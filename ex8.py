# var 'formatter' is a string with four empty arguments in it
formatter = "{} {} {} {}"

# the funtion '.format' is inserting each of the four things into the 
# four empty arguments ( or {} ) inside 'formatter'

# numbers for the arguments
print(formatter.format(1, 2, 3, 4))
# strings for the arguments
print(formatter.format("one", "two", "three", "four"))
# booleans for the arguments
print(formatter.format(True, False, False, True))
# var for the arguments
print(formatter.format(formatter, formatter, formatter, formatter))
# this line is basically identical to line 9, just formatted differently
print(formatter.format(
	"Hey baby.",
	"Can I touch",
	"your booty?",
	"No? Ok then, bye."
))