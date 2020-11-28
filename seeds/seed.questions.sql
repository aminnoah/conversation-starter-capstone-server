INSERT INTO questions (id, user_id, question, is_favorited, is_public, min_number_of_people, ok_for_entertainment, ok_for_exercise, ok_for_exercise, ok_for_technology, ok_for_fashion, ok_for_holidays, ok_for_education, ok_for_work, ok_for_food, ok_for_leisure)
SELECT user_id
FROM users
VALUES 
(1, user_id, 'Why was your best boss the best?', false, true, 1, false, false, true, true,	true,	true,	true, true, true, true),
(2, user_id, 'What was the last funny video you saw?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(3, user_id, 'What do you do to get rid of stress', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(4, user_id, 'What is your favorite number and why?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(5, user_id, 'What are you going to do this weekend?', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(6, user_id, 'Who are some of your favorite atheletes?', false, true, 1, true, true, true, true,	true,	true,	true, true, true, true),
(7, user_id, 'What is the worst restaurant you have ever eaten at?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(8, user_id, 'Where would you like to travel next?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(9, user_id, 'What is the best way to travel?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(10, user_id, 'Do you prefer traveling alone or with a group?', false, true, 1, true, false, true, true,	true,	true,	true, true, true, true),
(11, user_id, 'Have you travelled to any different countries?', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(12, user_id, 'Where do you get your travel recommendations from?', false, true, 1, true, false, true, true, true, true, true, true, true, true, true),
(13, user_id, 'What is your favorite piece of tech that you own?', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(14, user_id, 'Which emerging tech are you most excited about?', false, true, 1, true, false, true ,true, true, true, true, true, true, true),
(15, user_id, 'What old trends are coming back these days?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(16, user_id, 'What is your fashion style', false, true, 1, true, false, true, true, true, true, true, true, true, true),
(17, user_id, 'What is your greatest pair of shoes you ever had?', false, true, 1, false, false, true, true, true, true, true, true, true, true),
(18, user_id, 'Who do you think has the biggest impact on fashion trends?', false, true, 1, true, true, true, true, true, true, true, true, true, true)
(19, user_id, 'What personal goals do you have?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(20, user_id, "What are some goals you've already accomplished", false, true, 1, true, true, true, true, true, true, true, true, true, true),
(21, user_id, 'How do you stay motivated?', false, true, 1, true, true, true, true, true, true, true, true, true, true, true),
(22, user_id, 'Do you prefer summer or winter activities?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(23, user_id, 'Do you prefer four seasons or one season year round?', false, true, 1, false, false, true, false, true, true, false, false, false, true),
(24, user_id, 'What is your favorite holiday?', false, true, 1, true, false, true, false, false, true, false, false, true, true),
(25, user_id, 'What do you think of online education?', false, false, false, true, false, false, true, true, false, true),
(26, user_id, 'Are bigger or smaller schools better?', false, true, 1, false, false, false, false, false, false, true, true, false, true),
(27, user_id, 'What is your favorite type of food?', false, true, 1, true, false, true, false, false, true, false, false, true, true),
(28, user_id, 'What do you want your last meal to be?', false, true, 1, true, false, false, false, false, false, false, false, true, true)
(29, user_id, 'If you had a personal mascot, what would it be?', false, true, 1, true, true, false, false, false, false, false, false, false, true),
(30, user_id, 'Time freezes for everyone but you for one day. What do you do?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(31, user_id, 'You have to relive one day of your life forever. Which dat do you choose?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(32, user_id, 'One hour conversation with anyone, present or past. Who would it be?', false, true, 1, true, true, false, true, false, false, false, false, false, true),
(33, user_id, 'Are you usually early or late?', false, true, 1, false, false, true, false, false, true, false, true, false, true),
(34, user_id, 'What skill would you like to master?', false, true, 1, true, true, false, true, true, false, true, true, true, true),
(35, user_id, 'What movie title best describes you?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(36, user_id, 'What kind of art do you enjoy the most?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(37, user_id, "What's the best way to start the day?", false, true, 1, true, true, false, true, false, false, true, false, true, true),
(38, user_id, 'How different is your life from a year ago?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(39, user_id, 'What cities could you see yourself liviing in?', false, true, 1, true, false, true, false, false, false, false, true, true, true),
(40, user_id, 'What is worth spending on more on to get the best?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(41, user_id, 'What are you looking forward to in the coming months?', true, true, true, true, true, true, true, true, true, true),
(42, user_id, 'Why did you decide to do the work you are doing now?', false, true, 1, false, false, false, true, false, false, true, true, true, true),
(43, user_id, 'What could you give a 40 minute presentation on with with 0 preperation?', false, true, 1, true, true, true, true, true, true, true, true, true, true),
(44, user_id, 'What song have you not been able to get out of your head?', false, true, 1, true, false, false, false, false, false, false, false, false, true),
(45, user_id, 'If you could eliminate one thing from your daily life what would it be?', false, true, 1, true, true, true, true, false, false, true, true, true, true),
(46, user_id, 'If you could re-do this week, what would you do differently?', false, true, 1, true, false, true, true, false, false, true, false, true, true),













/* 
Command to 
psql -U dunder_mifflin -d blogful -f ./seeds/seed.blogful_articles.sql*/