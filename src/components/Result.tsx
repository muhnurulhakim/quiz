import React, { useEffect, useState } from 'react';
import { Result as ResultType } from '../types/assessment';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Share2, Trophy, Twitter, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResultProps {
  result: ResultType;
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const data = [
    { name: 'Karyawan', value: result.scores.karyawan },
    { name: 'Pengusaha', value: result.scores.pengusaha }
  ];

  const COLORS = ['#3B82F6', '#EF4444'];

  const shareToTwitter = () => {
    const text = `Hasil Career Fit Assessment saya: ${result.category}! Cek hasil lengkapnya di: ${window.location.href}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <div className={`w-full max-w-3xl mx-auto transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white relative">
          <Trophy className="absolute top-4 right-4 w-12 h-12 text-yellow-300 animate-bounce" />
          <h2 className="text-3xl font-bold mb-2">Selamat! Analisis Selesai 🎉</h2>
          <p className="text-blue-100">Berdasarkan jawabanmu, kami telah menganalisis kecenderungan karirmu</p>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kamu Cocok Menjadi: {result.category}
              </h3>
              <p className="text-gray-600 mb-6">{result.analysis}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Karakteristik Dominan:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-64">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Karyawan: {result.scores.karyawan}%</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm">Pengusaha: {result.scores.pengusaha}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onRestart}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-all hover:scale-105 duration-200"
            >
              Mulai Ulang
            </button>
            <div className="flex-1 flex gap-2">
              <button
                onClick={shareToTwitter}
                className="flex-1 px-6 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg font-medium transition-all hover:scale-105 duration-200 flex items-center justify-center gap-2"
              >
                <Twitter size={20} />
                Twitter
              </button>
              <button
                onClick={shareToFacebook}
                className="flex-1 px-6 py-3 bg-[#4267B2] hover:bg-[#365899] text-white rounded-lg font-medium transition-all hover:scale-105 duration-200 flex items-center justify-center gap-2"
              >
                <Facebook size={20} />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};