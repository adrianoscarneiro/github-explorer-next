import SearchBar from "./components/SearchMenu";

export default function Home() {
  return (
    <section className="flex flex-col place-items-center gap-2 py-8 px-4 min-h-screen">
      <div className="w-1/2 self-center px-2 py-4">
        <SearchBar />
      </div>
      <div className="text-center sm:w-3/4 sm:flex sm:flex-col sm:place-items-center lg:w-1/2 rounded-xl">
        <h1 className="px-2 py-1 sm:px-4 sm:py-4 text-primary-text">
          Github Explorer
        </h1>
        <p className="px-2 py-1 text-secondary-text">
          Explore any GitHub profile in seconds. GitHub Explorer lets you look
          up any GitHub user and see what they are building, profile info,
          follower count, and their public repositories, all pulled live from
          the GitHub API. Just search a username and dive in.
        </p>
      </div>
    </section>
  );
}
