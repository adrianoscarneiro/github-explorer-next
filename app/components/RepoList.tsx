import { getGithubRepos } from "../services/github";
import { GithubRepos } from "../types/githubTypes";
import RepoCard from "./RepoCard";

export default async function RepoList({ user }: { user: string }) {
  const repos: GithubRepos[] = await getGithubRepos(user);
  const listRepos = repos.map((repo) => {
    return (
      <li
        key={repo.id}
        className="hover:bg-zinc-800 p-2 border-b border-secondary-text"
        role="row"
      >
        <RepoCard repoProps={repo} />
      </li>
    );
  });

  return (
    <section className="flex flex-col gap-2 bg-card max-h-[calc(100dvh-2.5rem)] px-2 py-2 rounded-xl">
      <div className="w-full text-center py-2 text-primary-text">
        <h2>Repositories</h2>
      </div>
      <div
        className="lg:grid lg:grid-rows-1 overflow-y-auto no-scrollbar "
        role="table"
      >
        <div className="lg:row-start-1 sticky top-0">
          <ul
            className="px-1 py-2 list-none lg:gap-3 grid grid-cols-3 lg:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] place-items-center text-primary-text bg-foreground rounded-2xl overflow-hidden "
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
          </ul>
        </div>
        <ul className="lg:row-start-2 flex flex-col gap-1">{listRepos}</ul>
      </div>
    </section>
  );
}
