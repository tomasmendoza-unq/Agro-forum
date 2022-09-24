-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2022 at 11:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agro_forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentarios` int(11) NOT NULL,
  `comentario_usuario` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_respuesta` int(11) NOT NULL,
  `id_post` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentarios`, `comentario_usuario`, `createdAt`, `updatedAt`, `id_usuario`, `id_respuesta`, `id_post`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ligula ullamcorper, sagittis le', '2022-09-22 21:29:51', '2020-01-01 18:29:50', 0, 0, 0),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2022-09-22 21:29:54', '2020-01-01 18:29:53', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `plantas`
--

CREATE TABLE `plantas` (
  `id_planta` int(11) NOT NULL,
  `nombre_planta` varchar(50) NOT NULL,
  `tipo_planta` int(50) NOT NULL,
  `foto_planta` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plantas`
--

INSERT INTO `plantas` (`id_planta`, `nombre_planta`, `tipo_planta`, `foto_planta`, `createdAt`, `updatedAt`) VALUES
(1, 'nopales', 0, 'fotitoplantauwu.png', '2022-09-22 21:29:37', '2020-01-01 18:29:36'),
(2, 'helecho', 0, 'fotoplantitaowo.png', '2022-09-22 21:29:39', '2020-01-01 18:29:38');

-- --------------------------------------------------------

--
-- Table structure for table `posteos`
--

CREATE TABLE `posteos` (
  `id_post` int(11) NOT NULL,
  `contenido_planta` varchar(150) NOT NULL,
  `fecha_publicacion` date NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_planta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posteos`
--

INSERT INTO `posteos` (`id_post`, `contenido_planta`, `fecha_publicacion`, `createdAt`, `updatedAt`, `id_usuario`, `id_planta`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ligula ullamcorper, sagittis lectus et, sagittis dui.', '2020-01-01', '2022-09-22 21:30:07', '2020-01-01 18:29:04', 0, 0),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ligula ullamcorper, sagittis lectus et, sagittis dui. Maecenas posuere tempus urn', '2020-01-01', '2022-09-22 21:30:10', '2020-01-01 18:29:07', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nom_usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `nom_usuario`, `password`, `correo`, `telefono`, `createdAt`, `updatedAt`) VALUES
(1, 'Federico', 'Pugliese', 'fedeeP09', '12345', 'fedepugli123@gmail.com', 24680846, '2022-09-22 21:34:20', '2020-01-01 18:28:35'),
(2, 'Lionel', 'Alberti', 'liober89', '12345', 'lionelelmascapito9000@gmail.com', 13570842, '2022-09-22 21:34:23', '2020-01-01 18:28:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentarios`);

--
-- Indexes for table `plantas`
--
ALTER TABLE `plantas`
  ADD PRIMARY KEY (`id_planta`);

--
-- Indexes for table `posteos`
--
ALTER TABLE `posteos`
  ADD PRIMARY KEY (`id_post`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plantas`
--
ALTER TABLE `plantas`
  MODIFY `id_planta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
