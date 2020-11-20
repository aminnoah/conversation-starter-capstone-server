CREATE TABLE test-users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_name VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (225) NOT NULL
);

CREATE TABLE test-questions (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id INTEGER
        REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    is_favorited BOOLEAN NOT NULL DEFAULT false,
    is_public BOOLEAN NOT NULL DEFAULT true,
    min_number_of_people INTEGER NOT NULL DEFAULT 1,
    ok_for_entertainment BOOLEAN NOT NULL DEFAULT true,
    ok_for_exercise BOOLEAN NOT NULL DEFAULT true,
    ok_for_travel BOOLEAN NOT NULL DEFAULT true,
    ok_for_technology BOOLEAN NOT NULL DEFAULT true,
    ok_for_fashion BOOLEAN NOT NULL DEFAULT true,
    ok_for_holidays BOOLEAN NOT NULL DEFAULT true,
    ok_for_education BOOLEAN NOT NULL DEFAULT true,
    ok_for_work BOOLEAN NOT NULL DEFAULT true,
    ok_for_food BOOLEAN NOT NULL DEFAULT true,
    ok_for_leisure BOOLEAN NOT NULL DEFAULT true
);
