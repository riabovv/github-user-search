import { octokit } from "./octokit";

const searchUsers = async (searchParam: string) => {
  let result;

  try {
    const res = await octokit.request("GET /search/users", {
      q: searchParam, // should be set from the input
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    result = res.data.items;
  } catch (err) {
    console.log(err);
  }

  return result;
};

export default searchUsers;
