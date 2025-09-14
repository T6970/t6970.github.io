---
layout: default
title: Home
---
# Blog

<!-- This section can include the 10 most recent discussion threads using JavaScript or static links -->

<div id="latest-discussions">
  <p>Loading latest discussions...</p>
</div>

<script>
async function fetchDiscussions() {
  const url = 'https://api.github.com/repos/T6970/t6970.github.io/discussions/2/comments';
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    const data = await res.json();
    const container = document.getElementById('latest-discussions');

    // Create cards for each comment
    container.innerHTML = data.slice(0, 10).map(d => `
      <div class="discussion-card">
        <div class="discussion-header">
          <strong>${d.user.login}</strong> 
          <span class="discussion-date">${new Date(d.created_at).toLocaleString()}</span>
        </div>
        <div class="discussion-body">
          ${d.body_html || d.body}
        </div>
        <div class="discussion-footer">
          <a href="${d.html_url}" target="_blank">View on GitHub ↗</a>
        </div>
      </div>
    `).join('');
  } catch(e) {
    document.getElementById('latest-discussions').innerText = 'Unable to load discussions.';
  }
}
fetchDiscussions();
</script>
