export default function Page() {
  return (
    <main className="grid grid-cols-[300px_1fr]">
      <aside className="container col-span-1 border-r flex flex-col gap-5 py-5"></aside>
      <section className="sticky top-0 flex justify-center items-center h-screen"></section>
    </main>
  );
}
