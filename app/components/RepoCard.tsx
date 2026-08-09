import { GithubRepos } from "../types/githubTypes";
import { formatDate } from "../utils/modules";
import Badge from "./Bagde";

export default async function RepoCard({
  name,
  language,
  description,
  updated_at,
  watchers_count,
  stargazers_count,
}: GithubRepos) {
  return (
    <div className="flex flex-col px-4 py-4 sm:flex-row w-full gap-2">
      <div className="flex flex-col sm:w-2/3 sm:h-full sm:justify-evenly gap-2 ">
        <div className="sm:w-full justify-center">
          <div className="flex sm:flex-row gap-2">
            <Badge title="Language" value={language} />
            <Badge title="Project" value={name} />
          </div>
        </div>
        <div className="">
          <Badge title="Description" value={description} />
        </div>
      </div>
      <div className="sm:place-items-center sm:justify-center">
        <div className="flex flex-row w-full gap-2 sm:flex-col">
          <Badge title="Last update" value={formatDate(updated_at)} />
          <Badge title="Watchers" value={watchers_count} />
          <Badge title="Stars" value={stargazers_count} />
        </div>
      </div>
    </div>
  );
}
