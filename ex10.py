# '\t' prompt tabs the line in, or indents the line
tabby_cat = "\tI'm tabbed in."
# '\n' prompt breaks the line, or adds in a 'new line'
persian_cat = "I'm split\non a line."
# '\\' will escape the second back-slash character
backslash_cat = "I'm \\ a \\ cat."

# 'fat_cat' var equals a list of things; each item has it's own line
# each line also is indented or tabbed in
fat_cat = """
I'll do a list:
\t* Cat Food
\t* Fishies
\t* Catnip\n\t* Grass
"""

print(tabby_cat)
print(persian_cat)	
print(backslash_cat)
print(fat_cat)

# going to practice escaping characters...
# \N{name} won't work on my computer, because it is for the Unicode
# database only
print("""
This \\ is only one back-slash charcter.
This \' is a single quote mark.
This \" is a double quote mark.
This \a is a ASCII BEL (or a dot mark).
This \b is a ASCII backspace. (notice that there is one less space mark)
This \f is a ASCII formfeed.
This... \nis suppose to break the line.
This... \rThis escape character appears to delete anything before it in the line?
This \v is a ASCII vertical tab. (VT)
""")
