const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll(".movie-card").length;

  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    if (arrow.classList.contains("fa-chevron-right")) {
      // Menggeser elemen .movie-list ke kanan
      clickCounter++;
      if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
          movieLists[i].style.transform = `translateX(${movieLists[i].getBoundingClientRect().left - 300}px)`;

      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    } else if (arrow.classList.contains("fa-chevron-left")) {
      // Menggeser elemen .movie-list ke kiri
      clickCounter--;
      if (clickCounter >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].getBoundingClientRect().left + 300
        }px)`;
      } else {
        clickCounter = 0;
      }
    }
  });
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


class ImageSearch {
  constructor() {
      this.initialize();
  }

  initialize() {
      const searchButton = document.getElementById('searchButton');
      if (searchButton) {
          searchButton.addEventListener('click', () => {
              console.log('Search button clicked!');
              this.searchMovies();
          });
      } else {
          console.error('Search button not found!');
      }
  }

  searchMovies() {
      console.log('Search movies function called!');
      const searchInput = document.getElementById('searchInput').value.toLowerCase();

      // Get all movie cards regardless of category
      const allMovies = document.querySelectorAll('.movie-card');

      allMovies.forEach(movie => {
          const title = movie.querySelector('h2').innerText.toLowerCase();

          if (title.includes(searchInput)) {
              movie.style.display = '';
          } else {
              movie.style.display = 'none';
          }
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const imageSearch = new ImageSearch();
});

