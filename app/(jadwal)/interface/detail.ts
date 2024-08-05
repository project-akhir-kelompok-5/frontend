// Interface untuk detail jam
interface JamDetail {
  id: number;
  kelas: {
    id: number;
    nama_kelas: string;
  };
  subject_code: {
    id: number;
    code: string;
  };
}

// Interface untuk jam jadwal
interface JamJadwal {
  id: number;
  jam_mulai: string;
  jam_selesai: string;
  is_rest: boolean;
  jam_detail: JamDetail[];
}

// Interface untuk data jadwal
interface JadwalDetailData {
  id: number;
  hari: {
    id: number;
    nama_hari: string;
  };
  jam_jadwal: JamJadwal[];
}

// Interface untuk response detail jadwal
export interface JadwalDetailResponses extends JadwalDetailData {}
