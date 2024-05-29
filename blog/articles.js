const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Diary of a Wimpy Kid",
    date: "April 1, 2007",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cupiditate id libero veritatis laborum delectus ullam saepe atque eius ipsam, in molestias doloribus deserunt rerum totam quos illo consequatur obcaecati.",
    imgSrc: "./diary_of_a_wimpy_kid.jpg",
    imgAlt: "diary_of_a_wimpy_kid",
    ages: "8-12",
    genre: "Realistic Fiction",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    id: 4,
    title: "Diary of a Wimpy Kid: Rodrick Rules",
    date: "February 1, 2008",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cupiditate id libero veritatis laborum delectus ullam saepe atque eius ipsam, in molestias doloribus deserunt rerum totam quos illo consequatur obcaecati.",
    imgSrc: "./dowk2jpg.jpg",
    imgAlt: "diary_of_a_wimpy_kid_rodrick_rules",
    ages: "8-12",
    genre: "Realistic Fiction",
    stars: "⭐⭐⭐⭐⭐"
  }
];

function articleTemplate(article) {
  const { title, date, description, imgSrc, imgAlt, ages, genre, stars } = article;
  return `
    <article> 
      <figure class="right">
        <h2>${title}</h2> 
        <img src="${imgSrc}" alt="${imgAlt}"> 
        <p>${description}</p>
      </figure>
      <figure class="left">
        <h3>${date}</h3>
        <h4>${ages}</h4>
        <h4>${genre}</h4>
        <h4>${stars}</h4> 
      </figure>
    </article>
  `
}

document.addEventListener("DOMContentLoaded", () => {
  var articleSection = document.querySelector("#articles");
  articles.forEach(article => {
   var articleHTML = articleTemplate(article);
    articleSection.insertAdjacentHTML("beforeend", articleHTML);
  });
});