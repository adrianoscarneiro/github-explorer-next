import { GithubUser } from "../types/githubTypes";

export async function getGithubUser(username: string): Promise<GithubUser> {
  let response: Response;
  try {
    //Response fetches user data through the github API
    response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        //Github auth
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        //Data caching for 1h
        revalidate: 3600,
      },
    });
  } catch {}

  try {
    return await response.json();
  } catch {}
}
