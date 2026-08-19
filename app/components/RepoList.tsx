import { getGithubRepos } from "../services/github";
import { GithubRepos } from "../types/githubTypes";
import RepoCard from "./RepoCard";

export default async function RepoList({ user }: { user: string }) {
  const repos: GithubRepos[] = await getGithubRepos(user);
  const listRepos = repos.map((repo) => {
    return (
      <div key={repo.id} className="sm:w-170 bg-[#3d4757] rounded-xl">
        <RepoCard repoProps={repo} />
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{listRepos}</div>;
}
