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
  const url = 'https://api.github.com/repos/T6970/t6970.github.io/discussions/2/comments'; // GitHub API
  try {
    const res = await fetch(url, {headers: {Accept: 'application/vnd.github.v3+json'}});
    const data = await res.json();
    const container = document.getElementById('latest-discussions');
    container.innerHTML = '<ul>' + data.slice(0,10).map(d => 
      `<li><a href="${d.html_url}">${d.user.login}: ${d.body.substring(0,50)}...</a></li>`
    ).join('') + '</ul>';
  } catch(e) {
    document.getElementById('latest-discussions').innerText = 'Unable to load discussions.';
  }
}
fetchDiscussions();
</script>
