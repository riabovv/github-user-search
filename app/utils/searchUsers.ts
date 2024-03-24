import { octokit } from "./octokit";

const searchUsers = async (searchParam: string, page: number) => {
  let result;
  const PER_PAGE = 42;

  try {
    const res = await octokit.request("GET /search/users", {
      q: searchParam, // should be set from the input,
      page,
      per_page: PER_PAGE,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    result = {
      items: res.data.items,
      totalAmount: res.data.total_count,
      perPage: PER_PAGE,
    };
  } catch (err) {
    throw Error((err as Error).message);
  }

  return result;
};

export default searchUsers;
