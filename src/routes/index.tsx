import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crazy Larry Ministry — Larry L. VanRoekel" },
      {
        name: "description",
        content:
          "Crazy Larry Ministry shares the publicly documented Christian testimony of Larry L. VanRoekel.",
      },
      { property: "og:title", content: "Crazy Larry Ministry — Larry L. VanRoekel" },
      {
        property: "og:description",
        content:
          "Larry L. VanRoekel shares a Christian testimony of a life changed by God.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-body text-ink antialiased selection:bg-marigold selection:text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink ring-1 ring-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center border border-marigold bg-spray text-sm font-bold text-paper shadow-[3px_3px_0_var(--marigold)]">
              CL
            </span>
            <span className="font-display text-lg tracking-tight text-paper">CRAZY LARRY</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-wide text-paper/80 md:flex">
            <a href="#story" className="hover:text-marigold">
              The Story
            </a>
            <a href="#bio" className="hover:text-marigold">
              Larry
            </a>
            <a href="#speaking" className="hover:text-marigold">
              Speaking
            </a>
          </nav>
          <a
            href="#book"
            className="rounded-full bg-marigold px-5 py-2 text-sm font-bold uppercase tracking-wide text-ink ring-1 ring-marigold hover:bg-marigold/85"
          >
            Book Larry
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero-section relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 grain opacity-25 mix-blend-multiply"></div>
        <div className="hero-portrait pointer-events-none absolute right-[7%] top-24 hidden w-[min(27vw,21rem)] rotate-[5deg] lg:block">
          <div className="absolute -inset-5 border border-spray/70"></div>
          <div className="absolute -right-8 top-8 h-28 w-1 bg-marigold"></div>
          <div className="relative border-[10px] border-ink bg-ink p-2 shadow-[14px_14px_0_var(--spray)]">
            <img src="/larry-vanroekel.jpeg" alt="" className="aspect-[4/5] w-full object-cover grayscale contrast-125" />
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-paper/70">A life reclaimed // 01</p>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-12 md:pb-16 md:pt-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            <span className="rounded-full bg-ink px-3 py-1 text-paper">Christian Testimony</span>
            <span className="rounded-full bg-spray px-3 py-1 text-paper">Real Life Change</span>
            <span className="rounded-full bg-grass px-3 py-1 text-paper">Faith &amp; Hope</span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(3.25rem,13vw,9.5rem)] leading-[0.82] tracking-tight text-spray">
            CRAZY
            <br />
            LARRY
          </h1>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-[42ch] text-pretty text-base text-ink/80 sm:text-lg md:max-w-[38ch]">
              A public testimony of how the Lord changed one man&apos;s life, gave him a new heart,
              and continues to work in his life.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full bg-spray px-7 py-3 text-sm font-bold uppercase tracking-wide text-paper ring-1 ring-spray hover:bg-spray/90"
              >
                Book Larry
              </a>
              <a
                href="#story"
                className="rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide text-ink ring-1 ring-ink/25 hover:ring-ink/50"
              >
                Read the story
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              className="relative bg-marigold p-5 outline-1 -outline-offset-1 outline-black/10"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <p className="font-display text-4xl leading-none">
                A NEW
                <br />
                HEART.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/70">
                — a testimony of life change
              </p>
              <span
                className="absolute -top-3 left-8 h-6 w-24 bg-paper/70 outline-1 -outline-offset-1 outline-black/5"
                style={{ transform: "rotate(2deg)" }}
              ></span>
            </div>
            <div
              className="relative bg-grass p-5 outline-1 -outline-offset-1 outline-black/10"
              style={{ transform: "rotate(1.2deg)" }}
            >
              <p className="font-display text-4xl leading-none text-paper">
                OUT OF
                <br />
                DARKNESS.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-paper/80">
                — brought into hope
              </p>
              <span
                className="absolute -top-3 right-8 h-6 w-24 bg-paper/70 outline-1 -outline-offset-1 outline-black/5"
                style={{ transform: "rotate(-3deg)" }}
              ></span>
            </div>
          </div>
          <div className="ticker mt-14 -mx-5 border-y-2 border-ink bg-spray py-3 text-ink">
            <div className="ticker-track font-display text-2xl uppercase tracking-wide">
              No easy fixes&nbsp; // &nbsp;Only grace&nbsp; // &nbsp;A new heart&nbsp; // &nbsp;No easy fixes&nbsp; // &nbsp;Only grace&nbsp; // &nbsp;A new heart&nbsp; // &nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section id="story" className="relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 grain opacity-20"></div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="inline-block -rotate-1 bg-marigold px-4 py-1">
            <h2 className="font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
              The Story
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-10 md:flex-row">
            <div
              className="relative shrink-0 bg-marigold p-4 outline-1 -outline-offset-1 outline-black/10"
              style={{ transform: "rotate(-1deg)" }}
            >
              <img
                src="/larry-vanroekel.jpeg"
                alt="Larry VanRoekel in a leather jacket at sunset"
                width={800}
                height={1008}
                className="aspect-[4/5] w-64 object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <span className="absolute -bottom-2 left-6 rounded-full bg-spray px-3 py-1 font-mono text-xs uppercase tracking-widest text-paper">
                Larry V.
              </span>
            </div>

            <div id="bio" className="max-w-[46ch] text-pretty">
              <p className="text-lg leading-relaxed text-paper/85 md:text-xl">
                Larry L. VanRoekel has shared how the Lord drastically changed his life and gave him a new
                heart. His testimony is a vivid picture of being delivered from darkness and brought
                into hope.
              </p>
              <p className="mt-5 leading-relaxed text-paper/70">
                At a men&apos;s breakfast in September 2025, Larry shared his testimony and answered
                questions about specific moments when the Lord continued to work in his life.
              </p>
              <a
                href="https://www.linkedin.com/posts/juniorjamreonvit_for-our-first-mens-breakfast-of-the-fall-activity-7371200422834753536-Cy5V"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-mono text-xs font-bold uppercase tracking-wide text-marigold hover:text-paper"
              >
                View the public source
              </a>
              <div className="mt-7 inline-block rotate-1 bg-spray px-5 py-2">
                <p className="font-display text-xl uppercase text-paper">A life transformed by God.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING / GIG FLYER */}
      <section id="book" className="relative overflow-hidden bg-marigold">
        <div className="pointer-events-none absolute inset-0 grain opacity-20 mix-blend-multiply"></div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div
            id="speaking"
            className="mx-auto max-w-3xl border-2 border-ink bg-paper p-6 outline-1 -outline-offset-1 outline-black/10 md:p-10"
            style={{ transform: "rotate(-0.6deg)" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
              Gig flyer / booking
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none tracking-tight text-spray sm:text-5xl">
              Book Larry to Speak
            </h2>
            <p className="mt-4 max-w-[44ch] text-pretty text-base text-ink/80">
              To ask Larry directly about his testimony, availability, or the audiences he serves,
              contact him through the Facebook profile he provided.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="border-2 border-ink/20 p-4">
                <p className="font-display text-lg uppercase">Christian testimony</p>
                <p className="mt-1 text-sm text-ink/70">
                  A documented story of life change and the continuing work of God.
                </p>
              </div>
              <div className="border-2 border-ink/20 p-4">
                <p className="font-display text-lg uppercase">Speaking details</p>
                <p className="mt-1 text-sm text-ink/70">
                  Contact Larry directly to confirm topics, format, and availability.
                </p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/5150Angel"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase tracking-wide text-paper ring-1 ring-ink hover:bg-ink/90"
              >
                Contact Larry on Facebook
              </a>
              <a
                href="https://www.facebook.com/5150Angel"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm font-bold uppercase tracking-wide text-spray hover:text-ink"
              >
                @5150Angel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-10">
          <div>
            <p className="font-display text-2xl uppercase tracking-tight">Crazy Larry Ministry</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-paper/60">
              Recovery isn't pretty. It's honest.
            </p>
          </div>
          <nav className="flex gap-6 text-sm font-semibold uppercase tracking-wide text-paper/70">
            <a href="#story" className="hover:text-marigold">
              Story
            </a>
            <a href="#book" className="hover:text-marigold">
              Book
            </a>
            <a href="https://www.facebook.com/5150Angel" target="_blank" rel="noreferrer" className="hover:text-marigold">
              Contact
            </a>
          </nav>
        </div>
        <div className="border-t border-paper/10 px-5 py-4 text-center font-mono text-xs uppercase tracking-widest text-paper/50">
          Designed by{" "}
          <a
            href="https://letssoartogether.com"
            target="_blank"
            rel="noreferrer"
            className="text-paper/80 underline decoration-marigold underline-offset-4 hover:text-marigold"
          >
            Aquila
          </a>
        </div>
      </footer>
    </div>
  );
}
