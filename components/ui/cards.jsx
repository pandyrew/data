'use client';
import Image from 'next/image';
import React from 'react';

export default function Cards({
  data = [],
  imgSize = 'md',
}) {
  const count = Math.min(5, Math.max(1, data.length));
  const mdClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
  }[count];
  const lgClasses = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
  }[count];

  const sizeCls =
    imgSize === 'sm'
      ? 'w-24 h-24 md:w-28 md:h-28'
      : imgSize === 'lg'
      ? 'w-48 h-48 md:w-52 md:h-52'
      : 'w-[7.5rem] h-[7.5rem] md:w-[8.5rem] md:h-[8.5rem]';

  return (
    <div className={`grid grid-cols-1 ${mdClasses} ${lgClasses} gap-x-2 gap-y-8 items-start justify-items-stretch`}>
      {data.map((m, i) => {
        const name = m.title || m.name || '';
        const role = m.description || m.role || '';
        const link = m.linkedin || m.href || m.ctaLink || m.url || null;

        return (
          <div key={`${name}-${i}`} className="w-full text-center">
            <div className="flex flex-col items-center">
              <Image
                src={m.src}
                alt={name}
                width={240}
                height={240}
                priority={i < 6}
                className={`rounded-full object-cover ${sizeCls}`}
              />
              <div className="mt-4">
                <h3 className="font-semibold text-neutral-900">{name}</h3>
                <p className="text-sm text-neutral-500">{role}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} link`}
                    className="mt-2 inline-flex items-center justify-center rounded-full p-1.5 hover:bg-black/5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-500"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
