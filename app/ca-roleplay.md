---
layout: default
title: CA Roleplay
---

# CA Roleplay

Welcome to the CA Roleplay. Have fun!

<div id="posts-container">
  <!-- Posts from the "CA Roleplay" thread will be loaded here -->
</div>

<h2>Post a new message</h2>
<form id="ca-roleplay-form">
  <textarea name="content" id="post-content" rows="4" cols="50" placeholder="Enter your message..."></textarea><br>
  <button type="submit">Submit</button>
</form>

<!-- LifeViewer container (hidden initially) -->
<div class="viewer" id="lifeviewer-container" style="display:none;">
  <div class="lv-buttons">
    <button onclick="document.getElementById('lv-text').innerHTML=''">Clear</button>
    <button onclick="updateMe(this)">Show in Viewer</button>
  </div>
  <textarea class="lv-rle" id="lv-text"></textarea><br/>
  <canvas height="400" width="600"></canvas>
</div>

<script src="{{ '/lv-plugin.js' | relative_url }}"></script>
<script>
  const threadName = "CA Roleplay";
  const postsContainer = document.getElementById('posts-container');

  // Fetch posts from your middleman API
  async function loadPosts() {
    const response = await fetch(`/api/getPosts?thread=${encodeURIComponent(threadName)}`);
    const posts = await response.json();
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      const postEl = document.createElement('div');
      postEl.className = 'post';
      // Wrap code-formatted text in <code>
      postEl.innerHTML = post.content.replace(/`([^`]+)`/g, '<code>$1</code>');
      postsContainer.appendChild(postEl);
    });
    attachCodeClick();
  }

  // Attach LifeViewer to all code blocks
  function attachCodeClick() {
    document.querySelectorAll('#posts-container code').forEach(code => {
      code.style.cursor = 'pointer';
      code.onclick = () => {
        const lvContainer = document.getElementById('lifeviewer-container');
        lvContainer.style.display = 'block';
        document.getElementById('lv-text').value = code.textContent;
      };
    });
  }

  // Handle form submission
  document.getElementById('ca-roleplay-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('post-content').value;
    if (!content.trim()) return;
    await fetch('/api/postMessage', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({thread: threadName, content})
    });
    document.getElementById('post-content').value = '';
    loadPosts(); // reload after submission
  });

  // Initial load
  loadPosts();
</script>
