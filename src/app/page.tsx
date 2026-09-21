export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <main className="flex max-w-2xl flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Brantra
        </h1>
        <p className="text-xl font-medium sm:text-2xl">
          From inquiry to paid.
        </p>
        <p className="text-base opacity-75 sm:text-lg">
          The deal workspace for self-managed creators.
        </p>
        <div className="mt-8 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          Foundation ready
        </div>
      </main>
    </div>
  );
}
