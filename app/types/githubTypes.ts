export interface GithubUser {
  name: string;
  bio: string;
  followers: number;
  following: number;
  avatar_url: string;
  location: string;
  public_repos: number;
}

export interface GithubRepos {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  created_at: string;
  updated_at: string;
  watchers_count: number;
  stargazers_count: number;
  html_url: string;
}

export interface GithubSocialConnection {
  id: number;
  login: string;
  avatar_url: string;
}
