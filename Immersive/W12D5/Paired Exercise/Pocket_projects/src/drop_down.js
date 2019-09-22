
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  const links = [];
  
  for (let name in dogs) {
    const link = document.createElement('a');
    link.innerHTML = name;
    link.setAttribute('href', dogs[name]);
    
    const list = document.createElement('li');
    list.classList.add('dog-link');
    list.appendChild(link);

    links.push(list);
  }
  console.log(links)
  return links;
};

function attachDogLinks () {
  let dogLinks = dogLinkCreator();
  console.log(dogLinks)
  dogLinks.forEach(link => {
   let el = document.getElementsByClassName('drop-down-dog-list')
   el[0].appendChild(link);
  });
};


  let nav = document.getElementsByClassName('drop-down-dog-nav')
  nav = nav[0]
  nav.addEventListener("mouseover", () => {
    lis = document.getElementsByClassName('dog-link')
    Array.from(lis).forEach(li => {
      li.classList.remove('dog-link')
    });
  });


  nav.addEventListener("mouseleave", () => {
  list = document.getElementsByClassName('drop-down-dog-list')[0].children
    Array.from(list).forEach(li => {
    li.classList.add('dog-link');
  });
  });


attachDogLinks();
