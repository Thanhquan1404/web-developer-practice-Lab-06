import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black py-32 px-16">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-8">
          Exercise 4: Image & Font Optimization
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
          This exercise demonstrates improving Core Web Vitals through image and font optimization in Next.js.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Standard &lt;img&gt; Tag (Observe CLS)</h2>
          <p className="mb-4">Using standard img tag causes layout shift as the image loads:</p>
          <img src="/large-image.jpg" alt="Large image with standard img tag" className="w-full max-w-2xl" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Next.js Image Component (No CLS)</h2>
          <p className="mb-4">Using Next.js Image component prevents layout shift and provides automatic optimization:</p>
          <Image
            src="/large-image.jpg"
            alt="Large image with Next.js Image component"
            width={800}
            height={600}
            className="w-full max-w-2xl"
            priority
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Font Optimization</h2>
          <p>The Google Font is imported in the root layout and self-hosted, check Network tab for no external font requests.</p>
        </section>
      </main>
    </div>
  );
}
