import { Question, Answer, Result } from '../types/assessment';
import { questions } from '../data/questions';

export const getRandomQuestions = (count: number): Question[] => {
  if (count > questions.length) {
    count = questions.length;
  }
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const calculateResult = (answers: Answer[]): Result => {
  if (answers.length === 0) {
    return {
      category: 'Keduanya',
      scores: { karyawan: 50, pengusaha: 50 },
      tags: ['adaptabilitas'],
      analysis: 'Belum cukup data untuk menganalisis preferensi karir.'
    };
  }

  let karyawanScore = 0;
  let pengusahaScore = 0;
  const tagCount: Record<string, number> = {};
  
  // Hitung total skor dan tag
  answers.forEach(answer => {
    karyawanScore += answer.selectedOption.score.karyawan;
    pengusahaScore += answer.selectedOption.score.pengusaha;
    
    answer.selectedOption.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  // Konversi ke persentase
  const totalKaryawan = answers.length * 5; // maksimum skor per kategori
  const totalPengusaha = answers.length * 5;
  
  const scores = {
    karyawan: Math.round((karyawanScore / totalKaryawan) * 100),
    pengusaha: Math.round((pengusahaScore / totalPengusaha) * 100)
  };
  
  // Tentukan kategori
  let category: Result['category'];
  const scoreDifference = Math.abs(scores.karyawan - scores.pengusaha);
  
  if (scoreDifference <= 10) {
    category = 'Keduanya';
  } else {
    category = scores.karyawan > scores.pengusaha ? 'Karyawan' : 'Pengusaha';
  }
  
  // Ambil 3 tag terbanyak
  const dominantTags = Object.entries(tagCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);
  
  const analysis = generateAnalysis(category, dominantTags);
  
  return {
    category,
    scores,
    tags: dominantTags,
    analysis
  };
};

const generateAnalysis = (category: Result['category'], tags: string[]): string => {
  const templates = {
    Karyawan: [
      `Berdasarkan jawabanmu, kamu memiliki kecenderungan kuat untuk menjadi seorang Karyawan. Karakteristik ${tags[0]} dan ${tags[1]} yang dominan menunjukkan bahwa kamu menghargai struktur dan perkembangan karir yang jelas.`,
      `Profilmu sangat sesuai dengan jalur karir sebagai Karyawan. Fokusmu pada ${tags[0]} dan ${tags[1]} mencerminkan preferensimu terhadap lingkungan kerja yang terstruktur dan profesional.`
    ],
    Pengusaha: [
      `Jawabanmu menunjukkan jiwa Pengusaha yang kuat. Dominasi ${tags[0]} dan ${tags[1]} mencerminkan karakteristik entrepreneur sejati yang siap mengambil tantangan baru.`,
      `Kamu memiliki potensi besar sebagai Pengusaha. Kombinasi ${tags[0]} dan ${tags[1]} dalam profilmu menunjukkan kemampuan untuk menciptakan dan memimpin bisnis sendiri.`
    ],
    Keduanya: [
      `Kamu memiliki keseimbangan unik antara karakteristik Karyawan dan Pengusaha. Kombinasi ${tags[0]} dan ${tags[1]} membuatmu adaptif dalam berbagai situasi kerja.`,
      `Profilmu menunjukkan fleksibilitas yang menarik. Dengan ${tags[0]} dan ${tags[1]} yang seimbang, kamu bisa sukses di kedua jalur karir.`
    ]
  };

  const template = templates[category][Math.floor(Math.random() * templates[category].length)];
  return template.replace(/\${tags\[(\d)\]}/g, (_, index) => tags[index] || 'adaptabilitas');
};