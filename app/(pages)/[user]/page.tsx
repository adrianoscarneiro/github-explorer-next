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
    <div className="grid grid-cols-1 grid-rows-[0.3fr_0.3fr_1fr] bg-background gap-6 lg:grid-rows-1 lg:grid-cols-[0.7fr_1.5fr_0.8fr]">
      <div className="">
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

      <div className="row-start-3 lg:col-start-2 lg:row-start-1 max-h-screen">
        <div className="flex flex-col gap-2">
          <Suspense fallback={"Loading..."}>
            <RepoList user={user} />
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col gap-2 max-h-screen row-start-2 lg:row-start-1 lg:col-start-3 lg:gap-2 lg:place-items-center lg:h-1/2">
        <div className="w-full py-4 bg-card">
          <Suspense fallback={"Loading..."}>
            <FollowList username={user} followType="Followers" />
          </Suspense>
        </div>
        <div className="w-full px-2 py-4 bg-card">
          <Suspense fallback={"Loading..."}>
            <FollowList username={user} followType="Following" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
