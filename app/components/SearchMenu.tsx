"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const value: string = inputRef.current?.value;
    router.push(`./${value}`);
  }

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTxt"
        id=""
        placeholder="Enter the username"
        className="text-input border rounded-xl py-1 px-1"
        ref={inputRef}
      />
      <input
        type="submit"
        value="Search"
        className="text-input outline-1 rounded-xl px-2"
      />
    </form>
  );
}

export default SearchBar;
