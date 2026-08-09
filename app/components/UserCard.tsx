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
    <div className="flex flex-col secondary px-2 py-4 w-full sm:flex-col sm:gap-2 rounded-xl sm:place-items-center sm:w-110 sm:max-w-150 sm:max-h-screen outline-1 outline-white">
      {/* Main card section*/}
      <section className="flex flex-col gap-4 justify-center place-items-center rounded-xl ">
        {/* Picture section*/}
        <Image
          width={100}
          height={100}
          src={avatar_url}
          className="rounded-full outline-6"
          alt={`This is ${name}'s avatar`}
        />
        <div className="">
          <p>{name ? name : username}</p>
        </div>
      </section>
      <section className="h-full flex flex-col gap-2 place-items-center sm:max-h-full sm:flex-wrap text-center rounded-xl">
        {/* Card details section*/}
        <div className="flex flex-row color-black w-80 gap-6 justify-center max-w-full sm:w-auto rounded-xl">
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
        <div className="flex flex-row w-100 justify-evenly sm:gap-4 truncate sm:flex-col sm:w-50">
          {location && (
            <div className="">
              <p>Location</p>
              <p>{location}</p>
            </div>
          )}
          <div className="truncate">
            {blog && (
              <div>
                <p>Personal Page</p>
                <a href={blog}>
                  <p>{blog}</p>
                </a>
              </div>
            )}
          </div>
        </div>
        {bio && (
          <div className="w-80 sm:w-full">
            <p>Bio</p>
            <p>{bio}</p>
          </div>
        )}
      </section>
    </div>
  );
}
