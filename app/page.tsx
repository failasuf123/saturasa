'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  // Dummy data untuk fitur
  const features = [
    {
      icon: '🎨',
      title: 'Desain Elegan',
      description: 'Pilih dari ratusan template profesional yang bisa disesuaikan'
    },
    {
      icon: '📱',
      title: 'Ramah Mobile',
      description: 'Tampilan sempurna di semua perangkat dan ukuran layar'
    },
    {
      icon: '📊',
      title: 'Pelacakan RSVP',
      description: 'Kelola konfirmasi kehadiran tamu secara otomatis'
    }
  ];

  // Dummy data untuk template
  const templates = [
    {
      id: 1,
      name: 'Minimalis Elegant',
      category: 'Pernikahan'
    },
    {
      id: 2,
      name: 'Garden Party',
      category: 'Ulang Tahun'
    },
    {
      id: 3,
      name: 'Modern Luxury',
      category: 'Acara Perusahaan'
    }
  ];

  return (
    <>
      <Head>
        <title>saturasa - Undangan Digital Elegan</title>
        <meta name="description" content="Buat undangan digital profesional dengan saturasa. Solusi mudah untuk acara spesial Anda." />
        <meta name="keywords" content="undangan digital, pernikahan, acara, undangan online" />
        <meta property="og:title" content="saturasa - Undangan Digital Elegan" />
        <meta property="og:description" content="Buat undangan digital profesional untuk acara spesial Anda" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Navbar Dummy */}
      <nav className="bg-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-500 rounded-lg"></div>
            <span className="font-bold text-xl text-gray-800">saturasa</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Fitur', 'Template', 'Harga', 'Tentang'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-purple-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-colors">
            Masuk
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Buat Undangan Digital <span className="text-purple-500">Elegan</span> dalam Hitungan Menit
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              saturasa membantu Anda membuat undangan digital profesional yang mengesankan untuk pernikahan, ulang tahun, dan acara spesial lainnya.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-purple-200 mr-4">
                Buat Undangan Gratis
              </button>
              <button className="border-2 border-purple-500 text-purple-500 hover:bg-purple-50 font-semibold px-8 py-4 rounded-full text-lg transition-colors">
                Lihat Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Penjelasan Produk */}
        <section className="py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Undangan Digital Modern</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                saturasa memberikan solusi pembuatan undangan digital yang mudah, cepat, dan profesional untuk semua jenis acara spesial Anda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Template Showcase */}
        <section className="py-20 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Template Populer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih dari berbagai template profesional yang bisa disesuaikan dengan gaya Anda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <motion.div
                  key={template.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-60 bg-gradient-to-r from-purple-300 to-pink-300 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="font-bold text-gray-800">{template.name}</span>
                      <p className="text-gray-600 text-sm">{template.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.category}</p>
                    <button className="w-full border border-purple-500 text-purple-500 hover:bg-purple-50 py-2 rounded-lg transition-colors">
                      Gunakan Template
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Membuat Undangan Digital Anda?</h2>
              <p className="text-xl max-w-2xl mx-auto mb-10 text-purple-100">
                Bergabunglah dengan ribuan pengguna yang telah membuat undangan elegan dengan saturasa.
              </p>
              <button className="bg-white text-purple-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg">
                Daftar Gratis Sekarang
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer Dummy */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                <span className="font-bold text-xl">saturasa</span>
              </div>
              <p className="text-gray-400">
                Membuat undangan digital yang elegan dan berkesan untuk momen spesial Anda.
              </p>
            </div>
            
            {['Produk', 'Perusahaan', 'Sumber Daya', 'Legal'].map((category) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {Array(4).fill(0).map((_, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        Link {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} saturasa. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </>
  );
}