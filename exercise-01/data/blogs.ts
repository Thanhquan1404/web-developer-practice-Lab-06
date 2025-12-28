// src/data/blogs.ts
export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Introduction to Next.js",
    content: "Next.js is a powerful React framework that enables developers to build fast, scalable web applications with ease. It provides features like server-side rendering, static site generation, and API routes out of the box. In this comprehensive guide, we'll explore the fundamentals of Next.js, including its file-based routing system, data fetching methods, and deployment options. Whether you're a beginner or an experienced React developer, Next.js offers the tools you need to create modern web applications that perform well and provide excellent user experiences. We'll cover everything from setting up your first Next.js project to advanced concepts like middleware and incremental static regeneration.",
    date: "2024-01-15",
    category: "Web Development"
  },
  {
    id: "2",
    title: "Static Site Generation",
    content: "Static Site Generation (SSG) is a powerful feature in Next.js that allows you to pre-build pages at build time, resulting in faster load times and better SEO. Unlike traditional server-side rendering, SSG generates HTML files for each page during the build process, which can then be served directly from a CDN. This approach combines the benefits of static sites with the dynamic capabilities of modern web frameworks. In this article, we'll dive deep into how SSG works in Next.js, when to use it, and best practices for implementing it in your projects. We'll also compare SSG with other rendering strategies and discuss real-world use cases where SSG shines.",
    date: "2024-01-20",
    category: "Performance"
  },
  {
    id: "3",
    title: "Dynamic Routing",
    content: "Dynamic routing in Next.js enables flexible URL handling and allows you to create pages that can display different content based on URL parameters. This is essential for building scalable web applications with user-generated content, e-commerce sites, and content management systems. Next.js supports both static and dynamic routes, giving you the flexibility to choose the right approach for your use case. We'll explore how to create dynamic routes using file-based routing, how to handle optional parameters, and how to generate static paths for dynamic routes. You'll learn about the getStaticPaths and getStaticProps functions, and how they work together to create efficient, SEO-friendly pages.",
    date: "2024-01-25",
    category: "Routing"
  },
  {
    id: "4",
    title: "Data Fetching in Next.js",
    content: "Next.js provides multiple data fetching strategies to suit different needs: Static Generation, Server-Side Rendering, and Client-Side Rendering. Each approach has its strengths and use cases, and choosing the right one can significantly impact your application's performance and user experience. In this detailed guide, we'll examine each data fetching method, discuss when to use them, and provide practical examples. We'll also cover advanced topics like incremental static regeneration, API routes, and integrating with external data sources. By the end of this article, you'll have a solid understanding of how to fetch and manage data effectively in your Next.js applications.",
    date: "2024-01-30",
    category: "Data Management"
  },
  {
    id: "5",
    title: "Why Use TypeScript",
    content: "TypeScript brings static typing to JavaScript, offering numerous benefits for large-scale application development. It helps catch errors at compile time, improves code maintainability, and enhances developer productivity through better IDE support and autocompletion. When combined with Next.js, TypeScript creates a robust development environment that scales well as your project grows. This article explores the advantages of using TypeScript in Next.js projects, including type safety, better refactoring capabilities, and improved collaboration in team environments. We'll walk through setting up TypeScript in a Next.js project, creating custom types, and leveraging TypeScript's advanced features to build more reliable applications.",
    date: "2024-02-05",
    category: "TypeScript"
  }
];
