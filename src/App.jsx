import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/company-logo.webp';
import ashesShot1 from "./assets/ashes-shot-1.png";
import ashesShot2 from "./assets/ashes-shot-2.png";
import ashesShot3 from "./assets/ashes-shot-3.png";
import ashesCardBg from "./assets/ashes-card-bg.webp";
import ashesShot4 from "./assets/ashes-shot-4.png";
import ashesShot5 from "./assets/ashes-shot-5.png";
import ashesShot6 from "./assets/ashes-shot-6.png";
import ashesShot7 from "./assets/ashes-shot-7.png";
import ashesShot8 from "./assets/ashes-shot-8.png";
import ashesShot9 from "./assets/ashes-shot-9.png";
import iacShot1 from "./assets/iac-shot-1.png";
import iacShot2 from "./assets/iac-shot-2.png";
import iacShot3 from "./assets/iac-shot-3.png";
import iacShot4 from "./assets/iac-shot-4.png";
import iacCardBg from "./assets/iac-card-bg.png";
import rodShot1 from "./assets/rod-shot-1.png";
import rodShot2 from "./assets/rod-shot-2.png";
import rodShot3 from "./assets/rod-shot-3.png";
import rodShot4 from "./assets/rod-shot-4.png";
import rodCardBg from "./assets/rod-card-bg.png";
import factoryCardBg from "./assets/factory-card-bg.png";
import factoryShot1 from "./assets/factory-shot-1.png";
import factoryShot2 from "./assets/factory-shot-2.png";
import factoryShot3 from "./assets/factory-shot-3.png";
import factoryShot4 from "./assets/factory-shot-4.png";

function SteamStoreWidget({ appId, titleFallback, url }) {
  if (!appId) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block rounded-[1.4rem] border border-white/10 bg-[#2d3643]/90 p-4 transition hover:border-white/20 hover:bg-[#364152]/95"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-[#1b2230] text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Steam
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-lg font-semibold text-white">{titleFallback}</div>
            <p className="mt-2 text-sm leading-6 text-white/70">Open the Steam store page.</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#1b2838]">
      <iframe
        src={`https://store.steampowered.com/widget/${appId}/`}
        title={`${titleFallback} Steam widget`}
        width="100%"
        height="200"
        frameBorder="0"
        className="block w-full"
      />
    </div>
  );
}

export default function CrimsonCloudGamesWebsite() {
  const games = [
    {
      title: "Ashes of the Damned: The Forgotten Ward",
      year: "In development",
      genre: "Psychological horror",
      publisherName: "indie.io",
      publisherUrl: "https://www.indie.io/",
      description:
        "A dark psychological horror experience set inside The Ashford Institute for the Mentally Afflicted, where every step pulls you deeper into dread.",
      trailerLabel: "Watch trailer",
      trailerUrl: "https://www.youtube.com/embed/bROWmDqrhiM",
      trailerExternalUrl: "https://www.youtube.com/watch?v=bROWmDqrhiM",
      primaryCta: "Wishlist on Steam",
      secondaryCta: null,
      storeUrl:
        "https://store.steampowered.com/app/3843760/Ashes_of_the_Damned_The_Forgotten_Ward/",
      appId: "3843760",
      storeBlurb:
        "Enter a decaying ward, face grotesque horrors, and fight to survive a psychological descent into dread.",
      screenshots: [
        { label: "Outside roof view", src: ashesShot1 },
        { label: "Examination room", src: ashesShot2 },
        { label: "Blood filled bathtub", src: ashesShot3 },
        { label: "Asylum exterior in rain", src: ashesShot4 },
        { label: "Blood stained examination table", src: ashesShot5 },
        { label: "Blood soaked gurney", src: ashesShot6 },
        { label: "Padded room", src: ashesShot7 },
        { label: "Auditorium", src: ashesShot8 },
        { label: "Attic storage room", src: ashesShot9 },
      ],
      backgroundImage: ashesCardBg,
      widgetTitle: "Wishlist on Steam",
    },
    {
      title: "I AM COFFEEE!",
      year: "Prototype / in development",
      genre: "Dark comedy office game",
      description:
        "Play as a sentient coffee machine in a dark comedy office where every choice shapes productivity, panic, and total workplace chaos.",
      trailerLabel: "I AM COFFEEE! trailer",
      trailerUrl: "https://www.youtube.com/embed/COLwWiGBrR8",
      trailerExternalUrl: "https://youtu.be/COLwWiGBrR8",
      news: "Latest news: Prototype testing is underway across multiple platforms to validate the concept and gather feedback.",
      primaryCta: "Wishlist on Steam",
      secondaryCta: null,
      storeUrl: "https://store.steampowered.com/app/4165240/I_AM_COFFEEE/",
      appId: "4165240",
      storeBlurb:
        "A dark comedy office game where every choice shapes productivity, panic, and workplace chaos.",
      screenshots: [
        { label: "Office setup", src: iacShot1 },
        { label: "Employee reaction", src: iacShot2 },
        { label: "Dark comedy dialogue", src: iacShot3 },
        { label: "Choice driven gameplay", src: iacShot4 },
      ],
      backgroundImage: iacCardBg,
      widgetTitle: "Wishlist on Steam",
    },
    {
      title: "Roll or Die",
      year: "Available now",
      genre: "Physics arcade challenge",
      description:
        "A precision physics arcade game about momentum and panic. The floor vanishes, your heart spikes, and you hit restart for one more run.",
      trailerLabel: "Roll or Die trailer",
      trailerUrl: "https://www.youtube.com/embed/t9e-cyB-T3c",
      trailerExternalUrl: "https://youtu.be/t9e-cyB-T3c",
      news: null,
      primaryCta: "Buy on Steam",
      secondaryCta: "Wishlist on Steam",
      storeUrl: "https://store.steampowered.com/app/4236710/Roll_Or_Die/",
      appId: "4236710",
      storeBlurb:
        "A precision physics arcade game about momentum, collapsing floors, and one more run.",
      screenshots: [{ label: "Obstacle course start", src: rodShot1 },
        { label: "Time Attack", src: rodShot2 },
        { label: "Obstacle course", src: rodShot3 },
        { label: "Endless run", src: rodShot4 },
      ],
      backgroundImage: rodCardBg,
      widgetTitle: "Buy on Steam",
    },
    {
      title: "Factory Reset",
      year: "In development",
      genre: "2.5D precision platformer",
      description:
        "A 2.5D precision platformer where stopping means exploding, momentum is survival, and a sarcastic AI rules the factory.",
      trailerLabel: "Factory Reset trailer",
      trailerUrl: "https://www.youtube.com/embed/VX1cdCLm5lo",
      trailerExternalUrl: "https://www.youtube.com/watch?v=VX1cdCLm5lo",
      news: null,
      primaryCta: "Wishlist on Steam",
      secondaryCta: null,
      storeUrl: "https://store.steampowered.com/app/3750480/Factory_Reset/",
      appId: "3750480",
      storeBlurb: "A 2.5D precision platformer where stopping means exploding and momentum is the only way to survive.",
      screenshots: [{ label: "Boss fight", src: factoryShot1 },
        { label: "Precision platforming", src: factoryShot2 },
        { label: "Factory traversal", src: factoryShot3 },
        { label: "Momentum platforming", src: factoryShot4 },
      ],
      backgroundImage: factoryCardBg,
      widgetTitle: "Wishlist on Steam",
    },
  ];

  const [mediaModal, setMediaModal] = useState(null);
  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const closeModal = () => setMediaModal(null);

  const showPrev = () => {
    if (!mediaModal) return;
    setMediaModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
  };

  const showNext = () => {
    if (!mediaModal) return;
    setMediaModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
  };

  const currentModalItem = useMemo(() => {
    if (!mediaModal) return null;
    return mediaModal.items[mediaModal.currentIndex];
  }, [mediaModal]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute right-[-8rem] top-[10rem] h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-red-500/30 bg-white/5 shadow-lg shadow-red-950/40">
                <img src={logo} alt="Crimson Cloud Games logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.18em] text-white/90">
                  CRIMSON CLOUD GAMES
                </div>
                <div className="text-xs text-white/50">Original games across genres</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
  <a
    href="#home"
    onClick={(event) => {
      event.preventDefault();
      scrollToSection('home');
    }}
    className="transition hover:text-white"
  >
    Home
  </a>
  <a
    href="#games"
    onClick={(event) => {
      event.preventDefault();
      scrollToSection('games');
    }}
    className="transition hover:text-white"
  >
    Games
  </a>
  <a
    href="#newsletter"
    onClick={(event) => {
      event.preventDefault();
      scrollToSection('newsletter');
    }}
    className="transition hover:text-white"
  >
    Newsletter
  </a>
  <a
    href="#contact"
    onClick={(event) => {
      event.preventDefault();
      scrollToSection('contact');
    }}
    className="transition hover:text-white"
  >
    Contact
  </a>
  <a
    href="#socials"
    onClick={(event) => {
      event.preventDefault();
      scrollToSection('socials');
    }}
    className="transition hover:text-white"
  >
    Socials
  </a>
</nav>
          </div>
        </header>

        <main className="relative">
          <section id="home" className="border-b border-white/10">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
              <div>
                <div className="mb-5 inline-flex items-center rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-red-200">
                  • GAMES, UPDATES, AND LINKS •
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                  Original games.
                  <span className="block bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
                    Built to stand out.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                  Discover current and upcoming games, follow updates, 
                  and find the best places to play, wishlist, and stay connected.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#games"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection('games');
                    }}
                    className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-950/50 transition hover:scale-105"
                  >
                    View games
                  </a>
                  <a
                    href="#newsletter"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection('newsletter');
                    }}
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Join newsletter
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-6 shadow-2xl shadow-black/40">
                  <div className="text-xs uppercase tracking-[0.2em] text-red-300/80">
                    What You'll Find on This Site
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Games</div>
                      <div className="mt-2 text-lg font-semibold">Discover my games, wishlist your favorites, and buy the available titles.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Updates</div>
                      <div className="mt-2 text-lg font-semibold">Stay updated with my current projects and progress.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Announcements</div>
                      <div className="mt-2 text-lg font-semibold">Find release updates, studio announcements, and project news.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Socials</div>
                      <div className="mt-2 text-lg font-semibold">Find links to all my social media profiles.</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-white/5 p-6">
                  <div className="text-sm text-white/55">Stay connected</div>
                  <div className="mt-2 text-2xl font-semibold">Follow the studio and get updates on new projects.</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Get updates, find the latest projects, and keep up with new announcements from Crimson Cloud Games.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="games" className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-5xl">
              <div className="text-xl font-medium uppercase tracking-[0.18em] text-red-300/80">
                Games
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Released and upcoming games
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Explore released titles, current projects, and upcoming games from Crimson Cloud Games.
              </p>
            </div>

            <div className="mt-12 grid gap-8">
              {games.map((game, index) => (
                <article
                  key={game.title}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
                >
                  {game.backgroundImage && (
                    <>
                      <img
                        src={game.backgroundImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,10,0.52)_0%,rgba(4,6,10,0.30)_45%,rgba(4,6,10,0.22)_68%,rgba(4,6,10,0.34)_100%)]" />
                    </>
                  )}

                  <div className="relative z-10 grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative overflow-hidden p-6 md:p-8">
                      <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm text-white/55">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {game.year}
                        </span>
                        <span>{game.genre}</span>
                        <span>#{index + 1}</span>
                      </div>

                      <h3 className="relative z-10 mt-5 text-3xl font-black tracking-tight md:text-4xl">
                        {game.title}
                      </h3>

                      {game.publisherName && game.publisherUrl ? (
                        <p className="relative z-10 mt-2 text-sm text-white/70">
                          Published by{" "}
                          <a
                            href={game.publisherUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold underline decoration-white/30 underline-offset-2 transition hover:brightness-110"
                          >
                            {game.publisherName === "indie.io" ? (
                              <span aria-label="indie.io">
                                <span className="text-[#3d3b8f]">indie</span>
                                <span className="text-[#e23a46]">.io</span>
                              </span>
                            ) : (
                              game.publisherName
                            )}
                          </a>
                        </p>
                      ) : null}

                      <div className="relative z-10 mt-8 space-y-4">
                        <div className="rounded-3xl border border-white/10 bg-black/10 p-4 shadow-lg shadow-black/10 backdrop-blur-sm">
                          <div className="mb-3 flex items-center justify-between gap-4">
                            <div className="text-sm font-medium text-white/55">{game.widgetTitle}</div>
                            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                              Steam
                            </div>
                          </div>

                          <SteamStoreWidget
                            appId={game.appId}
                            titleFallback={game.title}
                            url={game.storeUrl}
                          />
                        </div>

                      </div>

                      <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                        {game.primaryCta && game.storeUrl && (
                          <a
                            href={game.storeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                          >
                            {game.primaryCta}
                          </a>
                        )}

                        {game.secondaryCta && game.storeUrl && (
                          <a
                            href={game.storeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10"
                          >
                            {game.secondaryCta}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="border-l-0 border-white/10 bg-transparent p-6 md:p-8 lg:border-l">
                      <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                        Trailer
                      </div>

                      <iframe
                        src={game.trailerUrl}
                        title={`${game.title} trailer`}
                        className="aspect-video w-full overflow-hidden rounded-[1.75rem] border border-dashed border-white/15 bg-black/10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />

                      <p className="mt-6 max-w-2xl text-base leading-7 text-white/72">
                        {game.description}
                      </p>

                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="newsletter" className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                    Newsletter
                  </div>
                  <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                    Stay updated with my latest game news, updates, and releases
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                    Get the latest updates on my games directly without relying on social media.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                  <div className="space-y-4">
                    <form
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                      action="https://crimsoncloudgames.us5.list-manage.com/subscribe/post?u=e3de8e5f73a24d015117f68fd&id=0bc743644a&f_id=00703de0f0"
                      method="POST"
                      target="newsletterTarget"
                      onSubmit={(event) => {
                        const email = newsletterEmail.trim();
                        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

                        if (!email || !emailIsValid) {
                          event.preventDefault();
                          setNewsletterError("Please enter a valid email address.");
                          return;
                        }

                        setNewsletterError("");
                        setNewsletterSubmitted(true);
                      }}
                    >
                      <div className="space-y-4">
                        <input
                          id="mce-FNAME"
                          type="text"
                          name="FNAME"
                          value={newsletterName}
                          onChange={(event) => setNewsletterName(event.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                        />

                        <input
                          id="mce-EMAIL"
                          type="email"
                          name="EMAIL"
                          value={newsletterEmail}
                          onChange={(event) => setNewsletterEmail(event.target.value)}
                          placeholder="Email address"
                          required
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                        />

                        {newsletterError ? (
                          <p className="text-sm text-red-300">{newsletterError}</p>
                        ) : null}

                        <input
                          type="text"
                          name="b_e3de8e5f73a24d015117f68fd_0bc743644a"
                          tabIndex="-1"
                          defaultValue=""
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        />

                        <button
                          type="submit"
                          name="subscribe"
                          className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:scale-[1.01]"
                        >
                          Subscribe.
                        </button>
                      </div>

                      {/* Legal Text */}
                      <p className="mt-4 text-xs leading-5 text-white/45">
                        By subscribing, you agree to receive updates and can unsubscribe anytime.
                      </p>
                    </form>

                    {newsletterSubmitted ? (
                      <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                        Thank you for subscribing to the newsletter.
                      </div>
                    ) : null}

                    <iframe
                      name="newsletterTarget"
                      title="newsletter signup result"
                      style={{ display: "none" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                    Contact
                  </div>
                  <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                    Send us a message
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                    Use this form to contact Crimson Cloud Games and we will reply to you at<br />contact@crimsoncloudgames.com.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-3 max-h-[24rem] overflow-hidden flex flex-col">
                  <div className="space-y-3 h-full min-h-0 flex flex-col overflow-hidden">
                    <form
                      action="https://formsubmit.co/contact@crimsoncloudgames.com"
                      method="POST"
                      target="contactTarget"
                      onSubmit={(event) => {
                        const email = contactEmail.trim();
                        const message = contactMessage.trim();
                        const subject = contactSubject.trim();
                        const name = contactName.trim();
                        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

                        if (!name || !email || !subject || !message || !emailIsValid) {
                          event.preventDefault();
                          setContactError("Please fill in all fields and use a valid email address.");
                          return;
                        }

                        setContactError("");
                        setContactSubmitted(true);
                      }}
                      className="rounded-[1.75rem] border border-white/10 bg-black/20 p-4 flex-1 min-h-0 overflow-hidden flex flex-col"
                    >
                      <input type="hidden" name="_subject" value="New contact form submission from Crimson Cloud Games" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <div className="space-y-3 overflow-y-auto flex-1 min-h-0 pr-2">
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={contactName}
                          onChange={(event) => setContactName(event.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
                        />
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={contactEmail}
                          onChange={(event) => setContactEmail(event.target.value)}
                          placeholder="Email address"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
                        />
                        <input
                          id="contact-subject"
                          type="text"
                          name="subject"
                          value={contactSubject}
                          onChange={(event) => setContactSubject(event.target.value)}
                          placeholder="Subject"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
                        />
                        <textarea
                          id="contact-message"
                          name="message"
                          value={contactMessage}
                          onChange={(event) => setContactMessage(event.target.value)}
                          placeholder="Message"
                          rows="3"
                          className="w-full h-24 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
                        />

                        {contactError ? (
                          <p className="text-sm text-red-300">{contactError}</p>
                        ) : null}

                        <button
                          type="submit"
                          className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:scale-[1.01]"
                        >
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {contactSubmitted ? (
                  <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                    Your message has been sent. We will contact you at the email address you provided.
                  </div>
                ) : null}

                <iframe
                  name="contactTarget"
                  title="contact form submission result"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </section>

          <section id="socials" className="mx-auto max-w-7xl px-6 pb-20">
            <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Socials
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Follow Crimson Cloud Games
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                Follow Crimson Cloud Games for trailers, demos, development updates, and launch news.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://store.steampowered.com/curator/45624604"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Steam
                </a>

                <a
                  href="https://www.youtube.com/@CrimsonCloudGames"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  YouTube
                </a>

                <a
                  href="https://discord.gg/5xd6ZF8JMp"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Discord
                </a>
               
                <a
                  href="https://x.com/CrimsonCloudG"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  X
                </a>

                <a
                  href="https://bsky.app/profile/crimsoncloudgames.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Bluesky
                </a>

                <a
                  href="https://crimson-cloud-games.itch.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  itch.io
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="border-t border-white/10 bg-[#07090d]/80 py-6">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/70 space-y-2">
            <Link to="/privacy-policy" className="block underline transition hover:text-white">
              Privacy Policy
            </Link>
            <p>&copy; 2026 Crimson Cloud Games. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {mediaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[#0b0f15] p-5 shadow-2xl shadow-black/60 md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            <div className="mb-4 pr-14">
              <div className="text-xs uppercase tracking-[0.18em] text-red-300/80">
                {mediaModal.type === "trailer" ? "Trailer" : "Screenshot viewer"}
              </div>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">{mediaModal.title}</h3>
            </div>

            <div className="relative flex items-center gap-4">
              {mediaModal.items.length > 1 && (
                <button
                  type="button"
                  onClick={showPrev}
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
                >
                  ‹
                </button>
              )}

              <div className="flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
                <div className="flex aspect-video items-center justify-center p-2 text-center md:p-6">
                  {mediaModal.type === "trailer" ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <div>
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl text-white/85">
                          ▶
                        </div>
                        <div className="text-2xl font-semibold text-white/90">
                          {currentModalItem?.label}
                        </div>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 md:text-base">
                          Trailer preview is disabled here so the page does not keep asking for YouTube network access.
                        </p>
                        {currentModalItem?.externalUrl && (
                          <a
                            href={currentModalItem.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                          >
                            Open trailer on YouTube
                          </a>
                        )}
                      </div>
                    </div>
                  ) : currentModalItem?.src ? (
                    <div className="h-full w-full">
                      <img
                        src={currentModalItem.src}
                        alt={currentModalItem.label}
                        className="h-full w-full rounded-[1.25rem] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="mx-auto flex aspect-video max-w-5xl items-end rounded-[1.75rem] border border-dashed border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-left">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                            {mediaModal.title}
                          </div>
                          <div className="mt-2 text-3xl font-bold text-white/90">
                            {currentModalItem?.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {mediaModal.items.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
                >
                  ›
                </button>
              )}
            </div>

            {mediaModal.items.length > 1 && (
              <div className="mt-5 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
                >
                  Left
                </button>
                <div className="text-sm text-white/45">
                  {mediaModal.currentIndex + 1} / {mediaModal.items.length}
                </div>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
                >
                  Right
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}