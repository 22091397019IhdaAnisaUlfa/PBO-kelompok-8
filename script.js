// Kode JavaScript (script.js)

// Membuat kelas Film
class Film {
    constructor(title, rating, description, image) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.image = image;
        this.reviews = [];
    }

    // Metode untuk menambah rating film
    addRating(newRating) {
        if (newRating >= 0 && newRating <= 5) {
            this.rating = newRating;
        } else {
            console.log("Rating harus berada dalam rentang 0 hingga 5.");
        }
    }

    // Metode untuk menambah ulasan film
    addReview(gmail, review) {
        this.reviews.push({ gmail, review });
    }

    // Metode untuk mendapatkan semua ulasan film
    getReviews() {
        return this.reviews;
    }
}

// Membuat objek Film
const film1 = new Film("Harry Potter", 4.5, "Deskripsi film 1", "img/harry potter.jpg");
const film2 = new Film("Titanic", 3.8, "Deskripsi film 2", "img/titanic.jpg");
const film3 = new Film("Fast and Furious", 4.5, "Deskripsi film 3", "img/fast furious.jpg");
const film4 = new Film("The Conjuring", 3.8, "Deskripsi film 4", "img/the conjuring.jpg");
const film5 = new Film("The Chronicles of Narnia", 4.5, "Deskripsi film 5", "img/narnia.jpg");
const film6 = new Film("Toy Story", 3.8, "Deskripsi film 6", "img/toy story.jpg");
const film7 = new Film("Ratatouille", 4.5, "Deskripsi film 7", "img/ratatouille.jpeg");
const film8 = new Film("Inside Out", 3.8, "Deskripsi film 8", "img/inside out.jpeg");
const film9 = new Film("Coco", 4.5, "Deskripsi film 9", "img/coco.jpeg");
const film10 = new Film("The Boss Baby", 3.8, "Deskripsi film 10", "img/boss baby.jpg");

// Membuat daftar film
const movies = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10];

// Kode HTML untuk menampilkan rating dalam bentuk bintang
const getStarRatingHTML = (rating) => {
    const maxRating = 5;
    let starHTML = "";
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            starHTML += '<i class="fa fa-star"></i>';
        } else {
            starHTML += '<i class="fa fa-star-o"></i>';
        }
    }
    return starHTML;
};

// Fungsi untuk menampilkan daftar film
function showMovies(movieList) {
    const movieListContainer = document.getElementById("movie-list");
    movieListContainer.innerHTML = "";

    movieList.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const title = document.createElement("h2");
        title.innerText = movie.title;

        const image = document.createElement("img");
        image.src = movie.image;

        // Menambahkan rating dalam bentuk bintang
        const rating = document.createElement("p");
        rating.innerHTML = `Rating: ${getStarRatingHTML(movie.rating)}`;

        const description = document.createElement("p");
        description.innerText = movie.description;

        // Menambahkan tombol untuk menambah rating
        const rateButton = document.createElement("button");
        rateButton.innerText = "Tambah Rating";
        rateButton.addEventListener("click", () => {
            const newRating = parseFloat(prompt("Masukkan rating baru (0 hingga 5):"));
            if (!isNaN(newRating)) {
                movie.addRating(newRating);
                rating.innerHTML = `Rating: ${getStarRatingHTML(movie.rating)}`;
            }
        });

        // Menambahkan tombol "Lihat Ulasan"
        const showReviewsButton = document.createElement("button");
        showReviewsButton.innerText = "Lihat Ulasan";
        showReviewsButton.addEventListener("click", () => {
            const reviewsContainer = movieCard.querySelector(".reviews-container");
            if (reviewsContainer) {
                reviewsContainer.style.display = "block";
            }
        });

        // Menambahkan ulasan film
        const reviewButton = document.createElement("button");
        reviewButton.innerText = "Kirim Ulasan";
        reviewButton.addEventListener("click", () => {
            const gmail = prompt("Masukkan alamat Gmail Anda:");
            const review = prompt("Berikan ulasan Anda:");
            if (gmail && review) {
                movie.addReview(gmail, review);
                const reviewsContainer = movieCard.querySelector(".reviews-container");
                if (reviewsContainer) {
                    const reviewsList = reviewsContainer.querySelector("ul");
                    const reviewItem = document.createElement("li");
                    reviewItem.innerHTML = `<strong>${gmail}:</strong> ${review}`;
                    reviewsList.appendChild(reviewItem);
                } else {
                    const newReviewsContainer = showReviews(movie);
                    movieCard.appendChild(newReviewsContainer);
                }
            }
        });

        // Membuat kontainer untuk ulasan film
        const reviewsContainer = document.createElement("div");
        reviewsContainer.classList.add("reviews-container");
        reviewsContainer.style.display = "none";

        const reviewsTitle = document.createElement("h3");
        reviewsTitle.innerText = "Ulasan Film";

        const reviewsList = document.createElement("ul");

        // Menambahkan ulasan yang sudah ada
        movie.getReviews().forEach((review) => {
            const reviewItem = document.createElement("li");
            reviewItem.innerHTML = `<strong>${review.gmail}:</strong> ${review.review}`;
            reviewsList.appendChild(reviewItem);
        });

        reviewsContainer.appendChild(reviewsTitle);
        reviewsContainer.appendChild(reviewsList);

        movieCard.appendChild(title);
        movieCard.appendChild(image);
        movieCard.appendChild(rating);
        movieCard.appendChild(description);
        movieCard.appendChild(rateButton);
        movieCard.appendChild(reviewButton);
        movieCard.appendChild(showReviewsButton);
        movieCard.appendChild(reviewsContainer);

        movieListContainer.appendChild(movieCard);
    });
}

// Event listener untuk tombol "Cari"
document.getElementById("search-button").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value;
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    showMovies(filteredMovies);
});

// Tampilkan daftar film saat halaman dimuat
showMovies(movies);
