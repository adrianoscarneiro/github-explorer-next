import { getGithubRepos } from "../services/github";
import { GithubRepos } from "../types/githubTypes";
import RepoCard from "./RepoCard";

export default async function RepoList({ user }: { user: string }) {
  const repos: GithubRepos[] = await getGithubRepos(user);
  const listRepos = repos.map((repo) => {
    return (
      <li key={repo.id} role="row">
        <RepoCard repoProps={repo} />
      </li>
    );
  });

  return (
    <section className="flex flex-col gap-2 bg-card">
      <div className="w-full text-center py-2 text-primary-text">
        <h2>Repositories</h2>
      </div>
      <div className="lg:grid lg:grid-rows-1" role="table">
        <div className="lg:row-start-1">
          <div
            className="px-2 py-2 bg-card lg:gap-3 grid grid-cols-3 lg:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] place-items-center text-primary-text "
            role="row"
          >
            <li role="columnheader">Project</li>
            <li className="hidden sm:block" role="columnheader">
              Description
            </li>
            <li role="columnheader">Language</li>
            <li className="hidden sm:block" role="columnheader">
              Watchers
            </li>
            <li className="hidden sm:block" role="columnheader">
              Stars
            </li>
            <li role="columnheader">Last update</li>
          </div>
        </div>
        <ul className="lg:row-start-2 flex flex-col gap-1">{listRepos}</ul>
      </div>
    </section>
  );
}
