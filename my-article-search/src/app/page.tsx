import { Button, MenuList, TextField } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <body className="justify-items-center items-center">
      <header className="my-8">
        <h1 className="text-6xl uppercase text-[--primary]">Guugle</h1>
        <p className="text-xl text-[--black]">
          The website that create websites
        </p>
      </header>
      <main>
        <article className=" border-2 border-[--primary] bg-[--background] p-4 rounded-md shadow-lg">
          <h2 className="text-4xl text-[--primary] mb-8">
            Create your website
          </h2>
          <section className="flex flex-col space-y-4">
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={2}
              placeholder="The description of the website..."
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              placeholder="The content of your page"
            />
            <Button variant="contained">
              Send
            </Button>
          </section>
        </article>
        <aside>
          <MenuList/>
        </aside>
      </main>
      <footer className="mt-32 text-gray-500"> &copy; made by me</footer>
    </body>
  );
}
