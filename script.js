fetch("https://anik-pas-anime-default-rtdb.firebaseio.com/anime.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
