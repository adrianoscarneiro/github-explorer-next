export default function Badge({
  title,
  value,
}: {
  title: string;
  value: string | number | null;
}) {
  return (
    <div className={"flex flex-col w-full text-center"}>
      <div className="text-sm">
        <dt>
          <strong className="text-primary-text">{title}</strong>
        </dt>
      </div>
      <div className="text-lg bg-accent rounded-xl px-2 py-1 h-full">
        <dd>{value ?? "Not informed"}</dd>
      </div>
    </div>
  );
}
