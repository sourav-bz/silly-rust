export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-8">ABOUT ME</h1> */}

      <div className="space-y-8">
        {/* Introduction Section */}
        <section>
          <p className="text-gray-700 leading-relaxed">
            Hello! I&apos;m Sourav, and I&apos;ve set out on a journey to learn
            Rust and build things with the Bevy game engine.
            <br />
            I want to build and learn new things, and the best way to reaffirm
            your learnings is to write and share so that others can understand
            it from a better perspective.
            <br />
            I come from a Product Engineering background, where I mostly worked
            with JS frameworks and have experimented with Python. I started
            learning Rust to get into building things with low-level languages.
            <br />
            <br />
            One of the projects I&apos;m currently working on is Rigit.io, where
            a good simulation engine is a critical component.
            <br />
            It&apos;s going to be an open-source project. Rust gives us
            low-level control, and with Bevy being open-source, it will help our
            project grow alongside the Bevy game engine.
            <br />
            I strongly believe Bevy will become a go-to game development engine
            in the future. They have a very active community and a transparent,
            clean tech stack.
            <br />
            <br />
            The blogs here will be formatted in a question-and-answer format,
            where I address both obvious and non-obvious questions that
            I&apos;ve had, research the answers, and write examples to solidify
            my understanding.
            <br />
            <br />
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sourav-bz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/sourav_bz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Twitter/X
            </a>
            <a
              href="https://linkedin.com/in/souravbz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hey@souravk.com"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
