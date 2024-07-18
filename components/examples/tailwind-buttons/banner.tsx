export default function Buttons() {
  return (
    <div className='relative flex flex-col items-center justify-center gap-8 md:flex-row'>
      <button className='group relative flex items-center overflow-hidden rounded-md bg-indigo-500 px-6 py-3 font-medium transition-all'>
        <span className='absolute right-0 top-0 inline-block h-4 w-4 rounded bg-indigo-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4'>
          <span className='absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white'></span>
        </span>
        <span className='absolute bottom-0 left-0 inline-block h-4 w-4 rotate-180 rounded bg-indigo-700 transition-all duration-500 ease-in-out group-hover:-mb-4 group-hover:-ml-4'>
          <span className='absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white'></span>
        </span>
        <span className='absolute bottom-0 left-0 h-full w-full -translate-x-full rounded-md bg-indigo-600 transition-all delay-200 duration-500 ease-in-out group-hover:translate-x-0'></span>
        <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white'>
          Get Started
        </span>
      </button>
      <button className='group relative overflow-hidden rounded-md border border-b-4 border-red-400 bg-red-950 px-4 py-2 font-medium text-red-400 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75'>
        <span className='absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-red-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-red-400 duration-500 group-hover:top-[150%]'></span>
        Hover Me
      </button>
      <button className='group relative z-10 h-12 w-32 cursor-pointer overflow-hidden rounded-md border-none bg-black p-2 text-xl font-bold text-white'>
        Hover me!
        <span className='absolute -left-2 -top-8 h-32 w-36 origin-right rotate-12 scale-x-0 transform bg-sky-200 transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500'></span>
        <span className='absolute -left-2 -top-8 h-32 w-36 origin-right rotate-12 scale-x-0 transform bg-sky-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700'></span>
        <span className='absolute -left-2 -top-8 h-32 w-36 origin-right rotate-12 scale-x-0 transform bg-sky-600 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000'></span>
        <span className='absolute left-6 top-2.5 z-10 opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000'>
          Explore!
        </span>
      </button>
    </div>
  );
}
