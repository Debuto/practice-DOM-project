window.addEventListener("load", function() {
  
  body = document.body;

  const h1 = document.querySelector('h1');
  h1.remove();

  const newH1 = document.createElement('h1');
  newH1.append('Website Recreation Practice');
  body.append(newH1);

  const p = document.createElement('p');
  p.append('The HTML of this webpage was created with JavaScript.');
  body.append(p);
  newH1.after(p);

  
  const img = document.createElement('img');
  img.setAttribute('src', "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute('alt', 'This is an image of a Chlorochrysa nitidissima from birdsoftheworld.org');
  img.setAttribute('style', 'width:50%');
  body.append(img);

  const newH1Two = document.createElement("h1");
  newH1Two.append("Facts about the Chlorochrysa nitidissima");
  body.append(newH1Two);
  img.after(newH1Two);

  const newUl = document.createElement("ul");
  body.append(newUl);
  
  const listElement1 = document.createElement('li');
  const listElement2 = document.createElement('li');
  listElement1.append("It is endemic to the mountains of Colombia.");
  listElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  newUl.append(listElement1);
  newUl.append(listElement2);

  const newH2 = document.createElement("h2");
  newH2.append("Source");
  body.append(newH2);
  newUl.after(newH2);
  
  const newA = document.createElement("a");
  newA.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  newA.append("Wikipedia");
  body.append(newA);



});