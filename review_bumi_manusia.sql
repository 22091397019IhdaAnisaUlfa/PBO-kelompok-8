-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 06:40 AM
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
-- Database: `review_bumi_manusia`
--

-- --------------------------------------------------------

--
-- Table structure for table `bumi_manusia`
--

CREATE TABLE `bumi_manusia` (
  `review_id` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `rating` varchar(250) NOT NULL,
  `message` varchar(200) NOT NULL,
  `datetime` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bumi_manusia`
--

INSERT INTO `bumi_manusia` (`review_id`, `name`, `rating`, `message`, `datetime`) VALUES
(1, 'Maharani', '5', 'Menarik banget, suka', '1701788590'),
(2, 'Ramdan', '5', 'Lumayan seru wah, menarik', '1702907482'),
(3, 'Bagas', '4', 'Bagus lah', '1702907503');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bumi_manusia`
--
ALTER TABLE `bumi_manusia`
  ADD PRIMARY KEY (`review_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bumi_manusia`
--
ALTER TABLE `bumi_manusia`
  MODIFY `review_id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
