
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if(htmlElement.children) {
    let kids = Array.from(htmlElement.children)
      kids.forEach( child => {
        // htmlElement.removeChild(child);
        child.remove();
      });
  }
  let node = document.createElement('p');
  node.innerHTML = string;
  htmlElement.append(node);

};

htmlGenerator('Party Time.', partyHeader);