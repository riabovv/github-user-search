import { octokit } from "./octokit";

const getUser = async (userNameToFind: string) => {
  let result;

  try {
    const res = await octokit.request("GET /users/{username}", {
      username: userNameToFind,
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

export default getUser;
