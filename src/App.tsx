import React, { useState, useCallback, useEffect } from 'react';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { getRandomQuestions, calculateResult } from './utils/assessment';
import { Answer, Option, Question as QuestionType } from './types/assessment';
import { BrainCircuit } from 'lucide-react';

const TOTAL_QUESTIONS = 15;

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const initialQuestions = getRandomQuestions(TOTAL_QUESTIONS);
    setQuestions(initialQuestions);
    setIsLoading(false);
  }, []);

  const handleAnswer = useCallback((option: Option) => {
    setAnswers(prev => [...prev, {
      questionIndex: currentQuestionIndex,
      selectedOption: option
    }]);

    if (currentQuestionIndex + 1 >= TOTAL_QUESTIONS) {
      // Jika ini adalah pertanyaan terakhir, tunda menampilkan hasil
      setTimeout(() => {
        setShowResult(true);
      }, 1000); // Delay 1 detik untuk animasi loading
    }
    setCurrentQuestionIndex(prev => prev + 1);
  }, [currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsStarted(false);
    setShowResult(false);
    setQuestions(getRandomQuestions(TOTAL_QUESTIONS));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
            <BrainCircuit size={64} className="mx-auto mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold mb-2">Career Fit Assessment</h1>
            <p className="text-blue-100">Temukan jalur karir yang paling sesuai dengan kepribadianmu</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Bagaimana Cara Kerjanya?</h2>
                <p className="text-gray-600">
                  Jawab {TOTAL_QUESTIONS} pertanyaan singkat untuk menganalisis apakah kamu lebih cocok menjadi seorang pengusaha atau karyawan.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Apa yang Akan Kamu Dapatkan?</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Analisis mendalam tentang kecenderungan karirmu</li>
                  <li>• Rekomendasi jalur karir yang sesuai</li>
                  <li>• Insight tentang karakteristik dominan dalam dirimu</li>
                </ul>
              </div>
              
              <button
                onClick={() => setIsStarted(true)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors transform hover:scale-105 duration-200"
              >
                Mulai Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <Result
          result={calculateResult(answers)}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  if (currentQuestionIndex >= TOTAL_QUESTIONS) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Menganalisis jawabanmu...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
        currentNumber={currentQuestionIndex + 1}
        totalQuestions={TOTAL_QUESTIONS}
      />
    </div>
  );
}

export default App;