export interface GithubUser {
  name: string;
  bio: string;
  followers: number;
  following: number;
  avatar_url: string;
  location: string;
  public_repos: number;
  blog: string;
}

export interface GithubRepos {
  id: number;
  name_repo: string;
  description: string | null;
  language: string;
  created_at: string;
  updated_at: string;
  watchers_count: number;
  stargazers_count: number;
}
