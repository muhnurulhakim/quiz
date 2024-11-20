export interface Option {
  text: string;
  score: {
    karyawan: number;
    pengusaha: number;
  };
  tags: string[];
}

export interface Question {
  question: string;
  options: Option[];
}

export interface Answer {
  questionIndex: number;
  selectedOption: Option;
}

export interface Result {
  category: 'Karyawan' | 'Pengusaha' | 'Keduanya';
  scores: {
    karyawan: number;
    pengusaha: number;
  };
  tags: string[];
  analysis: string;
}