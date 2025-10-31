(async () => {
  const ticker = document.getElementById("newsticker");

  try {
    const news = await fetch("/snippets/news.txt");
    if (!news.ok) {
      throw new Error("Error fetching news ticker");
      return
    }

    const texts = await news.text();
    const text  = texts.split("\n")[Math.floor(Math.random()*(texts.split("\n").length))];
    console.log(text);
    ticker.innerHTML = `<p class="center">${text}</p>`
  } catch (e) {
    console.error(e)
  }
})();
