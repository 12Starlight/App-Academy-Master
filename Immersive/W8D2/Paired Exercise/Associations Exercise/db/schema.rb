# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170710184251) do

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.integer "prereq_id" # FOREIGN KEY (points back to enrollment) (a componet of belongs to relationship)
    t.integer "instructor_id" # FOREIGN KEY (points back to users)
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "enrollments", force: :cascade do |t|
    t.integer "course_id" # FOREIGN KEY (points back to courses)
    t.integer "student_id" # FOREIGN KEY (points to users)
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

# A course belongs to an instructor, and an instructor as many courses 
# Know which table a FOREIGN KEY belongs to
  # A FOREIGN KEY can only point to one PRIMARY KEY

# Anytime a PRIMARY KEY has any FOREIGN KEYS pointing to it, has_many
# Anytime a FORIEGN KEY points to anything, belongs_to 