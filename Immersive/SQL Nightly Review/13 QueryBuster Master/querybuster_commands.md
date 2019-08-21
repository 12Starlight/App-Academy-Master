install gems
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'byebug'
  gem 'pry-rails'

bundle install

rails db:setup

artist.rb
  build better_tracks_querry

test
  rails c 
  Artist.first.n_plus_one_tracks
  Artist.first.better_tracks_query

[1] pry(main)> Artist.first.n_plus_one_tracks
  Artist Load (0.6ms)  SELECT  "artists".* FROM "artists" ORDER BY "artists"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Album Load (0.5ms)  SELECT "albums".* FROM "albums" WHERE "albums"."artist_id" = $1  [["artist_id", 1]]
  Track Load (0.5ms)  SELECT "tracks".* FROM "tracks" WHERE "tracks"."album_id" = $1  [["album_id", 1]]
  Track Load (0.3ms)  SELECT "tracks".* FROM "tracks" WHERE "tracks"."album_id" = $1  [["album_id", 2]]
  Track Load (0.4ms)  SELECT "tracks".* FROM "tracks" WHERE "tracks"."album_id" = $1  [["album_id", 3]]
  Track Load (0.2ms)  SELECT "tracks".* FROM "tracks" WHERE "tracks"."album_id" = $1  [["album_id", 4]]
  Track Load (0.2ms)  SELECT "tracks".* FROM "tracks" WHERE "tracks"."album_id" = $1  [["album_id", 5]]
=> {"Lemonade"=>8, "I Am... Sasha Fierce"=>6, "Dangerously in Love"=>3, "B'Day"=>4, "4"=>1}

[2] pry(main)> Artist.first.better_tracks_query 
  Artist Load (0.3ms)  SELECT  "artists".* FROM "artists" ORDER BY "artists"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Album Load (4.8ms)  SELECT albums.*, COUNT(*) AS tracks_count FROM "albums" INNER JOIN "tracks" ON "tracks"."album_id" = "albums"."id" WHERE "albums"."artist_id" = $1 GROUP BY albums.id  [["artist_id", 1]]
=> {"Lemonade"=>8, "I Am... Sasha Fierce"=>6, "Dangerously in Love"=>3, "B'Day"=>4, "4"=>1}


house.rb
  build better_seeds_query

test 
  rails c
  House.first.n_plus_one_seeds
  House.first.better_seeds_query

[3] pry(main)> House.first.n_plus_one_seeds
  House Load (0.5ms)  SELECT  "houses".* FROM "houses" ORDER BY "houses"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Plant Load (0.9ms)  SELECT "plants".* FROM "plants" INNER JOIN "gardeners" ON "plants"."gardener_id" = "gardeners"."id" WHERE "gardeners"."house_id" = $1  [["house_id", 1]]
  Seed Load (0.6ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 1]]
  Seed Load (0.5ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 2]]
=> [[#<Seed:0x00007fee3eecb038 id: 1, count: 7, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eecae58 id: 2, count: 30, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eecaca0 id: 3, count: 2, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eeca9f8 id: 4, count: 24, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eeca778 id: 5, count: 10, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eeca458 id: 6, count: 9, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eeca160 id: 7, count: 39, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eec9f58 id: 8, count: 36, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eec9c88 id: 9, count: 8, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3eec97d8 id: 10, count: 1, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee3edd4620 id: 11, count: 8, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3edd4238 id: 12, count: 16, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3edd4058 id: 13, count: 7, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bbec8 id: 14, count: 46, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bbd38 id: 15, count: 45, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bbba8 id: 16, count: 20, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
:  Seed Load (0.3ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 3]]
  Seed Load (0.3ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 4]]
  Seed Load (0.5ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 5]]
  Seed Load (0.5ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 6]]
  Seed Load (0.3ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 7]]
  Seed Load (0.3ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 8]]
  Seed Load (0.2ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" = $1  [["plant_id", 9]]
  #<Seed:0x00007fee419bba18 id: 17, count: 37, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bb888 id: 18, count: 14, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bb6f8 id: 19, count: 26, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee419bb568 id: 20, count: 4, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee41a99340 id: 21, count: 50, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a991b0 id: 22, count: 1, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a99020 id: 23, count: 33, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a98e90 id: 24, count: 44, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a98d00 id: 25, count: 9, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a98b70 id: 26, count: 23, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a989e0 id: 27, count: 45, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a98850 id: 28, count: 12, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a986c0 id: 29, count: 1, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a98530 id: 30, count: 25, plant_id: 3, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee41b520c0 id: 31, count: 39, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51f30 id: 32, count: 14, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51da0 id: 33, count: 20, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51c10 id: 34, count: 17, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51a80 id: 35, count: 37, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b518f0 id: 36, count: 42, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51760 id: 37, count: 19, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b515d0 id: 38, count: 47, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b51440 id: 39, count: 6, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b512b0 id: 40, count: 39, plant_id: 4, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee3d91b788 id: 41, count: 21, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91b5a8 id: 42, count: 14, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91b3c8 id: 43, count: 44, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91b170 id: 44, count: 5, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91ae00 id: 45, count: 29, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91a978 id: 46, count: 28, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91a7c0 id: 47, count: 50, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91a5b8 id: 48, count: 49, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d91a3b0 id: 49, count: 22, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3d919f00 id: 50, count: 31, plant_id: 5, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee41c4b170 id: 51, count: 39, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4afe0 id: 52, count: 12, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4ae50 id: 53, count: 18, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4acc0 id: 54, count: 7, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4ab30 id: 55, count: 22, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4a9a0 id: 56, count: 21, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4a810 id: 57, count: 7, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4a680 id: 58, count: 10, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4a4f0 id: 59, count: 19, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41c4a360 id: 60, count: 47, plant_id: 6, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee3e923bf8 id: 61, count: 15, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e9229d8 id: 62, count: 3, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e921858 id: 63, count: 8, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e920f20 id: 64, count: 11, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e9202a0 id: 65, count: 46, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e91ac60 id: 66, count: 48, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e91a3f0 id: 67, count: 4, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e919e28 id: 68, count: 17, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e919590 id: 69, count: 10, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3e918ac8 id: 70, count: 49, plant_id: 7, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee3daf0130 id: 71, count: 2, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daebf90 id: 72, count: 2, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daebe00 id: 73, count: 22, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daebc70 id: 74, count: 39, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daebc70 id: 74, count: 39, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daebae0 id: 75, count: 12, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daeb950 id: 76, count: 39, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daeb7c0 id: 77, count: 44, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daeb630 id: 78, count: 8, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daeb4a0 id: 79, count: 34, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee3daeb310 id: 80, count: 11, plant_id: 8, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee41b83cb0 id: 81, count: 48, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83b20 id: 82, count: 42, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83990 id: 83, count: 13, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83800 id: 84, count: 37, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83670 id: 85, count: 33, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b834e0 id: 86, count: 31, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83350 id: 87, count: 29, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b831c0 id: 88, count: 43, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b83030 id: 89, count: 45, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41b82ea0 id: 90, count: 18, plant_id: 9, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>]]

[4] pry(main)> House.first.better_seeds_query
  House Load (0.3ms)  SELECT  "houses".* FROM "houses" ORDER BY "houses"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Plant Load (0.4ms)  SELECT "plants".* FROM "plants" INNER JOIN "gardeners" ON "plants"."gardener_id" = "gardeners"."id" WHERE "gardeners"."house_id" = $1  [["house_id", 1]]
  Seed Load (0.6ms)  SELECT "seeds".* FROM "seeds" WHERE "seeds"."plant_id" IN (1, 2, 3, 4, 5, 6, 7, 8, 9)
=> [[#<Seed:0x00007fee41a598f8 id: 1, count: 7, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a590d8 id: 2, count: 30, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58ea8 id: 3, count: 2, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58c78 id: 4, count: 24, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58a48 id: 5, count: 10, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58818 id: 6, count: 9, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a585c0 id: 7, count: 39, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58340 id: 8, count: 36, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a58110 id: 9, count: 8, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a53ed0 id: 10, count: 1, plant_id: 1, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>],
 [#<Seed:0x00007fee41a53ca0 id: 11, count: 8, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a53a70 id: 12, count: 16, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a53840 id: 13, count: 7, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a53610 id: 14, count: 46, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a533e0 id: 15, count: 45, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a531b0 id: 16, count: 20, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,
  #<Seed:0x00007fee41a52f80 id: 17, count: 37, plant_id: 2, created_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00, updated_at: Wed, 21 Aug 2019 10:25:48 UTC +00:00>,


  route.rb
    build better_drivers_query

  test 
    rails c
    Route.first.n_plus_one_drivers
    Route.first.better_drivers_query

[5] pry(main)> Route.first.n_plus_one_drivers
  Route Load (0.4ms)  SELECT  "routes".* FROM "routes" ORDER BY "routes"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Bus Load (0.4ms)  SELECT "buses".* FROM "buses" WHERE "buses"."route_id" = $1  [["route_id", 1]]
  Driver Load (0.5ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" = $1  [["bus_id", 1]]
  Driver Load (0.3ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" = $1  [["bus_id", 2]]
  Driver Load (0.3ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" = $1  [["bus_id", 3]]
  Driver Load (0.3ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" = $1  [["bus_id", 4]]
  Driver Load (0.4ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" = $1  [["bus_id", 5]]
=> {1=>["Joan Lee", "Charlie McDonald", "Kevin Quashie", "Michael Wallace", "Mia Mingus"],
 2=>["Ed Michaels", "Lisa Frank", "Willy Wonka", "Rihanna", "Sharla Alegria"],
 3=>["Roger Sanders", "Tom Cathy", "Kanye West", "Anderson Paak", "Sarah Shahi", "Tom Cathy"],
 4=>["Harold Martin", "Willow Smith", "DJ Mustard", "Nia King", "Alice Waters"],
 5=>["Grace Lee Boggs", "Dulce Rivera", "Michel Gerard", "Roger Larson", "Paul Ekman", "Richard Nesbitt", "Michael Li"]}

[6] pry(main)> Route.first.better_drivers_query
Route Load (0.3ms)  SELECT  "routes".* FROM "routes" ORDER BY "routes"."id" ASC LIMIT $1  [["LIMIT", 1]]
Bus Load (0.3ms)  SELECT "buses".* FROM "buses" WHERE "buses"."route_id" = $1  [["route_id", 1]]
Driver Load (0.4ms)  SELECT "drivers".* FROM "drivers" WHERE "drivers"."bus_id" IN (1, 2, 3, 4, 5)