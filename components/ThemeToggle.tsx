'use client';
import { RxGear } from 'react-icons/rx';

export function ThemeToggle() {
  return (
    <>
      <div className='relative'>
        <button className='relative flex h-8 w-8 items-center justify-center rounded-full p-1 text-secondary hover:bg-tertiary focus:text-primary focus:outline-none'>
          <RxGear className='h-5 w-5' />
        </button>
      </div>
    </>
  );
}
