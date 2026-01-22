
export type SportType = 'Badminton' | 'Bola Baling' | 'Bola Jaring' | 'Bola Sepak' | 'Olahraga' | 'Sepak Takraw' | '';

export interface ReportData {
  tarikh: string;
  masa: string;
  tempat: string;
  sukan: SportType;
  kehadiran: string;
  aktiviti: string;
  nilaiMurni: string;
  guruHadir: string;
  images: string[];
  disediakanOleh: string;
  disahkanOleh: string;
}
