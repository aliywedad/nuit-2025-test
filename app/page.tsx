import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <section className="rounded-3xl border border-purple-500/60 bg-gradient-to-br from-purple-900/40 via-black to-slate-900/80 p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
          3FA Security Trainer
        </h1>
        <p className="text-gray-200">
          Bienvenue dans ton mini-projet de cybersécurité. Cette application
          t&apos;explique les risques liés aux mots de passe faibles,
          au vol de comptes et à la mauvaise utilisation de l&apos;authentification,
          puis te montre comment te protéger grâce au
          <span className="font-semibold text-purple-300"> Three-Factor Authentication (3FA)</span>.
        </p>
        <p className="mt-3 text-gray-300">
          Ensuite, tu peux tester tes connaissances avec un quiz chronométré :
          chaque question a 4 choix, un seul correct, un score et un temps de 30 secondes.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/3fa"
            className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Comprendre le 3FA
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-purple-400/70 px-6 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-900/40"
          >
            Commencer le quiz
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <h2 className="text-lg font-semibold text-purple-200 mb-2">
            Dangers
          </h2>
          <p className="text-sm text-gray-300">
            Vol de mots de passe, phishing, attaques par force brute, fuite de
            données… un seul facteur d&apos;authentification n&apos;est plus suffisant.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <h2 className="text-lg font-semibold text-purple-200 mb-2">
            Protection
          </h2>
          <p className="text-sm text-gray-300">
            Le 3FA combine plusieurs preuves (mot de passe, appareil, biométrie)
            pour rendre l&apos;attaque beaucoup plus difficile pour un attaquant.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
          <h2 className="text-lg font-semibold text-purple-200 mb-2">
            Ton objectif
          </h2>
          <p className="text-sm text-gray-300">
            Apprendre les bons réflexes de sécurité et vérifier tes connaissances
            grâce au quiz, avec score et temps limité.
          </p>
        </div>
      </section>
    </div>
  );
}

