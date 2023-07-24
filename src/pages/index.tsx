import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import MyProjects from "@/components/home/MyProjects";
import Blogs from "@/components/home/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kishor Kunal - Web Development Portfolio</title>
        <meta
          name="description"
          content="Welcome to my web development portfolio! I'm Kishor Kunal, a passionate web developer showcasing my projects and skills in front-end, back-end, and more."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>

      <Hero />
      <AboutMe />
      <MyProjects />
      <Blogs />
    </>
  );
}
