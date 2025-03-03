CREATE TABLE courses (

id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
title TEXT NOT NULL,
description TEXT,
image TEXT,
difficulty TEXT,
completed BOOLEAN DEFAULT FALSE,
created_at TIMESTAMP DEFAULT NOW(),

);

CREATE TABLE lessons (

 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 title TEXT NOT NULL,
 description TEXT,
 category TEXT,
 difficulty TEXT,
 completed BOOLEAN DEFAULT FALSE,
 created_at TIMESTAMP DEFAULT NOW(),

);

CREATE TABLE excercises (

 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
 title TEXT NOT NULL,
 description TEXT,
 type TEXT NOT NULL,
 completed BOOLEAN DEFAULT FALSE,
 content TEXT,
 quizz JSONB,
 created_at TIMESTAMP DEFAULT NOW(),

);

CREATE TABLE course_purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  course_id UUID REFERENCES courses(id),
  stripe_session_id TEXT,
  amount DECIMAL(10,2),
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);