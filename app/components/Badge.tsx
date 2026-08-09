export default function Badge({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <main className="w-full text-input">
      <div>{title}</div>
      <div className="bg-white text-black rounded-xl px-2 py-1">{value}</div>
    </main>
  );
}
