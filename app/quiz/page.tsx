"use client";

import { useEffect, useState } from "react";
import questions, { Question } from "../data";
import BackButton from "@/components/BackButton";
import useSound from "use-sound";

const QUESTION_TIME = 30; // secondes

export default function QuizPage() {
  const [playCorrect] = useSound("/sounds/sound1.mpeg");
  const [waiting] = useSound("/sounds/sound3.mpeg");
  const [playWrong] = useSound("/sounds/sound4.mpeg");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(QUESTION_TIME);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion: Question | undefined = questions[currentIndex];

  // Passe à une question précise et reset timer + sélection
  function goToQuestion(index: number) {
    setCurrentIndex(index);
    setRemainingTime(QUESTION_TIME);
    setSelectedIndex(null);
  }

  // Rejouer le quiz
  function handleRestart() {
    setScore(0);
    setShowResult(false);
    goToQuestion(0);
  }

  // Clic sur une réponse
  function handleAnswerClick(index: number) {
    if (!currentQuestion || selectedIndex !== null) return;

    setSelectedIndex(index);

    if (index === currentQuestion.correct) {
      playCorrect();
      setScore((s) => s + currentQuestion.credit);
    } else {
      playWrong();
    }

    // Avance à la question suivante après une petite pause
    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        setShowResult(true);
      } else {
        goToQuestion(currentIndex + 1);
      }
    }, 800);
  }

  // Timer : décrémente chaque seconde, et passe à la question suivante quand ça arrive à 0
  useEffect(() => {
    if (showResult) return;
    if (!currentQuestion) return;

    const timer = setTimeout(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          // Temps écoulé : question suivante ou résultats
          if (currentIndex + 1 >= questions.length) {
            setShowResult(true);
          } else {
            goToQuestion(currentIndex + 1);
          }
          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime, showResult, currentQuestion, currentIndex]);

  const maxScore = questions.reduce((sum, q) => sum + q.credit, 0);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Bouton retour */}
      <BackButton />

      <h1 className="mb-6 text-3xl font-semibold text-purple-200">
        Quiz Sécurité &amp; 3FA
      </h1>

      {showResult ? (
        <div className="rounded-3xl border border-purple-500/70 bg-zinc-900/80 p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-purple-200">
            Résultat du quiz
          </h2>
          <p className="text-gray-200">
            Score :{" "}
            <span className="font-semibold text-purple-300">
              {score} / {maxScore}
            </span>
          </p>
          <button
            onClick={handleRestart}
            className="mt-6 rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Rejouer
          </button>
        </div>
      ) : (
        <div className="space-y-6 rounded-3xl border border-purple-500/70 bg-zinc-900/80 p-8">
          {/* Header question */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">
              Question {currentIndex + 1} / {questions.length}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                remainingTime <= 5 ? "bg-red-600/80" : "bg-purple-600/80"
              }`}
            >
              {remainingTime}s
            </span>
          </div>

          <h2 className="text-xl font-semibold text-purple-100">
            {currentQuestion?.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion?.answers.map((answer, index) => {
              waiting();
              const isSelected = selectedIndex === index;
              const isCorrect = index === currentQuestion.correct;
              const showColors = selectedIndex !== null;

              let classes =
                "w-full text-left rounded-2xl border px-4 py-3 text-sm font-medium transition ";

              if (!showColors) {
                classes +=
                  "border-white/10 bg-black/30 hover:bg-purple-900/40 text-gray-100";
              } else if (isCorrect) {
                classes += "border-green-500/70 bg-green-600/30 text-green-100";
              } else if (isSelected) {
                classes += "border-red-500/70 bg-red-600/30 text-red-100";
              } else {
                classes += "border-white/10 bg-black/30 text-gray-300";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedIndex !== null}
                  className={classes}
                >
                  {answer}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
            <span>
              Score :{" "}
              <span className="font-semibold text-purple-300">{score}</span>
            </span>
            <span className="text-xs text-gray-400">
              +{currentQuestion?.credit} points si correct
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
