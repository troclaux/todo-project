CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE public.tasks (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    description TEXT,
    completed BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
