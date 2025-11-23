"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 rounded-full border border-purple-500/50 px-4 py-2 text-sm text-purple-200 hover:bg-purple-800/40 transition"
    >
      ← Retour
    </button>
  );
}