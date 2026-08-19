import { GithubRepos } from "../types/githubTypes";
import { formatDate } from "../utils/modules";

export default function RepoCard({ repoProps }: { repoProps: GithubRepos }) {
  const {
    name,
    language,
    description,
    updated_at,
    watchers_count,
    stargazers_count,
  } = repoProps;

  const formatedDate = formatDate(updated_at);

  return (
    <div className="w-full grid grid-cols-3 gap-2 grid-rows-2 px-2 py-4 justify-center sm:grid-col-5 sm:grid-rows-[1fr_2fr] sm:gap-3 ">
      <div className="col-start-1 truncate">
        <dt className="">Project</dt>
        <dd className="">{name}</dd>
      </div>
      <div className="col-start-2 col-end-3 row-start-1 ">
        <dt>Language</dt>
        <dd>{language}</dd>
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-4 text-justify sm:row-end-2 sm:col-end-5">
        <dt>Description</dt>
        <dd>{description}</dd>
      </div>
      <div className="col-start-3 col-end-4 row-start-2 sm:row-start-1 sm:col-start-3">
        <dt>Watchers</dt>
        <dd>{watchers_count}</dd>
      </div>
      <div className="col-start-3 col-end-4 row-start-3 sm:row-start-1 sm:col-start-4">
        <dt>Stars</dt>
        <dd>{stargazers_count}</dd>
      </div>
      <div className="col-start-3 sm:row-start-1 sm:col-start-5">
        <dt>Last update:</dt>
        <dd>{formatedDate}</dd>
      </div>
    </div>
  );
}
