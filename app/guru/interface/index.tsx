import { Mapel, User } from "@/app/admin/mapel/interface";

interface GuruSubject {
  id: number;
  created_at: string;
  updated_at: string;
  user: User;
  mapel: Mapel[];
}

export interface GuruSubjectListResponse {
  data: GuruSubject[]
}