import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Header from '@/components/Header';

export default function DocsIndex() {
  const docsDir = path.join(process.cwd(), 'content/docs');
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Documentation
            </h1>
            <p className="text-gray-400 text-lg">
              Browse our comprehensive documentation and guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map(file => {
              const slug = file.replace('.md', '');
              return (
                <Link
                  key={slug}
                  href={`/docs/${slug}`}
                  className="group bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📄</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                        {slug.replace(/-/g, ' ').toUpperCase()}
                      </h3>
                      <p className="text-blue-100 text-sm">Click to view</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}