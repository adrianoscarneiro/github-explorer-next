import { GithubUser } from "../types/githubTypes";

class APIError extends Error {
  code: string;
  status?: number;

  constructor(message: string, code: string, status?: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

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
  } catch {
    //Error handling when it does not get a response
    throw new APIError("Network failed", "NETWORK_ERROR");
  }

  //Error handling for different response errors
  if (!response.ok) {
    if (response.status === 404) {
      throw new APIError("User not found", "NOT_FOUND", 404);
    }
    if (response.status === 403) {
      throw new APIError("Rate limit exceeded", "RATE_LIMITED", 403);
    }
    if (response.status === 401) {
      throw new APIError("Invalid Token", "UNAUTHORIZED", 401);
    }
  }

  try {
    return await response.json();
  } catch {
    throw new APIError("Invalid response", "PARSE_ERROR");
  }
}
