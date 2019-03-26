const TOKEN = "0bc94e5845b232a9e21bec253d29b65d050ccacb";
export const getUser = async username => {
  const result = await fetch(
    `https://api.github.com/users/${username}?access_token=${TOKEN}`
  );
  const json = await result.json();
  return json;
};

export const getRepos = async username => {
  const result = await fetch(
    `https://api.github.com/users/${username}/repos?access_token=${TOKEN}`
  );
  const json = await result.json();
  return json;
};
