-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2023 at 02:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portofolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(3) NOT NULL,
  `judul` varchar(30) NOT NULL,
  `sub judul` varchar(30) NOT NULL,
  `judul1` varchar(30) NOT NULL,
  `judul2` varchar(30) NOT NULL,
  `judul3` varchar(30) NOT NULL,
  `isi1` text NOT NULL,
  `isi2` text NOT NULL,
  `isi3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `judul`, `sub judul`, `judul1`, `judul2`, `judul3`, `isi1`, `isi2`, `isi3`) VALUES
(1, '<p> I am a student at the Jaya', '<p> I\'m here to deepen the wor', 'phone', 'email', 'website', '085710177236', 'khansadevanna5@gm\r\n\r\nail.com', 'www.devanalndr.com'),
(2, '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(3) NOT NULL,
  `judul` varchar(30) NOT NULL,
  `judul2` varchar(30) NOT NULL,
  `judul3` varchar(30) NOT NULL,
  `judul4` varchar(30) NOT NULL,
  `sub judul` varchar(30) NOT NULL,
  `sub judul2` varchar(30) NOT NULL,
  `sub judul3` varchar(30) NOT NULL,
  `sub judul4` varchar(30) NOT NULL,
  `isi` text NOT NULL,
  `isi2` text NOT NULL,
  `isi3` text NOT NULL,
  `isi4` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `judul`, `judul2`, `judul3`, `judul4`, `sub judul`, `sub judul2`, `sub judul3`, `sub judul4`, `isi`, `isi2`, `isi3`, `isi4`) VALUES
(1, '<p> Devanna Alandra </p>', '<p> Phone </p>', '<p> Email </p>', '<p> Website </p>', '<p> UI/UX Designer </p>', '<p> 085710177236 </p>', '<p> khansadevanna5@gmail.com <', '<p> www.devanalndr.com </p>', 'name', 'subject', 'massage', 'email');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(3) NOT NULL,
  `judul` varchar(30) NOT NULL,
  `judul2` varchar(30) NOT NULL,
  `judul3` varchar(30) NOT NULL,
  `sub judul` varchar(30) NOT NULL,
  `sub judul2` varchar(30) NOT NULL,
  `sub judul 3` varchar(30) NOT NULL,
  `judul4` varchar(30) NOT NULL,
  `judul5` varchar(30) NOT NULL,
  `judul6` varchar(30) NOT NULL,
  `sub judul4` varchar(30) NOT NULL,
  `sub judul5` varchar(30) NOT NULL,
  `sub judul6` varchar(30) NOT NULL,
  `isi` text NOT NULL,
  `isi2` text NOT NULL,
  `isi3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(3) NOT NULL,
  `judul` varchar(30) NOT NULL,
  `judul2` varchar(30) NOT NULL,
  `judul3` varchar(30) NOT NULL,
  `judul4` varchar(30) NOT NULL,
  `judul5` varchar(30) NOT NULL,
  `judul6` varchar(30) NOT NULL,
  `sub judul` varchar(30) NOT NULL,
  `sub judul2` varchar(30) NOT NULL,
  `sub judul3` varchar(30) NOT NULL,
  `sub judul4` varchar(30) NOT NULL,
  `sub judul5` varchar(30) NOT NULL,
  `sub judul6` varchar(30) NOT NULL,
  `isi` text NOT NULL,
  `isi2` text NOT NULL,
  `isi3` text NOT NULL,
  `isi4` text NOT NULL,
  `isi5` text NOT NULL,
  `isi6` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `judul`, `judul2`, `judul3`, `judul4`, `judul5`, `judul6`, `sub judul`, `sub judul2`, `sub judul3`, `sub judul4`, `sub judul5`, `sub judul6`, `isi`, `isi2`, `isi3`, `isi4`, `isi5`, `isi6`) VALUES
(1, '<p> Himpunan Mahasiswa Informa', '<p> MAGANG JSDP BERSAMA ICT UP', '<p> PROGRAM KREATIVITAS MAHASI', '<p> Magang Di Admedika Anak Pe', '<p> COURSERA IT SUPPORT GOOGLE', '<p> MAGANG AKREDITASI PRODI DI', '<p> 1 SEPTEMBER 2023 - 2024 </', '<p> 21 Maret - 1 April 2022 </', '<p> 12 - 31 Maret 2022 </p>', '<p> 12 Mei - 25 Agustus 2023 <', '<p> 25 - 30 Agustus 2022 </p>', '<p> 10 - 18 Desember 2022 </p>', 'Disini saya mengurus kepengurusan himaforka sebagai departement Ventura', 'Menginput data dengan mengkoneksikan jaringan wifi ke lingkup Universitas Pembangunan Jaya', 'Disini saya mengikuti program ini dengan menhasilkan sebuah karya seperti Automatic Shoes Polisher,selain itu juga Pembangunan Berkelanjutan dan Kewirausahaan', 'Bagian Web Development sebagai UI/UX Design', 'Mengerjakan semua tugas tentang jaringan komputer', 'Menyisipkan file -file serta menginput data dengan baik dan benar\r\n\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(3) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `sub judul` varchar(30) NOT NULL,
  `judul2` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`id`, `judul`, `sub judul`, `judul2`) VALUES
(1, '<p> HI, I AM DEVANNA ALANDRA KHANSA </p>', '<p> UI/UX DESIGNER AND DATA AN', '<p> Download Resume </p>');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(3) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `judul2` varchar(50) NOT NULL,
  `judul3` varchar(50) NOT NULL,
  `judul4` varchar(50) NOT NULL,
  `judul5` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `judul`, `judul2`, `judul3`, `judul4`, `judul5`) VALUES
(1, '<p> PROJECT MEMBUAT TAMPILAN APLIKASI UNTUK MEMESA', '<p> PROJECT TAMPILAN WEBSITE GOOGLE DRIVE </p>', '<p> SERTIFIKAT PESERTA LOMBA UI/UX BABAK FINAL </p', '<p> PROJECT MEMBUAT TAMPILAN APLIKASI UNTUK CALON ', '<p> IMAJINE PLACE PHOTO </p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home`
--
ALTER TABLE `home`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
