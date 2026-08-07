import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '16px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ color: 'var(--text-sub)', maxWidth: '480px', marginBottom: '24px' }}>
        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
      </p>
      <Link href="/" className="btn btn--cyan">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
