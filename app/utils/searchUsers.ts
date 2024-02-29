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

    result = {
      items: res.data.items,
      totalAmount: res.data.total_count,
    };
  } catch (err) {
    console.log(err);
  }

  return result;
};

export default searchUsers;
