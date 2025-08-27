const axios = require("axios");

module.exports.getGiantBombGameSearch = async (name, page = 1) => {
  const giantBombURL = `http://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query="${name}"&resources=game`;
  const result = await axios({
    method: "GET",
    url: giantBombURL,
  });
  // console.log(res.data);
  if (result.data.error === "ok") console.log("success");
  searchResults = result.data.results;

  return searchResults;
};

module.exports.getGiantBombGame = async (gameId) => {
  const giantBombURL = `http://www.giantbomb.com/api/game/${gameId}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json`;
  const result = await axios({
    method: "GET",
    url: giantBombURL,
  });
  if (!result || !result.data) {
    return undefined;
  }
  if (result.data.error === "Object Not Found") return undefined;

  let game = result.data.results;
  return game;
};
