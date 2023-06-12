import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jongjate | Software developer</title>
        <meta name="description" content="I’m a Software developer." />
        <link rel="icon" href="" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        {" "}
        <Main />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
