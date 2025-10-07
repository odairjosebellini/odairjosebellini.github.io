---
layout: default
title: Blog
nav_order: 4
show_in_nav: true
---
<div class="container">
  <div class="hero">
    <h1>Blog</h1>
    <p>Artigos, tutoriais e dicas sobre desenvolvimento e tecnologia.</p>
  </div>

  <div class="post-list">
    {% for post in site.posts %}
      <div class="post-item">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.description }}</p>
      </div>
    {% endfor %}
  </div>
</div>