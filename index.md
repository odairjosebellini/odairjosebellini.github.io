---
layout: default
title: Home
nav_order: 1
---
<div class="container">
  <div class="hero">
    <h1>Meu Blog</h1>
    <p>Artigos, tutoriais e dicas sobre desenvolvimento e tecnologia.</p>
  </div>

  <div class="post-list">
    {% for post in site.posts %}
      <div class="post-item card">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.description }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Leia mais →</a>
      </div>
    {% endfor %}
  </div>
</div>

<style>
.post-list {
  display: grid;
  gap: 24px;
}
.post-item.card {
  padding: 32px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-secondary);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.post-item.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 0 8px 24px rgba(193, 125, 74, 0.15);
}
.post-item h2 {
  margin-bottom: 8px;
}
.post-item h2 a {
  text-decoration: none;
  color: var(--text-primary);
}
.post-item .post-meta {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}
.post-item .read-more {
  text-decoration: none;
  color: var(--accent-primary);
  font-weight: 600;
  margin-top: 16px;
  display: inline-block;
}
</style>