const axios = require("axios");

module.exports.getGiantBombGameSearch = async (name, page = 1) => {
  const giantBombURL = `http://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query="${name}"&resources=game`;
  const result = await axios({
    method: "GET",
    url: giantBombURL,
  });
  // console.log(res.data);

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

module.exports.getGiantBombGames = async (gameIds) => {
  let stringOfIds = gameIds.join("|");
  const giantBombURL = `http://www.giantbomb.com/api/games/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&filter=id:${stringOfIds}`;
  const result = await axios({
    method: "GET",
    url: giantBombURL,
  });
  if (!result || !result.data) {
    return undefined;
  }
  if (result.data.error === "Object Not Found") return undefined;

  let games = result.data.results;

  return games;
};

module.exports.guidsToIds = (guids) => {
  const ids = [];
  guids.forEach((guid) => {
    ids.push(guid.split("-")[1]);
  });
  return ids;
};

module.exports.linkRelationshipsToGames = (relationships, games) => {
  relationships.forEach((rel) => {
    const game = games.find((game) => game.guid == rel.game);
    rel.gameInfo = game;
    console.log("game!!" + game.name);
  });
  return relationships;
};
