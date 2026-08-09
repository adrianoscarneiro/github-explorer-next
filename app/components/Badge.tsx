export default function Badge({
  title,
  value,
}: {
  title: string;
  value: string | number | null;
}) {
  return (
    <div className={"flex flex-col w-full text-center"}>
      <div className="text-title-large">
        <p>{title}</p>
      </div>
      <div className="text-body bg-accent rounded-xl px-2 py-1 h-full">
        <p>{value ?? "Not informed"}</p>
      </div>
    </div>
  );
}
