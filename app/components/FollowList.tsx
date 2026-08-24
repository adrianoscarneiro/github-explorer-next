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

  const followList = userFollow.slice(0, 6).map(({ id, login, avatar_url }) => {
    return (
      <li key={id}>
        <FollowCard username={login} avatar_url={avatar_url} />
      </li>
    );
  });

  return (
    <section className="flex flex-col gap-4 text-center">
      <h2 className="text-primary-text">{followType}</h2>
      {userFollow.length === 0 ? (
        <p>No {followType.toLowerCase()} yet</p>
      ) : (
        <ul className="grid grid-cols-3 gap-2 place-items-center">
          {followList}
        </ul>
      )}
    </section>
  );
}
