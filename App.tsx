
import React, { useState } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  Printer, 
  Send, 
  Image as ImageIcon,
  School,
  Calendar,
  Clock,
  MapPin,
  Users,
  ClipboardList,
  Heart,
  UserCheck
} from 'lucide-react';
import { ReportData } from './types';

const App: React.FC = () => {
  const [formData, setFormData] = useState<ReportData>({
    tarikh: '',
    masa: '',
    tempat: '',
    sukan: '',
    kehadiran: '',
    aktiviti: '',
    nilaiMurni: '',
    guruHadir: '',
    images: Array(6).fill(''),
    disediakanOleh: '',
    disahkanOleh: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...formData.images];
        newImages[index] = reader.result as string;
        setFormData(prev => ({ ...prev, images: newImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...formData.images];
    newImages[index] = '';
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 text-black">
      {/* Header UI */}
      <header className="no-print bg-slate-200 text-black py-6 shadow-md mb-8">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-black" />
            <div>
              <h1 className="text-xl font-bold uppercase text-black">SMK TANJONG BUNGA</h1>
              <p className="text-black text-sm">Laporan Perjumpaan Sukan dan Permainan 2026</p>
            </div>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-zinc-800 transition-colors shadow-md"
          >
            <Printer className="w-5 h-5" />
            Cetak PDF
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4">
        <div className="no-print grid gap-6">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-6 py-4">
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-black" />
                Maklumat Laporan
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Basic Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-black" /> Tarikh
                    </label>
                    <input 
                      type="date" 
                      name="tarikh"
                      value={formData.tarikh}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-black" /> Masa
                    </label>
                    <input 
                      type="text" 
                      name="masa"
                      placeholder="Contoh: 8:00 AM - 10:00 AM"
                      value={formData.masa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-black" /> Tempat
                    </label>
                    <input 
                      type="text" 
                      name="tempat"
                      placeholder="Contoh: Padang Sekolah"
                      value={formData.tempat}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Sukan dan Permainan
                    </label>
                    <select 
                      name="sukan"
                      value={formData.sukan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                    >
                      <option value="">Sila Pilih</option>
                      <option value="Badminton">Badminton</option>
                      <option value="Bola Baling">Bola Baling</option>
                      <option value="Bola Jaring">Bola Jaring</option>
                      <option value="Bola Sepak">Bola Sepak</option>
                      <option value="Olahraga">Olahraga</option>
                      <option value="Sepak Takraw">Sepak Takraw</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                  <Users className="w-4 h-4 text-black" /> Bilangan Kehadiran
                </label>
                <input 
                  type="text" 
                  name="kehadiran"
                  placeholder="Jumlah murid hadir"
                  value={formData.kehadiran}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1">Ringkasan Aktiviti</label>
                <textarea 
                  name="aktiviti"
                  rows={3}
                  value={formData.aktiviti}
                  onChange={handleInputChange}
                  placeholder="Terangkan aktiviti yang dijalankan..."
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-black" /> Nilai Murni / Sivik
                </label>
                <input 
                  type="text" 
                  name="nilaiMurni"
                  value={formData.nilaiMurni}
                  onChange={handleInputChange}
                  placeholder="Contoh: Kerjasama, Disiplin"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-1 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-black" /> Senarai Guru Yang Hadir
                </label>
                <textarea 
                  name="guruHadir"
                  rows={2}
                  value={formData.guruHadir}
                  onChange={handleInputChange}
                  placeholder="Senaraikan nama guru..."
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
                />
              </div>
            </div>
          </div>

          {/* Photos Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-6 py-4">
              <h2 className="text-lg font-bold text-black flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-black" />
                Gambar Dokumentasi (6 Keping)
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.images.map((img, idx) => (
                  <div key={idx} className="relative group aspect-video rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 overflow-hidden">
                    {img ? (
                      <>
                        <img src={img} alt={`Aktiviti ${idx + 1}`} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeImage(idx)}
                          className="absolute top-2 right-2 p-1.5 bg-black text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center gap-1">
                        <PlusCircle className="w-8 h-8 text-slate-300 group-hover:text-black transition-colors" />
                        <span className="text-xs font-medium text-slate-500">Pilih Gambar</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload(idx)} />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-300 p-6 grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-1">Disediakan Oleh:</label>
              <input 
                type="text" 
                name="disediakanOleh"
                value={formData.disediakanOleh}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-1">Disahkan Oleh:</label>
              <input 
                type="text" 
                name="disahkanOleh"
                value={formData.disahkanOleh}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black outline-none transition-all text-black"
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl"
            >
              <Send className="w-6 h-6" />
              HANTAR & CETAK LAPORAN
            </button>
          </div>
        </div>

        {/* PRINT PREVIEW (A4 Layout) */}
        <div className="print-only mx-auto text-black" style={{ width: '210mm', minHeight: '297mm', padding: '10mm', backgroundColor: 'white' }}>
          <div className="text-center border-b-2 border-black pb-4 mb-6">
            <h3 className="text-xl font-bold text-black uppercase">SMK TANJONG BUNGA</h3>
            <h2 className="text-2xl font-black text-black tracking-tight">LAPORAN PERJUMPAAN SUKAN DAN PERMAINAN 2026</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <table className="w-full border-collapse border border-black text-sm text-black">
              <tbody>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold w-1/4">Tarikh</td>
                  <td className="border border-black p-3 w-1/4">{formData.tarikh}</td>
                  <td className="border border-black bg-slate-100 p-3 font-bold w-1/4">Masa</td>
                  <td className="border border-black p-3 w-1/4">{formData.masa}</td>
                </tr>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Tempat</td>
                  <td className="border border-black p-3">{formData.tempat}</td>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Sukan / Permainan</td>
                  <td className="border border-black p-3">{formData.sukan}</td>
                </tr>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Kehadiran</td>
                  <td className="border border-black p-3" colSpan={3}>{formData.kehadiran} orang</td>
                </tr>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Aktiviti</td>
                  <td className="border border-black p-3 h-24 align-top" colSpan={3}>{formData.aktiviti}</td>
                </tr>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Nilai Murni/Sivik</td>
                  <td className="border border-black p-3" colSpan={3}>{formData.nilaiMurni}</td>
                </tr>
                <tr>
                  <td className="border border-black bg-slate-100 p-3 font-bold">Guru Hadir</td>
                  <td className="border border-black p-3" colSpan={3}>{formData.guruHadir}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-black mb-3 text-center uppercase tracking-wider underline">Dokumentasi Bergambar</h4>
            <div className="grid grid-cols-3 gap-2">
              {formData.images.map((img, idx) => (
                <div key={idx} className="border border-black aspect-[4/3] bg-slate-50 flex items-center justify-center overflow-hidden rounded">
                  {img ? (
                    <img src={img} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] text-slate-400">Tiada Gambar {idx + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20 mt-12 pt-10">
            <div className="text-center">
              <div className="border-b border-black w-full mb-1 h-12"></div>
              <p className="font-bold text-sm text-black">Disediakan oleh:</p>
              <p className="text-sm text-black">{formData.disediakanOleh || '(Tandatangan Guru)'}</p>
            </div>
            <div className="text-center">
              <div className="border-b border-black w-full mb-1 h-12"></div>
              <p className="font-bold text-sm text-black">Disahkan oleh:</p>
              <p className="text-sm text-black">{formData.disahkanOleh || '(Tandatangan Penyelaras)'}</p>
            </div>
          </div>
          
          <div className="mt-10 text-[10px] text-black text-center italic">
            Dokumen ini dijana secara digital untuk SMK Tanjong Bunga melalui Sistem Laporan Perjumpaan 2026.
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
