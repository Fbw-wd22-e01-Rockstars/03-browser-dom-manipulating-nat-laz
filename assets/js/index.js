const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

let ul = document.querySelector("ul");

books.sort((a, b) =>
  a.author.split(" ")[1].toUpperCase() < b.author.split(" ")[1].toUpperCase()
    ? -1
    : 1
);
console.log(books);

books.forEach((books) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let div2 = document.createElement("div2");
  let h5 = document.createElement("h5");
  let p = document.createElement("p");
  let a = document.createElement("a");

  div.classList.add("card");
  div.style.width = "12rem";
  div.style.margin = "10px";

  img.classList.add("card-img-top");
  img.src = books.img;
  img.style.height = "60%";

  div2.classList.add("card-body");

  h5.classList.add("card-title");
  h5.innerHTML = books.title;

  p.classList.add("card-text");
  p.innerText = `${books.author.split(" ")[1]}, ${books.author.split(" ")[0]}}`;

  a.classList.add("btn");
  a.classList.add(books.alreadyRead ? "btn-success" : "btn-secondary");
  a.innerText = books.alreadyRead ? "Read" : "To read";

  div2.append(h5, p, a);
  div.append(img, div2);

  ul.append(div);
});
