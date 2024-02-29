import { octokit } from "./octokit";

const getUser = async (userNameToFind: string) => {
  try {
    const res = await octokit.request("GET /users/{username}", {
      username: userNameToFind,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export default getUser;
