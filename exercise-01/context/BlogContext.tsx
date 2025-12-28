// src/context/BlogContext.tsx
"use client";

import { createContext, useContext } from "react";
import { blogs, Blog } from "@/data/blogs";

interface BlogContextType {
  getBlogById: (id: string) => Blog | undefined;
}

const BlogContext = createContext<BlogContextType | null>(null);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const getBlogById = (id: string) => blogs.find(b => b.id === id);

  return (
    <BlogContext.Provider value={{ getBlogById }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within BlogProvider");
  }
  return context;
};
