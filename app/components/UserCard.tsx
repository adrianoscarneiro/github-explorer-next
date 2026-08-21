import { GithubUser } from "../types/githubTypes";
import Badge from "./Badge";
import Image from "next/image";

export default function UserCard({
  userDetails,
  username,
}: {
  userDetails: GithubUser;
  username: string;
}) {
  const {
    name,
    bio,
    followers,
    following,
    avatar_url,
    location,
    public_repos,
  } = userDetails;
  return (
    <section className="flex flex-col gap-4 py-4 px-4 bg-card">
      <div className="flex flex-col gap-2 place-items-center">
        <Image
          width={100}
          height={100}
          src={avatar_url}
          className="rounded-full outline-6 outline-secondary-text"
          alt={`This is ${name}'s avatar`}
        />
        <p className="text-primary-text">
          <strong>{name ? name : username}</strong>
        </p>
      </div>
      <div className="flex flex-row w-full px-4 text-secondary-text">
        <Badge title="Followers" value={followers} />
        <Badge title="Following" value={following} />
        <Badge title="Public Repos" value={public_repos} />
      </div>
      <div className="flex flex-col text-secondary-text">
        {location && (
          <div className="truncate">
            <Badge title="Location" value={location} />
          </div>
        )}
      </div>
      {bio && (
        <div className="text-secondary-text text-justify">
          <Badge title={"Bio"} value={bio} />
        </div>
      )}
    </section>
  );
}
