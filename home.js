// Membuat kelas Film
class Film {
    constructor(title, description, image) {
        this.title = title;  
        this.description = description;
        this.image = image;
        this.reviews = [];
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
const film1 = new Film("Danur", "Flim ini dari buku berjudul Gerbang Dialog Danur karya Risa Saraswati, yang mengisahkan pengalaman pribadinya sebagai gadis indigo", "img/DANUR.jpg");
const film2 = new Film("Bumi Manusia",  "Kisah cinta antara Minke, pemuda pribumi, dan Annelies, gadis Indo Belanda, terjadi di tengah pergulatan tanah kolonial awal abad 20, memunculkan konflik dan pergulatan batin tak berkesudahan.", "img/bumi manusia.jpg");
const film3 = new Film("Mencuri Raden Saleh", "Film ini menggambarkan pencurian terbesar abad ini yang dijalankan oleh sekelompok anak muda amatiran, melibatkan pemalsuan, peretasan, pertarungan, dan manipulasi.", "img/mencuri raden saleh.png");
const film4 = new Film("Pengabdi Setan", "Sebuah reboot dari film 1980, Pengabdi Setan mengisahkan anak-anak yang merasa bahwa ibu mereka yang meninggal kembali untuk menjemput mereka, menciptakan suasana mencekam dan menyeramkan.", "img/PENGABDI SETAN.jpg");
const film5 = new Film("5 cm",  "Film ini menceritakan persahabatan 5 orang selama 10 tahun, yang memutuskan untuk berlibur setelah mencapai berbagai tujuan hidup, merubah cara pandang mereka terhadap hidup.", "img/5 CM.jpg");
const film6 = new Film("Harry Potter",  "Harry Potter, seorang penyihir muda, menemukan identitasnya dan menghadapi tantangan besar di dunia sihir, membawa penonton pada petualangan yang menegangkan.", "img/harry.jpg");
const film7 = new Film("Ratatouille",  "Ratatouille menceritakan kisah tikus koki Remy dan persahabatannya dengan Linguini untuk menciptakan hidangan lezat di sebuah restoran mewah.", "img/RATATOUILLE.jpg");
const film8 = new Film("Titanic",  "Titanic, sebuah film epik, roman, dan bencana, mengisahkan kisah cinta tragis antara Jack dan Rose di atas kapal yang tenggelam, menciptakan kesan mendalam.", "img/titanic.png");
const film9 = new Film("Narnia", "Petualangan empat bersaudara di dunia magis Narnia, melibatkan perjuangan melawan penyihir jahat dan penemuan tak terduga.", "img/NARNIA.png");
const film10 = new Film("The Boss Baby",  "The Boss Baby menggambarkan kisah seorang anak yang merasa cemas ketika adiknya, Boss Baby, tiba sebagai seorang agen rahasia yang datang untuk misi rahasia.", "img/baby.jpg");
const film11 = new Film("Kabhi Haan Kabhi Naa",  "Film komedi ini menggambarkan kisah seorang pemimpi yang jatuh cinta, namun dihadapkan pada dilema ketika gadis itu mencintai orang lain.", "img/Kabhi Haan Kabhi Naa.png");
const film12 = new Film("Baazigar",  "Baazigar adalah thriller kejahatan Bollywood yang mengisahkan perjalanan seorang pria muda yang berhenti pada apa pun untuk mencapai tujuannya.", "img/baazigar.jpeg");
const film13 = new Film("Dil To Pagal Hai ",  "Film romantis musikal ini memperlihatkan kehidupan cinta penari dalam rombongan tari musik, menggambarkan hubungan yang rumit dan berwarna.", "img/Dil To Pagal Hai.jpg");
const film14 = new Film("Kabhi Khushi Kabhie Gham",  "Drama keluarga ini membawa penonton melalui perjalanan emosional dan kehidupan cinta para anggota keluarga yang berbeda.", "img/Kabhi Khushi Kabhie Gham.jpg");
const film15 = new Film("Devdas",  "Devdas mengisahkan kisah cinta segitiga yang rumit antara Devdas, Paro, dan Chandramukhi, membawa penonton ke dalam patah hati dan kehidupan gelap.", "img/Devdas.jpg");
const film16 = new Film("Miracle in Cell No.7",  "Film ini mengisahkan kisah Lee Yong Goo, seorang ayah dengan keterbelakangan mental, yang terpisah dari putrinya karena tuduhan pembunuhan yang tidak dilakukannya, memicu perjuangan dan haru.", "img/Miracle in Cell No.7.jpg");
const film17 = new Film("Train to Busan",  "Train to Busan adalah film horor bertema zombie yang mengikuti perjalanan mengerikan Seok-woo dan putrinya saat mereka terjebak di kereta selama wabah zombie.", "img/Train to Busan.jpg");
const film18 = new Film("The Childe",  "Film ini melibatkan seorang petinju Filipina-Korea yang diburu oleh unit misterius, memicu ketegangan dan pertarungan dalam upaya bertahan hidup.", "img/The Childe.jpg");
const film19 = new Film("The Moon",  "The Moon menggambarkan upaya Korea Selatan mengeksplorasi Bulan, menghadapi tantangan dan pertanyaan apakah percobaan tersebut akan berhasil.", "img/The Moon.png");
const film20 = new Film("Alive",  "Alive mengisahkan dua karakter bertahan hidup dalam kompleks apartemen terisolasi saat virus misterius menyebabkan wabah zombie.", "img/Alive.png");

// Membuat daftar film
const movies = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, 
                film11, film12, film13, film14, film15, film16, film17, film18, film19, film20];





// Membuat kelas FilmCategory
class FilmCategory {
    constructor(categoryTitle, films) {
        this.categoryTitle = categoryTitle;
        this.films = films;
    }

    // Metode untuk menampilkan daftar film dalam kategori
    showMovies() {
        const movieListContainer = document.getElementById(`movie-list-${this.categoryTitle.toLowerCase()}`);
        movieListContainer.innerHTML = "";

        this.films.forEach((film) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            const title = document.createElement("h2");
            title.classList.add("movie-card-title-box");
            title.innerText = film.title;

            const image = document.createElement("img");
            image.src = film.image;

            const description = document.createElement("p");
            description.classList.add("movie-card-dec");
            description.innerText = film.description;

            const showReviewsButton = document.createElement("a");
            showReviewsButton.innerText = "Review";
            showReviewsButton.classList.add("movie-card-button");
            if (film.title === "Danur") {
                showReviewsButton.href = "danur.html";
            } else if (film.title === "Bumi Manusia") {
                showReviewsButton.href = "bumi_manusia.html";
            } else if (film.title === "Mencuri Raden Saleh") {
                showReviewsButton.href = "mencuri_raden_saleh.html";
            } else if (film.title === "Pengabdi Setan") {
                showReviewsButton.href = "pengabdi_setan.html";
            } else if (film.title === "5 cm") {
                showReviewsButton.href = "5_cm.html";
            } else if (film.title === "Harry_Potter") {
                showReviewsButton.href = "harry_potter.html";
            } else if (film.title === "Ratatouille") {
                showReviewsButton.href = "ratatouille,html";
            } else if (film.title === "Titanic") {
                showReviewsButton.href = "titanic.html";
            } else if (film.title === "Narnia") {
                showReviewsButton.href = "narnia_html";
            } else if (film.title === "The Boss Baby") {
                showReviewsButton.href = "boss_baby.html";
            } else if (film.title === "Kabhi Haan Kabhi Naa") {
                showReviewsButton.href = "kabhihaan.html";
            } else if (film.title === "Baazigar") {
                showReviewsButton.href = "baaziga.html";
            } else if (film.title === "Dil To Pagal Hai") {
                showReviewsButton.href = "diltopagai.html";
            } else if (film.title === "Kabhi Khushi Kabhie Gham") {
                showReviewsButton.href = "kabhikushi.html";
            } else if (film.title === "Devdas") {
                showReviewsButton.href = "devdas.html";
            } else if (film.title === "Miracle in Cell No.7") {
                showReviewsButton.href = "miracle.html";
            } else if (film.title === "Train to Busan") {
                showReviewsButton.href = "traintobusan.html";
            } else if (film.title === "The Childe") {
                showReviewsButton.href = "thechilde.html";  
            } else if (film.title === "The Moon") {
                showReviewsButton.href = "themoon.html";  
            } else if (film.title === "Alive") {
                showReviewsButton.href = "alive,html";  
            } 
            
            

             // Tambahkan elemen anchor untuk tombol review
       

            movieCard.appendChild(title);
            movieCard.appendChild(image);
            movieCard.appendChild(description);
            movieCard.appendChild(showReviewsButton);
            movieListContainer.appendChild(movieCard);
        });
    }
}

const indonesiaCategory = new FilmCategory("Indonesia", [film1, film2, film3, film4, film5]);
const englishCategory = new FilmCategory("English", [film6, film7, film8,film9, film10, film6]);
const indiaCategory = new FilmCategory("India", [film11, film12, film13, film14, film15, film11]);
const koreaCategory = new FilmCategory("Korea", [film16, film17, film18, film19,film20, film16]);

// Menampilkan daftar film untuk setiap kategori saat halaman dimuat
indonesiaCategory.showMovies(); // Call showMovies() for Indonesia category
englishCategory.showMovies();
indiaCategory.showMovies();
koreaCategory.showMovies();



