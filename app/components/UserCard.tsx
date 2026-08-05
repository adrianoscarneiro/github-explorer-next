import { GithubUser } from "../types/githubTypes";
import Badge from "./Bagde";
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
    blog,
  } = userDetails;
  return (
    <main className="flex flex-col w-full py-4 px-2 sm:flex-row sm:gap-2 rounded-xl sm:justify-center bg-[#1E293B] sm:w-140 sm:max-w-150 sm:max-h-80">
      {/* Main card section*/}
      <section className="flex flex-col gap-4 justify-center place-items-center sm:min-h-full rounded-xl sm:w-1/3">
        {/* Picture section*/}
        <Image
          width={130}
          height={150}
          src={avatar_url}
          className="rounded-full outline-6"
          alt={`This is ${name}'s avatar`}
        />
        <h2>{name ? name : username}</h2>
      </section>
      <section className="h-full py-4 flex flex-col gap-2 place-items-center sm:w-2/3 sm:max-h-full sm:flex-wrap text-center rounded-xl">
        {/* Card details section*/}
        <div className="flex flex-row w-80 gap-2 justify-evenly max-w-full ">
          <div>
            <Badge title="Followers" value={followers} />
          </div>
          <div>
            <Badge title="Following" value={following} />
          </div>
          <div>
            <Badge title="Public Repos" value={public_repos} />
          </div>
        </div>
        <div className="flex flex-row w-80 justify-evenly">
          {location && (
            <div className="">
              <Badge title="Location" value={location} />
            </div>
          )}
          <div className="">
            {blog && (
              <a href={blog}>
                <Badge title="Personal Page" value={blog} />
              </a>
            )}
          </div>
        </div>
        {bio && (
          <div className="px-4 w-80">
            <Badge title="Bio" value={bio} />
          </div>
        )}
      </section>
    </main>
  );
}
