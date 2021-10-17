-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: e_comm
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20211011062808-migrations.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_rating` varchar(255) NOT NULL DEFAULT '0',
  `category_id` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`cart_id`),
  UNIQUE KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1,'Glun Multipurpose Portable Electronic Digital Weighing Scale','<ul><li>Wide LCD screen display, easy to read, Automatically locks the reading when data is stable</li><li>Low power consumption, Low battery indicator,Tare function, Maximum Capacity 10kg</li></ul>','https://i.imgur.com/b4ZSMWu.jpg','3',1,'2021-10-17 09:54:37','2021-10-17 09:54:37',1),(3,1,'Glun Multipurpose Portable Electronic Digital Weighing Scale','<ul><li>Wide LCD screen display, easy to read, Automatically locks the reading when data is stable</li><li>Low power consumption, Low battery indicator,Tare function, Maximum Capacity 10kg</li></ul>','https://i.imgur.com/b4ZSMWu.jpg','3',1,'2021-10-17 09:57:34','2021-10-17 09:57:34',1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_id` (`category_id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'electronics','https://i.imgur.com/Z504Cs3.jpg','2021-10-17 08:51:06','2021-10-17 08:51:06'),(2,'fashion','https://i.imgur.com/vTAGA66.jpg','2021-10-17 10:10:32','2021-10-17 10:10:32'),(3,'smartphones','https://i.imgur.com/giAQIeH.jpg','2021-10-17 10:10:48','2021-10-17 10:10:48'),(4,'books','https://i.imgur.com/nRt4O2Q.jpg','2021-10-17 10:11:00','2021-10-17 10:11:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_rating` int NOT NULL DEFAULT '0',
  `product_price` varchar(255) NOT NULL DEFAULT '0',
  `category_id` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id` (`product_id`),
  UNIQUE KEY `product_name` (`product_name`),
  UNIQUE KEY `product_description` (`product_description`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Glun Multipurpose Portable Electronic Digital Weighing Scale','<ul><li>Wide LCD screen display, easy to read, Automatically locks the reading when data is stable</li><li>Low power consumption, Low battery indicator,Tare function, Maximum Capacity 10kg</li></ul>','https://i.imgur.com/b4ZSMWu.jpg',3,'299',1,'2021-10-17 08:51:09','2021-10-17 08:51:09'),(2,'Rich Dad Poor Dad','<div>It\'s been nearly 25 years since Robert Kiyosaki’s <i>Rich Dad Poor Dad</i> first made waves in the Personal Finance arena.<br>It has since become the #1 Personal Finance book of all time.','https://i.imgur.com/y3AodXS.jpg',3,'267',4,'2021-10-17 10:13:38','2021-10-17 10:13:38'),(3,'Redmi 9A','<ul<li><span>Country Of Origin - India</span></li><li><span>13MP rear camera with AI portrait, AI scene recognition, HDR, pro mode | 5MP front camera, Contrast: 1500:1</span></li></ul>','https://i.imgur.com/L3rJ5Ha.jpg',4,'6999',3,'2021-10-17 10:17:13','2021-10-17 10:17:13'),(5,'OPPO A31','<ul><li><span>12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera</span></li></ul>','https://i.imgur.com/fMvdGLn.jpg',4,'11490',3,'2021-10-17 10:19:58','2021-10-17 10:19:58'),(6,'As a Man Thinketh','Can you think of a single moment in the whole day when your mind is blank and thoughtless?<br>Do you know how powerful every thought is?','https://i.imgur.com/F7BrPSQ.jpg',3,'756',4,'2021-10-17 10:22:18','2021-10-17 10:22:18'),(7,'Allen Solly Junior Boys\' Plain Regular Fit T-Shirt ','<ul><li><span>Care Instructions: Machine Wash</span></li><li><span>Fit Type: regular fit</span></li><li><span>100% Cotton</span></li><li><span>Half sleeve</span></li><li><span>Machine wash</span></li></ul>','https://i.imgur.com/Ivon18g.jpg',3,'256',2,'2021-10-17 10:25:35','2021-10-17 10:25:35');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test1@test.com','$2b$10$bfOaZA6PjtMsm.yYlL4coO1/9Oz0syooiEsfoRQkjMp6ejFze/Pye','2021-10-17 04:03:09','2021-10-17 09:33:09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-17 16:05:43
