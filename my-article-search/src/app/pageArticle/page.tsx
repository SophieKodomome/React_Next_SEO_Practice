"use client";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useGoTo } from "../@hooks/linkHooks";

export default function PageArticle() {
  const goTo = useGoTo();
  const [article, setArticle] = useState<{ title: string; description: string; content: string } | null>(null);

  useEffect(() => {
    const storedArticle = localStorage.getItem("selectedArticle");
    if (storedArticle) {
      setArticle(JSON.parse(storedArticle));
    }
  }, []);

  return (
    <div className="mx-16 my-8">
      <Button variant="contained" onClick={() => goTo("/")}>Back</Button>

      {article ? (
        <section className="border-2 border-[--primary] bg-[--background] p-8 rounded-md shadow-lg mt-8">
          <h1 className="text-5xl text-[--primary]">{article.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{article.description}</p>
          <div className="mt-4 text-[--black]">{article.content}</div>
        </section>
      ) : (
        <p className="text-gray-500 mt-8">No article found.</p>
      )}
    </div>
  );
}
