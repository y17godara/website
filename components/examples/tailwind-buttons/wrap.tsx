export default function Button() {
  return (
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
  );
}
