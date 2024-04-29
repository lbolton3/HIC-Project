-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 24, 2024 at 01:13 PM
-- Server version: 10.3.28-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edodge5`
--

-- --------------------------------------------------------

--
-- Table structure for table `Cars`
--

CREATE TABLE `Cars` (
  `Car_ID` varchar(10) NOT NULL,
  `Price` bigint(20) DEFAULT NULL,
  `Color` varchar(10) NOT NULL,
  `Make` varchar(10) NOT NULL,
  `Model` varchar(15) NOT NULL,
  `Miles` bigint(20) NOT NULL,
  `Seats` int(11) NOT NULL,
  `Desciption` varchar(200) NOT NULL,
  `Year` year(4) NOT NULL,
  `Rating` int(11) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Drivetrain` varchar(10) NOT NULL,
  `Transmission` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Cars`
--

INSERT INTO `Cars` (`Car_ID`, `Price`, `Color`, `Make`, `Model`, `Miles`, `Seats`, `Desciption`, `Year`, `Rating`, `Type`, `Drivetrain`, `Transmission`) VALUES
('1010101010', 5000000, 'camo', 'Chrysler', 'M1 Abrams', 5, 5, 'will kill', 2015, 5, 'Tank', 'tank-drive', 'automatic'),
('1010101011', 4000, 'Red', 'Jeep', 'Cherokee', 139500, 5, 'will bring you anywhere', 2001, 2, 'SUV', '4WD', 'automatic'),
('1010101012', 7500, 'grey', 'Ram', '1500', 113000, 6, 'will haul anything', 2014, 4, 'Truck', '4WD', 'automatic'),
('1010101015', 5000, 'Yellow', 'Ford', 'Mustang', 100002, 5, 'willgo fast', 2001, 5, 'Sport', '2WD', 'Manual'),
('1234567899', 1200, 'Brown', 'Ford', 'Explorer', 120000, 6, 'The car sucks, but will get you from point A to Point B', 2001, 2, 'SUV', 'AWD', 'automatic');

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `Account_Number` varchar(10) NOT NULL,
  `First_Name` varchar(15) DEFAULT NULL,
  `Last_Name` varchar(20) NOT NULL,
  `Street_Name` varchar(20) NOT NULL,
  `Street_Number` varchar(5) NOT NULL,
  `City` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `zip` varchar(5) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`Account_Number`, `First_Name`, `Last_Name`, `Street_Name`, `Street_Number`, `City`, `state`, `zip`, `email`) VALUES
('0000000001', 'Ean', 'Dodge', 'Wallstreet', '420', 'New York City', 'New York', '69420', 'bigPimp@gmail.com'),
('0000000002', 'Sophia', 'Testa', 'Short', '60', 'Smallville', 'Ohio', '42069', 'shortStack@gmail.com'),
('0000000003', 'Lenny', 'Bolton', 'React', '6996', 'Ding Dong', 'Texas', '33321', 'API_Master@gmail.com'),
('0000000004', 'David', 'Tinley', 'Coolio', '69', 'Hooker', 'Oklahoma', '66600', 'biggestPimp@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `Favorite_Cars`
--

CREATE TABLE `Favorite_Cars` (
  `Account_Number` varchar(10) NOT NULL,
  `Car_ID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Favorite_Cars`
--

INSERT INTO `Favorite_Cars` (`Account_Number`, `Car_ID`) VALUES
('0000000001', '1010101010'),
('0000000001', '1010101011'),
('0000000002', '1010101012'),
('0000000002', '1010101015'),
('0000000003', '1010101010'),
('0000000003', '123456789'),
('0000000004', '1010101011'),
('0000000004', '1010101015');

-- --------------------------------------------------------

--
-- Table structure for table `Ordered_Cars`
--

CREATE TABLE `Ordered_Cars` (
  `Car_ID` varchar(10) NOT NULL,
  `Account_Number` varchar(10) NOT NULL,
  `Orders_ID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Ordered_Cars`
--

INSERT INTO `Ordered_Cars` (`Car_ID`, `Account_Number`, `Orders_ID`) VALUES
('1010101010', '0000000004', '0001100104'),
('1010101011', '0000000001', '0001100101'),
('1010101012', '0000000002', '0001100102'),
('1010101015', '0000000003', '0001100105');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `Account_Number` varchar(10) NOT NULL,
  `Orders_ID` varchar(10) NOT NULL DEFAULT '0000000000',
  `Total_cars` int(11) NOT NULL DEFAULT 0,
  `Total_Price` bigint(20) DEFAULT NULL,
  `Total_Weight` bigint(20) NOT NULL DEFAULT 0,
  `Delivery_Status` varchar(20) DEFAULT NULL,
  `Shipping_Carrier` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`Account_Number`, `Orders_ID`, `Total_cars`, `Total_Price`, `Total_Weight`, `Delivery_Status`, `Shipping_Carrier`) VALUES
('0000000001', '0001100101', 1, 4000, 2000, 'Getting Car', 'FedEx'),
('0000000002', '0001100102', 1, 7500, 5000, 'Getting Car', 'HarpoonService'),
('0000000004', '0001100104', 1, 5000000, 50000, 'Getting Car', 'EanDodgeHarpoonService'),
('0000000003', '0001100105', 1, 5000, 2000, 'Getting Car', 'EanDodgeHarpoonService');

-- --------------------------------------------------------

--
-- Table structure for table `Photos`
--

CREATE TABLE `Photos` (
  `Photo_ID` varchar(10) NOT NULL,
  `Car_ID` varchar(10) NOT NULL,
  `Photo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Photos`
--

INSERT INTO `Photos` (`Photo_ID`, `Car_ID`, `Photo`) VALUES
('1111111110', '1010101011', 'https://www.selectjeeps.com/imagetag/12680/2/l/Used-2001-Jeep-Cherokee-Sport.jpg'),
('1111111111', '1010101010', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mounted_Soldier_System_%28MSS%29.jpg/1200px-Mounted_Soldier_System_%28MSS%29.jpg'),
('1111111112', '1010101012', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtekCCkj_ONyLqPOZ0pT6BawP1qB4vXLuzNjH1k8gJA&s'),
('1111111113', '1010101015', 'https://cdn.dealeraccelerate.com/planet/1/253/15623/1920x1440/2001-ford-mustang-2dr-cpe-gt-deluxe'),
('1111111114', '123456789', 'https://www.edmunds.com/assets/m/ford/explorer/2001/oem/2001_ford_explorer_4dr-suv_xlt_fq_oem_1_500.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cars`
--
ALTER TABLE `Cars`
  ADD PRIMARY KEY (`Car_ID`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`Account_Number`);

--
-- Indexes for table `Favorite_Cars`
--
ALTER TABLE `Favorite_Cars`
  ADD PRIMARY KEY (`Account_Number`,`Car_ID`);

--
-- Indexes for table `Ordered_Cars`
--
ALTER TABLE `Ordered_Cars`
  ADD PRIMARY KEY (`Car_ID`,`Account_Number`,`Orders_ID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`Orders_ID`,`Account_Number`);

--
-- Indexes for table `Photos`
--
ALTER TABLE `Photos`
  ADD PRIMARY KEY (`Photo_ID`,`Car_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
