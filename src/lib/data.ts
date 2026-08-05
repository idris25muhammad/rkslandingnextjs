import informasiId from '../../data/informasi_umum.json';
import informasiEn from '../../data/informasi_umum_en.json';
import kurikulumData from '../../data/kurikulum.json';
import dosenData from '../../data/dosen.json';
import sertifikasiData from '../../data/sertifikasi.json';
import personaData from '../../data/persona.json';
import prasyaratData from '../../data/prasyarat.json';
import integratedData from '../../data/integrated.json';

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

export interface RawCourse {
  kode?: string;
  code?: string;
  nama?: string;
  name_id?: string;
  courses?: string;
  name_en?: string;
  sks?: number;
  sks_total?: number;
  kategori_iabee?: string;
  category_en?: string;
  kategori_rumpun?: string;
  category_id?: string;
  category?: string;
  deskripsi?: string;
  description_id?: string;
  description_en?: string;
  prasyarat_matkul?: string;
  prerequisites?: string;
  software_toolset_utama?: string;
  tools?: string[];
  integrasi_sertifikasi_industri?: string;
  certification?: string;
  capaian_pembelajaran?: string[];
}

export interface NormalizedCourse {
  code: string;
  name_id: string;
  name_en: string;
  sks_total: number;
  category_rumpun: string;
  category_iabee: string;
  description: string;
  prerequisites: string;
  tools_str: string;
  cert_str: string;
  cpl: string[];
}

export interface SemesterBlock {
  semester: number;
  title: string;
  courses: NormalizedCourse[];
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

export const prasyarat = prasyaratData as unknown as {
  categoryColors: Record<string, string>;
  connections: { ids: [string, string]; cat: string }[];
  semesters: {
    label: string;
    courses: { name: string; id?: string }[];
  }[];
};

export const integratedCurriculum = integratedData as unknown as {
  legend: { key: string; label: string; color?: string }[];
  rows: {
    year: string;
    yearSub: string;
    project: string | null;
    projectSpan: number;
    yearSpan: number;
    semesters: {
      semester: string;
      courses: { name: string; skill: string }[];
    }[];
  }[];
};

const SEMESTER_TITLES: Record<number, string> = {
  1: 'Semester 1 - Introduction to software development in Cyber Security Context',
  2: 'Semester 2 - Network Pentest and Risk Management',
  3: 'Semester 3 - Security Operation Center Game',
  4: 'Semester 4 - Web Penetration Testing',
  5: 'Semester 5 - Wide Range Application Penetration Testing (External Project Expected)',
  6: 'Semester 6 - Cyber Security Auditing: ISO27001, KAMI.V4, ISMS (In Colab with PCT TeFA)',
  7: 'Semester 7 - Industrial Attachment',
  8: 'Semester 8 - Final Project',
};

export function normalizeCourse(c: RawCourse): NormalizedCourse {
  return {
    code: c.kode || c.code || '-',
    name_id: c.nama || c.name_id || '',
    name_en: c.courses || c.name_en || c.nama || '',
    sks_total: c.sks !== undefined ? c.sks : c.sks_total || 0,
    category_rumpun: c.kategori_rumpun || c.category_id || c.category || 'Mata Kuliah',
    category_iabee: c.kategori_iabee || c.category_en || '',
    description: c.deskripsi || c.description_id || c.description_en || '',
    prerequisites: c.prasyarat_matkul || c.prerequisites || '-',
    tools_str: c.software_toolset_utama || (Array.isArray(c.tools) ? c.tools.join(', ') : '-'),
    cert_str: c.integrasi_sertifikasi_industri || c.certification || '-',
    cpl: Array.isArray(c.capaian_pembelajaran) ? c.capaian_pembelajaran : [],
  };
}

export function getSemestersList(): SemesterBlock[] {
  const result: SemesterBlock[] = [];
  for (let semNum = 1; semNum <= 8; semNum++) {
    const key = `semester_${semNum}` as keyof typeof kurikulumData;
    const raw = (kurikulumData as unknown as Record<string, RawCourse[]>)[key];
    if (Array.isArray(raw)) {
      result.push({
        semester: semNum,
        title: SEMESTER_TITLES[semNum] || `Semester ${semNum}`,
        courses: raw.map(normalizeCourse),
      });
    }
  }
  return result;
}

export const semesterOptions = Object.keys(SEMESTER_TITLES).map((n) => ({
  value: n,
  label: SEMESTER_TITLES[Number(n)],
}));

export function findCourseByCode(code: string): NormalizedCourse | null {
  for (const sem of getSemestersList()) {
    const found = sem.courses.find((c) => c.code === code);
    if (found) return found;
  }
  return null;
}
