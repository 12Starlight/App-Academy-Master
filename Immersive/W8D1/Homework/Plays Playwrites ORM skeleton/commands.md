Daves-MacBook-Pro:Plays Playwrites ORM skeleton commandcenter$ pry
[1] pry(main)> require './plays.rb'
=> true

[2] pry(main)> Playwright.all
=> [#<Playwright:0x00007fa0161456c8 @birth_year=1915, @id=1, @name="Arthur Miller">, #<Playwright:0x00007fa016145628 @birth_year=1888, @id=2, @name="Eugene O'Neill">]

[3] pry(main)> movie = Playwright.new("name" => "Blacksheep", "birth_year" => 2003);

[4] pry(main)> movie
=> #<Playwright:0x00007fa01418f5b8 @birth_year=2003, @id=nil, @name="Blacksheep">

[5] pry(main)> Play.all
=> [#<Play:0x00007fa014817e58 @id=1, @playwright_id=1, @title="All My Sons", @year=1947>, #<Play:0x00007fa014817d90 @id=2, @playwright_id=2, @title="Long Day's Journey Into Night", @year=1956>]

[6] pry(main)> movie.create
=> 3

[7] pry(main)> Play.all
=> [#<Play:0x00007fa018170f88 @id=1, @playwright_id=1, @title="All My Sons", @year=1947>, #<Play:0x00007fa018170ec0 @id=2, @playwright_id=2, @title="Long Day's Journey Into Night", @year=1956>]

[8] pry(main)> Playwright.all
=> [#<Playwright:0x00007fa0181c0df8 @birth_year=1915, @id=1, @name="Arthur Miller">,
 #<Playwright:0x00007fa0181c0d58 @birth_year=1888, @id=2, @name="Eugene O'Neill">,
 #<Playwright:0x00007fa0181c0cb8 @birth_year=2003, @id=3, @name="Blacksheep">]

[10] pry(main)> movie.birth_year = 2001
=> 2001

[11] pry(main)> movie
=> #<Playwright:0x00007fa01418f5b8 @birth_year=2001, @id=3, @name="Blacksheep">

[12] pry(main)> Playwright.all
=> [#<Playwright:0x00007fa0161970b8 @birth_year=1915, @id=1, @name="Arthur Miller">,
 #<Playwright:0x00007fa016197018 @birth_year=1888, @id=2, @name="Eugene O'Neill">,
 #<Playwright:0x00007fa016196f78 @birth_year=2003, @id=3, @name="Blacksheep">]

[14] pry(main)> movie.update
=> []

[15] pry(main)> Playwright.all
=> [#<Playwright:0x00007fa01825a6d8 @birth_year=1915, @id=1, @name="Arthur Miller">,
 #<Playwright:0x00007fa01825a638 @birth_year=1888, @id=2, @name="Eugene O'Neill">,
 #<Playwright:0x00007fa01825a598 @birth_year=2001, @id=3, @name="Blacksheep">]

[16] pry(main)> Playwright.all.last
=> #<Playwright:0x00007fa0182b26a8 @birth_year=2001, @id=3, @name="Blacksheep">

=> [#<Play:0x00007fa0148843c8 @id=1, @playwright_id=1, @title="All My Sons", @year=1947>, #<Play:0x00007fa014884300 @id=2, @playwright_id=2, @title="Long Day's Journey Into Night", @year=1956>]

[28] pry(main)> Playwright.all
=> [#<Playwright:0x00007fa01557b3d8 @birth_year=1915, @id=1, @name="Arthur Miller">,
 #<Playwright:0x00007fa01557b338 @birth_year=1888, @id=2, @name="Eugene O'Neill">,
 #<Playwright:0x00007fa01557b298 @birth_year=2001, @id=3, @name="Blacksheep">]
[
  29] pry(main)> movie
=> #<Playwright:0x00007fa01418f5b8 @birth_year=2001, @id=3, @name="Blacksheep">

[30] pry(main)> 