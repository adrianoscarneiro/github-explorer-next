import FollowList from "@/app/components/FollowList";
import RepoList from "@/app/components/RepoList";
import UserCard from "@/app/components/UserCard";
import { getGithubUser } from "@/app/services/github";
import { Suspense } from "react";

export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  const {
    name,
    bio,
    followers,
    following,
    avatar_url,
    location,
    public_repos,
    blog,
  } = await getGithubUser(user);

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
          <h2>Repositories</h2>
        </div>
        <div className="flex flex-col gap-2 mx-2 ">
          <Suspense fallback={"Loading..."}>
            <RepoList user={user} />
          </Suspense>
        </div>
      </div>

      <div className="flex sm:flex-col sm:gap-6 sm:place-items-center sm:w-1/4 sm:h-1/2 rounded-xl ">
        <div className="outline-1 sm:w-full px-2 py-4 rounded-xl">
          <Suspense fallback={"Loading..."}>
            <FollowList username={user} followType="Followers" />
          </Suspense>
        </div>
        <div className="outline-1 sm:w-full px-2 py-4 rounded-xl">
          <Suspense fallback={"Loading..."}>
            <FollowList username={user} followType="Following" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
