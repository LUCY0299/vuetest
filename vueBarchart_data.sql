-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        8.0.37-0ubuntu0.20.04.3 - (Ubuntu)
-- 伺服器作業系統:                      Linux
-- HeidiSQL 版本:                  12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 傾印 vueBarchart_data 的資料庫結構
CREATE DATABASE IF NOT EXISTS `vueBarchart_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vueBarchart_data`;

-- 傾印  資料表 vueBarchart_data.HotelInfo 結構
CREATE TABLE IF NOT EXISTS `HotelInfo` (
  `seq` int NOT NULL,
  `hotel_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `room_count` int DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在傾印表格  vueBarchart_data.HotelInfo 的資料：~30 rows (近似值)
INSERT INTO `HotelInfo` (`seq`, `hotel_name`, `city`, `room_count`) VALUES
	(1, '西子灣大飯店愛河館', '高雄市', 146),
	(2, '君鴻國際酒店', '高雄市', 592),
	(3, '東鉅商務旅館', '高雄市', 63),
	(4, '西子灣大飯店站前館', '高雄市', 65),
	(5, '寒軒國際大飯店', '高雄市', 311),
	(6, '高雄信宗大飯店', '高雄市', 81),
	(7, '宮賞藝術大飯店', '高雄市', 56),
	(8, '華園大飯店', '高雄市', 274),
	(9, '高雄商旅', '高雄市', 167),
	(10, '希望殿堂精緻商旅', '高雄市', 87),
	(11, '文賓大飯店', '高雄市', 56),
	(12, '龍翔飯店', '高雄市', 124),
	(13, '高雄福華大飯店', '高雄市', 271),
	(14, '雲端精緻旅館', '高雄市', 58),
	(15, '漢來大飯店', '高雄市', 436),
	(16, '中正大飯店', '高雄市', 172),
	(17, '義大皇家酒店', '高雄市', 656),
	(18, '翰品酒店 高雄', '高雄市', 152),
	(19, '高雄國賓大飯店', '高雄市', 457),
	(20, '康橋大飯店-六合夜市七賢館', '高雄市', 195),
	(21, '福容大飯店 高雄', '高雄市', 250),
	(22, '喜悅大飯店', '高雄市', 107),
	(23, '麗尊大酒店', '高雄市', 198),
	(24, '帝豪飯店愛河館', '高雄市', 70),
	(25, '香堤時尚旅館', '高雄市', 67),
	(26, '御宿商旅明華館', '高雄市', 132),
	(27, '梅花大飯店', '高雄市', 56),
	(28, '京城大飯店', '高雄市', 142),
	(29, '上豪商務旅館', '高雄市', 55),
	(30, '香堤精品旅館', '高雄市', 32);

-- 傾印  資料表 vueBarchart_data.Parking 結構
CREATE TABLE IF NOT EXISTS `Parking` (
  `seq` int NOT NULL,
  `district` varchar(255) DEFAULT NULL,
  `parking_spot` varchar(255) DEFAULT NULL,
  `available_spots` int DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在傾印表格  vueBarchart_data.Parking 的資料：~30 rows (近似值)
INSERT INTO `Parking` (`seq`, `district`, `parking_spot`, `available_spots`, `address`) VALUES
	(1, '大社區', '老人文康活動中心', 10, '金龍路65號'),
	(2, '岡山區', '岡山國中', 84, '岡燕路238號'),
	(3, '岡山區', '嘉興國中', 16, '嘉興里信中街486號'),
	(4, '岡山區', '前峰國中', 50, '樹人路1號'),
	(5, '岡山區', '岡山國小', 20, '柳橋東路36號'),
	(6, '岡山區', '前峰國小', 50, '育英路35號'),
	(7, '岡山區', '後紅國小', 30, '岡燕路2巷88號'),
	(8, '岡山區', '竹圍國小', 30, '大仁北路1號'),
	(9, '岡山區', '壽天國小', 40, '公園東路55號'),
	(10, '路竹區', '蔡文國小', 60, '國昌路548號'),
	(11, '路竹區', '一甲國中', 50, '一甲路 111 號'),
	(12, '路竹區', '路竹高中', 30, '中華路292號'),
	(13, '路竹區', '路竹國小', 30, '中山路712巷16號'),
	(14, '路竹區', '大社國小', 20, '大社路243號'),
	(15, '路竹區', '竹滬國小', 30, '竹滬里成功路2號'),
	(16, '路竹區', '北嶺國小', 30, '民治路85號'),
	(17, '路竹區', '一甲國小', 20, '大智路43號'),
	(18, '彌陀區', '彌陀國小', 40, '中正路213號'),
	(19, '茄萣區', '茄萣國中', 30, '濱海路四段29號'),
	(20, '茄萣區', '興達國小', 40, '民治路2號'),
	(21, '茄萣區', '茄萣國小', 60, '茄萣路二段307號'),
	(22, '茄萣區', '成功國小', 40, '成功路1號'),
	(23, '茄萣區', '砂崙國小', 17, '萬福里文化路81號'),
	(24, '湖內區', '大湖國小', 27, '民權路2號'),
	(25, '湖內區', '明宗國小', 20, '保生路103號'),
	(26, '田寮區', '田寮國中', 15, '南安里崗安路48號'),
	(27, '田寮區', '高雄市立圖書館田寮分館', 15, '南安里崗安路71-1號'),
	(28, '田寮區', '高雄市田寮區公所', 80, '南安里崗安路71號'),
	(29, '田寮區', '崇德國小', 30, '崇德路101號'),
	(30, '田寮區', '新興國小', 18, '大新路2號');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
