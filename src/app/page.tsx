import Image from "next/image";

const tech = [
  "TypeScript",
  "Python",
  "Go",
  "React",
  "Tailwind",
  "AWS",
  "Postgres",
  "Firebase",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 py-12 px-8">
      <div className="z-10 max-w-3xl font-mono">
        <section className="flex flex-col items-center">
          <Image
            src="/images/avatar.png"
            alt="Andrew Henry"
            className="rounded-full w-36 h-36"
            width={180}
            height={180}
          />
          <h1 className="text-4xl mt-4 sm:text-left text-center font-semibold">
            Andrew Henry
          </h1>
          <h2 className="text-3xl mt-2 sm:text-left text-center font-semibold">
            @ajhenry
          </h2>
        </section>

        <section id="about-me">
          <h3 className="mt-8 text-2xl">About me</h3>
          <p className="mt-2">
            I&apos;m a full stack software engineer and startup co-founder.
            I&apos;m currently working on making open source tools for
            developers at{" "}
            <a href="https://github.com" className="underline">
              GitHub
            </a>
            . I&apos;m also working on a passion project to make better
            technical interviews for startups{" "}
            <a href="https://interviews.so" className="underline">
              interviews.so
            </a>
            .
          </p>
          <p className="mt-6">
            You can find my blog over at{" "}
            <a href="https://blog.ajhenry.com" className="underline">
              blog.ajhenry.com
            </a>
            . I love to write about software & startups.
          </p>
        </section>

        <section id="contact-me">
          <h3 className="text-2xl mt-8">Where to find me</h3>
          <ul className="space-y-1 mt-2">
            <li className="">
              <a
                href="https://linkedin.com/in/drewjhenry"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="">
              <a href="https://github.com/ajhenry" className="underline">
                GitHub
              </a>
            </li>
            <li className="">
              <a href="mailto:contact@ajhenry.com" className="underline">
                Email
              </a>
            </li>
          </ul>
        </section>

        <section id="projects">
          <h3 className="text-2xl mt-8">Projects I&apos;ve made</h3>
          <ul className="space-y-1 mt-2">
            <li className="">
              <a href="https://interviews.so" className="underline">
                interviews.so
              </a>{" "}
              — Better technical interviews
            </li>
            <li className="">
              <a href="https://prettyavatars.com" className="underline">
                prettyavatars.com
              </a>{" "}
              — Beautiful avatars as a service
            </li>
            <li className="">
              <a href="https://recommit.io" className="underline">
                recommit.io
              </a>{" "}
              — Managed open source for Enterprises
            </li>
          </ul>
        </section>

        <section id="tech">
          <h3 className="text-2xl mt-8">Tech I use</h3>
          <p className="mt-2">{tech.join(", ")}</p>
        </section>

        <section id="experience">
          <h3 className="text-2xl mt-8">Places I&apos;ve worked</h3>
          <ul className="space-y-1 mt-2">
            <li>
              <span className="font-bold">GitHub</span> — Senior Software
              Engineer
            </li>
            <li>
              <span className="font-bold">Textla</span> — CTO & Co-Founder
            </li>
            <li>
              <span className="font-bold">Twilio Segment</span> — Senior
              Software Engineer
            </li>
            <li>
              <span className="font-bold">Capital One</span> — Software Engineer
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
