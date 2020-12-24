INSERT INTO users (id, user_name, password)
VALUES
(1, 'demo_user', '$2a$08$kgKazNskcGzd462hMmS2r.CCutWp//pSYJX3buoGY9ANX6PL656Km');



INSERT INTO convos (id, user_id, question, is_favorited, is_public, min_number_of_people, ok_for_entertainment, ok_for_exercise, ok_for_travel, ok_for_technology, ok_for_fashion, ok_for_holidays, ok_for_education, ok_for_work, ok_for_food, ok_for_leisure)
VALUES 
(1, 1, 'Why was your best boss the best?', false, true, 1, false, false, true, true,	true,	true,	true, true, true, true),
(2, 1, 'What was the last funny video you saw?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(3, 1, 'What do you do to get rid of stress', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(4, 1, 'What is your favorite number and why?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(5, 1, 'What are you going to do this weekend?', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(6, 1, 'Who are some of your favorite atheletes?', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(7, 1, 'What is the worst restaurant you have ever eaten at?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(8, 1, 'Where would you like to travel next?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(9, 1, 'What is the best way to travel?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(10, 1, 'Do you prefer traveling alone or with a group?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(11, 1, 'Have you travelled to any different countries?', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(12, 1, 'Where do you get your travel recommendations from?', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(13, 1, 'What is your favorite piece of tech that you own?', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(14, 1, 'Which emerging tech are you most excited about?', false, true, 1, true, false, true ,true, true, true, true, true, true, true),
(15, 1, 'What old trends are coming back these days?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(16, 1, 'What is your fashion style', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(17, 1, 'What is your greatest pair of shoes you ever had?', false, true, 1, false, false, true, true, true, true, true, true, true, true),
(18, 1, 'Who do you think has the biggest impact on fashion trends?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(19, 1, 'What personal goals do you have?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(20, 1, 'What are some goals you have already accomplished', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(21, 1, 'How do you stay motivated?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(22, 1, 'Do you prefer summer or winter activities?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(23, 1, 'Do you prefer four seasons or one season year round?', false, true, 1, false, false, true, false, true, true, false, false, false, true),
(24, 1, 'What is your favorite holiday?', false, true, 1, true, false, true, false, false, true, false, false, true, true),
(25, 1, 'What do you think of online education?', false, true, 1, true, false, false, true, true, false, true, true, true, true),
(26, 1, 'Are bigger or smaller schools better?', false, true, 1, false, false, false, false, false, false, true, true, false, true),
(27, 1, 'What is your favorite type of food?', false, true, 1, true, false, true, false, false, true, false, false, true, true),
(28, 1, 'What do you want your last meal to be?', false, true, 1, true, false, false, false, false, false, false, false, true, true),
(29, 1, 'If you had a personal mascot, what would it be?', false, true, 1, true, true, false, false, false, false, false, false, false, true),
(30, 1, 'Time freezes for everyone but you for one day. What do you do?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(31, 1, 'You have to relive one day of your life forever. Which dat do you choose?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(32, 1, 'One hour conversation with anyone, present or past. Who would it be?', false, true, 1, true, true, false, true, false, false, false, false, false, true),
(33, 1, 'Are you usually early or late?', false, true, 1, false, false, true, false, false, true, false, true, false, true),
(34, 1, 'What skill would you like to master?', false, true, 1, true, true, false, true, true, false, true, true, true, true),
(35, 1, 'What movie title best describes you?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(36, 1, 'What kind of art do you enjoy the most?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(37, 1, 'What is the best way to start the day?', false, true, 1, true, true, false, true, false, false, true, false, true, true),
(38, 1, 'How different is your life from a year ago?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(39, 1, 'What cities could you see yourself liviing in?', false, true, 1, true, false, true, false, false, false, false, true, true, true),
(40, 1, 'What is worth spending on more on to get the best?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(41, 1, 'What are you looking forward to in the coming months?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(42, 1, 'Why did you decide to do the work you are doing now?', false, true, 1, false, false, false, true, false, false, true, true, true, true),
(43, 1, 'What could you give a 40 minute presentation on with with 0 preperation?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(44, 1, 'What song have you not been able to get out of your head?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(45, 1, 'If you could eliminate one thing from your daily life what would it be?', false, true, 1, true, true, true, true, false, false, true, true, true, true),
(46, 1, 'If you could re-do this week, what would you do differently?', false, true, 1, true, false, true, true, false, false, true, false, true, true);













-- /* 
-- Command to 
-- psql -U dunder_mifflin -d blogful -f ./seeds/seed.blogful_articles.sql*/