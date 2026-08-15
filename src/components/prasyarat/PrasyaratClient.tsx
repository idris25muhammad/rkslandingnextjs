'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { prasyarat } from '@/lib/data-kurikulum';
import DiagramMobileNotice from '@/components/DiagramMobileNotice';

export default function PrasyaratClient() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [focusId, setFocusId] = useState<string | null>(null);

  const drawLines = useCallback(
    (focused: string | null) => {
      const svg = svgRef.current;
      const wrapper = wrapperRef.current;
      if (!svg || !wrapper) return;

      const SVGNS = 'http://www.w3.org/2000/svg';
      svg.innerHTML = '';
      const wrapperRect = wrapper.getBoundingClientRect();

      const activeNodes = new Set<string>();
      const activeLines = new Set<number>();

      if (focused) {
        wrapper.classList.add('is-active');
        activeNodes.add(focused);
        prasyarat.connections.forEach((conn, index) => {
          if (conn.ids[0] === focused) {
            activeNodes.add(conn.ids[1]);
            activeLines.add(index);
          } else if (conn.ids[1] === focused) {
            activeNodes.add(conn.ids[0]);
            activeLines.add(index);
          }
        });
      } else {
        wrapper.classList.remove('is-active');
      }

      prasyarat.connections.forEach((conn, index) => {
        const startEl = document.getElementById(conn.ids[0]);
        const endEl = document.getElementById(conn.ids[1]);
        if (!startEl || !endEl) return;

        const isHighlighted = activeLines.has(index);
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const color = isHighlighted ? '#00f0ff' : prasyarat.categoryColors[conn.cat];

        const x1 = startRect.left + startRect.width / 2 - wrapperRect.left;
        const y1 = startRect.bottom - wrapperRect.top;
        const x2 = endRect.left + endRect.width / 2 - wrapperRect.left;
        const y2 = endRect.top - wrapperRect.top;

        const path = document.createElementNS(SVGNS, 'path');
        const cpY = y1 + (y2 - y1) / 2;
        path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${cpY}, ${x2} ${cpY}, ${x2} ${y2}`);
        path.setAttribute('class', `connector-line${isHighlighted ? ' highlight' : ''}`);
        path.style.stroke = color;
        svg.appendChild(path);

        const diamond = document.createElementNS(SVGNS, 'polygon');
        const size = 5;
        diamond.setAttribute(
          'points',
          `${x2},${y2 - size} ${x2 + size},${y2} ${x2},${y2 + size} ${x2 - size},${y2}`
        );
        diamond.setAttribute('class', `endpoint-diamond${isHighlighted ? ' highlight' : ''}`);
        diamond.style.fill = color;
        svg.appendChild(diamond);
      });

      document.querySelectorAll('.prasyarat-page .course-box').forEach((box) => {
        box.classList.toggle('highlight', activeNodes.has(box.id));
      });
    },
    []
  );

  useEffect(() => {
    drawLines(focusId);
  }, [drawLines, focusId]);

  useEffect(() => {
    const onResize = () => drawLines(focusId);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawLines, focusId]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.course-box')) return;
      setFocusId(null);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <>
      <section className="kurikulum-hero">
        <div className="container">
          <h1 className="kurikulum-hero__title">Peta Alur &amp; Prasyarat Mata Kuliah</h1>

          <p className="kurikulum-hero__subtitle">
            Visualisasi alur kurikulum yang terstruktur untuk membantu mahasiswa memahami tahapan
            belajar dan hubungan prasyarat antar-mata kuliah menuju kelulusan.
          </p>

          <div className="kurikulum-hero__actions">
            <a href="/kurikulum" className="btn btn--cyan btn--md">
              <span>← Kembali ke Kurikulum</span>
            </a>
            <a href="/integrated-curr" className="btn btn--outline-cyan btn--md">
              <span>Lihat Kurikulum Terintegrasi ↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="kurikulum-body prasyarat-page" style={{ paddingBottom: 80 }}>
        <div className="container">
          <DiagramMobileNotice />
          <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
          <div className="master-container">
            <div className="wrapper" ref={wrapperRef}>
              <div className="curriculum-grid">
                {prasyarat.semesters.map((sem) => (
                  <div className="prasyarat-row" key={sem.label} style={{ display: 'contents' }}>
                    <div className="cell semester-col">{sem.label}</div>
                    <div className="cell course-container">
                      {sem.courses.map((course, idx) =>
                        course.id ? (
                          <div
                            className="course-box"
                            id={course.id}
                            key={course.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setFocusId(course.id);
                            }}
                          >
                            {course.name}
                          </div>
                        ) : (
                          <div className="course-box" key={idx}>
                            {course.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <svg id="connection-layer" ref={svgRef}></svg>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
