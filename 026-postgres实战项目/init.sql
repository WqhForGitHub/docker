CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  articles (title, content, published)
VALUES
  ('Docker 入门', '学习 Docker 基础...', true),
  ('PostgreSQL 实战', '数据库实战...', true);