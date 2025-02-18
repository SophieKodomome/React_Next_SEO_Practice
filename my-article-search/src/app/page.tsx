"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit() {
    const articleDetails = {
      title,
      description,
      content,
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(articleDetails, null, 2);

    // Create a Blob (Binary Large Object) with JSON content
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a temporary link element
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = articleDetails.title+".json"; // Set the filename
    document.body.appendChild(a); // Append link to body
    a.click(); // Trigger download
    document.body.removeChild(a); // Remove the link
  }

  return (
    <div className="mx-16">
      <header className="my-8">
        <h1 className="text-6xl uppercase text-[--primary]">Guugle</h1>
        <p className="text-xl text-[--black]">
          The website that creates websites
        </p>
      </header>
      <main className="flex flex-row space-x-8">
        <article className="w-4/12 border-2 border-[--primary] bg-[--background] p-4 rounded-md shadow-lg">
          <h2 className="text-4xl text-[--primary] mb-8">
            Create your website
          </h2>
          <section className="flex flex-col space-y-4">
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
              Create & Download JSON
            </Button>
          </section>
        </article>
        <aside className="w-8/12 border-2 border-[--primary] rounded-md shadow-lg">
          <h2 className="text-4xl text-[--white] p-4 bg-[--primary]">
            Your Articles
          </h2>
          <section className="flex flex-col">
            <section className="p-4 border-b-2 border-[--primary]">
              <a
                className="text-[--primary] hover:border-b-2 hover:border-[--primary] transition-all duration-300 ease-out"
                href="http://"
              >
                an example of links
              </a>
            </section>
          </section>
        </aside>
      </main>
      <footer className="mt-32 text-gray-500 justify-self-center">
        &copy; made by me
      </footer>
    </div>
  );
}
