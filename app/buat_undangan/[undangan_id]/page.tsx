"use client";

import React, { useState } from 'react';
import InvitationForm from '@/app/buat_undangan/[undangan_id]/_components/invitationForm';
import { InvitationData } from '@/typings';
import { dummyData } from './dummyData';

export default function Page({ params }: { params: { undangan_id: string } }) {
  const [data, setData] = useState<InvitationData>(dummyData);
  const [showPreview, setShowPreview] = useState(false); // state untuk switch

  return (
    <div className="bg-white">
      {/* Switch Button - khusus sm */}
      <div className="block md:hidden sticky top-0 z-10 bg-white px-4 py-2 shadow-md flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded font-semibold ${!showPreview ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setShowPreview(false)}
        >
          Isi Data
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${showPreview ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setShowPreview(true)}
        >
          Preview Tampilan
        </button>
      </div>

      {/* Mobile view: switch between form and preview */}
      <div className="block md:hidden px-4 py-4">
        {showPreview ? (
          <div>
            <h1 className="text-xl font-bold mb-6">Preview Undangan</h1>
            <div className="border p-6 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                  {data.groomName} &amp; {data.bridalName}
                </h2>
                <p className="mt-2 text-gray-600">{data.sentenceOpening}</p>
              </div>
              {data.imgCover && (
                <img
                  src={data.imgCover}
                  alt="Cover"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {data.imgGroom && (
                  <div>
                    <h3 className="font-medium mb-2">{data.groomName}</h3>
                    <img
                      src={data.imgGroom}
                      alt={data.groomName}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                )}
                {data.imgBridal && (
                  <div>
                    <h3 className="font-medium mb-2">{data.bridalName}</h3>
                    <img
                      src={data.imgBridal}
                      alt={data.bridalName}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                )}
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Acara</h3>
                {data.eventList.map((event, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium">{event.eventName}</h4>
                    <p>{event.time} - {event.timeEnd}</p>
                    <p>{new Date(event.date).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                    <p>{event.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold mb-6">Form Editor Undangan</h1>
            <InvitationForm data={data} setData={setData} />
          </div>
        )}
      </div>

      {/* Desktop view: dua kolom side-by-side */}
      <div className="hidden md:flex bg-white py-4 px-8 shadow-sm gap-8">
        <div className="w-1/2">
          <h1 className="text-xl font-bold mb-6">Form Editor Undangan</h1>
          <InvitationForm data={data} setData={setData} />
        </div>
        <div className="w-1/2">
          <h1 className="text-xl font-bold mb-6">Preview Undangan</h1>
          <div className="border p-6 rounded-lg">
            {/* Sama seperti preview di atas */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">
                {data.groomName} &amp; {data.bridalName}
              </h2>
              <p className="mt-2 text-gray-600">{data.sentenceOpening}</p>
            </div>
            {data.imgCover && (
              <img
                src={data.imgCover}
                alt="Cover"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {data.imgGroom && (
                <div>
                  <h3 className="font-medium mb-2">{data.groomName}</h3>
                  <img
                    src={data.imgGroom}
                    alt={data.groomName}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              )}
              {data.imgBridal && (
                <div>
                  <h3 className="font-medium mb-2">{data.bridalName}</h3>
                  <img
                    src={data.imgBridal}
                    alt={data.bridalName}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              )}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Acara</h3>
              {data.eventList.map((event, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium">{event.eventName}</h4>
                  <p>{event.time} - {event.timeEnd}</p>
                  <p>{new Date(event.date).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                  <p>{event.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
