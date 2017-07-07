-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 01 日 09:49
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `h51611`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(20) collate utf8_unicode_ci NOT NULL,
  `passwordRel` varchar(50) collate utf8_unicode_ci NOT NULL,
  `phone` varchar(50) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- 导出表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `passwordRel`, `phone`) VALUES
(1, '123', '123456zy', '', ''),
(2, '12323', '123', '', ''),
(3, '12356', '123456zy', '', '18380583909'),
(4, 'rtyrt', 'eryr', '', ''),
(5, '13', '123eee', '', '18380583909'),
(6, '', '', '', ''),
(7, '111', '111qqq', '', '18380583909'),
(8, 'test', '123456zy', '', '18380583909'),
(9, '1234', '34uiu', '', 'yuiyui'),
(10, '1235', '123456z', '', '18380583909'),
(11, '789', '123456z', '', '18380583909'),
(12, '25', '123456z', '', '18380583909'),
(13, '55', '123456z', '', '18380583909');
