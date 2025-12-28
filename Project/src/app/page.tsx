import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32 text-center">
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Knowledge Base
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation documentation with intelligent AI assistance. Get instant answers from our comprehensive knowledge base powered by OpenAI advanced models.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <Link
                href="/docs"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-xl transition-all transform hover:scale-105"
              >
                📚 Explore Documentation
              </Link>
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-xl transition-all transform hover:scale-105"
              >
                ✨ Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Documentation</h3>
              <p className="text-blue-100">
                SEO-optimized pages with MDX support for rich, interactive documentation that is easy to navigate.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Assistant</h3>
              <p className="text-purple-100">
                Ask natural language questions and receive contextual answers powered by advanced AI models.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-orange-100">
                Built with Next.js 15 for optimal performance, edge caching, and instant response times.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-green-500 to-emerald-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure</h3>
              <p className="text-green-100">
                Enterprise-grade security with encrypted API communication and secure data handling.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-indigo-500 to-blue-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Beautiful Design</h3>
              <p className="text-indigo-100">
                Modern, responsive UI with smooth animations and intuitive user experience.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-teal-500 to-cyan-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Fully Responsive</h3>
              <p className="text-teal-100">
                Works seamlessly on desktop, tablet, and mobile devices for ultimate accessibility.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our documentation and experience the power of AI-assisted knowledge discovery.
            </p>
            <Link
              href="/docs"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started Now 🚀
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 text-gray-400 py-8 text-center">
          <p>
            © 2025 AI-Powered Knowledge Base. Built with Next.js 15 and OpenAI.
          </p>
        </footer>
      </main>
    </>
  );
}