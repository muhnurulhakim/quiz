import { Question } from '../types/assessment';

export const questions: Question[] = [
  {
    question: "Apa yang paling penting untukmu dalam pekerjaan?",
    options: [
      {
        text: "Kestabilan penghasilan",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["keamanan", "stabilitas"]
      },
      {
        text: "Kebebasan mengatur waktu",
        score: { karyawan: 2, pengusaha: 4 },
        tags: ["kreativitas", "otonomi"]
      },
      {
        text: "Mendapatkan promosi jabatan",
        score: { karyawan: 4, pengusaha: 2 },
        tags: ["ambisi", "karir"]
      },
      {
        text: "Membangun sesuatu dari nol",
        score: { karyawan: 1, pengusaha: 5 },
        tags: ["inovasi", "kepemimpinan"]
      }
    ]
  },
  {
    question: "Bagaimana kamu menghadapi risiko?",
    options: [
      {
        text: "Lebih suka menghindari risiko",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["keamanan", "konservatif"]
      },
      {
        text: "Mengambil risiko yang terukur",
        score: { karyawan: 3, pengusaha: 3 },
        tags: ["analitis", "seimbang"]
      },
      {
        text: "Menyukai tantangan berisiko",
        score: { karyawan: 1, pengusaha: 5 },
        tags: ["berani", "petualang"]
      }
    ]
  },
  {
    question: "Dalam situasi kerja tim, peran apa yang kamu sukai?",
    options: [
      {
        text: "Mengikuti arahan dan berkontribusi sebagai anggota tim",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["kolaboratif", "team-player"]
      },
      {
        text: "Memimpin dan mengarahkan tim",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["kepemimpinan", "inisiatif"]
      },
      {
        text: "Bekerja mandiri dengan minimal interaksi",
        score: { karyawan: 3, pengusaha: 4 },
        tags: ["independen", "fokus"]
      }
    ]
  },
  {
    question: "Bagaimana pandanganmu tentang jam kerja?",
    options: [
      {
        text: "Lebih suka jadwal teratur 9-5",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["struktur", "stabilitas"]
      },
      {
        text: "Fleksibel selama target tercapai",
        score: { karyawan: 3, pengusaha: 4 },
        tags: ["fleksibilitas", "hasil"]
      },
      {
        text: "Siap bekerja kapanpun diperlukan",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["dedikasi", "komitmen"]
      }
    ]
  },
  {
    question: "Apa motivasi utamamu dalam bekerja?",
    options: [
      {
        text: "Gaji dan tunjangan yang kompetitif",
        score: { karyawan: 5, pengusaha: 2 },
        tags: ["finansial", "keamanan"]
      },
      {
        text: "Kesempatan menciptakan dampak besar",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["visi", "dampak"]
      },
      {
        text: "Pengembangan skill dan pengalaman",
        score: { karyawan: 4, pengusaha: 3 },
        tags: ["pembelajaran", "pertumbuhan"]
      }
    ]
  },
  {
    question: "Bagaimana kamu menangani kegagalan?",
    options: [
      {
        text: "Mencari umpan balik dan belajar dari kesalahan",
        score: { karyawan: 4, pengusaha: 4 },
        tags: ["pembelajaran", "adaptif"]
      },
      {
        text: "Melihatnya sebagai bagian dari proses",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["resiliensi", "optimisme"]
      },
      {
        text: "Berusaha menghindari kegagalan dengan persiapan matang",
        score: { karyawan: 5, pengusaha: 2 },
        tags: ["perfeksionis", "terencana"]
      }
    ]
  },
  {
    question: "Apa prioritasmu dalam 5 tahun ke depan?",
    options: [
      {
        text: "Mencapai posisi senior di perusahaan",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["karir", "ambisi"]
      },
      {
        text: "Membangun bisnis sendiri",
        score: { karyawan: 1, pengusaha: 5 },
        tags: ["kewirausahaan", "independen"]
      },
      {
        text: "Mengembangkan portfolio investasi",
        score: { karyawan: 3, pengusaha: 4 },
        tags: ["finansial", "strategis"]
      }
    ]
  },
  {
    question: "Bagaimana kamu melihat inovasi?",
    options: [
      {
        text: "Mengikuti prosedur yang sudah terbukti",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["konservatif", "stabilitas"]
      },
      {
        text: "Mencari cara baru dalam batasan yang ada",
        score: { karyawan: 3, pengusaha: 4 },
        tags: ["kreatif", "adaptif"]
      },
      {
        text: "Selalu mencoba pendekatan baru",
        score: { karyawan: 1, pengusaha: 5 },
        tags: ["inovatif", "berani"]
      }
    ]
  },
  {
    question: "Apa yang membuatmu merasa puas dalam bekerja?",
    options: [
      {
        text: "Mencapai target dan mendapat pengakuan",
        score: { karyawan: 4, pengusaha: 3 },
        tags: ["prestasi", "pengakuan"]
      },
      {
        text: "Melihat ide menjadi kenyataan",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["kreativitas", "realisasi"]
      },
      {
        text: "Stabilitas dan keamanan finansial",
        score: { karyawan: 5, pengusaha: 1 },
        tags: ["keamanan", "stabilitas"]
      }
    ]
  },
  {
    question: "Bagaimana kamu menangani stress?",
    options: [
      {
        text: "Mengikuti rutinitas yang terstruktur",
        score: { karyawan: 5, pengusaha: 2 },
        tags: ["struktur", "stabilitas"]
      },
      {
        text: "Melihatnya sebagai tantangan",
        score: { karyawan: 2, pengusaha: 5 },
        tags: ["resiliensi", "optimisme"]
      },
      {
        text: "Mencari dukungan tim",
        score: { karyawan: 4, pengusaha: 3 },
        tags: ["kolaboratif", "support"]
      }
    ]
  }
];