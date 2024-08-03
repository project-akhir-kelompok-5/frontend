import { User } from "../../(mapel)/interface";

export interface Kelas {
  id?: number;
  nama_kelas: string;
  created_at: string;
  users: User[];
}

export interface KelasListResponse {
  data: Kelas[];
}
