import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import { experience } from './Constants';
import { type experienceProps } from './types/index';

export function WorkExperience() {
  return (
    <>
      <ul className='animated-list grid flex-grow grid-cols-1 gap-2'>
        {/* check is length 0 show no experience else  */}
        {experience.length === 0 ? null : (
          <>
            {experience.map((exp: experienceProps, index: number) => (
              <>
                <li key={index}>
                  <div className='flex items-center gap-3'>
                    {/* <span className='text-xl'>{exp.icon}</span> */}
                    <h1 className='text-md animate-in font-bold'>
                      {/* {exp.company} */}
                    </h1>
                  </div>
                  {/* <span className='text-xl'>{exp.icon}</span> */}
                  <h1 className='text-md animate-in font-bold'>
                    {/* {exp.company} */}
                  </h1>
                  <div className='inline-flex w-full flex-col gap-2 rounded-lg border-b border-primary p-4 no-underline transition-opacity'>
                    <h1 className='text-md animate-in font-bold'>
                      {exp.title}
                    </h1>
                    <p className='text-md animate-in font-normal'>
                      {exp.description}
                    </p>
                  </div>
                </li>
              </>
            ))}
          </>
        )}
      </ul>
    </>
  );
}
