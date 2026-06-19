export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-24">
      <article className="max-w-3xl w-full prose prose-neutral dark:prose-invert prose-headings:font-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        {children}
      </article>
    </div>
  );
}
