"use client";

import { Button, TextField } from "@mui/material";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGoTo } from "./@hooks/linkHooks";

export default function Home() {
  const goTo = useGoTo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState<{ title: string; description: string; content: string }[]>([]);

  useEffect(() => {
    /*gsap.from("#title", {
      opacity: 0,
      x: 80,
      ease: "power3.out",
      duration: 1.5,
    });
    gsap.from("#article", {
      opacity: 0,
      x: 80,
      ease: "power3.out",
      duration: 1.5,
      delay: 0.4,
    });
    gsap.from("#aside", {
      opacity: 0,
      x: 80,
      ease: "power3.out",
      duration: 1.5,
      delay: 0.8,
    });*/

    const existingArticles = localStorage.getItem("articles");
    if (existingArticles) {
      setArticles(JSON.parse(existingArticles));
    }
  }, []);

  function handleSubmit() {
    if (!title) {
      alert("Please enter a title!");
      return;
    }

    const articleDetails = { title, description, content };

    const existingArticles = localStorage.getItem("articles");
    const articlesArray = existingArticles ? JSON.parse(existingArticles) : [];

    articlesArray.push(articleDetails);

    localStorage.setItem("articles", JSON.stringify(articlesArray));

    setArticles(articlesArray);

  }

  function handleViewJson(article: { title: string; description: string; content: string }) {
    localStorage.setItem("selectedArticle", JSON.stringify(article));
    goTo("/pageArticle");
  }
  

  return (
    <div className="mx-16">
      <header id="title" className="my-8">
        <h1 className="text-6xl uppercase text-[--primary]">Guugle</h1>
        <p className="text-xl text-[--black]">The website that creates websites</p>
      </header>
      <main className="flex flex-row space-x-8">
        <article
          id="article"
          className="w-4/12 border-2 border-[--primary] bg-[--background] p-4 rounded-md shadow-lg"
        >
          <h2 className="text-4xl text-[--primary] mb-8">Create your website</h2>
          <section className="flex flex-col space-y-4">
            <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField
              label="Description"
              multiline
              rows={2}
              placeholder="The description of the website..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Content"
              multiline
              rows={4}
              placeholder="The content of your page"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Save Article
            </Button>
          </section>
        </article>

        <aside id="aside" className="w-8/12 border-2 border-[--primary] rounded-md shadow-lg">
          <h2 className="text-4xl text-[--white] p-4 bg-[--primary]">Your Articles</h2>
          <section className="flex flex-col">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <section key={index} className="p-4 border-b-2 border-[--primary]">
                  <button
                    className="text-[--primary] hover:border-b-2 hover:border-[--primary] transition-all duration-300 ease-out"
                    onClick={() => handleViewJson(article)}
                  >
                    {article.title}
                  </button>
                </section>
              ))
            ) : (
              <p className="p-4 text-gray-500">No articles saved yet.</p>
            )}
          </section>
        </aside>
      </main>

      <footer className="mt-32 text-gray-500 justify-self-center">&copy; made by me</footer>
    </div>
  );
}
