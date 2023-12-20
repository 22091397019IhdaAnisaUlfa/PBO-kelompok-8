<?php
include 'config.php';
session_start();
$user_id = $_SESSION['user_id'];

if (!isset($user_id)) {
    header('location:login.php');
};

if (isset($_GET['logout'])) {
    unset($user_id);
    session_destroy();
    header('location:login.php');
}
?>




<!DOCTYPE html>
<html>
<head>
    <title>Website Film</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Sen:wght@400;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link href="img/logo.png" rel="icon">
</head>
<body>
    <body>
        <div class="navbar">
            <div class="navbar-container">
                <div class="logo-container">
                    <h1 class="logo">Cinephile</h1>
                </div>
                <div class="menu-container">
                    <ul class="menu-list">
                        <li><a href="#home" class="menu-list-item">Home</a></li>
                        <li><a href="#indonesia" class="menu-list-item">Indonesia</a></li>
                        <li><a href="#english" class="menu-list-item">English</a></li>
                        <li> <a href="#india" class="menu-list-item">India</a></li>
                        <li><a href="#korea" class="menu-list-item">Korea</a></li>
                       <!-- Input dan tombol pencarian -->
<input type="text" id="searchInput" placeholder="Search">
<button id="searchButton">Search</button>

                            
                      
                    </ul>
                </div>
                <a href="update_profile.php" class="menu-list-item" style="margin-top: 5px;">
                                    <?php
                                    $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE id = '$user_id'") or die('query failed');
                                    if (mysqli_num_rows($select) > 0) {
                                        $fetch = mysqli_fetch_assoc($select);
                                    }

                                    // Menentukan ukuran gambar berdasarkan keberadaan gambar
                                    $imageWidth = $fetch['image'] ? 35 : 100;
                                    $imageStyle = "width: {$imageWidth}px; height: 35px; border-radius: 50%;";

                                    echo '<img src="' . ($fetch['image'] == '' ? "images/default-avatar.png" : "uploaded_img/{$fetch['image']}") . '" style="' . $imageStyle . '">';
                                    ?>
                                
                                </a>
                <a href="home.php?logout=<?php echo $user_id; ?>" class="menu-list-item">Logout</a>
              
                
                    <div class="toggle">
                        <i class="fas fa-moon toggle-icon"></i>
                        <i class="fas fa-sun toggle-icon"></i>
                        <div class="toggle-ball"></div>
                       
                    </div>
                </div>
            </div>
            
        </div>
        <div class="sidebar">
           
            <i a href="#home" class="left-menu-icon fas fa-home"></a></i>
         
        </div>
        <section id="home">
        <div class="container">
            <div class="content-container">
        <div class="featured-content"
                style="background: linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('img/RATATOUILLE.jpg');">
                <img class="featured-title" src="img/RATATOUILLE.jpg" alt="">
                <section id="indonesia">
                <p class="featured-desc">Ratatouille menceritakan kisah tikus koki Remy dan persahabatannya dengan Linguini untuk menciptakan hidangan lezat di sebuah restoran mewah.
                </p>
                <button class="featured-button">Review</button>
            </div>
       
            <div class="movie-list-container">
                <div class="movie-list-wrapper">
                    <h1 class="movie-list-title">INDONESIA</h1>
                    <div id="movie-list-indonesia" class="movie-list">
                        <!-- Daftar film akan ditampilkan di sini -->
                    </div>
                    <i class="fas fa-chevron-right arrow"></i>
                </div>
            </div>
            <div class="movie-list-container">
                <div class="movie-list-wrapper"> <section id="home">
                    <h1 class="movie-list-title">ENGLISH</h1>
                    <div id="movie-list-english" class="movie-list">
                        <!-- Daftar film akan ditampilkan di sini -->
                    </div>
                    <i class="fas fa-chevron-right arrow"></i>
                </div>
            </div>
            <div class="featured-content"
            style="background: linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('img/PENGABDI SETAN.jpg');">
            <img class="featured-title" src="img/PENGABDI SETAN.jpg" alt="">
            <section id="india">
            <p class="featured-desc">Sebuah reboot dari film 1980, Pengabdi Setan mengisahkan anak-anak yang merasa bahwa ibu mereka yang meninggal kembali untuk menjemput mereka, menciptakan suasana mencekam dan menyeramkan.
            </p>
            <button class="featured-button">Review</button>
        </div>
        <div class="movie-list-container">
            <div class="movie-list-wrapper">
                <h1 class="movie-list-title">INDIA</h1>
                <div id="movie-list-india" class="movie-list">
                    <!-- Daftar film akan ditampilkan di sini -->
                </div>
                <i class="fas fa-chevron-right arrow"></i>
            </div>
        </div>
        <div class="movie-list-container">
            <div class="movie-list-wrapper">
                <h1 class="movie-list-title">KOREA</h1>
                <div id="movie-list-korea" class="movie-list">
                    <!-- Daftar film akan ditampilkan di sini -->
                </div>
                <i class="fas fa-chevron-right arrow"></i>
            </div>
        </div>
    </div>


  
    <script src="home.js"></script>
    <script src="app.js"></script>
    
</body>
</html>
