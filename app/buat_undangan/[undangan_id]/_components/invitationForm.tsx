// app/buat_undangan/[undangan_id]/_components/InvitationForm.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InvitationData, InvitationEvent, RSVP, Greetings } from '@/typings';

interface InvitationFormProps {
  data: InvitationData;
  setData: React.Dispatch<React.SetStateAction<InvitationData>>;
}

const InvitationForm = ({ data, setData }: InvitationFormProps) => {
  const [activeSections, setActiveSections] = useState<Record<string, boolean>>({
    data: true,
    events: false,
    sentences: false,
    media: false,
    music: false,
  });

  const toggleSection = (sectionId: string) => {
    setActiveSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleInputChange = (field: keyof InvitationData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleEventChange = (index: number, field: keyof InvitationEvent, value: string) => {
    const updatedEvents = [...data.eventList];
    updatedEvents[index] = { ...updatedEvents[index], [field]: value };
    handleInputChange('eventList', updatedEvents);
  };

  const accordionSections = [
    { id: 'data', title: 'Data Pengantin & Orang Tua' },
    { id: 'events', title: 'Detail Acara' },
    { id: 'sentences', title: 'Kalimat Undangan' },
    { id: 'media', title: 'Media & Gambar' },
    { id: 'music', title: 'Musik' },

  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {accordionSections.map((section) => (
        <motion.div 
          key={section.id}
          className="mb-4 border border-purple-200 rounded-lg overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className={`w-full p-4 text-left font-medium flex justify-between items-center
              transition-all duration-300 cursor-pointer
              ${activeSections[section.id] 
                ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700' 
                : 'bg-white text-gray-700 hover:bg-purple-50'}`}
            onClick={() => toggleSection(section.id)}
          >
            <span className="font-semibold">{section.title}</span>
            <motion.span
              animate={{ rotate: activeSections[section.id] ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-pink-500"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.span>
          </button>
          
          <AnimatePresence>
            {activeSections[section.id] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white">
                  {renderSectionContent(section.id, data, handleInputChange, handleEventChange)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// Fungsi render konten berdasarkan section
const renderSectionContent = (
  sectionId: string, 
  data: InvitationData, 
  handleInputChange: (field: keyof InvitationData, value: any) => void,
  handleEventChange: (index: number, field: keyof InvitationEvent, value: string) => void
) => {
  switch (sectionId) {
    case 'data':
      return <BrideGroomSection data={data} handleInputChange={handleInputChange} />;
    case 'events':
      return <EventsSection events={data.eventList} handleEventChange={handleEventChange} />;
    case 'sentences':
      return <SentencesSection data={data} handleInputChange={handleInputChange} />;
    case 'media':
      return <MediaSection data={data} handleInputChange={handleInputChange} />;
    case 'music':
      return <MusicSection data={data} handleInputChange={handleInputChange} />;

    default:
      return null;
  }
};

// Komponen untuk Section Data Pengantin
const BrideGroomSection = ({ 
  data, 
  handleInputChange 
}: { 
  data: InvitationData; 
  handleInputChange: (field: keyof InvitationData, value: any) => void;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
      <h3 className="font-medium mb-3 text-pink-600">Pria</h3>
      <InputField 
        label="Nama Pria" 
        value={data.groomName}
        onChange={(e) => handleInputChange('groomName', e.target.value)}
      />
      <InputField 
        label="Ayah Pria" 
        value={data.dadGroomName}
        onChange={(e) => handleInputChange('dadGroomName', e.target.value)}
      />
      <InputField 
        label="Ibu Pria" 
        value={data.momGroomName}
        onChange={(e) => handleInputChange('momGroomName', e.target.value)}
      />
    </div>
    <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
      <h3 className="font-medium mb-3 text-purple-600">Wanita</h3>
      <InputField 
        label="Nama Wanita" 
        value={data.bridalName}
        onChange={(e) => handleInputChange('bridalName', e.target.value)}
      />
      <InputField 
        label="Ayah Wanita" 
        value={data.dadBridalName}
        onChange={(e) => handleInputChange('dadBridalName', e.target.value)}
      />
      <InputField 
        label="Ibu Wanita" 
        value={data.momBridalName}
        onChange={(e) => handleInputChange('momBridalName', e.target.value)}
      />
    </div>
  </div>
);

// Komponen untuk Section Acara
const EventsSection = ({ 
  events, 
  handleEventChange 
}: { 
  events: InvitationEvent[]; 
  handleEventChange: (index: number, field: keyof InvitationEvent, value: string) => void;
}) => (
  <div className="space-y-4">
    {events.map((event, index) => (
      <motion.div 
        key={event.id}
        className="border border-purple-100 p-4 rounded-lg bg-white shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="font-medium mb-3 text-pink-600">Acara {index + 1}</h3>
        <InputField 
          label="Nama Acara" 
          value={event.eventName}
          onChange={(e) => handleEventChange(index, 'eventName', e.target.value)}
        />
        <InputField 
          label="Alamat" 
          value={event.address}
          textarea
          onChange={(e) => handleEventChange(index, 'address', e.target.value)}
        />
        <InputField 
          label="Link Google Maps" 
          value={event.gmapsLink}
          onChange={(e) => handleEventChange(index, 'gmapsLink', e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField 
            label="Tanggal" 
            type="date"
            value={typeof event.date === 'string' ? event.date : event.date.toISOString().split('T')[0]}
            onChange={(e) => handleEventChange(index, 'date', e.target.value)}
          />
          <InputField 
            label="Waktu Mulai" 
            type="time"
            value={event.time}
            onChange={(e) => handleEventChange(index, 'time', e.target.value)}
          />
          <InputField 
            label="Waktu Selesai" 
            type="time"
            value={event.timeEnd || ''}
            onChange={(e) => handleEventChange(index, 'timeEnd', e.target.value)}
          />
        </div>
      </motion.div>
    ))}
  </div>
);

// Komponen untuk Section Kalimat
const SentencesSection = ({ 
  data, 
  handleInputChange 
}: { 
  data: InvitationData; 
  handleInputChange: (field: keyof InvitationData, value: any) => void;
}) => (
  <div className="space-y-4">
    <InputField 
      label="Kalimat Pembuka" 
      value={data.sentenceOpening || ''}
      textarea 
      onChange={(e) => handleInputChange('sentenceOpening', e.target.value)}
    />
    <InputField 
      label="Sapaan" 
      value={data.sentenceGreeting || ''}
      textarea 
      onChange={(e) => handleInputChange('sentenceGreeting', e.target.value)}
    />
    <InputField 
      label="Kalimat Utama" 
      value={data.sentenceMiddlehook || ''}
      textarea 
      onChange={(e) => handleInputChange('sentenceMiddlehook', e.target.value)}
    />
    <InputField 
      label="Cerita Singkat" 
      value={data.sentenceStory || ''}
      textarea 
      onChange={(e) => handleInputChange('sentenceStory', e.target.value)}
    />
    <InputField 
      label="Informasi Hadiah" 
      value={data.senenceGift || ''}
      textarea 
      onChange={(e) => handleInputChange('senenceGift', e.target.value)}
    />
    <InputField 
      label="Kalimat Penutup" 
      value={data.sentenceClosing || ''}
      textarea 
      onChange={(e) => handleInputChange('sentenceClosing', e.target.value)}
    />
  </div>
);

// Komponen untuk Section Media
const MediaSection = ({ 
  data, 
  handleInputChange 
}: { 
  data: InvitationData; 
  handleInputChange: (field: keyof InvitationData, value: any) => void;
}) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MediaInput 
        label="Cover" 
        value={data.imgCover || ''}
        onChange={(url) => handleInputChange('imgCover', url)}
      />
      <MediaInput 
        label="Foto Pria" 
        value={data.imgGroom || ''}
        onChange={(url) => handleInputChange('imgGroom', url)}
      />
      <MediaInput 
        label="Foto Wanita" 
        value={data.imgBridal || ''}
        onChange={(url) => handleInputChange('imgBridal', url)}
      />
    </div>
    
    <div className="border-t border-purple-100 pt-4">
      <h3 className="font-medium mb-3 text-purple-700">Galeri</h3>
      <div className="space-y-3">
        {data.imgGallery?.map((img:any, index:any) => (
          <MediaInput 
            key={index}
            value={img}
            onChange={(url) => {
              const updatedGallery = [...(data.imgGallery || [])];
              updatedGallery[index] = url;
              handleInputChange('imgGallery', updatedGallery);
            }}
          />
        ))}
        <button 
          className="text-purple-600 hover:text-pink-600 text-sm mt-2 flex items-center gap-1"
          onClick={() => {
            const updatedGallery = [...(data.imgGallery || []), ''];
            handleInputChange('imgGallery', updatedGallery);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Tambah Gambar
        </button>
      </div>
    </div>
  </div>
);

// Komponen untuk Section Musik
const MusicSection = ({ 
  data, 
  handleInputChange 
}: { 
  data: InvitationData; 
  handleInputChange: (field: keyof InvitationData, value: any) => void;
}) => (
  <div>
    <InputField 
      label="Backsound URL" 
      value={data.backsound || ''}
      onChange={(e) => handleInputChange('backsound', e.target.value)}
    />
    {data.backsound && (
      <motion.div 
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <audio controls className="w-full">
          <source src={data.backsound} type="audio/mpeg" />
          Browser tidak mendukung audio
        </audio>
      </motion.div>
    )}
  </div>
);



// Komponen Input Field yang dapat digunakan ulang
interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  type?: string;
}

const InputField = ({ 
  label, 
  value, 
  onChange, 
  textarea = false, 
  type = 'text'
}: InputFieldProps) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
    )}
    {textarea ? (
      <textarea
        className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

// Komponen untuk Input Media
interface MediaInputProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
}

const MediaInput = ({ label, value, onChange }: MediaInputProps) => (
  <div className="mb-4">
    {label && <span className="block text-sm font-medium mb-2 text-purple-700">{label}</span>}
    <div className="flex gap-3 items-start">
      <input
        type="text"
        className="flex-1 p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="URL gambar"
      />
      {value && (
        <div className="aspect-square w-16 bg-gray-100 border border-purple-200 rounded-md overflow-hidden flex-shrink-0">
          {value.startsWith('http') ? (
            <img 
              src={value} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

export default InvitationForm;