"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function PhishingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <BackButton />

      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-0.5 shadow-2xl">
        <div className="relative bg-gray-900 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Phishing
              </h1>

              <p className="text-gray-300 mb-4 text-lg">
                Le phishing est une technique d’attaque où un pirate tente de tromper l’utilisateur 
                pour qu’il divulgue des informations sensibles comme ses mots de passe ou coordonnées bancaires.
              </p>

              <p className="text-gray-300 mb-4">
                Types courants :
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-purple-300">Emails frauduleux</span> → imitant des entreprises légitimes.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-purple-300">Sites web trompeurs</span> → copies de sites officiels.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-purple-300">Messages instantanés</span> → WhatsApp, SMS ou réseaux sociaux.
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 text-sm md:text-base mb-6">
                Pour se protéger, vérifie toujours les liens, active 2FA/3FA et ne partage jamais tes mots de passe.
              </p>

              <Link
                href="/quiz"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
              >
                Tester tes connaissances
              </Link>
            </div>

            <div className="relative h-64 md:h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl" />
              <div className="absolute inset-4 border-2 border-dashed border-purple-400/30 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M4 6h16M4 18h16" />
                    </svg>
                  </div>
                  <p className="text-sm text-purple-300">
                    Exemple de phishing : faux emails et sites trompeurs
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Reste vigilant et vérifie toujours les liens avant de cliquer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
