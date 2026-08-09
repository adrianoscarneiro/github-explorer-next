import SearchBar from "./components/SearchMenu";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-3xl flex-col items-center place-items-center justify-between py-32 px-14 bg-white dark:bg-black sm:items-start">
        <section
          id="home-banner"
          className="flex flex-col gap-8 text-justify place-items-center px-4"
        >
          <div className="flex flex-col gap-4 text-justify">
            <h1 className="text-h1 text-center">
              <strong>GITHUB EXPLORER</strong>
            </h1>

            <p className="text-p">
              Explore any GitHub profile in seconds. GitHub Explorer lets you
              look up any GitHub user and see what they are building, profile
              info, follower count, and their public repositories, all pulled
              live from the GitHub API. Just search a username and dive in.
            </p>
          </div>

          <div>
            <SearchBar />
          </div>
        </section>
      </div>
    </div>
  );
}
