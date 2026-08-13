import { getGithubFollowers, getGithubFollowing } from "../services/github";
import { GithubSocialConnection } from "../types/githubTypes";
import FollowCard from "./FollowCard";

export default async function FollowList({
  username,
  followType,
}: {
  username: string;
  followType: "Followers" | "Following";
}) {
  const userFollow: GithubSocialConnection[] =
    followType === "Followers"
      ? await getGithubFollowers(username)
      : await getGithubFollowing(username);

  return (
    <div>
      <h2>{followType}</h2>
      {userFollow.length === 0 ? (
        <p>No {followType.toLowerCase()} yet</p>
      ) : (
        <div className="flex sm:flex-row sm:flex-wrap px-2 py-4">
          {userFollow.slice(0, 9).map(({ id, login, avatar_url }) => {
            return (
              <div key={`${id}`} className="sm:w-1/3">
                <FollowCard username={login} avatar_url={avatar_url} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
