require 'rspec'
require 'movie_sql'

describe "#zoolander_cast" do
  it "1. List Zoolander cast by name" do
    expect(zoolander_cast).to eq([
      {"name"=>"Alexander Skarsgård"},
      {"name"=>"Andy Dick"},
      {"name"=>"Anne Meara"},
      {"name"=>"Ben Stiller"},
      {"name"=>"Christine Taylor"},
      {"name"=>"David Duchovny"},
      {"name"=>"James Marsden"},
      {"name"=>"Jennifer Coolidge"},
      {"name"=>"Jerry Stiller"},
      {"name"=>"John Vargas"},
      {"name"=>"Jon Voight"},
      {"name"=>"Justin Theroux"},
      {"name"=>"Matt Levin"},
      {"name"=>"Milla Jovovich"},
      {"name"=>"Nora Dunn"},
      {"name"=>"Owen Wilson"},
      {"name"=>"Patton Oswalt"},
      {"name"=>"Tony Kanal"},
      {"name"=>"Will Ferrell"},
      {"name"=>"Woodrow Asai"}
    ])
  end
end

describe "#matt_damon_films" do
  it "2. List Matt Damon films by movie title" do
    expect(matt_damon_films).to eq([
      {"title"=>"All the Pretty Horses"},
      {"title"=>"Che"},
      {"title"=>"Contagion"},
      {"title"=>"Courage Under Fire"},
      {"title"=>"EuroTrip"},
      {"title"=>"Finding Forrester"},
      {"title"=>"Good Will Hunting"},
      {"title"=>"Jersey Girl"},
      {"title"=>"Margaret"},
      {"title"=>"Rounders"},
      {"title"=>"Saving Private Ryan"},
      {"title"=>"Spirit: Stallion of the Cimarron"},
      {"title"=>"Stuck on You"},
      {"title"=>"The Adjustment Bureau"},
      {"title"=>"The Bourne Identity"},
      {"title"=>"The Bourne Ultimatum"},
      {"title"=>"The Good Mother"},
      {"title"=>"The Good Shepherd"},
      {"title"=>"The Informant!"},
      {"title"=>"The Legend of Bagger Vance"},
      {"title"=>"The Majestic"},
      {"title"=>"The Rainmaker"},
      {"title"=>"The Talented Mr. Ripley"},
      {"title"=>"True Grit"},
      {"title"=>"We Bought a Zoo"}
    ])
  end
end

describe "#christopher_walken_21st_century_films" do
  it "3. List Christopher Walken 21st century films by movie title" do
    expect(christopher_walken_21st_century_films).to eq([
      {"title"=>"Balls of Fury", "yr"=>2007},
      {"title"=>"Catch Me If You Can", "yr"=>2002},
      {"title"=>"Click", "yr"=>2006},
      {"title"=>"Envy", "yr"=>2004},
      {"title"=>"Gigli", "yr"=>2003},
      {"title"=>"Joe Dirt", "yr"=>2001},
      {"title"=>"Man On Fire", "yr"=>2004},
      {"title"=>"Man of the Year", "yr"=>2006},
      {"title"=>"The Country Bears", "yr"=>2002},
      {"title"=>"The Rundown", "yr"=>2003},
      {"title"=>"The Stepford Wives", "yr"=>2004},
      {"title"=>"Wedding Crashers", "yr"=>2005}
    ])
  end
end

describe "#leading_star_for_1910_films" do
  it "4. List 1910 leading stars by movie title" do
     expect(leading_star_for_1910_films).to eq([
       {"title"=>"A Christmas Carol", "name"=>"Marc McDermott"},
       {"title"=>"In the Border States", "name"=>"Charles West"},
       {"title"=>"The Blue Bird", "name"=>"Edward Rigby"},
       {"title"=>"The House with Closed Shutters", "name"=>"Henry B. Walthall"},
       {"title"=>"The Unchanging Sea", "name"=>"Arthur V. Johnson"}
     ])
   end
end

describe "#no_casting_info" do
  it "5. Give the movie from 1920 with no casting information" do
    expect(no_casting_info).to eq([
      {"title"=>"The Mark of Zorro"}
    ])
  end
end

describe "#biggest_stars" do
  it "6. List actors with >= 26 starring roles (by name)" do
    expect(biggest_stars).to eq([
      {"name"=>"Clint Eastwood", "count"=>26},
      {"name"=>"Robert De Niro", "count"=>26}
    ])
  end
end

describe "#will_smith_supporting_actors" do
  it "7. List the supporting actor for all Will Smith films" do
    expect(will_smith_supporting_actors).to eq([
      {"yr"=>2007, "title"=>"I Am Legend", "name"=>"Alice Braga"},
      {"yr"=>2004, "title"=>"i, Robot", "name"=>"Bridget Moynahan"},
      {"yr"=>2005, "title"=>"Hitch", "name"=>"Eva Mendes"},
      {"yr"=>1999, "title"=>"Enemy of the State", "name"=>"Gene Hackman"},
      {"yr"=>2004, "title"=>"Shark Tale", "name"=>"Jack Black"},
      {"yr"=>2006, "title"=>"The Pursuit of Happiness", "name"=>"Jaden Smith"},
      {"yr"=>2000, "title"=>"The Legend of Bagger Vance", "name"=>"Matt Damon"}
    ])
  end
end

describe "#barrie_ingham_multiple_roles" do
  it "8. List movies in which Barrie Ingham plays multiple roles" do
    expect(barrie_ingham_multiple_roles).to eq([
      {"title"=>"The Great Mouse Detective"}
    ])
  end
end

