import informasiId from '../../data/informasi_umum.json';
import informasiEn from '../../data/informasi_umum_en.json';
import dosenData from '../../data/dosen.json';
import sertifikasiData from '../../data/sertifikasi.json';
import personaData from '../../data/persona.json';

export type Lang = 'id' | 'en';

export interface CareerItem {
  posisi: string;
  deskripsi: string;
}

export interface GeneralInfo {
  program_studi: string;
  deskripsi: string;
  jenjang: string;
  lama_studi: string;
  visi: string;
  misi: string[];
  tujuan: string[];
  sasaran: string[];
  program_educational_objectives: {
    deskripsi: string;
    target_waktu: string;
    profil_profesional_mandiri: string[];
  };
  kompetensi_lulusan: string[];
  capaian_pembelajaran_lulusan: string[];
  peluang_kerja_lulusan: CareerItem[];
}

export interface Dosen {
  nama: string;
  jabatan: string;
  nidn_nik: string;
  pendidikan_terakhir: string;
  email: string;
  foto: string;
  riwayat_pendidikan: string[];
  bidang_spesialis: string;
}

export interface Persona {
  title: string;
  desc: string;
  links: { label: string; url: string }[];
}

export interface Certification {
  name: string;
  img: string;
}

export const generalInfo: Record<Lang, GeneralInfo> = {
  id: informasiId as unknown as GeneralInfo,
  en: informasiEn as unknown as GeneralInfo,
};

export const dosen: Dosen[] = (dosenData as Dosen[]).map((d) => ({
  ...d,
  foto: d.foto.startsWith('/') ? d.foto : `/${d.foto}`,
}));

export const certifications: Certification[] = sertifikasiData as Certification[];

export const personas: Record<Lang, Record<string, Persona>> = personaData as unknown as Record<
  Lang,
  Record<string, Persona>
>;
