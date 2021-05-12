-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 12 2021 г., 19:20
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test-tatlgroup`
--

-- --------------------------------------------------------

--
-- Структура таблицы `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `classes`
--

INSERT INTO `classes` (`id`, `name`) VALUES
(1, '1 класс'),
(2, '2 класс'),
(3, '3 класс'),
(4, '4 класс');

-- --------------------------------------------------------

--
-- Структура таблицы `columns`
--

CREATE TABLE `columns` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `columns`
--

INSERT INTO `columns` (`id`, `title`, `class_id`) VALUES
(1, '10/05', 1),
(2, '11/05', 1),
(3, '12/05', 1),
(4, '13/05', 1),
(5, '14/05', 1),
(6, '15/05', 1),
(7, '16/05', 1),
(8, '17/05', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `schoolboy_id` int(11) NOT NULL,
  `column_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `rate`
--

INSERT INTO `rate` (`id`, `title`, `schoolboy_id`, `column_id`, `class_id`) VALUES
(92, 'H', 26, 2, 1),
(102, 'H', 1, 7, 1),
(104, 'H', 1, 6, 1),
(119, 'H', 26, 8, 1),
(121, 'H', 19, 7, 1),
(136, 'H', 21, 3, 1),
(139, 'H', 12, 6, 1),
(140, 'H', 19, 5, 1),
(142, 'H', 9, 6, 1),
(147, 'H', 20, 2, 1),
(148, 'H', 21, 5, 1),
(157, 'H', 30, 2, 1),
(158, 'H', 30, 5, 1),
(159, 'H', 30, 8, 1),
(160, 'H', 27, 2, 1),
(170, 'H', 11, 8, 1),
(172, 'H', 7, 6, 1),
(173, 'H', 8, 7, 1),
(184, 'H', 28, 2, 1),
(186, 'H', 29, 7, 1),
(188, 'H', 25, 6, 1),
(189, 'H', 24, 7, 1),
(190, 'H', 24, 1, 1),
(192, 'H', 24, 5, 1),
(200, 'H', 5, 3, 1),
(201, 'H', 1, 2, 1),
(203, 'H', 8, 1, 1),
(204, 'H', 5, 1, 1),
(205, 'H', 7, 2, 1),
(208, 'H', 1, 5, 1),
(219, 'H', 11, 1, 1),
(220, 'H', 11, 2, 1),
(221, 'H', 11, 4, 1),
(222, 'H', 11, 5, 1),
(223, 'H', 11, 3, 1),
(224, 'H', 11, 7, 1),
(226, 'H', 11, 6, 1),
(228, 'H', 12, 3, 1),
(229, 'H', 12, 2, 1),
(230, 'H', 12, 1, 1),
(231, 'H', 12, 4, 1),
(232, 'H', 12, 5, 1),
(233, 'H', 12, 7, 1),
(234, 'H', 12, 8, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `schoolboys`
--

CREATE TABLE `schoolboys` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `secondname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `schoolboys`
--

INSERT INTO `schoolboys` (`id`, `name`, `secondname`, `lastname`, `class_id`) VALUES
(1, 'Вася \r\n', 'Васянко', 'Пупкин', 1),
(5, 'Вано', 'Вино', 'Пивчанский', 1),
(7, 'Ваня', 'Иванович', 'Иваненко', 1),
(8, 'Анджела', 'Крофт', 'Джолли', 1),
(9, 'Сильвестер', 'Рембович', 'Сталоний', 1),
(11, 'Том', 'Григорьевич', 'Круз', 1),
(12, 'Джейсон', '\"Крутые цитаты\"', 'Стетхем', 1),
(19, 'Клавдия ', '\"едет\"', 'Шифер', 1),
(20, 'Брюс', '\"Залез\"', 'Уллис', 1),
(21, 'Орландо', '\"Torrent\"', 'Блум', 1),
(22, 'Семи', '\"Эльдорадо\"', 'ДЖексон', 1),
(23, 'Райян', 'Го', 'Гослинг', 1),
(24, 'Макколей', '\"Все дома\"', 'Каллкин', 1),
(25, 'Арнольд', '\"Алюминевый\"', 'Шварцнегер', 1),
(26, 'Милла', '\"милашка\"', 'Йовович', 1),
(27, 'Джекки', '\"Сломаю мебель\"', 'Чан', 1),
(28, 'Уил', '', 'Спит', 1),
(29, 'Джет', '\"Пак\"', 'Ли', 1),
(30, 'Скарлет', '', 'Йохохохонсон', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `columns`
--
ALTER TABLE `columns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`);

--
-- Индексы таблицы `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `column_id` (`column_id`),
  ADD KEY `schoolboy_id_2` (`schoolboy_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Индексы таблицы `schoolboys`
--
ALTER TABLE `schoolboys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`) USING BTREE;

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `columns`
--
ALTER TABLE `columns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;

--
-- AUTO_INCREMENT для таблицы `schoolboys`
--
ALTER TABLE `schoolboys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `columns`
--
ALTER TABLE `columns`
  ADD CONSTRAINT `columns_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);

--
-- Ограничения внешнего ключа таблицы `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`column_id`) REFERENCES `columns` (`id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`schoolboy_id`) REFERENCES `schoolboys` (`id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `rate_ibfk_3` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `schoolboys`
--
ALTER TABLE `schoolboys`
  ADD CONSTRAINT `schoolboys_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
