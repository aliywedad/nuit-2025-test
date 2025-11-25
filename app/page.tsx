import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* 3FA Section */}
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
        <section className="grid gap-6 my-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Dangers</h2>
            <p className="text-sm text-gray-300">
              Vol de mots de passe, phishing, attaques par force brute, fuite de
              données… un seul facteur d&apos;authentification n&apos;est plus suffisant.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Protection</h2>
            <p className="text-sm text-gray-300">
              Le 3FA combine plusieurs preuves (mot de passe, appareil, biométrie)
              pour rendre l&apos;attaque beaucoup plus difficile pour un attaquant.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Ton objectif</h2>
            <p className="text-sm text-gray-300">
              Apprendre les bons réflexes de sécurité et vérifier tes connaissances
              grâce au quiz, avec score et temps limité.
            </p>
          </div>
        </section>
      </section>

      {/* Cryptography Section */}
      <section className="rounded-3xl border border-purple-500/60 bg-gradient-to-br from-purple-900/40 via-black to-slate-900/80 p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
          Cryptographie
        </h1>
        <p className="text-gray-200">
          Comprends comment les messages et données sont protégés grâce aux techniques de cryptographie et pourquoi c’est essentiel pour la sécurité.
        </p>
        <p className="mt-3 text-gray-300">
          Teste ensuite tes connaissances avec un quiz sur les bases du chiffrement.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/cryptography"
            className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Comprendre la cryptographie
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-purple-400/70 px-6 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-900/40"
          >
            Commencer le quiz
          </Link>
        </div>
        <section className="grid gap-6 my-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Dangers</h2>
            <p className="text-sm text-gray-300">
              Vol de données, interception de messages, attaques MITM… sans chiffrement, tout est exposé.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Protection</h2>
            <p className="text-sm text-gray-300">
              La cryptographie protège les informations sensibles et assure confidentialité et intégrité.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Ton objectif</h2>
            <p className="text-sm text-gray-300">
              Comprendre le chiffrement, les clés publiques/privées et comment sécuriser tes communications.
            </p>
          </div>
        </section>
      </section>

      {/* Phishing Section */}
      <section className="rounded-3xl border border-purple-500/60 bg-gradient-to-br from-purple-900/40 via-black to-slate-900/80 p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
          Phishing
        </h1>
        <p className="text-gray-200">
          Apprends à identifier les e-mails, SMS ou sites frauduleux conçus pour voler tes informations personnelles.
        </p>
        <p className="mt-3 text-gray-300">
          Un quiz te permet de reconnaître les tentatives de phishing courantes.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/phishing"
            className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Comprendre le phishing
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-purple-400/70 px-6 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-900/40"
          >
            Commencer le quiz
          </Link>
        </div>
        <section className="grid gap-6 my-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Dangers</h2>
            <p className="text-sm text-gray-300">
              Arnaques par e-mail, faux sites bancaires et vol d’identifiants sont très fréquents.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Protection</h2>
            <p className="text-sm text-gray-300">
              Vérifie toujours les liens, les expéditeurs et active l’authentification forte.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Ton objectif</h2>
            <p className="text-sm text-gray-300">
              Détecter les arnaques et protéger tes comptes personnels et professionnels.
            </p>
          </div>
        </section>
      </section>

      {/* Network Security Section */}
      <section className="rounded-3xl border border-purple-500/60 bg-gradient-to-br from-purple-900/40 via-black to-slate-900/80 p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-4">
          Sécurité Réseau
        </h1>
        <p className="text-gray-200">
          Comprends les bases de la sécurité des réseaux, pare-feu, VPN, Wi-Fi sécurisé et menaces réseau courantes.
        </p>
        <p className="mt-3 text-gray-300">
          Teste tes connaissances avec un quiz sur la sécurisation des connexions réseau.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/network-security"
            className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Comprendre la sécurité réseau
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-purple-400/70 px-6 py-2 text-sm font-semibold text-purple-200 hover:bg-purple-900/40"
          >
            Commencer le quiz
          </Link>
        </div>
        <section className="grid gap-6 my-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Dangers</h2>
            <p className="text-sm text-gray-300">
              Attaques sur réseau Wi-Fi, sniffing, intrusion et compromission des données.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Protection</h2>
            <p className="text-sm text-gray-300">
              Utiliser VPN, mots de passe Wi-Fi forts, firewall et surveiller les connexions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5">
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Ton objectif</h2>
            <p className="text-sm text-gray-300">
              Comprendre les menaces réseau et savoir sécuriser ses connexions internet.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
