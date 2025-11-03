(async () => {
  const ticker = document.getElementById("ticker");

  try {
    const splash = await fetch("/snippets/splash.txt");
    if (!splash.ok) {
      throw new Error("Error fetching splashes");
      return
    }

    const texts = await splash.text();
    const text  = texts.split("\n")[Math.floor(Math.random()*(texts.split("\n").length))];
    console.log(text);
    ticker.innerHTML = `<p class="center">${text}</p>`
  } catch (e) {
    console.error(e)
  }
})();
