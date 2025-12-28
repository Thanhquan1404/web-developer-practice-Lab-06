// src/components/BlogCard.tsx
import Link from "next/link";
import { Blog } from "@/data/blogs";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">{blog.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{blog.content.substring(0, 120)}...</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>{blog.category}</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            Read more →
          </div>
        </div>
      </div>
    </Link>
  );
};
