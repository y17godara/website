export default function TailwindShapes() {
  return (
    <button className='group relative overflow-hidden rounded-md border border-b-4 border-red-400 bg-red-950 px-4 py-2 font-medium text-red-400 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75'>
      <span className='absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-red-400 opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-red-400 duration-500 group-hover:top-[150%]'></span>
      Hover Me
    </button>
  );
}
