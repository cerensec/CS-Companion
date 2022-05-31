-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: db.3wa.io
-- Generation Time: May 31, 2022 at 01:07 PM
-- Server version: 5.7.33-0ubuntu0.18.04.1-log
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carlosceren_cscorporativo`
--

-- --------------------------------------------------------

--
-- Table structure for table `Alias`
--

CREATE TABLE `Alias` (
  `id` int(11) NOT NULL,
  `alias` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Alias`
--

INSERT INTO `Alias` (`id`, `alias`) VALUES
(16, 'Bolo'),
(1, 'Chamba'),
(7, 'Chico'),
(14, 'Christian'),
(15, 'Federico'),
(17, 'Findo'),
(10, 'Franklin'),
(18, 'Fredy'),
(11, 'Hugo'),
(12, 'Juanjose'),
(3, 'Leo'),
(8, 'Marvin'),
(13, 'Miguel'),
(2, 'Moi'),
(5, 'Nico'),
(9, 'Rafa'),
(4, 'Victor'),
(6, 'Vladi');

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE `Clients` (
  `id` int(11) NOT NULL,
  `name` varchar(90) COLLATE utf8_bin NOT NULL,
  `address` varchar(90) COLLATE utf8_bin NOT NULL,
  `city` varchar(90) COLLATE utf8_bin NOT NULL,
  `country` varchar(90) COLLATE utf8_bin NOT NULL,
  `type` varchar(150) COLLATE utf8_bin NOT NULL,
  `nit` varchar(17) COLLATE utf8_bin NOT NULL,
  `nrc` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`id`, `name`, `address`, `city`, `country`, `type`, `nit`, `nrc`) VALUES
(1, 'INMUEBLES S.A DE C.V.', 'CENTRO COMERCIAL JUAN PABLO II, LOCAL 295, SAN SALVADOR.', 'SAN SALVADOR', 'EL SALVADOR', 'CONSTRUCCION', '0614-090768-001-1', '52641-7'),
(2, 'INMUEBLES DE EL SALVADOR S.A. DE C.V.', 'CENTRO COMERCIAL JUAN PABLO II, LOCAL 295, SAN SALVADOR.', 'SAN SALVADOR', 'EL SALVADOR', 'ACTIVIDADES INMOBILIARIAS CON BIENES PROPIOS O ARRENDADOS', '0614-270810-101-0', '203652-0'),
(3, 'EMBAJADA DE BRASIL', 'COLONIA SAN BENITO, SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', '', '0000-000000-000-0', ''),
(4, 'ITAT S.A. DE C.V.', 'PSJ 3, COL. AVILA #115, SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', 'ACTIVIDADES INMOBILIARIAS REALIZADAS A CAMBIO DE UNA RETRIBUCION', '0614-020108-105-8', '185738-5'),
(5, 'RENTPLUS S.A. DE C.V.', '11 CALLE PTE. Y 89 AV NORTE, COLONIA ESCALON 201-A, TORRE 1, EDIFICIO WTC', 'SAN SALVADOR', 'EL SALVADOR', '', '0614-210607-102-1', ''),
(6, 'RODAS ESPINOZA, MIGUEL ALBERTO', 'SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', 'ACTIVIDADES JURIDICAS', '0614-220982-103-7', '224794-8'),
(7, 'LOPEZ HURTADO S.A. DE C.V.', 'PASAJE #5, COLONIA SAN BENITO 141', 'SAN SALVADOR', 'EL SALVADOR', 'SERVICIOS DE ARQUITECTURA Y PLANIFICACION URBANA', '0614-180995-101-9', '880119-1'),
(8, 'LABORATORIO ALVAREZ ALEMAN S.A. DE C.V.', '25 AV. NORTE 1, 640', 'SAN SALVADOR', 'EL SALVADOR', 'SERVICIO DE ANALISIS Y ESTUDIOS DE DIAGNOSTICO', '0614-080390-101-3', '911-3'),
(9, 'PREFABRICADOS INTERNACIONALES S.A. DE C.V.', 'AV. LAS PALMAS, COL SAN BENITO #185, SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', 'CONSTRUCCION DE OBRAS DE INGENIERIA CIVIL', '0614-031194-106-0', '83268-5'),
(10, 'PORTOKALI S.A. DE C.V.', 'SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', 'VENTA AL POR MENOR DE LIBROS, PERIODICOS Y ARTICULOS DE PAPELERIA EN COMERCIOS ESPECIALIZADOS', '0614-231014-101-2', '236321-3'),
(11, 'INFINITY DE EL SALVADOR S.A. DE C.V.', 'CENTRO COMERCIAL JUAN PABLO II, LOCAL 295', 'SAN SALVADOR', 'EL SALVADOR', '', '0614-220118-108-0', ''),
(12, 'INVERTIVA S.A. DE C.V.', 'LOCAL 109, EDIF. WORLD TRADE CENTER, SAN SALVADOR', 'SAN SALVADOR', 'El Salvador', 'VENTA AL POR MENOR DE OTROS PRODUCTOS  N.C.P.', '0614-100715-102-5', '242233-7'),
(13, 'GSE INVERSIONES S.A. DE C.V.', 'CALLE CERRO VERDE, AV. SIERRA NEVADA, COLONIA MIRAMONTE #628', 'SAN SALVADOR', 'EL SALVADOR', 'SERVICIOS DE ARQUITECTURA Y PLANIFICACION URBANA', '0614-211115-102-5', '245985-1'),
(14, 'FEYLO SYLVANIA EL SALVADOR S.A. DE C.V.', 'CALLE SIEMENS #48, ZONA INDUSTRIAL SANTA ELENA', 'ANTIGUO CUSCATLAN', 'EL SALVADOR', 'VENTA AL POR MAYOR DE OTROS PRODUCTOS', '0614-210273-001-5', '373-5'),
(15, 'RODRIGUEZ VENTURA S.A. DE C.V.', 'AV. OLIMPICA, APTO #4, COL. FLOR BLANCA, CONDOMINIO VILLA OLIMPICA, EDIFICIO C', 'SAN SALVADOR', 'EL SALVADOR', 'CONSTRUCCION DE OBRAS DE INGENIERIA CIVIL', '0614-100395-103-5', '84796-8'),
(16, 'PRODUCTOS ALIMENTICIOS BOCADELI, S.A. DE C.V.', 'FINAL AV. CERRO VERDE, COLONIA SIERRA MORENA II, SOYAPANGO.', 'SAN SALVADOR', 'EL SALVADOR', 'ELABORACION DE PRODUCTOS ALIMENTICIOS NCP', '0614-210193-104-9', '73943-0'),
(17, 'CS CORPORATIVO S.A. DE C.V.', 'COL. SANTA URSULA, PAJE. 2, CASA 132', 'SAN SALVADOR', 'EL SALVADOR', 'SERVICIOS DE INGENIERIA', '0614-050220-101-6', '288733-0'),
(18, 'CONSTRUCCION INGENIERIA Y SERVICIOS SA DE CV', 'SAN SALVADOR', 'SAN SALVADOR', 'EL SALVADOR', 'CONSTRUCCION DE OBRAS DE ING CIVIL', '0614-210508-103-1', '187725-3');

-- --------------------------------------------------------

--
-- Table structure for table `Contact`
--

CREATE TABLE `Contact` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `phone` varchar(14) COLLATE utf8_bin NOT NULL,
  `email` varchar(90) COLLATE utf8_bin DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Contact`
--

INSERT INTO `Contact` (`id`, `name`, `phone`, `email`, `supplier_id`, `client_id`) VALUES
(1, 'Carlos Ceren', '+503 22847483', 'carlosceren@gmail.com', NULL, 1),
(2, 'Nicolas Lopez', '+503 77602175', 'carlos', 1, NULL),
(8, 'Eduardo', '', '', NULL, NULL),
(9, 'Eduardo', '+33 0645022680', 'carlosceren@gmail.com', 6, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Invoice`
--

CREATE TABLE `Invoice` (
  `id` int(11) NOT NULL,
  `sales_id` int(11) NOT NULL,
  `invoiceNumber` int(11) NOT NULL,
  `type` varchar(15) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  `description` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `netPrice` decimal(10,4) NOT NULL,
  `grossPrice` decimal(10,4) NOT NULL,
  `tax` decimal(10,4) NOT NULL,
  `amountInLetters` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `comment` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Invoice`
--

INSERT INTO `Invoice` (`id`, `sales_id`, `invoiceNumber`, `type`, `date`, `description`, `netPrice`, `grossPrice`, `tax`, `amountInLetters`, `comment`) VALUES
(1, 1, 242, 'FACTURA', '2021-01-05', '3er Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '3er Abono'),
(2, 2, 295, 'CREDITO FISCAL', '2021-01-08', 'Trabajos de tablaroca', '700.0000', '619.4700', '80.5300', 'Setecientos 00/100 Dolares', '4to Abono'),
(3, 3, 243, 'FACTURA', '2021-01-11', 'Anticipo trabajos divisiones de tablaroca', '5000.0000', '4424.7800', '575.2200', 'Cinco mil 00/100 Dolares', '1er Abono'),
(4, 1, 244, 'FACTURA', '2021-01-13', '4to Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '4to Abono'),
(5, 4, 245, 'FACTURA', '2021-01-21', 'Trabajos de pintura', '4000.0000', '3539.8200', '460.1800', 'Cuatro mil 00/100 Dolares', '3er Abono'),
(6, 5, 293, 'CREDITO FISCAL', '2021-01-22', 'Liquidacion trabajos de adecuaci�n local Dollar Center PMA', '3710.9800', '3284.0500', '426.9300', 'Tres mil setecientos diez 98/100 Dolares', 'Liquidacion'),
(7, 3, 247, 'FACTURA', '2021-02-06', 'Anticipo trabajos divisiones de tablaroca', '3000.0000', '2654.8700', '345.1300', 'Tres mil 00/100 Dolares', '2do Abono'),
(8, 1, 246, 'FACTURA', '2021-01-26', '5to Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '5to Abono'),
(9, 1, 241, 'FACTURA', '2021-01-01', 'Acumulado abono a�o 2020', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', 'Acumulado a�o 2020'),
(10, 1, 248, 'FACTURA', '2021-02-08', '6to Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '6to Abono'),
(11, 6, 294, 'CREDITO FISCAL', '2021-01-30', 'Instalaci�n de cielo falso en proyecto BANDESAL, denominado Servicio de remodelaci�n edificio FDE', '358.2100', '317.0000', '41.2100', 'Trescientos cincuenta y ocho 21/100 Dolares', 'Pago �nico'),
(12, 1, 249, 'FACTURA', '2021-02-15', '7mo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '7mo Abono'),
(13, 7, 250, 'FACTURA', '2021-02-15', '1er Abono Palo Alto', '5000.0000', '4424.7800', '575.2200', 'Cinco mil 00/100 Dolares', '1er Abono'),
(14, 2, 292, 'CREDITO FISCAL', '2021-01-08', 'Anulada', '0.0000', '0.0000', '0.0000', 'Cero 00/100', 'Anulada'),
(15, 8, 296, 'CREDITO FISCAL', '2021-02-05', 'Trabajos de pintura', '1495.9800', '1323.8800', '172.1000', 'Un mil cuatrocientos noventa y cinco 98/100 Dolares', 'Pago �nico'),
(16, 9, 297, 'CREDITO FISCAL', '2021-02-05', 'Trabajos de tablaroca', '1500.0000', '1327.4300', '172.5700', 'Un mil quinientos 00/100 Dolares', 'Abono'),
(17, 4, 298, 'CREDITO FISCAL', '2021-02-22', 'Reparaci�n de cielos falsos', '2622.0000', '2320.3500', '301.6500', 'Dos mil seiscientos veintid�s 00/100 Dolares', 'Reparaci�n cielos en nivel 100'),
(18, 4, 299, 'CREDITO FISCAL', '2021-05-12', 'Trabajos de pintura', '2000.0000', '1769.9100', '230.0900', 'Dos mil 00/100 Dolares', '4to Abono'),
(19, 10, 300, 'CREDITO FISCAL', '2021-02-22', 'Trabajos de tablaroca', '4319.4100', '3822.4900', '496.9200', 'Cuatro mil trescientos diez y nueve 41/100 Dolares', 'Pago �nico'),
(20, 1, 301, 'CREDITO FISCAL', '2021-02-23', '8vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '8vo Abono'),
(21, 1, 1, 'FACTURA', '2021-03-03', '9no Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '9no Abono'),
(22, 9, 302, 'CREDITO FISCAL', '2021-03-03', 'Trabajos de tablaroca Edificio Colabora', '1026.0000', '907.9600', '118.0400', 'Un mil veintis�is 00/100 Dolares', 'Abono'),
(23, 4, 3, 'FACTURA', '2021-03-09', 'Segunda reparaci�n de cielo falso', '3850.0300', '3407.1100', '442.9200', 'Tres mil ochocientos cincuenta 03/100 Dolares', '2do Pago de cielo'),
(24, 4, 4, 'FACTURA', '2021-03-09', 'Trabajos de pintura en �rea de azotea', '2708.6000', '2396.9900', '311.6100', 'Dos mil setecientos ocho 60/100 Dolares', 'Pintura en Azotea'),
(25, 1, 5, 'FACTURA', '2021-05-12', '10mo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '10mo Abono'),
(26, 7, 6, 'FACTURA', '2021-03-11', '2do Abono Palo Alto', '5000.0000', '4424.7800', '575.2200', 'Cinco mil 00/100 Dolares', '2do Abono'),
(27, 4, 2, 'FACTURA', '2021-03-09', 'Anulada', '0.0000', '0.0000', '0.0000', 'Cero 00/100', 'Anulada'),
(28, 1, 7, 'FACTURA', '2021-03-18', '11vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '11vo Abono'),
(29, 1, 8, 'FACTURA', '2021-03-25', '12vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '12vo Abono'),
(30, 9, 303, 'CREDITO FISCAL', '2021-03-26', 'Trabajos Edificio Colabora', '800.0000', '707.9600', '92.0400', 'Ochocientos 00/100 Dolares', 'Abono'),
(31, 4, 9, 'FACTURA', '2021-04-05', 'Trabajos de pintura', '6446.1400', '5704.5500', '741.5900', 'Seis mil cuatrocientos cuarenta y seis 14/100 Dolares', 'Liquidacion pintuy interior'),
(32, 1, 10, 'FACTURA', '2021-04-05', '13vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '13vo Abono'),
(33, 7, 11, 'FACTURA', '2021-04-05', '3er Abono Palo Alto', '5000.0000', '4424.7800', '575.2200', 'Cinco mil 00/100 Dolares', '3er Abono'),
(34, 9, 304, 'CREDITO FISCAL', '2021-04-09', 'Liquidacion trabajos Edificio Colabora', '200.0000', '176.9900', '23.0100', 'Doscientos 00/100 Dolares', 'Liquidacion'),
(35, 1, 12, 'FACTURA', '2021-04-13', '14vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '14vo Abono'),
(36, 1, 13, 'FACTURA', '2021-04-20', '15vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '15vo Abono'),
(37, 3, 305, 'CREDITO FISCAL', '2021-04-20', 'Anticipo trabajos divisiones de tablaroca', '5500.0000', '4867.2600', '632.7400', 'Cinco mil quinientos 00/100 Dolares', '3er Abono'),
(38, 1, 14, 'FACTURA', '2021-04-29', '16vo Abono Condominio 105', '10000.0000', '8849.5600', '1150.4400', 'Diez mil 00/100 Dolares', '16vo Abono'),
(39, 11, 306, 'CREDITO FISCAL', '2021-05-31', 'Venta de Materiales para proyecto Oirsa', '1287.8200', '1139.6600', '148.1600', 'Un mil doscientos ochenta y siete 82/100 Dolares', 'Incluye facturas de Marcos $125.83'),
(40, 12, 307, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales para proyecto Bocadeli', '589.4900', '521.6700', '67.8200', 'Quinientos ochenta y nueve 49/100 Dolares', ''),
(41, 13, 308, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales para proyecto Condominio 105', '228.0000', '201.7700', '26.2300', 'Doscientos veintiocho 00/100 Dolares', ''),
(42, 13, 309, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales para proyecto Condominio 105', '23148.8000', '20485.6600', '2663.1400', 'Veintitres mil ciento cuarenta y ocho 80/100 Dolares', ''),
(43, 14, 310, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales para proyecto Condominio Palo Alto', '4882.3500', '4320.6600', '561.6900', 'Cuatro mil ochocientos ochenta y dos 35/100 Dolares', ''),
(44, 15, 311, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales proyecto Infinity Tower', '2727.1600', '2413.4200', '313.7400', 'Dos mil setecientos veintisiete 16/100 Dolares', ''),
(45, 16, 312, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales para proyectos TP1, Vistas del Mirador y Luceiro', '1870.7300', '1655.5100', '215.2200', 'Un mil ochocientos setenta 73/100 Dolares', 'TP1 $113.69 + Mirador $56.69 + Luciero $226.92 + Retenciones $1473.43'),
(46, 17, 313, 'CREDITO FISCAL', '2021-05-31', 'Venta de materiales', '3119.0400', '2760.2100', '358.8300', 'Tres mil ciento diez y nueve 04/100 Dolares', '$2,074.49 Facturas de Marcos + $1,455 Facturas proyectos'),
(47, 17, 314, 'CREDITO FISCAL', '2021-06-30', 'Venta de materiales para proyectos varios', '2809.9900', '2486.7200', '323.2700', 'Dos mil ochocientos nueve 99/100 Dolares', 'Condominio 105 - Infinity - Oirsa - Marcos H'),
(48, 17, 315, 'CREDITO FISCAL', '2021-06-30', 'Compra de tablaroca y perfileria para proyectos varios', '21441.8200', '18975.0600', '2466.7600', 'Veintiun mil cuatrocientos cuarenta y uno 82/100 Dolares', 'Palo Alto -105 - Infinity - Oirsa -Salamanca'),
(49, 17, 316, 'CREDITO FISCAL', '2021-06-30', 'Compra de materiales varios para proyectos', '1269.3300', '1123.3000', '146.0300', 'Un mil doscientos sesenta y nueve 33/100 Dolares', ''),
(50, 11, 317, 'CREDITO FISCAL', '2021-07-31', 'Venta de materiales para Condominio 105 ($225.60) y Oirsa ($1,348.83)', '1574.4400', '1393.3100', '181.1300', 'Un mil quinientos setenta y cuatro 44/100 Dolares', ''),
(51, 17, 318, 'CREDITO FISCAL', '2021-07-31', 'Venta de materiales', '4254.3400', '3764.9000', '489.4400', 'Cuatro mil doscientos cincuenta y cuatro 34/100 Dolares', ''),
(52, 13, 319, 'CREDITO FISCAL', '2021-08-01', 'Compra de materiales', '78.2000', '69.2000', '9.0000', 'Setenta y ocho 20/100 Dolares', 'Compra para el Lago'),
(53, 13, 320, 'CREDITO FISCAL', '2021-08-10', 'Compra de materiales', '372.0000', '329.2000', '42.8000', 'Trescientos setenta y dos 00/100 Dolares', ''),
(54, 16, 321, 'CREDITO FISCAL', '2021-08-13', 'Compra de materiales', '115.4000', '102.1200', '13.2800', 'Ciento quince 40/100 Dolares', ''),
(55, 13, 322, 'CREDITO FISCAL', '2021-08-30', 'Compra de materiales', '180.0000', '159.2900', '20.7100', 'Ciento ochenta 00/100 Dolares', ''),
(56, 11, 323, 'CREDITO FISCAL', '2021-08-31', 'Compra de materiales proyecto Oirsa', '541.6600', '479.3500', '62.3100', 'Quinientos cuarenta y uno 66/100 Dolares', ''),
(57, 13, 324, 'CREDITO FISCAL', '2021-10-30', 'MATERIALES PARA TRABAJO PROYECTO LA 105', '829.8000', '734.3400', '95.4600', 'OCHOCIENTOS VEINTINUEVE 79/100 DOLARES', 'MATERIALES FREUND LA 105'),
(58, 16, 325, 'CREDITO FISCAL', '2021-10-29', 'MATERIALES PARA DIVERSOS PROYECTOS', '1296.1100', '1147.0000', '149.1100', 'MIL DOSCIENTOS NOVENTA Y SEIS 10/100 DOLARES', 'MATERIALES VARIOS PROYECTOS MHERNANDEZ'),
(59, 7, 326, 'CREDITO FISCAL', '2021-10-30', 'VENTA DE MATERIALES PARA PALO ALTO', '165.0000', '146.0200', '18.9800', 'CIENTO SESENTA Y CINCO 00/100 DOLARES', ''),
(60, 18, 327, 'CREDITO FISCAL', '2021-10-30', 'VENTA DE CUBETA DE PINTURA', '75.0000', '66.3700', '8.6300', 'SETENTA Y CINCO 00/100 DOLARES', 'PROYECTO TATO');

-- --------------------------------------------------------

--
-- Table structure for table `Label`
--

CREATE TABLE `Label` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Label`
--

INSERT INTO `Label` (`id`, `name`) VALUES
(1, 'Combustible'),
(3, 'Materiales'),
(4, 'Herramientas'),
(5, 'Tablaroca'),
(8, 'Pintura');

-- --------------------------------------------------------

--
-- Table structure for table `PaymentType`
--

CREATE TABLE `PaymentType` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `PaymentType`
--

INSERT INTO `PaymentType` (`id`, `name`) VALUES
(1, 'CS Agricola'),
(3, 'CS Davivienda'),
(4, 'CS BAC Credomatic');

-- --------------------------------------------------------

--
-- Table structure for table `Payroll`
--

CREATE TABLE `Payroll` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `project_id` int(11) NOT NULL,
  `type` varchar(10) COLLATE utf8_bin NOT NULL,
  `payrollNumber` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `alias_id` int(11) NOT NULL,
  `amount` decimal(10,4) NOT NULL,
  `tax` decimal(10,4) NOT NULL,
  `salary` decimal(10,4) NOT NULL,
  `comments` varchar(300) COLLATE utf8_bin DEFAULT NULL,
  `finished` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Payroll`
--

INSERT INTO `Payroll` (`id`, `date`, `project_id`, `type`, `payrollNumber`, `staff_id`, `alias_id`, `amount`, `tax`, `salary`, `comments`, `finished`) VALUES
(1, '2021-01-09', 3, 'OBRA', 1, 17, 1, '900.0000', '90.0000', '810.0000', '', 1),
(2, '2021-01-09', 3, 'OBRA', 1, 3, 3, '200.0000', '20.0000', '180.0000', '', 1),
(3, '2021-01-09', 3, 'OBRA', 1, 2, 2, '200.0000', '20.0000', '180.0000', '', 1),
(4, '2021-01-09', 7, 'OBRA', 1, 2, 2, '100.0000', '10.0000', '90.0000', '', 1),
(5, '2021-01-09', 13, 'AL DIA', 1, 3, 3, '102.0000', '10.2000', '91.8000', '', 1),
(6, '2021-01-09', 5, 'AL DIA', 1, 5, 4, '116.7000', '11.6700', '105.0300', '', 1),
(7, '2021-01-09', 14, 'AL DIA', 1, 5, 4, '23.3000', '2.3300', '20.9700', '', 1),
(8, '2021-01-09', 13, 'AL DIA', 1, 31, 10, '96.0000', '9.6000', '86.4000', '', 1),
(9, '2021-01-09', 7, 'AL DIA', 1, 32, 12, '170.0000', '17.0000', '153.0000', 'Apartamentos 401-402, Elevadores y Admon', 1),
(10, '2021-01-09', 12, 'AL DIA', 1, 27, 8, '15.0000', '1.5000', '13.5000', '', 1),
(11, '2021-01-09', 14, 'AL DIA', 1, 27, 8, '75.0000', '7.5000', '67.5000', '', 1),
(12, '2021-01-09', 1, 'AL DIA', 1, 16, 6, '20.0000', '2.0000', '18.0000', 'Casa papá de Guerrero', 1),
(13, '2021-01-09', 14, 'AL DIA', 1, 16, 6, '85.0000', '8.5000', '76.5000', '', 1),
(14, '2021-01-09', 1, 'AL DIA', 1, 30, 11, '50.0000', '5.0000', '45.0000', 'Casa papá de Guerrero', 1),
(15, '2021-01-09', 5, 'AL DIA', 1, 30, 11, '75.0000', '7.5000', '67.5000', 'Reparaciones cielos', 1),
(16, '2021-01-15', 3, 'OBRA', 2, 17, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(17, '2021-01-15', 3, 'OBRA', 2, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(18, '2021-01-15', 3, 'OBRA', 2, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(19, '2021-01-15', 3, 'OBRA', 2, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(20, '2021-01-15', 15, 'OBRA', 2, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(21, '2021-01-15', 7, 'OBRA', 2, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(22, '2021-01-15', 6, 'AL DIA', 2, 32, 12, '15.0000', '1.5000', '13.5000', 'Pintando blaco dover e interiores', 1),
(23, '2021-01-15', 7, 'AL DIA', 2, 32, 12, '360.0000', '36.0000', '324.0000', 'Aptos. 404-501-502-503-504-604', 1),
(24, '2021-01-15', 13, 'AL DIA', 2, 31, 10, '120.0000', '12.0000', '108.0000', 'Pintando en Nivel 200', 1),
(25, '2021-01-15', 15, 'OBRA', 2, 30, 11, '150.0000', '15.0000', '135.0000', '1er PLANILLA', 1),
(26, '2021-01-15', 12, 'AL DIA', 2, 30, 11, '25.0000', '2.5000', '22.5000', 'Compuertas en columnas densglass', 1),
(27, '2021-01-15', 14, 'AL DIA', 2, 30, 11, '25.0000', '2.5000', '22.5000', 'Colocando cortinas, tv y muebles', 1),
(28, '2021-01-15', 1, 'AL DIA', 2, 16, 6, '20.0000', '2.0000', '18.0000', 'Reparaciones', 1),
(29, '2021-01-15', 9, 'AL DIA', 2, 16, 6, '40.0000', '4.0000', '36.0000', 'Baño vigilante', 1),
(30, '2021-01-15', 14, 'AL DIA', 2, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando', 1),
(31, '2021-01-15', 5, 'AL DIA', 2, 27, 8, '30.0000', '3.0000', '27.0000', 'Reparando cielos', 1),
(32, '2021-01-15', 10, 'AL DIA', 2, 27, 8, '15.0000', '1.5000', '13.5000', '40', 1),
(33, '2021-01-22', 3, 'OBRA', 3, 17, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(34, '2021-01-22', 3, 'OBRA', 3, 3, 3, '325.0000', '32.5000', '292.5000', '', 1),
(35, '2021-01-22', 3, 'OBRA', 3, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(36, '2021-01-22', 15, 'OBRA', 3, 30, 11, '400.0000', '40.0000', '360.0000', '', 1),
(37, '2021-01-22', 15, 'OBRA', 3, 16, 6, '80.0000', '8.0000', '72.0000', 'Primer planilla', 1),
(38, '2021-01-22', 13, 'AL DIA', 3, 31, 10, '95.0000', '9.5000', '85.5000', '', 1),
(39, '2021-01-22', 5, 'AL DIA', 3, 27, 8, '52.5000', '5.2500', '47.2500', 'Reparando cielos', 1),
(40, '2021-01-22', 10, 'AL DIA', 3, 27, 8, '7.5000', '0.7500', '6.7500', '40', 1),
(41, '2021-01-22', 12, 'AL DIA', 3, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando muro de.azul Vía lactea', 1),
(42, '2021-01-22', 5, 'AL DIA', 3, 5, 4, '128.3300', '12.8300', '115.5000', 'Reparando cielos', 1),
(43, '2021-01-22', 10, 'AL DIA', 3, 5, 4, '11.6700', '1.1700', '10.5000', '40', 1),
(44, '2021-01-22', 7, 'AL DIA', 3, 32, 12, '500.0000', '50.0000', '450.0000', 'Apartamentos 601-603-704,  parte de escaleras y otros', 1),
(45, '2021-01-30', 3, 'OBRA', 4, 17, 1, '750.0000', '75.0000', '675.0000', '', 1),
(46, '2021-01-30', 3, 'OBRA', 4, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(47, '2021-01-30', 3, 'OBRA', 4, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(48, '2021-01-30', 15, 'OBRA', 4, 16, 6, '100.0000', '10.0000', '90.0000', '', 1),
(49, '2021-01-30', 15, 'OBRA', 4, 30, 11, '400.0000', '40.0000', '360.0000', '', 1),
(50, '2021-01-30', 3, 'OBRA', 4, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(51, '2021-01-30', 15, 'OBRA', 4, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(52, '2021-01-30', 7, 'OBRA', 4, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(53, '2021-01-30', 16, 'AL DIA', 4, 1, 1, '270.0000', '27.0000', '243.0000', 'Pago unico', 1),
(54, '2021-01-30', 6, 'AL DIA', 4, 1, 1, '35.0000', '3.5000', '31.5000', 'Division tablaroca en 1er nivel', 1),
(55, '2021-01-30', 5, 'AL DIA', 4, 27, 8, '75.0000', '7.5000', '67.5000', 'Reparando cielos pasillos', 1),
(56, '2021-01-30', 7, 'AL DIA', 4, 32, 12, '185.0000', '18.5000', '166.5000', 'Aptos 603-701-702 y 2 niveles de pasamanos', 1),
(57, '2021-02-05', 3, 'OBRA', 5, 17, 1, '800.0000', '80.0000', '720.0000', '', 1),
(58, '2021-02-05', 13, 'OBRA', 5, 17, 1, '225.0000', '22.5000', '202.5000', 'Reparando cielos y haciendo fascia', 1),
(59, '2021-02-05', 3, 'OBRA', 5, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(60, '2021-02-05', 13, 'AL DIA', 5, 3, 3, '34.0000', '3.4000', '30.6000', 'Reparaciones cocineta', 1),
(61, '2021-02-05', 9, 'AL DIA', 5, 3, 3, '34.0000', '3.4000', '30.6000', 'Reparando cielo area social', 1),
(62, '2021-02-05', 3, 'OBRA', 5, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(63, '2021-02-05', 15, 'OBRA', 5, 16, 6, '150.0000', '15.0000', '135.0000', '', 1),
(64, '2021-02-05', 7, 'AL DIA', 5, 32, 12, '100.0000', '10.0000', '90.0000', 'Apartamento 703 + caseta vigilancia + fascias y cornisas area social', 1),
(65, '2021-02-05', 7, 'AL DIA', 5, 5, 4, '80.0000', '8.0000', '72.0000', 'Reparaciones varias', 1),
(66, '2021-02-05', 5, 'AL DIA', 5, 5, 4, '60.0000', '6.0000', '54.0000', 'Reparaciones varias', 1),
(67, '2021-02-05', 5, 'AL DIA', 5, 27, 8, '75.0000', '7.5000', '67.5000', 'Reparaciones cielos', 1),
(68, '2021-02-05', 13, 'AL DIA', 5, 31, 10, '142.0000', '14.2000', '127.8000', '8 cubetas - $50 de anticipo', 1),
(69, '2021-02-05', 15, 'OBRA', 5, 30, 11, '250.0000', '25.0000', '225.0000', '', 1),
(70, '2021-02-13', 3, 'OBRA', 6, 7, 1, '950.0000', '95.0000', '855.0000', '', 1),
(71, '2021-02-13', 3, 'OBRA', 6, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(72, '2021-02-13', 3, 'OBRA', 6, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(73, '2021-02-13', 3, 'OBRA', 6, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(74, '2021-02-13', 7, 'OBRA', 6, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(75, '2021-02-13', 15, 'OBRA', 6, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(76, '2021-02-13', 15, 'OBRA', 6, 16, 6, '250.0000', '25.0000', '225.0000', '', 1),
(77, '2021-02-13', 5, 'AL DIA', 6, 27, 8, '60.0000', '6.0000', '54.0000', '', 1),
(78, '2021-02-13', 10, 'AL DIA', 6, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando en La 106, proyecto de Marcos', 1),
(79, '2021-02-13', 10, 'AL DIA', 6, 1, 1, '45.0000', '4.5000', '40.5000', 'Cielo en La 106, proyecto de Marcos', 1),
(80, '2021-02-13', 13, 'OBRA', 6, 7, 1, '125.0000', '12.5000', '112.5000', 'Cielos 1er nivel  reparaciones generales', 1),
(81, '2021-02-13', 10, 'AL DIA', 6, 3, 3, '30.0000', '3.0000', '27.0000', 'Pasteando cielo de La 106, proyecto de Marcos', 1),
(82, '2021-02-13', 13, 'AL DIA', 6, 3, 3, '68.0000', '6.8000', '61.2000', 'Reparaciones y fascia', 1),
(83, '2021-02-13', 15, 'OBRA', 6, 30, 11, '400.0000', '40.0000', '360.0000', '', 1),
(84, '2021-02-13', 13, 'AL DIA', 6, 31, 10, '170.0000', '17.0000', '153.0000', 'Pintando 4to nivel', 1),
(85, '2021-02-13', 7, 'AL DIA', 6, 32, 12, '90.0000', '9.0000', '81.0000', 'Pintando al día', 1),
(86, '2021-02-19', 3, 'OBRA', 7, 7, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(87, '2021-02-19', 3, 'OBRA', 7, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(88, '2021-02-19', 3, 'OBRA', 7, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(89, '2021-02-19', 15, 'OBRA', 7, 30, 11, '500.0000', '50.0000', '450.0000', '', 1),
(90, '2021-02-19', 15, 'OBRA', 7, 16, 6, '280.0000', '28.0000', '252.0000', '', 1),
(91, '2021-02-19', 13, 'AL DIA', 7, 1, 1, '60.0000', '6.0000', '54.0000', 'Reparando cielos', 1),
(92, '2021-02-19', 7, 'AL DIA', 7, 2, 2, '80.0000', '8.0000', '72.0000', 'Reparaciones varias', 1),
(93, '2021-02-19', 10, 'AL DIA', 7, 2, 2, '60.0000', '6.0000', '54.0000', 'Casa en Mejicanos', 1),
(94, '2021-02-19', 7, 'AL DIA', 7, 32, 12, '90.0000', '9.0000', '81.0000', 'Al día pintando reparaciones', 1),
(95, '2021-02-19', 15, 'AL DIA', 7, 32, 12, '30.0000', '3.0000', '27.0000', 'Pintando baños', 1),
(96, '2021-02-19', 3, 'AL DIA', 7, 32, 12, '45.0000', '4.5000', '40.5000', 'Pintando cuadrados ventanas, puertas y áreas de closets', 1),
(97, '2021-02-19', 13, 'AL DIA', 7, 31, 10, '190.0000', '19.0000', '171.0000', 'Pintando en Segundo nivel', 1),
(98, '2021-02-19', 7, 'AL DIA', 7, 5, 4, '140.0000', '14.0000', '126.0000', 'Reparaciones varias', 1),
(99, '2021-02-19', 13, 'AL DIA', 7, 3, 3, '70.0000', '7.0000', '63.0000', 'Paredes exterior azotea', 1),
(100, '2021-02-19', 13, 'AL DIA', 7, 2, 2, '70.0000', '7.0000', '63.0000', 'Pasteando paredes azotea', 1),
(101, '2021-02-19', 5, 'AL DIA', 7, 27, 8, '75.0000', '7.5000', '67.5000', 'Reparaciones en cielo', 1),
(102, '2021-02-27', 3, 'OBRA', 8, 7, 1, '900.0000', '90.0000', '810.0000', '', 1),
(103, '2021-02-27', 13, 'OBRA', 8, 7, 1, '250.0000', '25.0000', '225.0000', 'Reparando cielos 4to nivel', 1),
(104, '2021-02-27', 3, 'OBRA', 8, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(105, '2021-02-27', 3, 'OBRA', 8, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(106, '2021-02-27', 15, 'OBRA', 8, 16, 6, '300.0000', '30.0000', '270.0000', '', 1),
(107, '2021-02-27', 7, 'AL DIA', 8, 32, 12, '60.0000', '6.0000', '54.0000', 'Trabajos al dia', 1),
(108, '2021-02-27', 7, 'AL DIA', 8, 32, 12, '100.0000', '10.0000', '90.0000', 'Parte de la obra de $700, le debo $600', 1),
(109, '2021-02-27', 3, 'AL DIA', 8, 32, 12, '300.0000', '30.0000', '270.0000', 'Apartamentos 101-102-103-104-105-106 la primera mano', 1),
(110, '2021-02-27', 13, 'AL DIA', 8, 32, 12, '52.5000', '5.2500', '47.2500', 'Preparando paredes de azotea', 1),
(111, '2021-02-27', 13, 'AL DIA', 8, 2, 2, '120.0000', '12.0000', '108.0000', 'Preparando paredes azotea, fascia en entrada principal, fascia en azotea', 1),
(112, '2021-02-27', 13, 'AL DIA', 8, 3, 3, '120.0000', '12.0000', '108.0000', 'Preparando paredes azotea, fascia en azotea y entrada principal', 1),
(113, '2021-02-27', 13, 'AL DIA', 8, 31, 10, '165.0000', '16.5000', '148.5000', 'Pintando en 2do nivel, descontando $25 de los $50 que le adelante', 1),
(114, '2021-02-27', 5, 'AL DIA', 8, 27, 8, '75.0000', '7.5000', '67.5000', 'Reparaciones cielos y divisiones escaleron', 1),
(115, '2021-02-27', 17, 'OBRA', 8, 30, 11, '350.0000', '35.0000', '315.0000', 'Primer planilla', 1),
(116, '2021-02-27', 15, 'OBRA', 8, 30, 11, '50.0000', '5.0000', '45.0000', '', 1),
(117, '2021-03-03', 3, 'OBRA', 9, 7, 1, '250.0000', '25.0000', '225.0000', '', 1),
(118, '2021-03-05', 3, 'OBRA', 10, 7, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(119, '2021-03-05', 13, 'OBRA', 10, 7, 1, '120.0000', '12.0000', '108.0000', 'Reparando cielos en 4to nivel y 1er nivel', 1),
(120, '2021-03-05', 3, 'OBRA', 10, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(121, '2021-03-05', 3, 'OBRA', 10, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(122, '2021-03-05', 13, 'OBRA', 10, 2, 2, '80.0000', '8.0000', '72.0000', 'Reparaciones de fascias y paredes exterior', 1),
(123, '2021-03-05', 18, 'AL DIA', 10, 5, 4, '70.0000', '7.0000', '63.0000', 'Reparaciones varias y goteras', 1),
(124, '2021-03-05', 13, 'AL DIA', 10, 5, 4, '70.0000', '7.0000', '63.0000', 'Pintura y reparaciones cielos', 1),
(125, '2021-03-05', 15, 'OBRA', 10, 16, 6, '350.0000', '35.0000', '315.0000', '', 1),
(126, '2021-03-05', 15, 'OBRA', 10, 30, 11, '250.0000', '25.0000', '225.0000', '', 1),
(127, '2021-03-05', 17, 'OBRA', 10, 30, 11, '250.0000', '25.0000', '225.0000', '', 1),
(128, '2021-03-05', 5, 'AL DIA', 10, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando escaleron de emergencia', 1),
(129, '2021-03-05', 13, 'AL DIA', 10, 27, 8, '45.0000', '4.5000', '40.5000', 'Pintando escaleron', 1),
(130, '2021-03-05', 3, 'AL DIA', 10, 32, 12, '205.0000', '20.5000', '184.5000', 'Apartamentos 201-202-203-204-205', 1),
(131, '2021-03-05', 13, 'AL DIA', 10, 32, 12, '125.0000', '12.5000', '112.5000', 'Pintando fachada azotea', 1),
(132, '2021-03-05', 7, 'AL DIA', 10, 32, 12, '300.0000', '30.0000', '270.0000', 'Abono a obra $600-$300 = $300 pendientes', 1),
(133, '2021-03-05', 13, 'AL DIA', 10, 3, 3, '80.0000', '8.0000', '72.0000', 'Reparando paredes y fascia fachada', 1),
(134, '2021-03-05', 13, 'AL DIA', 10, 31, 10, '119.0000', '11.9000', '107.1000', 'Pintando en 2do y 3er nivel', 1),
(135, '2021-03-12', 3, 'OBRA', 11, 7, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(136, '2021-03-12', 3, 'OBRA', 11, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(137, '2021-03-12', 3, 'OBRA', 11, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(138, '2021-03-12', 15, 'OBRA', 11, 30, 11, '150.0000', '15.0000', '135.0000', '', 1),
(139, '2021-03-12', 17, 'OBRA', 11, 30, 11, '150.0000', '15.0000', '135.0000', '', 1),
(140, '2021-03-12', 15, 'OBRA', 11, 16, 6, '350.0000', '35.0000', '315.0000', '', 1),
(141, '2021-03-12', 17, 'OBRA', 11, 16, 6, '130.0000', '13.0000', '117.0000', 'Primera planilla', 1),
(142, '2021-03-12', 3, 'OBRA', 11, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(143, '2021-03-12', 15, 'OBRA', 11, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(144, '2021-03-12', 17, 'OBRA', 11, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(145, '2021-03-12', 7, 'AL DIA', 11, 27, 8, '60.0000', '6.0000', '54.0000', 'Apartamento 103 del Chino', 1),
(146, '2021-03-12', 9, 'AL DIA', 11, 27, 8, '30.0000', '3.0000', '27.0000', 'Apartamento 302 y 303', 1),
(147, '2021-03-12', 13, 'AL DIA', 11, 31, 10, '96.0000', '9.6000', '86.4000', 'Terminando 3er nivel y casi el 2do nivel', 1),
(148, '2021-03-12', 3, 'AL DIA', 11, 32, 12, '500.0000', '50.0000', '450.0000', 'Apartamentos 206-301-302-303-305-306-406-405-404-403', 1),
(149, '2021-03-12', 13, 'AL DIA', 11, 32, 12, '125.1700', '12.5200', '112.6500', 'Fascia 99.86m2, Parapeto 276.18m2, Pared blanca 457.85m2. LIQUIDACIÓN', 1),
(150, '2021-03-19', 3, 'OBRA', 12, 28, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(151, '2021-03-19', 13, 'OBRA', 12, 28, 1, '150.0000', '15.0000', '135.0000', 'Reparando segunda parte del 4to nivel', 1),
(152, '2021-03-19', 3, 'OBRA', 12, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(153, '2021-03-19', 3, 'OBRA', 12, 3, 3, '400.0000', '40.0000', '360.0000', '', 1),
(154, '2021-03-19', 15, 'OBRA', 12, 16, 6, '400.0000', '40.0000', '360.0000', '', 1),
(155, '2021-03-19', 17, 'OBRA', 12, 16, 6, '120.0000', '12.0000', '108.0000', '', 1),
(156, '2021-03-19', 15, 'OBRA', 12, 30, 11, '50.0000', '5.0000', '45.0000', '', 1),
(157, '2021-03-19', 17, 'OBRA', 12, 30, 11, '500.0000', '50.0000', '450.0000', '', 1),
(158, '2021-03-19', 7, 'AL DIA', 12, 27, 8, '45.0000', '4.5000', '40.5000', 'Reparando apartamento 103 del Chino', 1),
(159, '2021-03-19', 9, 'AL DIA', 12, 27, 8, '15.0000', '1.5000', '13.5000', 'Apartamento 302-303', 1),
(160, '2021-03-19', 13, 'AL DIA', 12, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando acceso vehicular', 1),
(161, '2021-03-19', 12, 'AL DIA', 12, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando apartamento 202', 1),
(162, '2021-03-19', 13, 'AL DIA', 12, 31, 10, '60.0000', '6.0000', '54.0000', 'Termina 2do y 3er nivel', 1),
(163, '2021-03-19', 3, 'AL DIA', 12, 32, 12, '300.0000', '30.0000', '270.0000', 'Apartamentos 304-401-402-501-502-503', 1),
(164, '2021-03-19', 15, 'AL DIA', 12, 32, 12, '75.0000', '7.5000', '67.5000', 'Pintando primera mano', 1),
(165, '2021-03-26', 3, 'OBRA', 13, 28, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(166, '2021-03-26', 3, 'OBRA', 13, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(167, '2021-03-26', 3, 'OBRA', 13, 3, 3, '400.0000', '40.0000', '360.0000', '', 1),
(168, '2021-03-26', 17, 'OBRA', 13, 30, 11, '350.0000', '35.0000', '315.0000', '', 1),
(169, '2021-03-26', 17, 'OBRA', 13, 16, 6, '150.0000', '15.0000', '135.0000', '', 1),
(170, '2021-03-26', 15, 'OBRA', 13, 16, 6, '400.0000', '40.0000', '360.0000', '', 1),
(171, '2021-03-26', 3, 'OBRA', 13, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(172, '2021-03-26', 15, 'OBRA', 13, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(173, '2021-03-26', 17, 'OBRA', 13, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(174, '2021-03-26', 15, 'AL DIA', 13, 16, 6, '68.0000', '6.8000', '61.2000', 'Al día Miguel Mejia, sacando galladas', 1),
(175, '2021-03-26', 3, 'AL DIA', 13, 32, 12, '150.0000', '15.0000', '135.0000', 'Apartamentos 504-505-506', 1),
(176, '2021-03-26', 15, 'AL DIA', 13, 32, 12, '30.0000', '3.0000', '27.0000', '2 días al día, pintando lo ultimo', 1),
(177, '2021-03-26', 7, 'AL DIA', 13, 32, 12, '150.0000', '15.0000', '135.0000', 'De los $300 que le debo, le abono $150', 1),
(178, '2021-03-26', 13, 'AL DIA', 13, 27, 8, '60.0000', '6.0000', '54.0000', 'Pintando acceso vehicular', 1),
(179, '2021-03-26', 9, 'AL DIA', 13, 27, 8, '15.0000', '1.5000', '13.5000', 'Terminando apartamentos 303-304', 1),
(180, '2021-03-26', 10, 'AL DIA', 13, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando área social de Vistas de Masferrer La 16', 1),
(181, '2021-03-26', 13, 'AL DIA', 12, 31, 10, '40.0000', '4.0000', '36.0000', 'Abono a liquidacion', 1),
(182, '2021-03-26', 13, 'AL DIA', 12, 31, 10, '50.0000', '5.0000', '45.0000', 'Abono a liquidacion', 1),
(183, '2021-04-03', 3, 'OBRA', 14, 28, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(184, '2021-04-03', 3, 'OBRA', 14, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(185, '2021-04-03', 3, 'OBRA', 14, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(186, '2021-04-03', 17, 'OBRA', 14, 30, 11, '450.0000', '45.0000', '405.0000', '', 1),
(187, '2021-04-03', 17, 'OBRA', 14, 16, 6, '175.0000', '17.5000', '157.5000', '', 1),
(188, '2021-04-03', 15, 'OBRA', 14, 16, 6, '100.0000', '10.0000', '90.0000', '', 1),
(189, '2021-04-03', 7, 'AL DIA', 14, 32, 12, '120.0000', '12.0000', '108.0000', 'Abono a liquidacion', 1),
(190, '2021-04-03', 3, 'AL DIA', 14, 32, 12, '30.0000', '3.0000', '27.0000', 'Abono apartamento 606', 1),
(191, '2021-04-03', 19, 'AL DIA', 14, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando primer nivel de oficinas', 1),
(192, '2021-04-03', 7, 'AL DIA', 14, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando apartamento 702', 1),
(193, '2021-04-03', 7, 'AL DIA', 14, 32, 12, '30.0000', '3.0000', '27.0000', 'Liquidacion Luceiro', 1),
(194, '2021-04-03', 15, 'AL DIA', 14, 32, 12, '30.0000', '3.0000', '27.0000', 'Pintura tablaroca', 1),
(195, '2021-04-03', 13, 'AL DIA', 14, 31, 10, '40.0000', '4.0000', '36.0000', 'Liquidacion TP1', 1),
(196, '2021-04-09', 3, 'OBRA', 15, 28, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(197, '2021-04-09', 3, 'OBRA', 15, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(198, '2021-04-09', 3, 'OBRA', 15, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(199, '2021-04-09', 17, 'OBRA', 15, 16, 6, '300.0000', '30.0000', '270.0000', '', 1),
(200, '2021-04-09', 17, 'OBRA', 15, 30, 11, '500.0000', '50.0000', '450.0000', '', 1),
(201, '2021-04-09', 20, 'AL DIA', 15, 30, 11, '50.0000', '5.0000', '45.0000', '20', 1),
(202, '2021-04-09', 17, 'OBRA', 15, 6, 9, '83.3300', '8.3300', '75.0000', '', 1),
(203, '2021-04-09', 3, 'OBRA', 15, 6, 9, '83.3300', '8.3300', '75.0000', '', 1),
(204, '2021-04-09', 7, 'AL DIA', 15, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando apartamentos 702 y 602', 1),
(205, '2021-04-09', 19, 'AL DIA', 15, 27, 8, '60.0000', '6.0000', '54.0000', 'Reparando y pintando oficinas', 1),
(206, '2021-04-09', 9, 'AL DIA', 15, 27, 8, '15.0000', '1.5000', '13.5000', 'Apartamento 301, reparandolo', 1),
(207, '2021-04-17', 3, 'OBRA', 16, 28, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(208, '2021-04-17', 3, 'OBRA', 16, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(209, '2021-04-17', 3, 'OBRA', 16, 3, 3, '350.0000', '35.0000', '315.0000', '', 1),
(210, '2021-04-17', 17, 'OBRA', 16, 30, 11, '350.0000', '35.0000', '315.0000', '', 1),
(211, '2021-04-17', 15, 'OBRA', 16, 30, 11, '50.0000', '5.0000', '45.0000', 'Haciendo cocinetas del 7 y 8 nivel', 1),
(212, '2021-04-17', 17, 'OBRA', 16, 16, 6, '115.0000', '11.5000', '103.5000', '', 1),
(213, '2021-04-17', 7, 'AL DIA', 16, 1, 1, '25.0000', '2.5000', '22.5000', 'Reparando cielo terraza 601 de Luceiro I', 1),
(214, '2021-04-17', 20, 'AL DIA', 16, 30, 11, '150.0000', '15.0000', '135.0000', '', 1),
(215, '2021-04-17', 20, 'AL DIA', 16, 16, 6, '200.0000', '20.0000', '180.0000', '', 1),
(216, '2021-04-17', 19, 'AL DIA', 16, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando área de gradas', 1),
(217, '2021-04-17', 8, 'AL DIA', 16, 27, 8, '37.5000', '3.7500', '33.7500', 'Reparando cielos dañados por A-C', 1),
(218, '2021-04-17', 7, 'AL DIA', 16, 27, 8, '22.5000', '2.2500', '20.2500', 'Retocando apartamento 103 del chino', 1),
(219, '2021-04-17', 19, 'AL DIA', 16, 5, 4, '23.0000', '2.3000', '20.7000', 'Pintando oficina', 1),
(220, '2021-04-17', 8, 'AL DIA', 16, 5, 4, '49.0000', '4.9000', '44.1000', 'Reparando cielo dañado por A-C', 1),
(221, '2021-04-17', 18, 'AL DIA', 16, 5, 4, '24.0000', '2.4000', '21.6000', 'Preparando paredes del Bar', 1),
(222, '2021-04-17', 12, 'AL DIA', 16, 5, 4, '35.0000', '3.5000', '31.5000', 'Reparando apartamentos 107-207', 1),
(223, '2021-04-17', 21, 'AL DIA', 16, 5, 4, '23.0000', '2.3000', '20.7000', 'Varios', 1),
(224, '2021-04-09', 15, 'AL DIA', 15, 32, 12, '30.0000', '3.0000', '27.0000', '', 1),
(225, '2021-04-09', 18, 'AL DIA', 15, 32, 12, '30.0000', '3.0000', '27.0000', 'Pintando paredes del bar', 1),
(226, '2021-04-17', 7, 'AL DIA', 16, 32, 12, '130.0000', '13.0000', '117.0000', 'Apartamentos 606-605-604', 1),
(227, '2021-04-17', 15, 'AL DIA', 16, 32, 12, '50.0000', '5.0000', '45.0000', 'Pintando área de loby de todos los niveles', 1),
(228, '2021-04-24', 3, 'OBRA', 17, 24, 1, '1500.0000', '150.0000', '1350.0000', '', 1),
(229, '2021-04-24', 3, 'OBRA', 17, 9, 3, '400.0000', '40.0000', '360.0000', '', 1),
(230, '2021-04-24', 3, 'OBRA', 17, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(231, '2021-04-24', 20, 'AL DIA', 17, 16, 6, '200.0000', '20.0000', '180.0000', '', 1),
(232, '2021-04-24', 17, 'OBRA', 17, 16, 6, '100.0000', '10.0000', '90.0000', '', 1),
(233, '2021-04-24', 17, 'OBRA', 17, 30, 11, '225.0000', '22.5000', '202.5000', '', 1),
(234, '2021-04-24', 15, 'OBRA', 17, 30, 11, '75.0000', '7.5000', '67.5000', '', 1),
(235, '2021-04-24', 20, 'AL DIA', 17, 30, 11, '100.0000', '10.0000', '90.0000', 'Cielos y divisiones', 1),
(236, '2021-04-24', 3, 'OBRA', 17, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(237, '2021-04-24', 17, 'OBRA', 17, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(238, '2021-04-24', 15, 'OBRA', 17, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(239, '2021-04-24', 3, 'AL DIA', 17, 32, 12, '140.0000', '14.0000', '126.0000', 'Apartamentos 603-602-601', 1),
(240, '2021-04-24', 3, 'AL DIA', 17, 32, 12, '50.0000', '5.0000', '45.0000', 'Pantalla contigua vano apartamentos 1s (Anticipo)', 1),
(241, '2021-04-24', 8, 'AL DIA', 17, 27, 8, '7.5000', '0.7500', '6.7500', 'Pintando oficinas', 1),
(242, '2021-04-24', 9, 'AL DIA', 17, 27, 8, '45.0000', '4.5000', '40.5000', 'Reparando apartamento 401', 1),
(243, '2021-04-24', 10, 'AL DIA', 17, 27, 8, '22.5000', '2.2500', '20.2500', 'Pintando apartamento 601', 1),
(244, '2021-05-01', 3, 'OBRA', 18, 24, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(245, '2021-05-01', 3, 'OBRA', 18, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(246, '2021-05-01', 3, 'OBRA', 18, 9, 3, '400.0000', '40.0000', '360.0000', '', 1),
(247, '2021-05-01', 7, 'AL DIA', 18, 27, 8, '52.5000', '5.2500', '47.2500', 'Reparando apartamento 103 del Chino', 1),
(248, '2021-05-01', 9, 'AL DIA', 18, 27, 8, '7.5000', '0.7500', '6.7500', 'Reparando apartamento 401', 1),
(249, '2021-05-01', 13, 'AL DIA', 18, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando acceso principal peatonal', 1),
(250, '2021-05-01', 3, 'AL DIA', 18, 32, 12, '200.0000', '20.0000', '180.0000', 'Apartamentos 701-703-704-705', 1),
(251, '2021-05-01', 3, 'AL DIA', 18, 32, 12, '40.0000', '4.0000', '36.0000', 'Abono a obra general. Pantallas de gris cantera exterior elevador', 1),
(252, '2021-05-01', 15, 'OBRA', 18, 30, 11, '275.0000', '27.5000', '247.5000', '', 1),
(253, '2021-05-01', 17, 'OBRA', 18, 30, 11, '250.0000', '25.0000', '225.0000', '', 1),
(254, '2021-05-01', 20, 'AL DIA', 18, 30, 11, '140.2500', '14.0300', '126.2200', 'Practicamente toda el area nueva', 1),
(255, '2021-05-01', 15, 'OBRA', 18, 16, 6, '150.0000', '15.0000', '135.0000', '', 1),
(256, '2021-05-01', 17, 'OBRA', 18, 16, 6, '130.0000', '13.0000', '117.0000', '', 1),
(257, '2021-05-01', 3, 'AL DIA', 18, 32, 12, '50.0000', '5.0000', '45.0000', 'Apartamento 706', 1),
(258, '2021-05-07', 3, 'OBRA', 19, 24, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(259, '2021-05-07', 3, 'OBRA', 19, 9, 3, '350.0000', '35.0000', '315.0000', '', 1),
(260, '2021-05-07', 3, 'OBRA', 19, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(261, '2021-05-07', 12, 'AL DIA', 19, 2, 2, '25.0000', '2.5000', '22.5000', 'Reparando columna y haciendo nueva columna en muro', 1),
(262, '2021-05-07', 10, 'AL DIA', 19, 2, 2, '25.0000', '2.5000', '22.5000', 'Reparando apartamento 601 de Luceiro 1', 1),
(263, '2021-05-07', 17, 'OBRA', 19, 30, 11, '300.0000', '30.0000', '270.0000', '', 1),
(264, '2021-05-07', 15, 'OBRA', 19, 30, 11, '250.0000', '25.0000', '225.0000', 'Cielos armstrong en baños', 1),
(265, '2021-05-07', 17, 'OBRA', 19, 16, 6, '200.0000', '20.0000', '180.0000', '', 1),
(266, '2021-05-07', 15, 'OBRA', 19, 16, 6, '130.0000', '13.0000', '117.0000', 'Cocinetas del nivel 7-8, interior baños', 1),
(267, '2021-05-07', 7, 'AL DIA', 19, 27, 8, '90.0000', '9.0000', '81.0000', 'Pintando de gris abajo de pasamanos de concreto, columna de baño area social', 1),
(268, '2021-05-07', 17, 'OBRA', 19, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(269, '2021-05-07', 3, 'OBRA', 19, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(270, '2021-05-07', 15, 'OBRA', 19, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(271, '2021-05-07', 3, 'AL DIA', 19, 32, 12, '50.0000', '5.0000', '45.0000', 'Apartamento 702', 1),
(272, '2021-05-07', 3, 'AL DIA', 19, 32, 12, '141.7500', '14.1800', '127.5700', '945 m2 embasada fachad principal apartamentos', 1),
(273, '2021-05-07', 3, 'AL DIA', 19, 32, 12, '90.0000', '9.0000', '81.0000', 'Complementos fachadas gris cantera. 122.24m2 +118.80m2 +184m2', 1),
(274, '2021-05-07', 20, 'AL DIA', 19, 30, 11, '25.0000', '2.5000', '22.5000', 'Cielos tablaroca sala', 1),
(275, '2021-05-15', 3, 'OBRA', 20, 24, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(276, '2021-05-15', 17, 'OBRA', 20, 24, 1, '450.0000', '45.0000', '405.0000', 'Apartamentos 101 y 102', 1),
(277, '2021-05-15', 3, 'OBRA', 20, 15, 2, '450.0000', '45.0000', '405.0000', '', 1),
(278, '2021-05-15', 3, 'OBRA', 20, 9, 3, '350.0000', '35.0000', '315.0000', '', 1),
(279, '2021-05-15', 7, 'AL DIA', 20, 5, 4, '140.0000', '14.0000', '126.0000', 'Pintando pasamanos de bloque', 1),
(280, '2021-05-15', 7, 'AL DIA', 20, 27, 8, '60.0000', '6.0000', '54.0000', 'Pintando pasamanos, terminando columna de baño área social, y cajas de registro', 1),
(281, '2021-05-15', 17, 'OBRA', 20, 16, 6, '255.5600', '25.5600', '230.0000', '', 1),
(282, '2021-05-15', 20, 'AL DIA', 20, 16, 6, '85.0000', '8.5000', '76.5000', 'Pre liquidacion', 1),
(283, '2021-05-15', 3, 'AL DIA', 20, 32, 12, '200.0000', '20.0000', '180.0000', 'Apartamentos 801-802-803-804', 1),
(284, '2021-05-15', 3, 'AL DIA', 20, 32, 12, '25.0000', '2.5000', '22.5000', 'Fascias área social', 1),
(285, '2021-05-15', 3, 'AL DIA', 20, 32, 12, '37.5000', '3.7500', '33.7500', 'Pasillos A-C', 1),
(286, '2021-05-15', 3, 'AL DIA', 20, 32, 12, '25.0000', '2.5000', '22.5000', 'Fachada principal apartamentos, base gris', 1),
(287, '2021-05-15', 3, 'AL DIA', 20, 32, 12, '60.0000', '6.0000', '54.0000', 'Abono a pintura terminada Loby', 1),
(288, '2021-05-15', 15, 'OBRA', 20, 33, 11, '300.0000', '30.0000', '270.0000', 'Perfilando cielos Armstrong y viga de densglass salida a jardin', 1),
(289, '2021-05-15', 17, 'OBRA', 20, 33, 11, '475.0000', '47.5000', '427.5000', '', 1),
(290, '2021-05-21', 3, 'OBRA', 21, 10, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(291, '2021-05-21', 3, 'OBRA', 21, 9, 3, '400.0000', '40.0000', '360.0000', '', 1),
(292, '2021-05-21', 3, 'OBRA', 21, 15, 2, '500.0000', '50.0000', '450.0000', '', 1),
(293, '2021-05-21', 17, 'OBRA', 21, 33, 11, '500.0000', '50.0000', '450.0000', '', 1),
(294, '2021-05-21', 17, 'OBRA', 21, 16, 6, '300.0000', '30.0000', '270.0000', '', 1),
(295, '2021-05-21', 3, 'OBRA', 21, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(296, '2021-05-21', 17, 'OBRA', 21, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(297, '2021-05-21', 7, 'AL DIA', 21, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando pasamanos de concreto', 1),
(298, '2021-05-21', 9, 'AL DIA', 21, 27, 8, '30.0000', '3.0000', '27.0000', 'Reparando cielo dañado en apartamento por fuga de agua', 1),
(299, '2021-05-21', 15, 'AL DIA', 21, 27, 8, '7.5000', '0.7500', '6.7500', 'Desalojo de ripio', 1),
(300, '2021-05-21', 3, 'AL DIA', 21, 27, 8, '22.5000', '2.2500', '20.2500', 'Poniendo madera en 401-704', 1),
(301, '2021-05-21', 22, 'AL DIA', 21, 27, 8, '15.0000', '1.5000', '13.5000', 'Desmontando cielo de fibrolit en pasillo', 1),
(302, '2021-05-21', 15, 'AL DIA', 21, 32, 12, '200.0000', '20.0000', '180.0000', 'Pintando acabado final baños', 1),
(303, '2021-05-21', 3, 'AL DIA', 21, 32, 12, '100.0000', '10.0000', '90.0000', 'Apartamentos 805-806', 1),
(304, '2021-05-21', 3, 'AL DIA', 21, 32, 12, '25.0000', '2.5000', '22.5000', '1ra mano pasillo primer nivel', 1),
(305, '2021-05-21', 3, 'AL DIA', 21, 32, 12, '30.0000', '3.0000', '27.0000', 'Repintando Loby interior y exterior', 1),
(306, '2021-05-21', 3, 'AL DIA', 21, 32, 12, '25.0000', '2.5000', '22.5000', 'Pintando terracitas del Loby y siguientes losas', 1),
(307, '2021-05-21', 3, 'AL DIA', 21, 32, 12, '15.0000', '1.5000', '13.5000', 'Forro columnas durock atrás elevador', 1),
(308, '2021-05-28', 3, 'OBRA', 22, 10, 1, '888.8900', '88.8900', '800.0000', '', 1),
(309, '2021-05-28', 3, 'OBRA', 22, 15, 2, '361.1100', '36.1100', '325.0000', '', 1),
(310, '2021-05-28', 3, 'OBRA', 22, 9, 3, '288.8900', '28.8900', '260.0000', '', 1),
(311, '2021-05-28', 17, 'OBRA', 22, 33, 11, '400.0000', '40.0000', '360.0000', '', 1),
(312, '2021-05-28', 20, 'AL DIA', 22, 30, 11, '40.0000', '4.0000', '36.0000', 'Liquidacion Ing 20', 1),
(313, '2021-05-28', 17, 'OBRA', 22, 16, 6, '288.8900', '28.8900', '260.0000', '', 1),
(314, '2021-05-28', 22, 'AL DIA', 22, 5, 4, '20.0000', '2.0000', '18.0000', 'Desmontando cielo y haciendo limpieza', 1),
(315, '2021-05-28', 12, 'AL DIA', 22, 5, 4, '40.0000', '4.0000', '36.0000', 'Reparando cielo por fugas de agua', 1),
(316, '2021-05-28', 3, 'AL DIA', 22, 5, 4, '20.0000', '2.0000', '18.0000', 'Colocando refuerzos de madera en apartamentos 704-401', 1),
(317, '2021-05-28', 13, 'AL DIA', 22, 5, 4, '20.0000', '2.0000', '18.0000', 'Reparando cielos del segundo y tercer nivel', 1),
(318, '2021-05-28', 10, 'AL DIA', 22, 5, 4, '50.0000', '5.0000', '45.0000', 'Varios', 1),
(319, '2021-05-28', 3, 'AL DIA', 22, 27, 8, '22.5000', '2.2500', '20.2500', 'Colocando madera en partamentos 704-401', 1),
(320, '2021-05-28', 13, 'AL DIA', 22, 27, 8, '52.5000', '5.2500', '47.2500', 'Pintando y colocando losetas en 2do y 3er nivel', 1),
(321, '2021-05-28', 22, 'AL DIA', 22, 27, 8, '25.0000', '2.5000', '22.5000', '$15 de esta planilla + $10 de las horas extras del sabado pasado en 22', 1),
(322, '2021-05-28', 3, 'AL DIA', 22, 32, 12, '80.0000', '8.0000', '72.0000', 'Cielos de los apartamentos 101-103-104-105', 1),
(323, '2021-05-28', 3, 'AL DIA', 22, 32, 12, '125.0000', '12.5000', '112.5000', 'Loby $25 +$100 por fascias del area social', 1),
(324, '2021-05-28', 3, 'AL DIA', 22, 32, 12, '87.0000', '8.7000', '78.3000', 'Pintando primera paleta de durock $0.50m2 = $42 + $45 por 3 dias de ayudantes', 1),
(325, '2021-05-28', 23, 'AL DIA', 22, 32, 12, '105.0000', '10.5000', '94.5000', 'Ayudantes $45 + obra de fascias $35 +$25 por siliconeado', 1),
(326, '2021-05-28', 23, 'AL DIA', 22, 3, 3, '134.0000', '13.4000', '120.6000', 'Liquidacion Obra de Miguel Mejia (Iguana)', 1),
(327, '2021-05-28', 23, 'AL DIA', 22, 3, 3, '100.0000', '10.0000', '90.0000', 'Adelanto a obra Miguel Mejia (Iguana)', 1),
(328, '2021-05-28', 23, 'AL DIA', 22, 1, 1, '100.0000', '10.0000', '90.0000', 'Adelanto obra a Marvin', 1),
(329, '2021-05-28', 23, 'AL DIA', 22, 1, 1, '165.5000', '16.5500', '148.9500', 'Liquidacion instalacion de fascias', 1),
(330, '2021-05-28', 23, 'AL DIA', 22, 1, 1, '40.0000', '4.0000', '36.0000', 'Reinstalar fascias en un costado', 1),
(331, '2021-06-01', 3, 'OBRA', 23, 10, 1, '211.1100', '21.1100', '190.0000', 'Complemento de planilla', 1),
(332, '2021-06-01', 3, 'OBRA', 23, 15, 2, '88.8900', '8.8900', '80.0000', 'Complemento de planilla', 1),
(333, '2021-06-01', 3, 'OBRA', 23, 9, 3, '61.1100', '6.1100', '55.0000', 'Complemento de planilla', 1),
(334, '2021-06-01', 17, 'OBRA', 23, 33, 11, '100.0000', '10.0000', '90.0000', 'Complemento de planilla', 1),
(335, '2021-06-01', 17, 'OBRA', 23, 16, 6, '61.1100', '6.1100', '55.0000', 'Complemento de planilla', 1),
(336, '2021-05-28', 15, 'OBRA', 22, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(337, '2021-06-04', 3, 'OBRA', 24, 10, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(338, '2021-06-04', 3, 'OBRA', 24, 15, 2, '400.0000', '40.0000', '360.0000', '', 1),
(339, '2021-06-04', 3, 'OBRA', 24, 9, 3, '350.0000', '35.0000', '315.0000', '', 1),
(340, '2021-06-04', 3, 'OBRA', 24, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(341, '2021-06-04', 15, 'OBRA', 24, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(342, '2021-06-04', 17, 'OBRA', 24, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(343, '2021-06-04', 22, 'OBRA', 24, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(344, '2021-06-04', 17, 'OBRA', 24, 16, 6, '300.0000', '30.0000', '270.0000', '', 1),
(345, '2021-06-04', 22, 'OBRA', 24, 16, 6, '68.1100', '6.8100', '61.3000', 'Cielo pasillo y de auditorium', 1),
(346, '2021-06-04', 17, 'OBRA', 24, 33, 11, '350.0000', '35.0000', '315.0000', '', 1),
(347, '2021-06-04', 15, 'OBRA', 24, 33, 11, '300.0000', '30.0000', '270.0000', 'Divisiones 7mo Nivel', 1),
(348, '2021-06-04', 13, 'AL DIA', 24, 30, 11, '57.0000', '5.7000', '51.3000', 'Nivelando cielos del 2do y 3er nivel', 1),
(349, '2021-06-04', 22, 'OBRA', 24, 33, 11, '76.0000', '7.6000', '68.4000', 'Cielo pasillo y auditorium', 1),
(350, '2021-06-04', 13, 'AL DIA', 24, 27, 8, '75.0000', '7.5000', '67.5000', 'Pintando y colocando losetas del 2do nivel', 1),
(351, '2021-06-04', 22, 'AL DIA', 24, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando cielo de pasillo y oficinas', 1),
(352, '2021-06-04', 22, 'AL DIA', 24, 35, 13, '80.0000', '8.0000', '72.0000', 'Reparando densglass exterior', 1),
(353, '2021-06-04', 23, 'AL DIA', 24, 35, 13, '10.0000', '1.0000', '9.0000', 'Haciendo tira de densglass de 0.08x1.91m', 1),
(354, '2021-06-04', 3, 'AL DIA', 24, 32, 12, '300.0000', '30.0000', '270.0000', 'Cielos apts 102-106-201-202-203-204-206-301-302-303-304-305-306-401-402', 1),
(355, '2021-06-04', 3, 'AL DIA', 24, 32, 12, '67.5000', '6.7500', '60.7500', 'Obra general $37.50 + Guindola $30', 1),
(356, '2021-06-04', 15, 'AL DIA', 24, 32, 12, '25.0000', '2.5000', '22.5000', 'Abono a obra general', 1),
(357, '2021-06-11', 3, 'OBRA', 25, 10, 1, '1300.0000', '130.0000', '1170.0000', '', 1),
(358, '2021-06-11', 3, 'OBRA', 25, 15, 2, '400.0000', '40.0000', '360.0000', '', 1),
(359, '2021-06-11', 3, 'OBRA', 25, 9, 3, '350.0000', '35.0000', '315.0000', '', 1),
(360, '2021-06-11', 17, 'OBRA', 25, 16, 6, '200.0000', '20.0000', '180.0000', '', 1),
(361, '2021-06-11', 22, 'OBRA', 25, 16, 6, '135.0000', '13.5000', '121.5000', 'Abono pared densglass', 1),
(362, '2021-06-11', 22, 'OBRA', 25, 16, 6, '20.0000', '2.0000', '18.0000', 'Hueco puerta oficina gerencia', 1),
(363, '2021-06-11', 22, 'OBRA', 25, 33, 11, '75.0000', '7.5000', '67.5000', 'Pared de densglass', 1),
(364, '2021-06-11', 15, 'OBRA', 25, 33, 11, '300.0000', '30.0000', '270.0000', 'Divisiones nivel 7', 1),
(365, '2021-06-11', 3, 'OBRA', 25, 33, 11, '125.0000', '12.5000', '112.5000', 'Cornisas area social', 1),
(366, '2021-06-11', 17, 'OBRA', 25, 33, 11, '250.0000', '25.0000', '225.0000', '', 1),
(367, '2021-06-11', 22, 'OBRA', 25, 33, 11, '98.0000', '9.8000', '88.2000', 'Pago pendiente desmontaje de cielo + huecos de lamparas en cielo de pasillo', 1),
(368, '2021-06-11', 13, 'AL DIA', 25, 5, 4, '32.0000', '3.2000', '28.8000', 'Pintando y colocando losetas', 1),
(369, '2021-06-11', 18, 'AL DIA', 25, 5, 4, '24.0000', '2.4000', '21.6000', 'Trabajos en apartamento Avitat', 1),
(370, '2021-06-11', 7, 'AL DIA', 25, 5, 4, '60.0000', '6.0000', '54.0000', 'Pintura de reparaciones varias pre entrega', 1),
(371, '2021-06-11', 22, 'AL DIA', 25, 5, 4, '50.0000', '5.0000', '45.0000', 'Trabajos en oficinas de gerencia y por cambio de aire acondicionado', 1),
(372, '2021-06-11', 7, 'AL DIA', 25, 27, 8, '79.0000', '7.9000', '71.1000', 'Pintando fascias manchadas por mecanicos', 1),
(373, '2021-06-11', 22, 'AL DIA', 25, 27, 8, '40.0000', '4.0000', '36.0000', 'Trabajando en oficinas de gerencia y de aire acondicionado', 1),
(374, '2021-06-11', 15, 'OBRA', 25, 35, 13, '200.0000', '20.0000', '180.0000', 'Primer pago divisiones nivel 7', 1),
(375, '2021-06-11', 3, 'AL DIA', 25, 32, 12, '140.0000', '14.0000', '126.0000', 'Cielos aptos 403-404-405-406-501-502-503', 1),
(376, '2021-06-11', 3, 'AL DIA', 25, 32, 12, '36.9000', '3.6900', '33.2100', 'Pasillo Nivel 2: 145m2 de cielo +101ml de fascia (1a mano)', 1),
(377, '2021-06-11', 7, 'AL DIA', 25, 32, 12, '60.0000', '6.0000', '54.0000', 'Pintando escalerones + pasamanos de area social antes de la entrega', 1),
(378, '2021-06-11', 3, 'AL DIA', 25, 32, 12, '217.5000', '21.7500', '195.7500', 'Abono a obra general', 1),
(379, '2021-06-19', 3, 'OBRA', 26, 10, 1, '1300.0000', '130.0000', '1170.0000', '', 1),
(380, '2021-06-19', 13, 'OBRA', 26, 10, 1, '120.0000', '12.0000', '108.0000', 'Cielo en 1er nivel oficinas y 2do nivel', 1),
(381, '2021-06-19', 3, 'OBRA', 26, 12, 3, '400.0000', '40.0000', '360.0000', '', 1),
(382, '2021-06-19', 3, 'OBRA', 26, 20, 2, '400.0000', '40.0000', '360.0000', '', 1),
(383, '2021-06-19', 3, 'OBRA', 26, 33, 11, '600.0000', '60.0000', '540.0000', '', 1),
(384, '2021-06-19', 15, 'OBRA', 26, 33, 11, '150.0000', '15.0000', '135.0000', 'Divisiones nivel 7', 1),
(385, '2021-06-19', 3, 'OBRA', 26, 16, 6, '150.0000', '15.0000', '135.0000', '', 1),
(386, '2021-06-19', 17, 'OBRA', 26, 16, 6, '100.0000', '10.0000', '90.0000', '', 1),
(387, '2021-06-19', 3, 'OBRA', 26, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(388, '2021-06-19', 22, 'OBRA', 26, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(389, '2021-06-19', 17, 'OBRA', 26, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(390, '2021-06-19', 15, 'OBRA', 26, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(391, '2021-06-19', 22, 'AL DIA', 26, 27, 8, '45.5000', '4.5500', '40.9500', 'Pintando y resanando cielos', 1),
(392, '2021-06-19', 12, 'AL DIA', 26, 27, 8, '7.5000', '0.7500', '6.7500', 'Pintando cielo reparado', 1),
(393, '2021-06-19', 7, 'AL DIA', 26, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando dond el vecina y compuerta apartamento', 1),
(394, '2021-06-19', 15, 'OBRA', 26, 35, 13, '120.0000', '12.0000', '108.0000', 'Divisiones nivel 7', 1),
(395, '2021-06-19', 3, 'AL DIA', 26, 32, 12, '180.0000', '18.0000', '162.0000', 'Cielos apartamentos 504-505-506-601-603-604-605-606-204', 1),
(396, '2021-06-19', 3, 'AL DIA', 26, 32, 12, '65.0000', '6.5000', '58.5000', 'Abono a obra general', 1),
(397, '2021-06-19', 3, 'AL DIA', 26, 32, 12, '90.0000', '9.0000', '81.0000', 'Paredes de apartamentos 901-902-903', 1),
(398, '2021-06-25', 3, 'OBRA', 27, 22, 1, '1300.0000', '130.0000', '1170.0000', '', 1),
(399, '2021-06-25', 24, 'OBRA', 27, 22, 1, '150.0000', '15.0000', '135.0000', 'Primer pago', 1),
(400, '2021-06-25', 3, 'OBRA', 27, 20, 2, '400.0000', '40.0000', '360.0000', '', 1),
(401, '2021-06-25', 3, 'OBRA', 27, 12, 3, '400.0000', '40.0000', '360.0000', '', 1),
(402, '2021-06-25', 3, 'OBRA', 27, 33, 11, '650.0000', '65.0000', '585.0000', 'Area social, pasillo 10 y 8', 1),
(403, '2021-06-25', 15, 'OBRA', 27, 33, 11, '100.0000', '10.0000', '90.0000', 'Divisiones 7mo nivel', 1),
(404, '2021-06-25', 3, 'OBRA', 27, 16, 6, '400.0000', '40.0000', '360.0000', 'Area socia,  pasillo 10', 1),
(405, '2021-06-25', 10, 'AL DIA', 27, 5, 4, '148.0000', '14.8000', '133.2000', '', 1),
(406, '2021-06-25', 15, 'OBRA', 27, 35, 13, '220.0000', '22.0000', '198.0000', 'Divisiones 7mo nivel', 1),
(407, '2021-06-25', 22, 'AL DIA', 27, 27, 8, '90.0000', '9.0000', '81.0000', 'Pintando bodega, auditorium, jardin, cocina del auditorium', 1),
(408, '2021-06-25', 3, 'AL DIA', 27, 32, 12, '150.0000', '15.0000', '135.0000', 'Apartamentos 904-905-906 completos', 1),
(409, '2021-06-25', 3, 'AL DIA', 27, 32, 12, '60.0000', '6.0000', '54.0000', 'Cielos apartamentos 901-902-903', 1),
(410, '2021-06-25', 3, 'AL DIA', 27, 32, 12, '165.0000', '16.5000', '148.5000', 'Abono a obra general', 1),
(411, '2021-07-02', 3, 'OBRA', 28, 22, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(412, '2021-07-02', 3, 'OBRA', 28, 20, 2, '400.0000', '40.0000', '360.0000', '', 1),
(413, '2021-07-02', 24, 'OBRA', 28, 20, 2, '100.0000', '10.0000', '90.0000', 'Poniendo polines C-4\"', 1),
(414, '2021-07-02', 3, 'OBRA', 28, 12, 3, '300.0000', '30.0000', '270.0000', '', 1),
(415, '2021-07-02', 24, 'OBRA', 28, 12, 3, '100.0000', '10.0000', '90.0000', '1er planilla', 1),
(416, '2021-07-02', 3, 'OBRA', 28, 33, 11, '150.0000', '15.0000', '135.0000', 'Último pago', 1),
(417, '2021-07-02', 17, 'OBRA', 28, 33, 11, '550.0000', '55.0000', '495.0000', '', 1),
(418, '2021-07-02', 3, 'OBRA', 28, 16, 6, '295.0000', '29.5000', '265.5000', '', 1),
(419, '2021-07-02', 15, 'OBRA', 28, 35, 13, '101.4400', '10.1400', '91.3000', 'Liquidacion', 1),
(420, '2021-07-02', 25, 'OBRA', 28, 35, 13, '60.0000', '6.0000', '54.0000', 'Abono de 3 días al día', 1),
(421, '2021-07-02', 22, 'AL DIA', 28, 27, 8, '22.5000', '2.2500', '20.2500', 'Pintura en áreas de auditorium, parqueo', 1),
(422, '2021-07-02', 15, 'AL DIA', 28, 27, 8, '67.5000', '6.7500', '60.7500', 'Pintando 1 mano divisiones del nivel 7', 1),
(423, '2021-07-02', 3, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(424, '2021-07-02', 17, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(425, '2021-07-02', 15, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(426, '2021-07-02', 22, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(427, '2021-07-02', 25, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(428, '2021-07-02', 24, 'OBRA', 28, 6, 9, '27.7800', '2.7800', '25.0000', '', 1),
(429, '2021-07-02', 3, 'AL DIA', 28, 32, 12, '100.0000', '10.0000', '90.0000', 'Se Completan apartamentos 102-105', 1),
(430, '2021-07-02', 3, 'AL DIA', 28, 32, 12, '225.0000', '22.5000', '202.5000', 'Abono a obra general', 1),
(431, '2021-07-02', 17, 'AL DIA', 28, 32, 12, '75.0000', '7.5000', '67.5000', 'Inicia pintura de Apartamentos', 1),
(432, '2021-07-02', 17, 'AL DIA', 28, 32, 12, '100.0000', '10.0000', '90.0000', 'Abono a obra general (Préstamo)', 1),
(433, '2021-07-09', 3, 'OBRA', 29, 17, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(434, '2021-07-09', 3, 'OBRA', 29, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(435, '2021-07-09', 22, 'AL DIA', 29, 2, 2, '40.0000', '4.0000', '36.0000', 'Quique trabajando en cielo de Taiwan', 1),
(436, '2021-07-09', 3, 'OBRA', 29, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(437, '2021-07-09', 24, 'OBRA', 29, 3, 3, '100.0000', '10.0000', '90.0000', '', 1),
(438, '2021-07-09', 25, 'OBRA', 29, 17, 1, '250.0000', '25.0000', '225.0000', '', 1),
(439, '2021-07-09', 17, 'OBRA', 29, 30, 11, '750.0000', '75.0000', '675.0000', '', 1),
(440, '2021-07-09', 3, 'OBRA', 29, 16, 6, '155.0000', '15.5000', '139.5000', 'Lo ultimo hecho por Vladi', 1),
(441, '2021-07-09', 17, 'OBRA', 29, 16, 6, '300.0000', '30.0000', '270.0000', '', 1),
(442, '2021-07-09', 22, 'AL DIA', 29, 27, 8, '75.0000', '7.5000', '67.5000', 'Pintando y haciendo tratamiento en paredes del area de Compras', 1),
(443, '2021-07-09', 10, 'AL DIA', 29, 5, 4, '140.0000', '14.0000', '126.0000', '', 1),
(444, '2021-07-09', 3, 'AL DIA', 29, 32, 12, '100.0000', '10.0000', '90.0000', 'Terminados apartamentos 106-104', 1),
(445, '2021-07-09', 3, 'AL DIA', 29, 32, 12, '215.0000', '21.5000', '193.5000', 'Abono a obra general', 1),
(446, '2021-07-09', 17, 'AL DIA', 29, 32, 12, '250.0000', '25.0000', '225.0000', '1era mano apartamentos del nivel 100 desde el 1 hasta el 10', 1),
(447, '2021-07-17', 3, 'OBRA', 30, 1, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(448, '2021-07-17', 24, 'OBRA', 30, 1, 1, '400.0000', '40.0000', '360.0000', 'Divisiones oficinas 24', 1),
(449, '2021-07-17', 3, 'OBRA', 30, 3, 3, '250.0000', '25.0000', '225.0000', '', 1),
(450, '2021-07-17', 24, 'OBRA', 30, 3, 3, '250.0000', '25.0000', '225.0000', 'Oficinas 24', 1),
(451, '2021-07-17', 3, 'OBRA', 30, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(452, '2021-07-17', 22, 'AL DIA', 30, 20, 2, '20.0000', '2.0000', '18.0000', 'Trabajando auditorium de Taiwan', 1),
(453, '2021-07-17', 3, 'OBRA', 30, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(454, '2021-07-17', 17, 'OBRA', 30, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(455, '2021-07-17', 24, 'OBRA', 30, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(456, '2021-07-17', 22, 'OBRA', 30, 6, 9, '41.6700', '4.1700', '37.5000', '', 1),
(457, '2021-07-17', 17, 'OBRA', 30, 16, 6, '400.0000', '40.0000', '360.0000', '', 1),
(458, '2021-07-17', 22, 'AL DIA', 30, 27, 8, '90.0000', '9.0000', '81.0000', 'Pintando parqueo, area de compras, cafeteria, bodega de materiales', 1),
(459, '2021-07-17', 17, 'OBRA', 30, 25, 11, '750.0000', '75.0000', '675.0000', '', 1),
(460, '2021-07-17', 3, 'AL DIA', 30, 32, 12, '100.0000', '10.0000', '90.0000', 'Finalizacion apartamentos 103 y 101', 1),
(461, '2021-07-17', 3, 'AL DIA', 30, 32, 12, '100.0000', '10.0000', '90.0000', 'Abono a obra general', 1),
(462, '2021-07-17', 26, 'AL DIA', 30, 32, 12, '75.0000', '7.5000', '67.5000', '289.07 m2 de paredes + 84.23 m2 de cielos = 373.30 m2', 1),
(463, '2021-07-17', 17, 'AL DIA', 30, 32, 12, '50.0000', '5.0000', '45.0000', 'Abono a obra general (Pago por adelantado)', 1),
(464, '2021-07-23', 27, 'AL DIA', 31, 1, 1, '90.0000', '9.0000', '81.0000', 'Cielo y fascia en casa por los 27', 1),
(465, '2021-07-23', 24, 'OBRA', 31, 1, 1, '400.0000', '40.0000', '360.0000', 'Area de oficinas', 1),
(466, '2021-07-23', 3, 'OBRA', 31, 1, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(467, '2021-07-23', 3, 'OBRA', 31, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(468, '2021-07-23', 22, 'AL DIA', 31, 20, 2, '40.0000', '4.0000', '36.0000', 'Terminando auditorium de Taiwan', 1),
(469, '2021-07-23', 28, 'AL DIA', 31, 2, 2, '40.0000', '4.0000', '36.0000', 'Reparando cielo', 1),
(470, '2021-07-23', 3, 'OBRA', 31, 3, 3, '250.0000', '25.0000', '225.0000', '', 1),
(471, '2021-07-23', 24, 'OBRA', 31, 3, 3, '150.0000', '15.0000', '135.0000', 'Area de oficinas', 1),
(472, '2021-07-23', 27, 'AL DIA', 31, 3, 3, '25.0000', '2.5000', '22.5000', 'Fascia y cornisa de densglass', 1),
(473, '2021-07-23', 17, 'OBRA', 31, 16, 6, '500.0000', '50.0000', '450.0000', '', 1),
(474, '2021-07-23', 26, 'AL DIA', 31, 5, 4, '23.3400', '2.3300', '21.0100', 'Reparando daños de tablaroca', 1),
(475, '2021-07-23', 22, 'AL DIA', 31, 5, 4, '58.3500', '5.8400', '52.5100', 'Pintando y reparando', 1),
(476, '2021-07-23', 12, 'AL DIA', 31, 5, 4, '11.6700', '1.1700', '10.5000', 'Reparando cielo mojado', 1),
(477, '2021-07-23', 29, 'AL DIA', 31, 5, 4, '23.3400', '2.3300', '21.0100', 'Desmontando cielos del segundo nivel', 1),
(478, '2021-07-23', 15, 'AL DIA', 31, 5, 4, '23.3000', '2.3300', '20.9700', 'Reparaciones varias en baños de tablaroca', 1),
(479, '2021-07-23', 28, 'AL DIA', 31, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando y pintando cielo', 1),
(480, '2021-07-23', 22, 'AL DIA', 31, 27, 8, '60.0000', '6.0000', '54.0000', 'Pintando varios', 1),
(481, '2021-07-23', 17, 'OBRA', 31, 25, 11, '650.0000', '65.0000', '585.0000', '', 1),
(482, '2021-07-23', 3, 'AL DIA', 31, 32, 12, '100.0000', '10.0000', '90.0000', 'Final apartamentos 201 y 206', 1),
(483, '2021-07-23', 3, 'AL DIA', 31, 32, 12, '75.0000', '7.5000', '67.5000', 'Abono a obra general', 1),
(484, '2021-07-23', 17, 'AL DIA', 31, 32, 12, '25.0000', '2.5000', '22.5000', 'Pintura en paredes de pasillos', 1),
(485, '2021-07-23', 17, 'AL DIA', 31, 32, 12, '180.0000', '18.0000', '162.0000', 'Pintura 1 mano en 5 apartamentos del segundo nivel 5*$36=$180', 1),
(486, '2021-07-30', 3, 'OBRA', 32, 1, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(487, '2021-07-30', 29, 'OBRA', 32, 1, 1, '250.0000', '25.0000', '225.0000', 'Perfilería en cielos', 1),
(488, '2021-07-30', 3, 'OBRA', 32, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(489, '2021-07-30', 24, 'OBRA', 32, 3, 3, '0.0000', '0.0000', '0.0000', '', 1),
(490, '2021-07-30', 3, 'OBRA', 32, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(491, '2021-07-30', 6, 'AL DIA', 32, 2, 2, '100.0000', '10.0000', '90.0000', 'Reparando glorieta y el interior de la casa', 1),
(492, '2021-07-30', 17, 'OBRA', 32, 25, 11, '550.0000', '55.0000', '495.0000', '', 1),
(493, '2021-07-30', 17, 'OBRA', 32, 16, 6, '500.0000', '50.0000', '450.0000', '', 1),
(494, '2021-07-30', 3, 'OBRA', 32, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(495, '2021-07-30', 17, 'OBRA', 32, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(496, '2021-07-30', 24, 'OBRA', 32, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(497, '2021-07-30', 22, 'AL DIA', 32, 27, 8, '11.5000', '1.1500', '10.3500', 'Pintando audittorium de Taiwan', 1),
(498, '2021-07-30', 24, 'AL DIA', 32, 27, 8, '22.5000', '2.2500', '20.2500', 'Reparaciones varias', 1),
(499, '2021-07-30', 7, 'AL DIA', 32, 27, 8, '22.5000', '2.2500', '20.2500', 'Reparando apartamentos', 1);
INSERT INTO `Payroll` (`id`, `date`, `project_id`, `type`, `payrollNumber`, `staff_id`, `alias_id`, `amount`, `tax`, `salary`, `comments`, `finished`) VALUES
(500, '2021-07-30', 9, 'AL DIA', 32, 27, 8, '7.5000', '0.7500', '6.7500', 'Pintando apartamentos', 1),
(501, '2021-07-30', 6, 'AL DIA', 32, 27, 8, '40.0000', '4.0000', '36.0000', 'Reparando interior casa y glorieta', 1),
(502, '2021-07-30', 17, 'AL DIA', 32, 32, 12, '180.0000', '18.0000', '162.0000', '5 apartamentos 1 mano', 1),
(503, '2021-07-30', 17, 'AL DIA', 32, 32, 12, '12.5000', '1.2500', '11.2500', 'Abono a obra general', 1),
(504, '2021-07-30', 3, 'AL DIA', 32, 32, 12, '190.0000', '19.0000', '171.0000', 'Abono a obra general', 1),
(505, '2021-08-04', 30, 'OBRA', 33, 1, 1, '225.0000', '22.5000', '202.5000', '1er planilla', 1),
(506, '2021-08-04', 3, 'OBRA', 33, 1, 1, '500.0000', '50.0000', '450.0000', '', 1),
(507, '2021-08-04', 3, 'OBRA', 33, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(508, '2021-08-04', 3, 'OBRA', 33, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(509, '2021-08-04', 17, 'OBRA', 33, 16, 6, '400.0000', '40.0000', '360.0000', '', 1),
(510, '2021-08-04', 17, 'OBRA', 33, 25, 11, '650.0000', '65.0000', '585.0000', '', 1),
(511, '2021-08-04', 22, 'AL DIA', 33, 27, 8, '30.0000', '3.0000', '27.0000', 'Cielo en pasillo a informatica', 1),
(512, '2021-08-04', 17, 'AL DIA', 33, 37, 14, '150.0000', '15.0000', '135.0000', '2do Planilla', 1),
(513, '2021-08-04', 3, 'AL DIA', 33, 32, 12, '62.5000', '6.2500', '56.2500', 'Abono a obra general', 1),
(514, '2021-08-04', 17, 'AL DIA', 33, 32, 12, '150.0000', '15.0000', '135.0000', 'Azotea, cielo pasillo y otros', 1),
(515, '2021-07-30', 17, 'AL DIA', 32, 37, 14, '160.0000', '16.0000', '144.0000', '1er Planilla - pasillo + durock', 1),
(516, '2021-08-04', 6, 'AL DIA', 33, 1, 1, '100.0000', '10.0000', '90.0000', 'Reparaciones casa interior y glorieta', 1),
(517, '2021-08-04', 29, 'AL DIA', 33, 1, 1, '40.0000', '4.0000', '36.0000', '2 dias desmontando cielos falsos', 1),
(518, '2021-08-04', 29, 'AL DIA', 33, 5, 4, '150.0000', '15.0000', '135.0000', 'Trabajos varios desmontajes, pasteado,etc', 1),
(519, '2021-08-14', 3, 'OBRA', 34, 1, 1, '600.0000', '60.0000', '540.0000', '', 1),
(520, '2021-08-14', 29, 'OBRA', 34, 1, 1, '100.0000', '10.0000', '90.0000', '', 1),
(521, '2021-08-14', 3, 'OBRA', 34, 2, 2, '300.0000', '30.0000', '270.0000', '', 1),
(522, '2021-08-14', 3, 'OBRA', 34, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(523, '2021-08-14', 3, 'OBRA', 34, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(524, '2021-08-14', 17, 'OBRA', 34, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(525, '2021-08-14', 29, 'OBRA', 34, 6, 9, '55.5600', '5.5600', '50.0000', '', 1),
(526, '2021-08-14', 17, 'OBRA', 34, 16, 6, '600.0000', '60.0000', '540.0000', '', 1),
(527, '2021-08-14', 17, 'OBRA', 34, 25, 11, '800.0000', '80.0000', '720.0000', '', 1),
(528, '2021-08-14', 29, 'AL DIA', 34, 27, 8, '96.0000', '9.6000', '86.4000', 'Pintando segundo nivel', 1),
(529, '2021-08-14', 17, 'AL DIA', 34, 37, 14, '250.0000', '25.0000', '225.0000', '', 1),
(530, '2021-08-14', 17, 'AL DIA', 34, 32, 12, '100.0000', '10.0000', '90.0000', 'Abono a obra general', 1),
(531, '2021-08-14', 3, 'AL DIA', 34, 32, 12, '475.5300', '47.5500', '427.9800', 'Abono a obra general', 1),
(532, '2021-08-21', 29, 'OBRA', 35, 1, 1, '75.0000', '7.5000', '67.5000', '', 1),
(533, '2021-08-21', 30, 'OBRA', 35, 1, 1, '75.0000', '7.5000', '67.5000', '', 1),
(534, '2021-08-21', 3, 'OBRA', 35, 13, 1, '900.0000', '90.0000', '810.0000', 'Pago por cheque', 1),
(535, '2021-08-21', 31, 'AL DIA', 35, 1, 1, '130.0000', '13.0000', '117.0000', 'Pago unico', 1),
(536, '2021-08-21', 3, 'OBRA', 35, 2, 2, '150.0000', '15.0000', '135.0000', '', 1),
(537, '2021-08-21', 29, 'OBRA', 35, 2, 2, '250.0000', '25.0000', '225.0000', '', 1),
(538, '2021-08-21', 29, 'OBRA', 35, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(539, '2021-08-21', 17, 'OBRA', 35, 16, 6, '700.0000', '70.0000', '630.0000', '', 1),
(540, '2021-08-21', 3, 'OBRA', 35, 33, 11, '150.0000', '15.0000', '135.0000', '', 1),
(541, '2021-08-21', 17, 'OBRA', 35, 25, 11, '850.0000', '85.0000', '765.0000', '', 1),
(542, '2021-08-21', 29, 'AL DIA', 35, 27, 8, '90.0000', '9.0000', '81.0000', 'Pintando cielo y paredes', 1),
(543, '2021-08-21', 29, 'AL DIA', 35, 5, 4, '165.0000', '16.5000', '148.5000', 'Trabajos varios', 1),
(544, '2021-08-21', 22, 'AL DIA', 35, 5, 4, '15.0000', '1.5000', '13.5000', 'Trabajos por garantia en paredes de oficinas de compras', 1),
(545, '2021-08-21', 17, 'AL DIA', 35, 32, 12, '400.0000', '40.0000', '360.0000', 'Abono a obra general', 1),
(546, '2021-08-21', 3, 'AL DIA', 35, 32, 12, '400.0000', '40.0000', '360.0000', 'Abono a obra general', 1),
(547, '2021-08-21', 17, 'AL DIA', 35, 37, 14, '150.0000', '15.0000', '135.0000', 'Abono a obra general', 1),
(548, '2021-08-27', 3, 'OBRA', 36, 13, 1, '900.0000', '90.0000', '810.0000', 'Cheque', 1),
(549, '2021-08-27', 17, 'OBRA', 36, 13, 1, '400.0000', '40.0000', '360.0000', '', 1),
(550, '2021-08-27', 29, 'OBRA', 36, 13, 1, '200.0000', '20.0000', '180.0000', '', 1),
(551, '2021-08-27', 3, 'OBRA', 36, 3, 3, '300.0000', '30.0000', '270.0000', '', 1),
(552, '2021-08-27', 29, 'OBRA', 36, 2, 2, '350.0000', '35.0000', '315.0000', '', 1),
(553, '2021-08-27', 17, 'OBRA', 36, 16, 6, '700.0000', '70.0000', '630.0000', '', 1),
(554, '2021-08-27', 17, 'OBRA', 36, 25, 11, '750.0000', '75.0000', '675.0000', '', 1),
(555, '2021-08-27', 17, 'OBRA', 36, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(556, '2021-08-27', 3, 'OBRA', 36, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(557, '2021-08-27', 29, 'OBRA', 36, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(558, '2021-08-27', 29, 'AL DIA', 36, 27, 8, '90.0000', '9.0000', '81.0000', 'Pintando paredes y cielo', 1),
(559, '2021-08-27', 3, 'AL DIA', 36, 32, 12, '800.0000', '80.0000', '720.0000', 'Abono general obra', 1),
(560, '2021-09-03', 17, 'OBRA', 37, 13, 1, '1000.0000', '100.0000', '900.0000', 'Cheque', 1),
(561, '2021-09-03', 30, 'OBRA', 37, 13, 1, '80.0000', '8.0000', '72.0000', '', 1),
(562, '2021-09-03', 3, 'OBRA', 37, 3, 3, '200.0000', '20.0000', '180.0000', '', 1),
(563, '2021-09-03', 15, 'OBRA', 37, 2, 2, '50.0000', '5.0000', '45.0000', 'Division densglass en cafeteria', 1),
(564, '2021-09-03', 29, 'AL DIA', 37, 20, 2, '120.0000', '12.0000', '108.0000', 'Pintando, resanando y repellando', 1),
(565, '2021-09-03', 17, 'OBRA', 37, 39, 6, '700.0000', '70.0000', '630.0000', '', 1),
(566, '2021-09-03', 29, 'AL DIA', 37, 27, 8, '85.0000', '8.5000', '76.5000', 'Pintando 1er nivel', 1),
(567, '2021-09-03', 17, 'AL DIA', 37, 32, 12, '150.0000', '15.0000', '135.0000', 'Abono a obra general', 1),
(568, '2021-09-03', 3, 'AL DIA', 37, 32, 12, '650.0000', '65.0000', '585.0000', 'Abono a obra general', 1),
(569, '2021-09-03', 29, 'AL DIA', 37, 5, 4, '150.0000', '15.0000', '135.0000', 'Pintando y resanando', 1),
(570, '2021-09-03', 22, 'AL DIA', 37, 5, 4, '30.0000', '3.0000', '27.0000', 'Reparando garantia paredes de compras', 1),
(571, '2021-09-03', 17, 'OBRA', 37, 25, 11, '400.0000', '40.0000', '360.0000', '', 1),
(572, '2021-09-03', 15, 'OBRA', 37, 25, 11, '100.0000', '10.0000', '90.0000', 'Cielo en gradas y division densglass 2do nivel cafeteria', 1),
(573, '2021-09-03', 17, 'AL DIA', 37, 37, 14, '240.0000', '24.0000', '216.0000', '', 1),
(574, '2021-08-27', 24, 'OBRA', 36, 22, 1, '588.5100', '58.8500', '529.6600', 'Liquidacion 24 (Cheque)', 1),
(575, '2021-09-10', 30, 'OBRA', 38, 13, 1, '150.0000', '15.0000', '135.0000', '', 1),
(576, '2021-09-10', 32, 'OBRA', 38, 13, 1, '100.0000', '10.0000', '90.0000', 'Primer pago', 1),
(577, '2021-09-10', 8, 'OBRA', 38, 13, 1, '700.0000', '70.0000', '630.0000', 'Armstrong en nivel 3', 1),
(578, '2021-09-10', 3, 'OBRA', 38, 13, 1, '50.0000', '5.0000', '45.0000', '', 1),
(579, '2021-09-10', 3, 'OBRA', 38, 3, 3, '200.0000', '20.0000', '180.0000', '', 1),
(580, '2021-09-10', 17, 'OBRA', 38, 39, 6, '700.0000', '70.0000', '630.0000', '', 1),
(581, '2021-09-10', 3, 'OBRA', 38, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(582, '2021-09-10', 17, 'OBRA', 38, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(583, '2021-09-10', 3, 'AL DIA', 38, 27, 8, '20.0000', '2.0000', '18.0000', 'Ayudando a pintar a Marvin', 1),
(584, '2021-09-10', 29, 'AL DIA', 38, 27, 8, '60.0000', '6.0000', '54.0000', 'Pintando', 1),
(585, '2021-09-10', 33, 'AL DIA', 38, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando apartamento 305', 1),
(586, '2021-09-10', 15, 'AL DIA', 38, 27, 8, '6.0000', '0.6000', '5.4000', 'Pintando cielo escaleras emergencia', 1),
(587, '2021-09-10', 3, 'AL DIA', 38, 32, 12, '200.0000', '20.0000', '180.0000', 'Apartamentos 403-406-502-902', 1),
(588, '2021-09-10', 3, 'AL DIA', 38, 32, 12, '360.0000', '36.0000', '324.0000', 'Abono a obra general', 1),
(589, '2021-09-10', 17, 'OBRA', 38, 33, 11, '425.0000', '42.5000', '382.5000', '', 1),
(590, '2021-09-17', 34, 'OBRA', 39, 13, 1, '900.0000', '90.0000', '810.0000', '1er pago', 1),
(591, '2021-09-17', 34, 'OBRA', 39, 41, 2, '200.0000', '20.0000', '180.0000', '1er pago', 1),
(592, '2021-09-17', 15, 'OBRA', 39, 41, 2, '80.0000', '8.0000', '72.0000', 'Divisiones de desnglass y cielo falso gradas', 1),
(593, '2021-09-17', 29, 'OBRA', 39, 41, 2, '20.0000', '2.0000', '18.0000', 'Detalle durock de ventana', 1),
(594, '2021-09-17', 34, 'OBRA', 39, 3, 3, '200.0000', '20.0000', '180.0000', '1er pago', 1),
(595, '2021-09-17', 17, 'OBRA', 39, 39, 6, '700.0000', '70.0000', '630.0000', '', 1),
(596, '2021-09-17', 22, 'AL DIA', 39, 5, 4, '30.0000', '3.0000', '27.0000', 'Reparando daños en pintura en area de compras', 1),
(597, '2021-09-17', 29, 'AL DIA', 39, 5, 4, '120.0000', '12.0000', '108.0000', 'Trabajos varios', 1),
(598, '2021-09-17', 12, 'AL DIA', 39, 5, 4, '30.0000', '3.0000', '27.0000', 'Reparando apartamentos por daños de fontanero', 1),
(599, '2021-09-17', 30, 'OBRA', 39, 33, 11, '50.0000', '5.0000', '45.0000', 'Division tablaroca sobre enchape y cargaderos de durock', 1),
(600, '2021-09-17', 15, 'OBRA', 39, 33, 11, '50.0000', '5.0000', '45.0000', 'Cielo en gradas y ex-divisiones provisionales', 1),
(601, '2021-09-17', 10, 'AL DIA', 39, 30, 11, '37.0000', '3.7000', '33.3000', 'Trabajos oficina de Quique Segovia', 1),
(602, '2021-09-17', 17, 'OBRA', 39, 33, 11, '200.0000', '20.0000', '180.0000', '', 1),
(603, '2021-09-17', 33, 'AL DIA', 39, 27, 8, '10.0000', '1.0000', '9.0000', 'Pintando apartamento 305', 1),
(604, '2021-09-17', 22, 'AL DIA', 39, 27, 8, '15.0000', '1.5000', '13.5000', 'Ayudando a Nico a reparar pintura de area de compras', 1),
(605, '2021-09-17', 15, 'AL DIA', 39, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando divisiones de densglass', 1),
(606, '2021-09-17', 29, 'AL DIA', 39, 27, 8, '45.0000', '4.5000', '40.5000', 'Pintando en primer nivel', 1),
(607, '2021-09-17', 3, 'AL DIA', 39, 32, 12, '250.0000', '25.0000', '225.0000', 'Apartamentos 702-703-601-602-604', 1),
(608, '2021-09-17', 3, 'AL DIA', 39, 32, 12, '300.0000', '30.0000', '270.0000', 'Abono a obra general', 1),
(609, '2021-09-24', 35, 'OBRA', 40, 18, 1, '250.0000', '25.0000', '225.0000', 'Reparando cielos dañados por AC', 1),
(610, '2021-09-24', 36, 'AL DIA', 40, 18, 1, '50.0000', '5.0000', '45.0000', 'Cielo de tablaroca en local', 1),
(611, '2021-09-24', 34, 'OBRA', 40, 18, 1, '600.0000', '60.0000', '540.0000', '', 1),
(612, '2021-09-24', 30, 'AL DIA', 40, 18, 1, '40.0000', '4.0000', '36.0000', 'Reparando division provisional', 1),
(613, '2021-09-24', 34, 'OBRA', 40, 41, 2, '200.0000', '20.0000', '180.0000', '', 1),
(614, '2021-09-24', 15, 'AL DIA', 40, 2, 2, '60.0000', '6.0000', '54.0000', 'Trabajos varios', 1),
(615, '2021-09-24', 29, 'AL DIA', 40, 2, 2, '20.0000', '2.0000', '18.0000', 'Haciendo pergola', 1),
(616, '2021-09-24', 17, 'AL DIA', 40, 43, 15, '700.0000', '70.0000', '630.0000', '', 1),
(617, '2021-09-17', 17, 'AL DIA', 39, 43, 15, '450.0000', '45.0000', '405.0000', 'Cheque por $400 + $50 de anticipo', 1),
(618, '2021-09-24', 3, 'AL DIA', 40, 32, 12, '150.0000', '15.0000', '135.0000', 'Paredes apartamentos 806-701-801', 1),
(619, '2021-09-24', 3, 'AL DIA', 40, 32, 12, '120.0000', '12.0000', '108.0000', 'Cielos apartamentos 906-903-803-806-704-801', 1),
(620, '2021-09-24', 3, 'AL DIA', 40, 32, 12, '108.0000', '10.8000', '97.2000', 'Al dia repasando todos los apartamentos', 1),
(621, '2021-09-24', 34, 'OBRA', 40, 3, 3, '200.0000', '20.0000', '180.0000', '', 1),
(622, '2021-09-24', 36, 'AL DIA', 40, 3, 3, '33.0000', '3.3000', '29.7000', 'Local inmuebles Honda', 1),
(623, '2021-09-24', 17, 'OBRA', 40, 39, 6, '800.0000', '80.0000', '720.0000', '', 1),
(624, '2021-09-24', 17, 'OBRA', 40, 6, 9, '50.0000', '5.0000', '45.0000', '', 1),
(625, '2021-09-24', 3, 'OBRA', 40, 6, 9, '50.0000', '5.0000', '45.0000', '', 1),
(626, '2021-09-24', 30, 'OBRA', 40, 6, 9, '50.0000', '5.0000', '45.0000', '', 1),
(627, '2021-09-24', 34, 'OBRA', 40, 6, 9, '50.0000', '5.0000', '45.0000', '', 1),
(628, '2021-09-24', 30, 'OBRA', 40, 45, 11, '75.0000', '7.5000', '67.5000', 'Haciendo durock de fachada', 1),
(629, '2021-09-24', 17, 'OBRA', 40, 45, 11, '25.0000', '2.5000', '22.5000', '', 1),
(630, '2021-09-24', 12, 'AL DIA', 40, 27, 8, '30.0000', '3.0000', '27.0000', 'Ayudando a Nico a reparar apartamentos', 1),
(631, '2021-09-24', 29, 'AL DIA', 40, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando hoyos en paredes y cielos', 1),
(632, '2021-09-24', 15, 'AL DIA', 40, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando densglass de cafeteria y ex divisiones provisionales', 1),
(633, '2021-09-24', 22, 'AL DIA', 40, 27, 8, '15.0000', '1.5000', '13.5000', 'Trabajando en oficinas de trazabilidad', 1),
(634, '2021-10-01', 29, 'OBRA', 41, 18, 1, '100.0000', '10.0000', '90.0000', 'Haciendo vigas de durock en cochera', 1),
(635, '2021-10-01', 32, 'OBRA', 41, 18, 1, '150.0000', '15.0000', '135.0000', 'Huecos de lampara y forro bajada', 1),
(636, '2021-10-01', 34, 'OBRA', 41, 18, 1, '600.0000', '60.0000', '540.0000', '', 1),
(637, '2021-10-01', 17, 'AL DIA', 41, 43, 15, '700.0000', '70.0000', '630.0000', 'Pintando acabado nivel 100', 1),
(638, '2021-10-01', 35, 'OBRA', 41, 18, 1, '40.0000', '4.0000', '36.0000', 'Reparando cielo area de servidores', 1),
(639, '2021-09-24', 3, 'AL DIA', 40, 32, 12, '222.0000', '22.2000', '199.8000', 'Abono a obra general', 1),
(640, '2021-10-01', 29, 'AL DIA', 41, 16, 6, '100.0000', '10.0000', '90.0000', 'Pasteando vigas de durock en cochera', 1),
(641, '2021-10-01', 17, 'OBRA', 41, 39, 6, '600.0000', '60.0000', '540.0000', '', 1),
(642, '2021-10-01', 22, 'AL DIA', 41, 5, 4, '126.0000', '12.6000', '113.4000', 'Trabajando en trazabilidad pintando paredes', 1),
(643, '2021-10-01', 12, 'AL DIA', 41, 5, 4, '30.0000', '3.0000', '27.0000', 'Trabajando en reparación de apartamentos', 1),
(644, '2021-10-01', 29, 'AL DIA', 41, 5, 4, '30.0000', '3.0000', '27.0000', 'Reparando hoyos de los electricos', 1),
(645, '2021-10-01', 3, 'AL DIA', 41, 32, 12, '250.0000', '25.0000', '225.0000', 'Termina apartamentos 906-706-804-803-506', 1),
(646, '2021-10-01', 3, 'AL DIA', 41, 32, 12, '325.0000', '32.5000', '292.5000', 'Abono a obra general', 1),
(647, '2021-10-01', 34, 'OBRA', 41, 3, 3, '200.0000', '20.0000', '180.0000', '', 1),
(648, '2021-10-01', 32, 'OBRA', 41, 41, 2, '150.0000', '15.0000', '135.0000', '', 1),
(649, '2021-10-01', 3, 'AL DIA', 41, 2, 2, '40.0000', '4.0000', '36.0000', 'Reparando cielo del nivel 900', 1),
(650, '2021-10-01', 17, 'OBRA', 41, 45, 11, '75.0000', '7.5000', '67.5000', '', 1),
(651, '2021-10-01', 22, 'AL DIA', 41, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando en trazabilidad', 1),
(652, '2021-10-01', 35, 'AL DIA', 41, 27, 8, '60.0000', '6.0000', '54.0000', 'Pintando paredes sucias', 1),
(653, '2021-10-01', 10, 'AL DIA', 41, 27, 8, '15.0000', '1.5000', '13.5000', 'Inmuebles y oficina Machuca', 1),
(654, '2021-10-08', 30, 'AL DIA', 42, 1, 1, '140.0000', '14.0000', '126.0000', 'Trabajos por Amilcar y William', 1),
(655, '2021-10-08', 17, 'OBRA', 42, 45, 11, '50.0000', '5.0000', '45.0000', '', 1),
(656, '2021-10-08', 37, 'AL DIA', 42, 30, 11, '37.0000', '3.7000', '33.3000', 'Division de durock 1 cara', 1),
(657, '2021-10-08', 34, 'OBRA', 42, 41, 2, '150.0000', '15.0000', '135.0000', '', 1),
(658, '2021-10-08', 3, 'AL DIA', 42, 2, 2, '80.0000', '8.0000', '72.0000', 'Reparaciones varias', 1),
(659, '2021-10-08', 34, 'OBRA', 42, 47, 3, '200.0000', '20.0000', '180.0000', '', 1),
(660, '2021-10-08', 29, 'AL DIA', 42, 16, 6, '74.0000', '7.4000', '66.6000', 'Pasteados y reparaciones', 1),
(661, '2021-10-08', 17, 'AL DIA', 42, 16, 6, '135.0000', '13.5000', '121.5000', 'Haciendo reparaciones al dia', 1),
(662, '2021-10-08', 17, 'OBRA', 42, 39, 6, '400.0000', '40.0000', '360.0000', '', 1),
(663, '2021-10-08', 17, 'AL DIA', 42, 43, 15, '800.0000', '80.0000', '720.0000', '', 1),
(664, '2021-10-08', 10, 'AL DIA', 42, 16, 6, '30.0000', '3.0000', '27.0000', 'Oficinas de Enrique Segovia', 1),
(665, '2021-10-08', 13, 'AL DIA', 42, 16, 6, '30.0000', '3.0000', '27.0000', 'Division de densglass ´para puerta de emergencia en escaleron', 1),
(666, '2021-10-08', 3, 'AL DIA', 42, 32, 12, '200.0000', '20.0000', '180.0000', 'Apartamentos 401-803-905-705', 1),
(667, '2021-10-08', 3, 'AL DIA', 42, 32, 12, '66.0000', '6.6000', '59.4000', 'Abono a obra general', 1),
(668, '2021-10-08', 3, 'AL DIA', 42, 32, 12, '72.0000', '7.2000', '64.8000', '4 dias al dia de un pintor', 1),
(669, '2021-10-08', 17, 'OBRA', 42, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(670, '2021-10-08', 3, 'OBRA', 42, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(671, '2021-10-08', 30, 'OBRA', 42, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(672, '2021-10-15', 30, 'AL DIA', 43, 18, 1, '265.0000', '26.5000', '238.5000', 'Divisiones varias tablaroca y durock', 1),
(673, '2021-10-15', 7, 'AL DIA', 43, 18, 1, '30.0000', '3.0000', '27.0000', 'Reparacion terraza 703', 1),
(674, '2021-10-15', 34, 'OBRA', 43, 18, 1, '500.0000', '50.0000', '450.0000', '', 1),
(675, '2021-10-15', 34, 'OBRA', 43, 47, 3, '100.0000', '10.0000', '90.0000', '', 1),
(676, '2021-10-15', 38, 'AL DIA', 43, 3, 3, '80.0000', '8.0000', '72.0000', 'Trabajando en pasteado', 1),
(677, '2021-10-15', 34, 'OBRA', 43, 41, 2, '150.0000', '15.0000', '135.0000', '', 1),
(678, '2021-10-15', 38, 'AL DIA', 43, 2, 2, '180.0000', '18.0000', '162.0000', 'Quique $100 + Moi $80', 1),
(679, '2021-10-15', 32, 'OBRA', 43, 41, 2, '50.0000', '5.0000', '45.0000', 'Liquidacion obra', 1),
(680, '2021-10-15', 17, 'OBRA', 43, 39, 6, '325.0000', '32.5000', '292.5000', '', 1),
(681, '2021-10-15', 17, 'AL DIA', 43, 16, 6, '200.0000', '20.0000', '180.0000', 'Reparando huecos de electricos y fontaneros', 1),
(682, '2021-10-15', 37, 'AL DIA', 43, 16, 6, '30.0000', '3.0000', '27.0000', 'Division durock en 37', 1),
(683, '2021-10-15', 17, 'AL DIA', 43, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(684, '2021-10-15', 35, 'AL DIA', 43, 5, 4, '15.0000', '1.5000', '13.5000', 'Pintando junto con Marvin', 1),
(685, '2021-10-15', 32, 'AL DIA', 43, 5, 4, '30.0000', '3.0000', '27.0000', 'Pintando cielo junto con Marvin', 1),
(686, '2021-10-15', 29, 'AL DIA', 43, 5, 4, '135.0000', '13.5000', '121.5000', 'Reparaciones varias y pintura', 1),
(687, '2021-10-15', 29, 'AL DIA', 43, 27, 8, '37.5000', '3.7500', '33.7500', 'Pintando y reparaciones varias', 1),
(688, '2021-10-15', 38, 'AL DIA', 43, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando cielos', 1),
(689, '2021-10-15', 32, 'AL DIA', 43, 27, 8, '7.5000', '0.7500', '6.7500', 'Pintando cielo de gradas y fascia', 1),
(690, '2021-10-15', 3, 'AL DIA', 43, 32, 12, '240.0000', '24.0000', '216.0000', 'Apartamentos 404-501-901-805 y cielos de 905 y 805', 1),
(691, '2021-10-15', 3, 'AL DIA', 43, 32, 12, '90.0000', '9.0000', '81.0000', 'Pintor haciendo galladas', 1),
(692, '2021-10-15', 3, 'AL DIA', 43, 32, 12, '100.0000', '10.0000', '90.0000', 'Abono a obra general', 1),
(693, '2021-10-15', 3, 'AL DIA', 43, 30, 11, '122.6600', '12.2700', '110.3900', 'Liquidacion 3', 1),
(694, '2021-10-15', 17, 'OBRA', 43, 45, 11, '222.2200', '22.2200', '200.0000', '', 1),
(695, '2021-10-22', 30, 'AL DIA', 44, 18, 1, '250.0000', '25.0000', '225.0000', 'Haciendo vigas colgantes en cielo falso', 1),
(696, '2021-10-22', 34, 'OBRA', 44, 18, 1, '900.0000', '90.0000', '810.0000', '', 1),
(697, '2021-10-22', 34, 'OBRA', 44, 47, 3, '200.0000', '20.0000', '180.0000', '', 1),
(698, '2021-10-22', 17, 'AL DIA', 44, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(699, '2021-10-22', 17, 'AL DIA', 44, 43, 15, '60.0000', '6.0000', '54.0000', 'Pintado 16 columnas metalicas a 3 manos en pasillo', 1),
(700, '2021-10-22', 30, 'OBRA', 44, 39, 6, '130.0000', '13.0000', '117.0000', '', 1),
(701, '2021-10-22', 17, 'AL DIA', 44, 16, 6, '140.0000', '14.0000', '126.0000', 'Lunes(2)+Miercoles(2)+Jueves(2)+Viernes(1)', 1),
(702, '2021-10-22', 30, 'AL DIA', 44, 16, 6, '100.0000', '10.0000', '90.0000', 'Martes(2)+Viernes(1)+Sabado(2)', 1),
(703, '2021-10-22', 30, 'OBRA', 44, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(704, '2021-10-22', 17, 'OBRA', 44, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(705, '2021-10-22', 13, 'OBRA', 44, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(706, '2021-10-22', 3, 'AL DIA', 44, 32, 12, '100.0000', '10.0000', '90.0000', 'Apartamentos 503-402', 1),
(707, '2021-10-22', 3, 'AL DIA', 44, 32, 12, '75.0000', '7.5000', '67.5000', 'Pintor al dia sacando galladas', 1),
(708, '2021-10-22', 17, 'AL DIA', 44, 30, 11, '70.0000', '7.0000', '63.0000', 'Colocando madera para pilas', 1),
(709, '2021-10-22', 38, 'AL DIA', 44, 1, 1, '40.0000', '4.0000', '36.0000', 'Anticipo a Marvin para fascia y cornisa en porton', 1),
(710, '2021-10-22', 34, 'OBRA', 44, 41, 2, '225.0000', '22.5000', '202.5000', 'Cheque Banco Agricola', 1),
(711, '2021-10-22', 38, 'AL DIA', 44, 2, 2, '40.0000', '4.0000', '36.0000', 'Quique $20 + Moi $20 en cochera', 1),
(712, '2021-10-22', 38, 'AL DIA', 44, 27, 8, '22.5000', '2.2500', '20.2500', 'Pintando cochera', 1),
(713, '2021-10-22', 29, 'AL DIA', 44, 27, 8, '22.5000', '2.2500', '20.2500', 'Pintando cuadros negros en porche de entrada principal', 1),
(714, '2021-10-22', 3, 'AL DIA', 44, 27, 8, '15.0000', '1.5000', '13.5000', 'Sellando agujeros del 402', 1),
(715, '2021-10-22', 22, 'AL DIA', 44, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando losa con Aqualock', 1),
(716, '2021-10-29', 30, 'AL DIA', 45, 1, 1, '360.0000', '36.0000', '324.0000', '', 1),
(717, '2021-10-29', 34, 'OBRA', 45, 18, 1, '650.0000', '65.0000', '585.0000', '', 1),
(718, '2021-10-29', 32, 'AL DIA', 45, 1, 1, '30.0000', '3.0000', '27.0000', 'Liquidacion Santa Elena', 1),
(719, '2021-10-29', 34, 'OBRA', 45, 41, 2, '250.0000', '25.0000', '225.0000', '', 1),
(720, '2021-10-29', 34, 'OBRA', 45, 47, 3, '150.0000', '15.0000', '135.0000', '', 1),
(721, '2021-10-29', 17, 'AL DIA', 45, 3, 3, '20.0000', '2.0000', '18.0000', 'Reparando agujeros del 410', 1),
(722, '2021-10-29', 30, 'AL DIA', 45, 3, 3, '10.0000', '1.0000', '9.0000', 'Ticket + gasolina', 1),
(723, '2021-10-29', 30, 'AL DIA', 45, 16, 6, '180.0000', '18.0000', '162.0000', 'Vladi $100 + Toño $80', 1),
(724, '2021-10-29', 39, 'OBRA', 45, 39, 6, '30.0000', '3.0000', '27.0000', '1er planilla', 1),
(725, '2021-10-29', 17, 'AL DIA', 45, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(726, '2021-10-29', 22, 'AL DIA', 45, 5, 4, '135.0000', '13.5000', '121.5000', 'Impermeabilizando losa', 1),
(727, '2021-10-29', 12, 'AL DIA', 45, 5, 4, '45.0000', '4.5000', '40.5000', 'Reparando cielo del apartamento 201', 1),
(728, '2021-10-29', 3, 'AL DIA', 45, 32, 12, '170.0000', '17.0000', '153.0000', 'Juan $20 + Pintor 1 $90 + Pintor 2 $60', 1),
(729, '2021-10-29', 22, 'AL DIA', 45, 27, 8, '67.5000', '6.7500', '60.7500', 'Impermeabilizando losa', 1),
(730, '2021-10-29', 7, 'AL DIA', 45, 27, 8, '7.5000', '0.7500', '6.7500', 'Pintando terraza apartamento 703', 1),
(731, '2021-10-29', 38, 'AL DIA', 45, 27, 8, '15.0000', '1.5000', '13.5000', 'Pintando techo sobre porton', 1),
(732, '2021-10-29', 38, 'AL DIA', 45, 1, 1, '120.0000', '12.0000', '108.0000', 'Liquidacion a Marvin por instalar tablaroca sobre porton', 1),
(733, '2021-10-29', 17, 'OBRA', 45, 45, 11, '277.7800', '27.7800', '250.0000', 'Resto para liquidar $306.24 - renta', 1),
(734, '2021-11-05', 22, 'AL DIA', 46, 27, 8, '21.0000', '2.1000', '18.9000', 'Impermeabilizando losa', 1),
(735, '2021-11-05', 12, 'AL DIA', 46, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando apartamento 201', 1),
(736, '2021-11-05', 17, 'AL DIA', 46, 27, 8, '15.0000', '1.5000', '13.5000', 'Pasteado reparaciones', 1),
(737, '2021-11-05', 39, 'AL DIA', 46, 27, 8, '30.0000', '3.0000', '27.0000', 'Pasteando', 1),
(738, '2021-11-05', 34, 'OBRA', 46, 18, 1, '650.0000', '65.0000', '585.0000', '', 1),
(739, '2021-11-05', 39, 'OBRA', 46, 18, 1, '500.0000', '50.0000', '450.0000', '', 1),
(740, '2021-11-05', 34, 'OBRA', 46, 47, 3, '300.0000', '30.0000', '270.0000', '', 1),
(741, '2021-11-05', 30, 'AL DIA', 46, 3, 3, '20.0000', '2.0000', '18.0000', 'Pasteando vigas', 1),
(742, '2021-11-05', 34, 'OBRA', 46, 41, 2, '300.0000', '30.0000', '270.0000', '', 1),
(743, '2021-11-05', 30, 'AL DIA', 46, 16, 6, '140.0000', '14.0000', '126.0000', 'Al día Toño y Vladi', 1),
(744, '2021-11-05', 39, 'OBRA', 46, 39, 6, '150.0000', '15.0000', '135.0000', 'Pasteando divisiones', 1),
(745, '2021-11-05', 30, 'AL DIA', 46, 30, 11, '55.0000', '5.5000', '49.5000', 'Cielo en pasillo y reparación vigas', 1),
(746, '2021-11-05', 40, 'OBRA', 46, 45, 11, '200.0000', '20.0000', '180.0000', 'Perfilando y forrando 1 cara divisiones', 1),
(747, '2021-11-05', 41, 'AL DIA', 46, 30, 11, '125.0000', '12.5000', '112.5000', 'Cielos y fascias', 1),
(748, '2021-11-05', 17, 'OBRA', 46, 45, 11, '306.2400', '30.6200', '275.6200', 'Liquidacion', 1),
(749, '2021-11-05', 30, 'OBRA', 46, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(750, '2021-11-05', 34, 'OBRA', 46, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(751, '2021-11-05', 17, 'OBRA', 46, 6, 9, '66.6700', '6.6700', '60.0000', '', 1),
(752, '2021-11-05', 30, 'AL DIA', 46, 48, 4, '25.0000', '2.5000', '22.5000', 'Anticipo', 1),
(753, '2021-11-05', 2, 'AL DIA', 46, 48, 16, '75.0000', '7.5000', '67.5000', 'Cielo de pasillo y división en mezanine', 1),
(754, '2021-11-05', 17, 'AL DIA', 46, 43, 15, '500.0000', '50.0000', '450.0000', '', 1),
(755, '2021-11-05', 17, 'AL DIA', 46, 43, 15, '120.0000', '12.0000', '108.0000', '4 días de Vigas H y 2 días de lijado de 8 apartamentos', 1),
(756, '2021-11-05', 34, 'AL DIA', 46, 49, 17, '200.0000', '20.0000', '180.0000', 'Primer planilla', 1),
(757, '2021-11-12', 39, 'OBRA', 47, 19, 1, '170.0000', '17.0000', '153.0000', '', 1),
(758, '2021-11-12', 34, 'OBRA', 47, 19, 1, '1000.0000', '100.0000', '900.0000', 'Cheque CS Agrícola 29-3', 1),
(759, '2021-11-12', 30, 'AL DIA', 47, 1, 1, '120.0000', '12.0000', '108.0000', 'Trabajos al dia', 1),
(760, '2021-11-12', 34, 'OBRA', 47, 47, 3, '350.0000', '35.0000', '315.0000', '', 1),
(761, '2021-11-12', 34, 'OBRA', 47, 41, 2, '350.0000', '35.0000', '315.0000', '', 1),
(762, '2021-11-12', 30, 'AL DIA', 47, 3, 3, '30.0000', '3.0000', '27.0000', 'Pasteado al día', 1),
(763, '2021-11-12', 39, 'OBRA', 47, 39, 6, '300.0000', '30.0000', '270.0000', '', 1),
(764, '2021-11-12', 30, 'AL DIA', 47, 16, 6, '100.0000', '10.0000', '90.0000', 'Pago de Toño', 1),
(765, '2021-11-12', 3, 'AL DIA', 47, 32, 12, '75.0000', '7.5000', '67.5000', 'Pago directo a Juan ayudante', 1),
(766, '2021-11-12', 17, 'AL DIA', 47, 43, 15, '500.0000', '50.0000', '450.0000', '', 1),
(767, '2021-11-12', 17, 'AL DIA', 47, 43, 15, '240.0000', '24.0000', '216.0000', 'Obra adicional, pintando vigas H y lijado apartamentos', 1),
(768, '2021-11-12', 34, 'AL DIA', 47, 49, 17, '200.0000', '20.0000', '180.0000', 'Pintando 1 mano primer nivel', 1),
(769, '2021-11-12', 10, 'AL DIA', 47, 5, 4, '179.0000', '17.9000', '161.1000', '', 1),
(770, '2021-11-12', 1, 'AL DIA', 47, 5, 4, '15.0000', '1.5000', '13.5000', 'Primer dia', 1),
(771, '2021-11-12', 30, 'AL DIA', 47, 27, 8, '90.0000', '9.0000', '81.0000', 'Pasteando y lijando', 1),
(772, '2021-11-12', 30, 'AL DIA', 47, 48, 16, '80.0000', '8.0000', '72.0000', '', 1),
(773, '2021-11-12', 30, 'AL DIA', 47, 48, 16, '20.0000', '2.0000', '18.0000', 'Anticipo entregado al comienzo de la semana', 1),
(774, '2021-11-19', 34, 'OBRA', 48, 47, 3, '350.0000', '35.0000', '315.0000', '', 1),
(775, '2021-11-19', 34, 'OBRA', 48, 41, 2, '350.0000', '35.0000', '315.0000', '', 1),
(776, '2021-11-19', 34, 'AL DIA', 48, 49, 17, '150.0000', '15.0000', '135.0000', 'Pintando primer nivel 1 mano', 1),
(777, '2021-11-19', 17, 'AL DIA', 48, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(778, '2021-11-19', 34, 'OBRA', 48, 19, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(779, '2021-11-19', 30, 'AL DIA', 48, 1, 1, '60.0000', '6.0000', '54.0000', '', 1),
(780, '2021-11-19', 17, 'AL DIA', 48, 27, 8, '45.0000', '4.5000', '40.5000', 'Reparando hoyos electricos', 1),
(781, '2021-11-19', 9, 'AL DIA', 48, 27, 8, '15.0000', '1.5000', '13.5000', 'Rperacion apt 204', 1),
(782, '2021-11-19', 39, 'AL DIA', 48, 27, 8, '15.0000', '1.5000', '13.5000', 'Pasteando madera para TV', 1),
(783, '2021-11-19', 30, 'AL DIA', 48, 27, 8, '35.0000', '3.5000', '31.5000', 'Domingo + 1 día repasando pasteados', 1),
(784, '2021-11-19', 3, 'AL DIA', 48, 32, 12, '75.0000', '7.5000', '67.5000', 'Pintando varios', 1),
(785, '2021-11-19', 17, 'AL DIA', 48, 32, 12, '15.0000', '1.5000', '13.5000', 'Pintando columnas metalicas', 1),
(786, '2021-11-19', 10, 'OBRA', 48, 6, 9, '200.0000', '20.0000', '180.0000', 'Pago de vacaciones', 1),
(787, '2021-11-19', 17, 'AL DIA', 48, 16, 6, '100.0000', '10.0000', '90.0000', 'Reparando tablaroca', 1),
(788, '2021-11-19', 30, 'AL DIA', 48, 16, 6, '160.0000', '16.0000', '144.0000', 'Varios', 1),
(789, '2021-11-27', 34, 'OBRA', 49, 19, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(790, '2021-11-27', 10, 'AL DIA', 49, 1, 1, '190.0000', '19.0000', '171.0000', 'Casa Guillermo Flores', 1),
(791, '2021-11-27', 34, 'OBRA', 49, 47, 3, '400.0000', '40.0000', '360.0000', '', 1),
(792, '2021-11-27', 34, 'OBRA', 49, 41, 2, '400.0000', '40.0000', '360.0000', '', 1),
(793, '2021-11-27', 1, 'AL DIA', 49, 5, 4, '90.0000', '9.0000', '81.0000', 'Reparando cielos', 1),
(794, '2021-11-27', 22, 'AL DIA', 49, 5, 4, '15.0000', '1.5000', '13.5000', 'Reparando trazabilidad', 1),
(795, '2021-11-27', 10, 'AL DIA', 49, 5, 4, '75.0000', '7.5000', '67.5000', '', 1),
(796, '2021-11-27', 17, 'AL DIA', 49, 27, 8, '75.0000', '7.5000', '67.5000', 'Pintando columnas metalicas y resanando', 1),
(797, '2021-11-27', 9, 'AL DIA', 49, 27, 8, '15.0000', '1.5000', '13.5000', 'Reparando apartamento 204', 1),
(798, '2021-11-27', 30, 'AL DIA', 49, 27, 8, '15.0000', '1.5000', '13.5000', 'Trabajando de noche en La Joya', 1),
(799, '2021-11-27', 17, 'AL DIA', 49, 16, 6, '160.0000', '16.0000', '144.0000', 'Reparando tablaroca hidraulico incluye a Toño', 1),
(800, '2021-11-27', 10, 'AL DIA', 49, 16, 6, '60.0000', '6.0000', '54.0000', 'Trabajando en casa del Casco', 1),
(801, '2021-11-27', 10, 'AL DIA', 49, 16, 6, '20.0000', '2.0000', '18.0000', 'Casa de Guifarro por Palillos Chinos', 1),
(802, '2021-11-27', 30, 'AL DIA', 49, 16, 6, '20.0000', '2.0000', '18.0000', 'Trabajando de noche', 1),
(803, '2021-11-27', 37, 'AL DIA', 49, 1, 1, '80.0000', '8.0000', '72.0000', 'Victor trabajando en divisiones durock', 1),
(804, '2021-11-27', 37, 'AL DIA', 49, 1, 1, '20.0000', '2.0000', '18.0000', 'Anticipo a Victor por iniciar', 1),
(805, '2021-11-27', 34, 'AL DIA', 49, 49, 17, '150.0000', '15.0000', '135.0000', '', 1),
(806, '2021-11-27', 17, 'AL DIA', 49, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(807, '2021-11-27', 3, 'AL DIA', 49, 32, 12, '90.0000', '9.0000', '81.0000', 'Juan Melendez pintando el 603', 1),
(808, '2021-12-03', 10, 'AL DIA', 50, 1, 1, '10.0000', '1.0000', '9.0000', 'Liquidacion  Victor casa Ing Guifarro', 1),
(809, '2021-12-03', 37, 'AL DIA', 50, 1, 1, '20.0000', '2.0000', '18.0000', 'Anticipo a Victor', 1),
(810, '2021-12-03', 37, 'AL DIA', 50, 1, 1, '10.0000', '1.0000', '9.0000', 'Anticipo que Rafa le dio a Victor', 1),
(811, '2021-12-03', 17, 'AL DIA', 50, 43, 15, '600.0000', '60.0000', '540.0000', '', 1),
(812, '2021-12-03', 34, 'AL DIA', 50, 49, 17, '200.0000', '20.0000', '180.0000', '', 1),
(813, '2021-12-03', 10, 'AL DIA', 50, 1, 1, '25.0000', '2.5000', '22.5000', 'Instalacion casa Ing Guifarro', 1),
(814, '2021-12-03', 34, 'OBRA', 50, 50, 1, '1100.0000', '110.0000', '990.0000', '', 1),
(815, '2021-12-03', 34, 'OBRA', 50, 41, 2, '400.0000', '40.0000', '360.0000', '', 1),
(816, '2021-12-03', 34, 'OBRA', 50, 47, 3, '400.0000', '40.0000', '360.0000', '', 1),
(817, '2021-12-03', 34, 'OBRA', 50, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(818, '2021-12-03', 17, 'OBRA', 50, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(819, '2021-12-03', 17, 'AL DIA', 50, 27, 8, '85.0000', '8.5000', '76.5000', 'Pintando sabado por la tarde', 1),
(820, '2021-12-03', 3, 'AL DIA', 50, 32, 12, '75.0000', '7.5000', '67.5000', 'Juan Melendez pintando 603 y fachada 902', 1),
(821, '2021-12-03', 10, 'AL DIA', 50, 16, 6, '20.0000', '2.0000', '18.0000', 'Toño en casa Ing Guifarro', 1),
(822, '2021-12-03', 37, 'AL DIA', 50, 16, 6, '100.0000', '10.0000', '90.0000', 'Toño en divisiones durock', 1),
(823, '2021-12-03', 17, 'AL DIA', 50, 16, 6, '100.0000', '10.0000', '90.0000', 'Reparaciones varias', 1),
(824, '2021-12-03', 37, 'AL DIA', 50, 1, 1, '95.0000', '9.5000', '85.5000', 'Complemento', 1),
(825, '2021-12-11', 34, 'AL DIA', 51, 49, 17, '150.0000', '15.0000', '135.0000', '', 1),
(826, '2021-12-11', 34, 'OBRA', 51, 50, 1, '1200.0000', '120.0000', '1080.0000', '', 1),
(827, '2021-12-11', 34, 'OBRA', 51, 47, 3, '400.0000', '40.0000', '360.0000', '', 1),
(828, '2021-12-11', 30, 'AL DIA', 51, 3, 3, '15.0000', '1.5000', '13.5000', 'Trabajo de noche tapando agujeros', 1),
(829, '2021-12-11', 17, 'AL DIA', 51, 16, 6, '40.0000', '4.0000', '36.0000', 'Al dia reparando y lijando', 1),
(830, '2021-12-11', 17, 'AL DIA', 51, 16, 6, '350.0000', '35.0000', '315.0000', 'Pago de galladas en proyecto', 1),
(831, '2021-12-11', 17, 'AL DIA', 51, 27, 8, '75.0000', '7.5000', '67.5000', 'Pintando vigas metalicas y otros', 1),
(832, '2021-12-11', 34, 'OBRA', 51, 41, 2, '400.0000', '40.0000', '360.0000', '', 1),
(833, '2021-12-11', 37, 'AL DIA', 51, 16, 6, '30.0000', '3.0000', '27.0000', 'Terminando divisiones durock', 1),
(834, '2021-12-11', 17, 'AL DIA', 51, 16, 6, '30.0000', '3.0000', '27.0000', 'Dias al dia de Toño', 1),
(835, '2021-12-11', 30, 'AL DIA', 51, 16, 6, '10.0000', '1.0000', '9.0000', 'De noche tapando hoyos de cielo', 1),
(836, '2021-12-11', 17, 'AL DIA', 51, 43, 15, '700.0000', '70.0000', '630.0000', '', 1),
(837, '2021-12-11', 1, 'AL DIA', 51, 5, 4, '180.0000', '18.0000', '162.0000', 'Pintando y resanando', 1),
(838, '2021-12-11', 3, 'AL DIA', 51, 32, 12, '75.0000', '7.5000', '67.5000', 'Sacando recortes y galladas (Juan Melendez)', 1),
(839, '2021-12-17', 34, 'AL DIA', 52, 49, 17, '200.0000', '20.0000', '180.0000', '', 1),
(840, '2021-12-17', 34, 'OBRA', 52, 50, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(841, '2021-12-17', 34, 'OBRA', 52, 47, 3, '400.0000', '40.0000', '360.0000', '', 1),
(842, '2021-12-17', 34, 'OBRA', 52, 41, 2, '400.0000', '40.0000', '360.0000', '', 1),
(843, '2021-12-17', 40, 'OBRA', 52, 45, 11, '200.0000', '20.0000', '180.0000', '', 1),
(844, '2021-12-17', 40, 'AL DIA', 52, 16, 6, '100.0000', '10.0000', '90.0000', '', 1),
(845, '2021-12-17', 17, 'AL DIA', 52, 27, 8, '15.0000', '1.5000', '13.5000', '', 1),
(846, '2021-12-17', 10, 'AL DIA', 52, 27, 8, '15.0000', '1.5000', '13.5000', '', 1),
(847, '2021-12-17', 1, 'AL DIA', 52, 27, 8, '60.0000', '6.0000', '54.0000', '', 1),
(848, '2021-12-17', 17, 'OBRA', 52, 6, 9, '90.0000', '9.0000', '81.0000', '', 1),
(849, '2021-12-17', 34, 'OBRA', 52, 6, 9, '90.0000', '9.0000', '81.0000', '', 1),
(850, '2021-12-17', 3, 'AL DIA', 52, 32, 12, '90.0000', '9.0000', '81.0000', 'Pago a Juan Melendez', 1),
(851, '2021-12-17', 17, 'AL DIA', 52, 43, 15, '500.0000', '50.0000', '450.0000', '', 1),
(852, '2021-12-17', 17, 'AL DIA', 52, 4, 3, '45.0000', '4.5000', '40.5000', '', 1),
(853, '2021-12-23', 34, 'OBRA', 53, 1, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(854, '2021-12-23', 34, 'OBRA', 53, 3, 3, '400.0000', '40.0000', '360.0000', '', 1),
(855, '2021-12-23', 34, 'OBRA', 53, 2, 2, '400.0000', '40.0000', '360.0000', '', 1),
(856, '2021-12-23', 34, 'AL DIA', 53, 49, 17, '150.0000', '15.0000', '135.0000', '', 1),
(857, '2021-12-23', 17, 'AL DIA', 53, 27, 8, '75.0000', '7.5000', '67.5000', 'Pintando apartamentos', 1),
(858, '2021-12-23', 1, 'AL DIA', 53, 27, 8, '15.0000', '1.5000', '13.5000', 'Ayudando a Nico a pintar para el dia de fiesta', 1),
(859, '2021-12-23', 17, 'AL DIA', 53, 51, 18, '75.0000', '7.5000', '67.5000', 'Pintando apartamentos', 1),
(860, '2021-12-23', 1, 'AL DIA', 53, 5, 4, '180.0000', '18.0000', '162.0000', 'Pinatndo', 1),
(861, '2021-12-23', 40, 'AL DIA', 53, 16, 6, '300.0000', '30.0000', '270.0000', 'Vladi trabajando con Toño', 1),
(862, '2021-12-23', 3, 'AL DIA', 53, 32, 12, '90.0000', '9.0000', '81.0000', 'Planilla de Juan Melendez', 1),
(863, '2021-12-23', 42, 'AL DIA', 53, 30, 11, '111.0000', '11.1000', '99.9000', 'Divisiones y cielos en 42', 1),
(864, '2021-12-23', 37, 'AL DIA', 53, 30, 11, '120.0000', '12.0000', '108.0000', 'Rene y Melvin poniendo segunda forro de durock', 1),
(865, '2021-12-30', 34, 'AL DIA', 54, 49, 17, '200.0000', '20.0000', '180.0000', '', 1),
(866, '2021-12-30', 34, 'OBRA', 54, 50, 1, '1000.0000', '100.0000', '900.0000', '', 1),
(867, '2021-12-30', 34, 'OBRA', 54, 47, 3, '400.0000', '40.0000', '360.0000', '', 1),
(868, '2021-12-30', 34, 'OBRA', 54, 41, 2, '400.0000', '40.0000', '360.0000', '', 1),
(869, '2021-12-30', 40, 'OBRA', 54, 45, 11, '150.0000', '15.0000', '135.0000', 'Preliquidacion', 1),
(870, '2021-12-30', 40, 'AL DIA', 54, 30, 11, '93.0000', '9.3000', '83.7000', 'Reparaciones varias por desarmando divisiones', 1),
(871, '2021-12-30', 42, 'AL DIA', 54, 16, 6, '135.0000', '13.5000', '121.5000', 'Liquidacion', 1),
(872, '2021-12-30', 17, 'AL DIA', 54, 27, 8, '45.0000', '4.5000', '40.5000', 'Pintando apartamento 305', 1),
(873, '2021-12-30', 3, 'AL DIA', 54, 27, 8, '30.0000', '3.0000', '27.0000', 'Pintando apartamento 606', 1),
(874, '2021-12-30', 17, 'AL DIA', 54, 51, 18, '75.0000', '7.5000', '67.5000', '', 1),
(875, '2021-12-30', 34, 'OBRA', 54, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(876, '2021-12-30', 17, 'OBRA', 54, 6, 9, '100.0000', '10.0000', '90.0000', '', 1),
(877, '2021-12-30', 37, 'AL DIA', 54, 25, 11, '165.0000', '16.5000', '148.5000', 'Haciendo cielo de tablaroca Rene $20*5 + Melvin $13*5', 1),
(878, '2021-12-30', 3, 'AL DIA', 54, 32, 12, '75.0000', '7.5000', '67.5000', 'Pago a Juan Melendez', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Project`
--

CREATE TABLE `Project` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_bin NOT NULL,
  `address` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(90) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(90) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Project`
--

INSERT INTO `Project` (`id`, `name`, `address`, `city`, `country`) VALUES
(1, 'CASA DE GUERRERO', 'Calle Jupiter', 'San Salvador', 'El Salvador'),
(2, 'CASA RODAS', '12 Avenue Doyen Louis Weil', 'Grenoble', 'France'),
(3, 'CONDOMINIO 105', 'Calle 105', 'San Salvador', 'El Salvador'),
(4, 'EDIFICIO COLABORA', NULL, NULL, NULL),
(5, 'EL PEDREGAL', NULL, NULL, NULL),
(6, 'LAGO COATEPEQUE', NULL, NULL, NULL),
(7, 'LUCEIRO 2', NULL, NULL, NULL),
(8, 'OFICINAS LA 71', NULL, NULL, NULL),
(9, 'PANORAMICO', NULL, NULL, NULL),
(10, 'PROYECTOS', NULL, NULL, NULL),
(11, 'TENERIFE', NULL, NULL, NULL),
(12, 'VISTAS DEL MIRADOR', NULL, NULL, NULL),
(13, 'PLAZA OLIMPICA TP1', NULL, NULL, NULL),
(14, 'APARTAMENTO PABLO', NULL, NULL, NULL),
(15, 'INFINITY', NULL, NULL, NULL),
(16, 'BANDESAL FDE', NULL, NULL, NULL),
(17, 'PALO ALTO', NULL, NULL, NULL),
(18, 'CASA QUIQUE', NULL, NULL, NULL),
(19, 'LA QUINTA', NULL, NULL, NULL),
(20, 'CASA ING RICO', NULL, NULL, NULL),
(21, 'MI CASA', NULL, NULL, NULL),
(22, 'OIRSA', NULL, NULL, NULL),
(23, 'BOCADELI', NULL, NULL, NULL),
(24, 'SALAMANCA', NULL, NULL, NULL),
(25, 'SSF', NULL, NULL, NULL),
(26, 'LOCAL 309 INMUEBLES', NULL, NULL, NULL),
(27, 'JUZGADOS', NULL, NULL, NULL),
(28, 'FINCA DE ASTURIAS', NULL, NULL, NULL),
(29, 'CASA LIC GUERRERO', NULL, NULL, NULL),
(30, 'SAN MARTIN LA JOYA', NULL, NULL, NULL),
(31, 'PRIMAVERA MH', NULL, NULL, NULL),
(32, 'FABRICIO SANTA ELENA', NULL, NULL, NULL),
(33, 'AMBROGI', NULL, NULL, NULL),
(34, 'OLIMPICA 65', NULL, NULL, NULL),
(35, 'TP2 Parqueo', NULL, NULL, NULL),
(36, 'LOCAL HONDA INMUEBLES', NULL, NULL, NULL),
(37, 'HOSPITAL BLOOM', NULL, NULL, NULL),
(38, 'CASA PAPA DE GUERRERO', NULL, NULL, NULL),
(39, 'CREATIVE EL SALVADOR', NULL, NULL, NULL),
(40, 'OFICINAS INMUEBLES', NULL, NULL, NULL),
(41, 'EL CORTIJO 17-B', NULL, NULL, NULL),
(42, 'CASA ARQ ALEJANDRA', NULL, NULL, NULL),
(43, 'PLAZA MUNDO APOPA', NULL, NULL, NULL),
(44, 'SYLVANIA\r\n', NULL, NULL, NULL),
(45, 'EDIFICIO COLABORA\r\n', NULL, NULL, NULL),
(46, 'PROYECTO 105\r\n', NULL, NULL, NULL),
(47, 'CONDOMINIO PALO ALTO', NULL, NULL, NULL),
(48, 'INFINITY TOWER\r\n', NULL, NULL, NULL),
(49, 'PORYECTOS CONSOLIDADOS\r\n', NULL, NULL, NULL),
(50, 'REMODELACION OFICINA\r\n', NULL, NULL, NULL),
(51, 'REMODELACION OFICINA 2\r\n', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Purchase`
--

CREATE TABLE `Purchase` (
  `id` int(11) NOT NULL,
  `paymentType_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `invoiceNumber` int(11) NOT NULL,
  `amount` decimal(10,4) NOT NULL,
  `chequeNumber` int(11) DEFAULT NULL,
  `label_id` int(11) NOT NULL,
  `comment` varchar(150) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Purchase`
--

INSERT INTO `Purchase` (`id`, `paymentType_id`, `supplier_id`, `project_id`, `date`, `invoiceNumber`, `amount`, `chequeNumber`, `label_id`, `comment`) VALUES
(1, 1, 1, 3, '2021-01-30', 295, '700.0000', 0, 1, 'Abono A Trabajos De Tablaroca'),
(2, 3, 6, 2, '2021-02-20', 294, '358.2100', 0, 1, 'Bandesal FDE'),
(3, 3, 3, 15, '2021-01-27', 245, '4000.0000', 0, 3, '3er Abono TP1'),
(4, 1, 1, 17, '2021-02-26', 246, '10000.0000', 0, 5, '5to Abono Condominio 105'),
(5, 3, 3, 44, '2021-03-22', 293, '3710.9800', 0, 5, 'Liquidacion'),
(6, 1, 1, 6, '2021-04-15', 244, '10000.0000', 0, 5, '4to Abono Condominio 105'),
(7, 3, 6, 22, '2021-01-12', 243, '5000.0000', 0, 1, '1er Abono Infinity'),
(8, 3, 1, 13, '2021-01-08', 292, '0.0000', 0, 3, 'Anulada'),
(9, 1, 6, 45, '2021-01-07', 242, '10000.0000', 0, 3, '3er Abono Condominio 105');

-- --------------------------------------------------------

--
-- Table structure for table `Sales`
--

CREATE TABLE `Sales` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Sales`
--

INSERT INTO `Sales` (`id`, `project_id`, `client_id`) VALUES
(1, 3, 4),
(2, 2, 6),
(3, 15, 11),
(4, 13, 1),
(5, 43, 12),
(6, 16, 13),
(7, 17, 1),
(8, 44, 14),
(9, 45, 15),
(10, 6, 1),
(11, 22, 17),
(12, 23, 17),
(13, 46, 17),
(14, 47, 17),
(15, 48, 17),
(16, 49, 17),
(17, 50, 17),
(18, 51, 18);

-- --------------------------------------------------------

--
-- Table structure for table `Staff`
--

CREATE TABLE `Staff` (
  `id` int(11) NOT NULL,
  `firstName` varchar(90) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(90) COLLATE utf8_bin NOT NULL,
  `alias_id` int(11) NOT NULL,
  `post` varchar(50) COLLATE utf8_bin NOT NULL,
  `nit` varchar(17) COLLATE utf8_bin NOT NULL,
  `dui` varchar(10) COLLATE utf8_bin NOT NULL,
  `phone` varchar(14) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(150) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Staff`
--

INSERT INTO `Staff` (`id`, `firstName`, `lastName`, `alias_id`, `post`, `nit`, `dui`, `phone`, `email`) VALUES
(1, 'SALVADOR', ' GUEVARA RAMIREZ', 1, 'Instalador', '0411-281177-103-9', '06243000-9', '+503 7760-2175', 'test@test.com'),
(2, 'MOISES', ' RIVAS GUTIERREZ', 2, 'Pastero', '0611-090975-101-4', 'null', 'null', 'null'),
(3, 'EVINICIO LEOPOLDO', ' GARCIA SANCHEZ', 3, 'Pastero', '0614-210887-106-8', 'null', 'null', 'null'),
(4, 'VICTOR MANUEL', ' LOPEZ GONZALEZ', 4, 'Pintor', '0504-151280-101-0', 'null', 'null', 'null'),
(5, 'NICOLAS', ' LOPEZ RAMIREZ', 5, 'Auxiliar', '0610-061280-104-1', 'null', 'null', 'null'),
(6, 'RAFAEL', ' TEJADA HERNANDEZ', 9, 'Motorista', '0704-241071-101-0', 'null', 'null', 'null'),
(7, 'MARIA ESTELA', ' GUEVARA', 1, 'Instalador', '0411-130773-101-1', 'null', 'null', 'null'),
(8, 'LUZ PATRICIA', ' GUEVARA DE LOPEZ', 4, 'Pintor', '0511-210577-101-1', 'null', 'null', 'null'),
(9, 'JULIA GUADALUPE', ' GARCIA SANCHEZ', 3, 'Pastero', '0614-140896-124-0', 'null', 'null', 'null'),
(10, 'JENNIFER BEATRIZ', ' AVILES GUEVARA', 1, 'Instalador', '0614-111095-187-0', 'null', 'null', 'null'),
(11, 'MOISES ALEXANDER', ' RIVAS REYES', 2, 'Pastero', '0614-110594-167-0', 'null', 'null', 'null'),
(12, 'MARIA LUZ', ' SANCHEZ DE URBINA', 3, 'Pastero', '0802-060975-101-0', 'null', 'null', 'null'),
(13, 'JULIO CESAR', ' ARGUETA', 1, 'Instalador', '0210-280155-003-0', 'null', 'null', 'null'),
(14, 'MARVIN ISABEL', ' PORTILLO', 1, 'Instalador', '0000-000000-000-0', 'null', 'null', 'null'),
(15, 'MARIA BEATRIZ', ' ZELADA AMAYA', 2, 'Pastero', '0618-010180-105-5', 'null', 'null', 'null'),
(16, 'VLADIMIR ERNESTO', ' HERRERA CHAVEZ', 6, 'Pastero', '0614-080687-151-4', 'null', 'null', 'null'),
(17, 'MARIA DE LOS ANGELES', ' ARGUETA', 1, 'Instalador', '0614-030383-130-2', 'null', 'null', 'null'),
(18, 'JOSE AMILCAR', ' GUEVARA', 1, 'Instalador', '0614-070683-124-8', 'null', 'null', 'null'),
(19, 'ANA BEATRIZ', ' MENDEZ OCHOA', 1, 'Instalador', '0614-261297-161-8', 'null', 'null', 'null'),
(20, 'LUIS ENRIQUE', ' RIVAS REYES', 2, 'Pastero', '0608-090197-108-6', 'null', 'null', 'null'),
(21, 'MELVIN GEOVANNY', ' LOPEZ GUEVARA', 4, 'Pintor', '0522-230498-101-7', 'null', 'null', 'null'),
(22, 'CECILIA ARELI', ' ARGUETA JOVEL', 1, 'Instalador', '0815-160192-102-0', 'null', 'null', 'null'),
(23, 'BLANCA ESTELA', ' LOPEZ GONZALEZ', 4, 'Pintor', '0509-040386-105-4', 'null', 'null', 'null'),
(24, 'MARIA MARGARITA', ' GUEVARA GONZALEZ', 1, 'Instalador', '0411-100845-101-0', 'null', 'null', 'null'),
(25, 'NELSON RENE', ' TORRES', 11, 'Instalador', '0619-151085-103-1', 'null', 'null', 'null'),
(26, 'FRANCISCO JAVIER', ' MARTINEZ', 7, 'Pintor', '0000-000000-000-0', 'null', 'null', 'null'),
(27, 'MARVIN MAURICIO', ' MONGE VIDES', 8, 'Pintor', '0000-000000-000-0', 'null', 'null', 'null'),
(28, 'IRMA ARACELY', ' SANDOVAL CHICAS', 1, 'Instalador', '0614-070301-133-9', 'null', 'null', 'null'),
(30, 'HUGO ALEXANDER', ' CERROS BRIZUELA', 11, 'Instalador', '0000-000000-000-0', 'null', 'null', 'null'),
(31, 'FRANKLIN GEOVANNY', ' JIMENEZ REALEGENO', 10, 'Pintor', '0000-000000-000-0', 'null', 'null', 'null'),
(32, 'JUAN JOSE', ' HERNANDEZ ESCOBAR', 12, 'Pintor', '0614-261171-103-8', 'null', 'null', 'null'),
(33, 'JOHANNA ELIZABETH', ' RAMIREZ ALVAREZ', 11, 'Instalador', '0614-260885-141-1', 'null', 'null', 'null'),
(35, 'MIGUEL DE JESUS', ' MEJIA RAMIREZ', 13, 'Pastero', '0302-120383-102-0', 'null', 'null', 'null'),
(37, 'CHRISITAN', ' CHAVEZ', 14, 'Pastero', '0000-000000-000-0', 'null', 'null', 'null'),
(39, 'JAVIER ALEXIS', ' ANGEL ALEMAN', 6, 'Pastero', '0614-040902-138-5', 'null', 'null', 'null'),
(41, 'NURY DANIELA', ' ALFARO ZELADA', 2, 'Pastero', '0607-020999-101-2', 'null', 'null', 'null'),
(43, 'FEDERICO', ' CRUZ CRUZ GARCIA', 15, 'Pintor', '0210-200369-104-1', 'null', 'null', 'null'),
(45, 'ANA MIRIAN', ' ALVAREZ', 11, 'Instalador', '0715-220563-101-1', 'null', 'null', 'null'),
(47, 'CARLOS DANIEL MONICO', ' JIMENEZ', 3, 'Pastero', '0614-100902-178-1', 'null', 'null', 'null'),
(48, 'VICTOR', ' PARKET', 16, 'Instalador', '0000-000000-000-0', 'null', 'null', 'null'),
(49, 'FINDO', ' TEJADA ELIAS', 17, 'Pintor', '0000-000000-000-0', 'null', 'null', 'null'),
(50, 'STEVEN SALVADOR', ' GUEVARA ARGUETA', 1, 'Instalador', '0617-241103-103-6', 'null', 'null', 'null'),
(51, 'FREDY ALEXANDER', ' GUARDADO RENDEROS', 18, 'Pintor', '0000-000000-000-0', 'null', 'null', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `Supplier`
--

CREATE TABLE `Supplier` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `address` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Supplier`
--

INSERT INTO `Supplier` (`id`, `name`, `address`) VALUES
(1, 'LEMUS', 'San Salvador'),
(3, 'Lemus Merliot', NULL),
(6, 'Freund', 'Calle Jupiter, San Salvador, El Salvador');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(90) COLLATE utf8_bin NOT NULL,
  `password` varchar(120) COLLATE utf8_bin NOT NULL,
  `firstName` varchar(90) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(90) COLLATE utf8_bin NOT NULL,
  `role` varchar(45) COLLATE utf8_bin NOT NULL,
  `validate` varchar(5) COLLATE utf8_bin NOT NULL,
  `key_id` varchar(90) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `firstName`, `lastName`, `role`, `validate`, `key_id`) VALUES
(3, 'carlosceren2001@gmail.com', '$2b$10$Y9UypLdnU6cm8mTBf.3L0.msgafaL3xTzvhINVZ4vL/W0mGwBLhZK', 'Carlos Eduardo', 'Cerén Selva', 'admin', 'yes', 'z0gR4cmDALuSabJ5RJ4xLyWCrYULeS'),
(8, 'carlosceren2807@gmail.com', '$2b$10$x/ffy.n.CoOhDsrdFnAOuu/XefVIBNUWfJLBknFvbIXBFOSuWd8um', 'Eduardo', 'Selva', 'user', 'yes', '59w5M8kaBeUvZiahTCq6ETBCYh8jjj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Alias`
--
ALTER TABLE `Alias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`);

--
-- Indexes for table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Contact`
--
ALTER TABLE `Contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_id` (`sales_id`);

--
-- Indexes for table `Label`
--
ALTER TABLE `Label`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PaymentType`
--
ALTER TABLE `PaymentType`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Payroll`
--
ALTER TABLE `Payroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `alias_id` (`alias_id`);

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Purchase`
--
ALTER TABLE `Purchase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paymentType_id` (`paymentType_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `label_id` (`label_id`);

--
-- Indexes for table `Sales`
--
ALTER TABLE `Sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `Staff`
--
ALTER TABLE `Staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alias_id` (`alias_id`);

--
-- Indexes for table `Supplier`
--
ALTER TABLE `Supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Alias`
--
ALTER TABLE `Alias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Clients`
--
ALTER TABLE `Clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Contact`
--
ALTER TABLE `Contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Invoice`
--
ALTER TABLE `Invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `Label`
--
ALTER TABLE `Label`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `PaymentType`
--
ALTER TABLE `PaymentType`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Payroll`
--
ALTER TABLE `Payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=879;

--
-- AUTO_INCREMENT for table `Project`
--
ALTER TABLE `Project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `Purchase`
--
ALTER TABLE `Purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Sales`
--
ALTER TABLE `Sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Staff`
--
ALTER TABLE `Staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `Supplier`
--
ALTER TABLE `Supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Contact`
--
ALTER TABLE `Contact`
  ADD CONSTRAINT `Contact_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier` (`id`),
  ADD CONSTRAINT `Contact_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `Clients` (`id`);

--
-- Constraints for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD CONSTRAINT `Invoice_ibfk_1` FOREIGN KEY (`sales_id`) REFERENCES `Sales` (`id`);

--
-- Constraints for table `Payroll`
--
ALTER TABLE `Payroll`
  ADD CONSTRAINT `Payroll_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`),
  ADD CONSTRAINT `Payroll_ibfk_2` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`id`),
  ADD CONSTRAINT `Payroll_ibfk_3` FOREIGN KEY (`alias_id`) REFERENCES `Alias` (`id`);

--
-- Constraints for table `Purchase`
--
ALTER TABLE `Purchase`
  ADD CONSTRAINT `Purchase_ibfk_1` FOREIGN KEY (`paymentType_id`) REFERENCES `PaymentType` (`id`),
  ADD CONSTRAINT `Purchase_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier` (`id`),
  ADD CONSTRAINT `Purchase_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`),
  ADD CONSTRAINT `Purchase_ibfk_4` FOREIGN KEY (`label_id`) REFERENCES `Label` (`id`);

--
-- Constraints for table `Sales`
--
ALTER TABLE `Sales`
  ADD CONSTRAINT `Sales_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`),
  ADD CONSTRAINT `Sales_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `Clients` (`id`);

--
-- Constraints for table `Staff`
--
ALTER TABLE `Staff`
  ADD CONSTRAINT `Staff_ibfk_1` FOREIGN KEY (`alias_id`) REFERENCES `Alias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
