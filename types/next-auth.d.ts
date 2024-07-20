import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number | undefined | null;
      email: string | undefined | null;
      nama: string | undefined | any;
      avatar: any;
      accessToken: any;
      refreshToken: any;
      token: any;
      NIK: any;
      role: any;
    };
  }
}
