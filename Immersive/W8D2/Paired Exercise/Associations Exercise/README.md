# enrollment
PRMIARY KEY id
* has_many

# user
PRIMARY KEY id
* belongs_to


# course
PRIMARY KEY id
* belongs_to



# A course belongs to an instructor, and an instructor as many courses 
# Know which table a FOREIGN KEY belongs to
  # A FOREIGN KEY can only point to one PRIMARY KEY

# Anytime a PRIMARY KEY has any FOREIGN KEYS pointing to it, has_many
# Anytime a FORIEGN KEY points to anything, belongs_to 