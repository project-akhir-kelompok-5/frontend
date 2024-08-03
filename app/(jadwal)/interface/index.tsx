interface JamDetail {
  id: number;
  subject_code: number;
  kelas: number;
  nama_mapel: string;
  nama_kelas: string;
}

interface JamJadwal {
  id: number;
  jam_mulai: string;
  jam_selesai: string;
  is_rest: boolean;
  jam_detail: JamDetail[];
}

interface Jadwal {
  id: number;
  hari: string;
  jam_jadwal: JamJadwal[];
}

export interface JadwalListResponse {
  data: Jadwal[];
}

export interface JadwalListFilter {
  hari: string;
}

interface CreateJamDetail extends Pick<JamDetail, "subject_code" | "kelas"> {}
interface CreateJamJadwal
  extends Pick<JamJadwal, "jam_mulai" | "jam_selesai" | "is_rest"> {
  jam_detail: CreateJamDetail[];
}
export interface CreateJadwalPayload {
  hari: string;
  jam_jadwal: CreateJamJadwal[]; // This expects an array of CreateJamJadwal
}
