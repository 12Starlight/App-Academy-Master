Ryans-MacBook-Pro-3:Associations rwoods12$ bundle exec annotate 
Model files unchanged.
Ryans-MacBook-Pro-3:Associations rwoods12$ rails c
Running via Spring preloader in process 22041
Loading development environment (Rails 5.1.7)

[1] pry(main)> Enrollment.first.user
  Enrollment Load (0.5ms)  SELECT  "enrollments".* FROM "enrollments" ORDER BY "enrollments"."id" ASC LIMIT $1  [["LIMIT", 1]]
NoMethodError: undefined method `user' for #<Enrollment:0x00007fa588c65f18>
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activemodel-5.1.7/lib/active_model/attribute_methods.rb:432:in `method_missing'

[2] pry(main)> Enrollment.first.student
  Enrollment Load (0.5ms)  SELECT  "enrollments".* FROM "enrollments" ORDER BY "enrollments"."id" ASC LIMIT $1  [["LIMIT", 1]]
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]
=> #<User:0x00007fa589cb6020 id: 3, name: "Jeff", created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00, updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>

[3] pry(main)> Enrollment.first.course
  Enrollment Load (0.4ms)  SELECT  "enrollments".* FROM "enrollments" ORDER BY "enrollments"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.6ms)  SELECT  "courses".* FROM "courses" WHERE "courses"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> #<Course:0x00007fa58e197270
 id: 1,
 name: "Ruby 101",
 prereq_id: nil,
 instructor_id: 5,
 created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
 updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>

[4] pry(main)> User.first.enrollments
  User Load (0.3ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
NoMethodError: undefined method `enrollments' for #<User:0x00007fa58e142338>
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activemodel-5.1.7/lib/active_model/attribute_methods.rb:432:in `method_missing'

[6] pry(main)> reload!
Reloading...
=> true

[7] pry(main)> User.first.enrollments
  User Load (0.3ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Enrollment Load (0.4ms)  SELECT "enrollments".* FROM "enrollments" WHERE "enrollments"."student_id" = $1  [["student_id", 1]]
=> [#<Enrollment:0x00007fa588fd0518
  id: 3,
  course_id: 2,
  student_id: 1,
  created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
  updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>]

[8] pry(main)> User.first.enrolled_courses
  User Load (0.4ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
NoMethodError: undefined method `enrolled_courses' for #<User:0x00007fa587b04878>
Did you mean?  enrollment_ids
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activemodel-5.1.7/lib/active_model/attribute_methods.rb:432:in `method_missing'

[9] pry(main)> reload!
Reloading...
=> true

[10] pry(main)> User.first.enrolled_courses
  User Load (0.3ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.5ms)  SELECT "courses".* FROM "courses" INNER JOIN "enrollments" ON "courses"."id" = "enrollments"."course_id" WHERE "enrollments"."student_id" = $1  [["student_id", 1]]
=> [#<Course:0x00007fa58e18f930
  id: 2,
  name: "Ruby 102",
  prereq_id: 1,
  instructor_id: 5,
  created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
  updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>]

[11] pry(main)> reload!
Reloading...
=> true

[12] pry(main)> reload!
Reloading...
=> true

[13] pry(main)> Course.first.prerequisite
  Course Load (0.3ms)  SELECT  "courses".* FROM "courses" ORDER BY "courses"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> nil

[14] pry(main)> Course.last.prerequisite
  Course Load (0.3ms)  SELECT  "courses".* FROM "courses" ORDER BY "courses"."id" DESC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.4ms)  SELECT  "courses".* FROM "courses" WHERE "courses"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> #<Course:0x00007fa588a45e90
 id: 1,
 name: "Ruby 101",
 prereq_id: nil,
 instructor_id: 5,
 created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
 updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>

[15] pry(main)> Course.first.instructor
  Course Load (0.3ms)  SELECT  "courses".* FROM "courses" ORDER BY "courses"."id" ASC LIMIT $1  [["LIMIT", 1]]
  User Load (0.3ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 5], ["LIMIT", 1]]
=> #<User:0x00007fa58a185ee8 id: 5, name: "Ned", created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00, updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>

[16] pry(main)> Course.first.enrolled_students
  Course Load (0.4ms)  SELECT  "courses".* FROM "courses" ORDER BY "courses"."id" ASC LIMIT $1  [["LIMIT", 1]]
  User Load (0.4ms)  SELECT "users".* FROM "users" INNER JOIN "enrollments" ON "users"."id" = "enrollments"."student_id" WHERE "enrollments"."course_id" = $1  [["course_id", 1]]
=> [#<User:0x00007fa58e1294c8 id: 3, name: "Jeff", created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00, updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>,
 #<User:0x00007fa58e129248
  id: 4,
  name: "Georges St. Pierre",
  created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
  updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>]

[17] pry(main)> User.first.enrolled_students
  User Load (1.1ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.2ms)  SELECT "courses".* FROM "courses" WHERE "courses"."instructor_id" = $1  [["instructor_id", 1]]
=> []

[18] pry(main)> User.first.enrolled_students
  User Load (0.4ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.3ms)  SELECT "courses".* FROM "courses" WHERE "courses"."instructor_id" = $1  [["instructor_id", 1]]
=> []

[19] pry(main)> User.last.enrolled_students
  User Load (0.3ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" DESC LIMIT $1  [["LIMIT", 1]]
  Course Load (0.2ms)  SELECT "courses".* FROM "courses" WHERE "courses"."instructor_id" = $1  [["instructor_id", 5]]
=> [#<Course:0x00007fa58792ec88
  id: 1,
  name: "Ruby 101",
  prereq_id: nil,
  instructor_id: 5,
  created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
  updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>,
 #<Course:0x00007fa58792ead0
  id: 2,
  name: "Ruby 102",
  prereq_id: 1,
  instructor_id: 5,
  created_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00,
  updated_at: Tue, 20 Aug 2019 19:51:47 UTC +00:00>]

[20] pry(main)> 