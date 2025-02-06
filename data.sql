--
-- PostgreSQL database dump
--

-- Dumped from database version 15.10
-- Dumped by pg_dump version 15.10

-- Started on 2025-02-05 19:17:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3363 (class 0 OID 17030)
-- Dependencies: 219
-- Data for Name: group_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3361 (class 0 OID 17018)
-- Dependencies: 217
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3366 (class 0 OID 17097)
-- Dependencies: 222
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (1, 2, 3, 'Hola', NULL, '2025-02-05 11:54:50.302-05', '2025-02-05 11:54:50.303-05', '2025-02-05 11:54:50.303-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (2, 3, 2, 'Hola', NULL, '2025-02-05 11:54:53.065-05', '2025-02-05 11:54:53.065-05', '2025-02-05 11:54:53.065-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (3, 3, 2, '', 'https://res.cloudinary.com/dahkch3gs/image/upload/v1738774572/ua454xxgpjbeznfxxzmi.jpg', '2025-02-05 11:55:01.418-05', '2025-02-05 11:55:01.418-05', '2025-02-05 11:55:01.418-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (4, 3, 2, '', 'https://res.cloudinary.com/dahkch3gs/image/upload/v1738774572/j42g6p2brceqh6aga1vu.jpg', '2025-02-05 11:55:01.462-05', '2025-02-05 11:55:01.462-05', '2025-02-05 11:55:01.462-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (5, 2, 3, '😀', NULL, '2025-02-05 13:10:17.834-05', '2025-02-05 13:10:17.835-05', '2025-02-05 13:10:17.835-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (6, 3, 2, '😂', NULL, '2025-02-05 13:10:25.757-05', '2025-02-05 13:10:25.757-05', '2025-02-05 13:10:25.757-05');
INSERT INTO public.messages ("idMessage", "senderId", "receiverId", text, image, created_at, "createdAt", "updatedAt") VALUES (7, 2, 3, '', 'https://res.cloudinary.com/dahkch3gs/image/upload/v1738779112/zpfj6nli2jhrzz6yt9gz.jpg', '2025-02-05 13:10:40.442-05', '2025-02-05 13:10:40.443-05', '2025-02-05 13:10:40.443-05');


--
-- TOC entry 3364 (class 0 OID 17048)
-- Dependencies: 220
-- Data for Name: user_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3359 (class 0 OID 16986)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users ("idUser", username, fullname, password, "profilePic", status, last_seen, "createdAt", "updatedAt") VALUES (2, 'jhudytg@gmail.com', 'Jhudyt Gaona', '$2a$10$aYDON2bB2LfA5sUNEA6r1Olb5JVRoe6Z.PtwmU.4tgpBONVzr0S6S', '', 'offline', '2025-02-05 13:12:36.746871-05', '2025-02-04 08:02:37.762-05', '2025-02-05 13:12:36.741-05');
INSERT INTO public.users ("idUser", username, fullname, password, "profilePic", status, last_seen, "createdAt", "updatedAt") VALUES (3, 'carlos@gmail.com', 'Carlos Alberto', '$2a$10$n3qmLQlYI1FCpxB94ThiYelJJ3QnA4OepBL.pZQ8mQQ67oeks2LwS', '', 'offline', '2025-02-05 13:12:36.75405-05', '2025-02-05 00:43:03.14-05', '2025-02-05 13:12:36.747-05');
INSERT INTO public.users ("idUser", username, fullname, password, "profilePic", status, last_seen, "createdAt", "updatedAt") VALUES (1, 'lickbers@gmail.com', 'Christian Crespo', '$2a$10$cjTTT7QybySJan10F501weGXaBQfmglJJSwxIJPYw4DuYEKjsjIES', '', 'offline', '2025-02-05 00:42:39.799518-05', '2025-02-04 08:01:32.875-05', '2025-02-05 00:42:39.798-05');


