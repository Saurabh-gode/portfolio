import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10">
      <div>
        <h1 className="font-medium text-3xl">
          hey, I&apos;m Saurabh 👋🏻 <span className="text-sm text-gray-500">(he/him)</span>
        </h1>
        <p className="text-gray-500">
          {/* I&apos;m a software developer, tech enthusiast and a learner. I currently provide services
          into web developement and i am passionate about building and contributing into software products */}
          Software developer.&nbsp;tech enthusiast.&nbsp;probably googling something right now.
        </p>
      </div>
    </main>
  );
}
