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
    html_url,
  } = repoProps;

  const formattedDate = formatDate(updated_at);

  return (
    <div className="w-full grid grid-cols-3 px-2 py-2 place-items-center text-secondary-text lg:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] lg:grid-rows-1 lg:gap-1 lg:text-center truncate">
      <li className="max-w-full sm:col-start-1 truncate" role="cell">
        <a href={html_url}>{name}</a>
      </li>
      <li
        className="max-w-full hidden truncate overflow-hidden sm:block sm:col-start-2"
        role="cell"
      >
        {description}
      </li>
      <li className="sm:col-start-3" role="cell">
        {language ?? "Not informed"}
      </li>
      <li className="hidden truncate sm:block sm:col-start-4" role="cell">
        {watchers_count}
      </li>
      <li className="hidden truncate sm:block sm:col-start-5" role="cell">
        {stargazers_count}
      </li>
      <li className="sm:col-start-6" role="cell">
        {formattedDate}
      </li>
    </div>
  );
}
