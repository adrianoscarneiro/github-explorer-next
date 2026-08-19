import { getGithubRepos } from "../services/github";
import { GithubRepos } from "../types/githubTypes";
import RepoCard from "./RepoCard";

export default async function RepoList({ user }: { user: string }) {
  const repos: GithubRepos[] = await getGithubRepos(user);
  const listRepos = repos.map(
    ({
      id,
      name,
      description,
      created_at,
      updated_at,
      watchers_count,
      stargazers_count,
      language,
    }) => {
      return (
        <div key={id} className="sm:w-170 bg-[#3d4757] rounded-xl">
          <RepoCard
            name={name}
            description={description}
            stargazers_count={stargazers_count}
            watchers_count={watchers_count}
            language={language}
            id={id}
            created_at={created_at}
            updated_at={updated_at}
          />
        </div>
      );
    },
  );

  return <div className="flex flex-col gap-2">{listRepos}</div>;
}
