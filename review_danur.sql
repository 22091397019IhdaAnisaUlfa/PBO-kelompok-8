-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 06:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `review_danur`
--

-- --------------------------------------------------------

--
-- Table structure for table `danur`
--

CREATE TABLE `danur` (
  `review_id` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `rating` varchar(250) NOT NULL,
  `message` varchar(250) NOT NULL,
  `datetime` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `danur`
--

INSERT INTO `danur` (`review_id`, `name`, `rating`, `message`, `datetime`) VALUES
(1, 'Anisa', '5', 'Bagus, serem juga', '1702176517'),
(2, 'Diva', '4', 'serem jadi takut hehe, tapi asik', '1702907666');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `danur`
--
ALTER TABLE `danur`
  ADD PRIMARY KEY (`review_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `danur`
--
ALTER TABLE `danur`
  MODIFY `review_id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
