import React from 'react';
import { Question as QuestionType, Option } from '../types/assessment';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (option: Option) => void;
  currentNumber: number;
  totalQuestions: number;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  currentNumber,
  totalQuestions
}) => {
  if (!question) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Pertanyaan {currentNumber} dari {totalQuestions}
          </span>
          <div className="w-64 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(currentNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
      </div>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
          >
            <span className="block text-lg font-medium text-gray-900">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};