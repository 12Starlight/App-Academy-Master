class Course < ApplicationRecord

  belongs_to :prerequisite,
  class_name: "Course",
  primary_key: :id, 
  foreign_key: :prereq_id, # made just so we can build a self reference 
  # no prereq
  optional: true

  has_many :enrollments,
  class_name: "Enrollment",
  primary_key: :id, 
  foreign_key: :course_id
  
  belongs_to :instructor,
  class_name: "User",
  primary_key: :id,
  foreign_key: :instructor_id

  has_many :enrolled_students,
  through: :enrollments, # using an association from the same class
  source: :user # using user association method for what you are calling from the through class

end

# Add an association for prerequisite. This should return a course's prereq (if it has one).

