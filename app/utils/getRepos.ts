import { octokit } from "./octokit";

const getRepos = async (username: string) => {
  let result;

  try {
    const res = await octokit.request("GET /users/{username}/repos", {
      username,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    result = res.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

export default getRepos;
