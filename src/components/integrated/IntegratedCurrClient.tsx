'use client';

import { useState } from 'react';
import { integratedCurriculum } from '@/lib/data';
import DiagramMobileNotice from '@/components/DiagramMobileNotice';

export default function IntegratedCurrClient() {
  const [activeSkill, setActiveSkill] = useState('all');
  const { legend, rows } = integratedCurriculum;

  return (
    <>
      <section className="kurikulum-hero">
        <div className="container">
          <h1 className="kurikulum-hero__title">Kurikulum Terintegrasi</h1>

          <p className="kurikulum-hero__subtitle">
            Pemetaan kurikulum secara menyeluruh untuk memastikan keterkaitan yang harmonis antara
            capaian pembelajaran, mata kuliah, dan kebutuhan industri.
          </p>

          <div className="kurikulum-hero__actions">
            <a href="/kurikulum" className="btn btn--cyan btn--md">
              <span>← Kembali ke Kurikulum</span>
            </a>
            <a href="/prasyarat-linkmap" className="btn btn--outline-cyan btn--md">
              <span>Lihat Peta Prasyarat ↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="kurikulum-body integrated-page" style={{ paddingBottom: 80 }}>
        <div className="container">
          <DiagramMobileNotice />
          <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
          <div className="wrapper">
            <div className="legend">
              {legend.map((item) => (
                <div
                  key={item.key}
                  className={`legend-item${activeSkill === item.key ? ' active' : ''}`}
                  onClick={() => setActiveSkill((prev) => (prev === item.key ? 'all' : item.key))}
                >
                  {item.color && <div className={`dot ${item.key}`}></div>}
                  {item.label}
                </div>
              ))}
            </div>

            <div className="curriculum-grid">
              {rows.map((row, rowIdx) => (
                <div className="integrated-row" key={rowIdx} style={{ display: 'contents' }}>
                  <div className="cell year-col" style={{ gridRow: `span ${row.yearSpan}` }}>
                    {row.year}
                    <span>{row.yearSub}</span>
                  </div>
                  {row.project && (
                    <div className="cell project-col" style={{ gridRow: `span ${row.projectSpan}` }}>
                      {row.project}
                    </div>
                  )}
                  {row.semesters.map((sem) => (
                    <div className="integrated-sem" key={sem.semester} style={{ display: 'contents' }}>
                      <div className="cell semester-col">{sem.semester}</div>
                      <div className="cell course-container">
                        {sem.courses.map((course, ci) => (
                          <div
                            key={ci}
                            className={`course-box ${course.skill}${activeSkill !== 'all' && course.skill !== activeSkill ? ' faded' : ''}`}
                          >
                            {course.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
