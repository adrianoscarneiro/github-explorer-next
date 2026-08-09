import RepoCard from "@/app/components/RepoCard";
import UserAvatar from "@/app/components/UserAvatar";
import UserCard from "@/app/components/UserCard";
import {
  getGithubUser,
  getGithubRepos,
  getGithubFollowers,
  getGithubFollowing,
} from "@/app/hooks/useGithub";

export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  const [
    {
      name,
      bio,
      followers,
      following,
      avatar_url,
      location,
      public_repos,
      blog,
    },
    repos,
    user_followers,
    user_following,
  ] = await Promise.all([
    getGithubUser(user),
    getGithubRepos(user),
    getGithubFollowers(user),
    getGithubFollowing(user),
  ]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 p-2">
      <div className="flex flex-col place-items-center sm:w-1/4 sm:max-h-screen rounded-xl text-input">
        <UserCard
          userDetails={{
            name,
            bio,
            followers,
            following,
            avatar_url,
            location,
            public_repos,
            blog,
          }}
          username={user}
        />
      </div>

      <div className="flex flex-col pb-2 gap-2 sm:place-items-center  sm:w-1/2 sm:max-h-screen sm:overflow-hidden rounded-xl ">
        <div className="w-full text-center py-2 rounded-t-xl">
          <h1>Repositories</h1>
        </div>
        <div className="flex flex-col gap-2 mx-2 ">
          {repos.map(
            ({
              id,
              name,
              description,
              stargazers_count,
              watchers_count,
              language,
              created_at,
              updated_at,
            }) => {
              return (
                <div key={id} className="sm:w-170 bg-[#3d4757] rounded-xl sm:">
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
          )}
        </div>
      </div>

      <div className="flex sm:flex-col sm:place-items-center outline-1 sm:w-1/4 sm:h-1/2 rounded-xl ">
        <div>
          <h1>Followers</h1>
          <div className="flex sm:flex-row sm:flex-wrap px-2 py-4">
            {user_followers.slice(0, 9).map(({ id, login, avatar_url }) => {
              return (
                <div key={`${id}${login}`} className="sm:w-1/3">
                  <UserAvatar username={login} avatar_url={avatar_url} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1>Following</h1>
          <div className="flex sm:flex-row sm:flex-wrap px-2 py-4">
            {user_following.slice(0, 9).map(({ id, login, avatar_url }) => {
              return (
                <div key={`${id}${login}`} className="sm:w-1/3">
                  <UserAvatar username={login} avatar_url={avatar_url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
