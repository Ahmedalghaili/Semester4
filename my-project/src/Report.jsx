import React from 'react';

const ReportPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-red-600">LAPOR!</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700">Semua</a>
            <a href="#" className="text-gray-700">Laporan Saya</a>
            <a href="#" className="text-gray-700">Kawalan</a>
            <a href="#" className="text-gray-700">Terhangat</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-4 flex">
        <div className="w-2/3 mr-8">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img src="user-avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">Anonim</p>
                  <p className="text-gray-500 text-sm">20 menit yang lalu</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>Android</span>
                    <span>Terverifikasi</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-red-600">Harus diproses dalam 60 hari</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">Terdsposisi ke: RSUD Sele Be Solu Kota Sorong</p>
            <h2 className="text-xl font-semibold mb-2">Pendampingan Pelaksanaan Di Lingkup Provinsi Papua Barat Daya</h2>
            <p className="mb-4">Diskusi standar pelayanan publik tentang tolak ukur SP (standar pelayanan publik) dan mandat toiring yang terdiri dari 6 indikator dan 9 mandatoriing terkait standar pelayanan publik. Cara mengimput maklumat dan dokumentasi bukti dukung (SP) dan berita acara.</p>
            <p className="text-gray-500 text-sm mb-4">#7899727 | RABU, 2024/05/11</p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Tindak Lanjut 1</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Komentar 0</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Dukung</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Bagikan</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img src="user-avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">Kumulunumbus</p>
                  <p className="text-gray-500 text-sm">38 menit yang lalu</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>Android</span>
                    <span>Detindaklanjuti oleh Instansi</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-red-600">Selesai otomatis dalam 10 hari</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-2">Terdsposisi ke: Humas</p>
            <h2 className="text-xl font-semibold mb-2">Tapera Menyengsarakan!!</h2>
            <p className="mb-4">Halo, saya disini mewakili rakyat Indonesia yg keluhannya tidak didengar mengenai tapera. Tapera ini sangat menyengsarakan rakyat karena: 1) pajak kami sudah banyak malah ditambah 2,5% buat tapera...</p>
            <p className="text-gray-500 text-sm mb-4">#7899727 | Jumat, 2024/05/11</p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Tindak Lanjut 1</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Komentar 0</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Dukung</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Bagikan</button>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="font-semibold mb-4">KISAH SUKSES</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold">Aspirasi - Persyaratan PKKPR</h4>
              <p className="text-gray-600 text-sm">[08.19. 2025/2024] +62 857-3677-6660. Assalamualaikum..selamat pagi, pk/bu/izin bertanya terkait aspirasi kami masih belum memiliki PKKPR...</p>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Zahrotul Fully</span>
                <span className="text-green-600">SELESAI</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 Komentar</span>
                <span>0 Dukungan</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold">Sinkronisasi Data KTP-EL</h4>
              <p className="text-gray-600 text-sm">Nik KTP-el yg sudah valid pada saat digunakan di aplikasi dapodik...</p>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Wahyuni Lamaka</span>
                <span className="text-green-600">SELESAI</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 Komentar</span>
                <span>0 Dukungan</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportPage;
