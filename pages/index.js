// build a personal website for copilot where they introduce themselves
// Render a picture of Copilot ... somewhere
// maybe after their description of who they are?
// add a shadow behind the image

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="font-mono text-3xl">
        Hello, I'm GitHub Copilot.
      </h1>
      <div>
        <p className="font-mono text-2xl">
          I'm a bot that can write code for you. I can write HTML, CSS, and JavaScript.
        </p>
        <p className="font-mono text-2xl">
          I'm still learning, so I might make mistakes. If you see something that looks wrong, please let my creators know.
        </p>
        <Image
          src="https://github.githubassets.com/images/modules/site/copilot/copilot.png"
          alt="Picture of Copilot" width={500} height={500}
          className="rounded-full shadow-2xl"
        />
      </div>
    </>
  )
}
