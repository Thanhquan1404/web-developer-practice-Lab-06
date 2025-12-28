import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Header from '@/components/Header';
import AskAIWidget from '@/components/AskAIWidget';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), 'content/docs');
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

  return files.map(file => ({
    slug: file.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} - Documentation`,
    description: `Documentation for ${slug}`,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/docs" className="text-blue-400 hover:text-blue-300">
              Documentation
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">{slug.replace(/-/g, ' ')}</span>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-invert prose-lg max-w-none bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-xl border border-slate-600">
                <style>{`
                  .prose-invert h1 { @apply text-white text-4xl font-bold mb-6; }
                  .prose-invert h2 { @apply text-blue-300 text-2xl font-bold mt-8 mb-4; }
                  .prose-invert h3 { @apply text-cyan-300 text-xl font-bold mt-6 mb-3; }
                  .prose-invert p { @apply text-gray-300 mb-4 leading-relaxed; }
                  .prose-invert a { @apply text-blue-400 hover:text-blue-300 underline; }
                  .prose-invert code { @apply bg-slate-900 text-pink-300 px-2 py-1 rounded; }
                  .prose-invert pre { @apply bg-slate-900 p-4 rounded-lg overflow-x-auto mb-4; }
                  .prose-invert blockquote { @apply border-l-4 border-purple-500 pl-4 text-purple-300 italic; }
                  .prose-invert ul, .prose-invert ol { @apply text-gray-300 mb-4; }
                  .prose-invert li { @apply mb-2; }
                `}</style>
                <MDXRemote source={content} />
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* AI Widget Inline */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-xl">
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span>💬</span> Need Help?
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Ask our AI assistant any questions about this topic.
                  </p>
                  <p className="text-blue-50 text-xs italic">
                    Use the chat button at the bottom right to interact with the AI.
                  </p>
                </div>

                {/* Related Links */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl shadow-xl">
                  <h3 className="text-white font-bold text-lg mb-4">Other Docs</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs" className="text-purple-100 hover:text-white transition-colors text-sm">
                        ← Back to Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AskAIWidget />
      </main>
    </>
  );
}