'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLang } from '@/components/Providers';
import { getSemestersList, semesterOptions, type NormalizedCourse } from '@/lib/data';

function tagClassFor(categoryRumpun: string): string {
  let tagClass = 'tag-network';
  const r = categoryRumpun.toLowerCase();
  if (r.includes('pbl') || r.includes('proyek') || r.includes('project')) tagClass = 'tag-pbl';
  if (r.includes('offensive') || r.includes('pentest') || r.includes('siber')) tagClass = 'tag-offensive';
  if (r.includes('aplikasi') || r.includes('appsec') || r.includes('rekayasa')) tagClass = 'tag-appsec';
  return tagClass;
}

export default function KurikulumClient() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState('');
  const [semester, setSemester] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<NormalizedCourse | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('search');
    if (q) setSearch(q);
  }, []);

  const semesters = useMemo(() => getSemestersList(), []);

  const filteredSemesters = useMemo(() => {
    const q = search.toLowerCase().trim();
    return semesters
      .filter((sem) => semester === 'all' || semester === sem.semester.toString())
      .map((sem) => ({
        ...sem,
        courses: sem.courses.filter((course) => {
          if (!q) return true;
          return [
            course.code,
            course.name_id,
            course.name_en,
            course.description,
            course.tools_str,
            course.cert_str,
            course.prerequisites,
            course.category_iabee,
            course.category_rumpun,
          ]
            .join(' ')
            .toLowerCase()
            .includes(q);
        }),
      }))
      .filter((sem) => sem.courses.length > 0 || !q);
  }, [semesters, semester, search]);

  const hasResults = filteredSemesters.some((sem) => sem.courses.length > 0);

  return (
    <>
      <section className="kurikulum-hero">
        <div className="container">
          <h1 className="kurikulum-hero__title">{t.kurTitle}</h1>

          <p className="kurikulum-hero__subtitle">
            Mengintegrasikan standar akademik internasional dengan kerangka CDIO untuk melatih hard
            skill teknis dan soft skill abad ke-21 (kolaborasi, kepemimpinan, dan komunikasi)
            melalui pengerjaan proyek industri secara nyata.
          </p>

          <div className="kurikulum-hero__actions">
            <a href="/integrated-curr" className="btn btn--cyan btn--md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Kurikulum Terintegrasi ↗</span>
            </a>
            <a href="/prasyarat-linkmap" className="btn btn--outline-cyan btn--md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Prasyarat Mata Kuliah ↗</span>
            </a>
          </div>

          <div className="kurikulum-metrics-grid">
            <div className="metric-card">
              <div className="metric-card__number">144</div>
              <div className="metric-card__label">{t.m1Label}</div>
              <div className="metric-card__sub">{t.m1Sub}</div>
            </div>
            <div className="metric-card">
              <div className="metric-card__number">70%</div>
              <div className="metric-card__label">{t.m2Label}</div>
              <div className="metric-card__sub">{t.m2Sub}</div>
            </div>
            <div className="metric-card">
              <div className="metric-card__number">20+</div>
              <div className="metric-card__label">{t.m3Label}</div>
              <div className="metric-card__sub">{t.m3Sub}</div>
            </div>
            <div className="metric-card">
              <div className="metric-card__number">8-12 Bln</div>
              <div className="metric-card__label">{t.m4Label}</div>
              <div className="metric-card__sub">{t.m4Sub}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="kurikulum-body">
        <div className="container">
          <div className="kurikulum-filter-row">
            <div className="kurikulum-search-bar">
              <svg
                className="kurikulum-search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                className="kurikulum-search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama mata kuliah, kode, tool (Pentest, Python, Wireshark)..."
              />
            </div>

            <div className="kurikulum-select-wrapper">
              <select
                className="kurikulum-semester-select"
                aria-label="Pilih Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="all"> Semua Semester (1 - 8)</option>
                {semesterOptions.map((opt) => (
                  <option value={opt.value} key={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasResults ? (
            filteredSemesters.map((sem) => {
              const semSksTotal = sem.courses.reduce((sum, c) => sum + c.sks_total, 0);
              return (
                <section className="semester-section" id={`semester-${sem.semester}`} key={sem.semester}>
                  <div className="semester-header">
                    <h2 className="semester-header__title">
                      <span className="semester-badge">Semester 0{sem.semester}</span>
                      <span>{sem.title}</span>
                    </h2>
                    <div className="semester-header__meta">Total {semSksTotal} SKS</div>
                  </div>

                  <div className="courses-grid">
                    {sem.courses.map((course) => {
                      const courseTitle =
                        lang === 'en' && course.name_en ? course.name_en : course.name_id;
                      const subtitleEn =
                        lang !== 'en' && course.name_en && course.name_en !== course.name_id
                          ? course.name_en
                          : '';
                      return (
                        <div className="course-card" data-code={course.code} key={course.code}>
                          <div className="course-card__top">
                            <span className="course-code">{course.code}</span>
                            <span className={`course-category-tag ${tagClassFor(course.category_rumpun)}`}>
                              {course.category_rumpun}
                            </span>
                          </div>
                          <h3 className="course-card__title">{courseTitle}</h3>
                          {subtitleEn && (
                            <div
                              style={{
                                fontSize: '0.82rem',
                                color: 'var(--cyan-bright)',
                                fontWeight: 500,
                                marginBottom: 8,
                                fontFamily: "'JetBrains Mono',monospace",
                              }}
                            >
                              {subtitleEn}
                            </div>
                          )}
                          <p className="course-card__desc">{course.description}</p>

                          <div className="course-card__sks-pill">
                            <span>
                              SKS: <strong>{course.sks_total}</strong>
                            </span>
                            {course.category_iabee && (
                              <span>
                                IABEE: <strong>{course.category_iabee}</strong>
                              </span>
                            )}
                          </div>

                          <div className="course-card__footer">
                            <span className="course-prereq">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                              Prasyarat: {course.prerequisites}
                            </span>
                            <button className="course-detail-btn" onClick={() => setSelectedCourse(course)}>
                              Detail Silabus ↗
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ marginBottom: 12, color: 'var(--border-hover)' }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-main)', marginBottom: 8 }}>
                Mata Kuliah Tidak Ditemukan
              </h3>
              <p>Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}
        </div>
      </section>

      {selectedCourse && (
        <div
          className="course-modal-overlay active"
          aria-hidden={false}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCourse(null);
          }}
        >
          <div className="course-modal" role="dialog" aria-labelledby="modal-course-title">
            <div className="course-modal__header">
              <div>
                <span className="course-modal__code-badge">{selectedCourse.code}</span>
                <h3 className="course-modal__title" id="modal-course-title">
                  {lang === 'en' && selectedCourse.name_en
                    ? selectedCourse.name_en
                    : selectedCourse.name_id}
                </h3>
                <span className="course-category-tag">
                  {selectedCourse.category_rumpun}
                  {selectedCourse.category_iabee ? ` • ${selectedCourse.category_iabee}` : ''}
                </span>
              </div>
              <button className="course-modal__close" onClick={() => setSelectedCourse(null)} aria-label="Tutup Popup Modal">
                &times;
              </button>
            </div>

            <div className="course-modal__body">
              <div className="modal-info-group">
                <span className="modal-info-label">Ringkasan SKS &amp; Jam Matkul</span>
                <div
                  className="modal-info-val"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--cyan-bright)', fontWeight: 600 }}
                >
                  {selectedCourse.sks_total} SKS
                </div>
              </div>

              <div className="modal-info-group">
                <span className="modal-info-label">Deskripsi Silabus</span>
                <div className="modal-info-val">{selectedCourse.description}</div>
              </div>

              {selectedCourse.cpl.length > 0 && (
                <div className="modal-info-group">
                  <span className="modal-info-label">Capaian Pembelajaran (CPL / CPMK)</span>
                  <div className="modal-info-val">
                    <ul className="modal-cpl-list">
                      {selectedCourse.cpl.map((item, i) => (
                        <li className="modal-cpl-item" key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="modal-info-group">
                <span className="modal-info-label">Prasyarat Matkul</span>
                <div className="modal-info-val" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {selectedCourse.prerequisites || '-'}
                </div>
              </div>

              <div className="modal-info-group">
                <span className="modal-info-label">Software &amp; Toolset Utama</span>
                <div className="modal-tags-list">
                  {selectedCourse.tools_str && selectedCourse.tools_str !== '-'
                    ? selectedCourse.tools_str
                        .split(',')
                        .map((tool) => tool.trim())
                        .filter(Boolean)
                        .map((tool, i) => (
                          <span className="modal-tool-tag" key={i}>
                            {tool}
                          </span>
                        ))
                    : <span className="modal-tool-tag">-</span>}
                </div>
              </div>

              <div className="modal-info-group">
                <span className="modal-info-label">Sertifikasi Industri Relevan</span>
                {selectedCourse.cert_str && selectedCourse.cert_str !== '-' ? (
                  <div className="modal-cert-badge">🏆 {selectedCourse.cert_str}</div>
                ) : (
                  <div className="modal-info-val">-</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
