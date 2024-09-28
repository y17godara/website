
export default function Loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="size-10 rounded-full border-t-8 border-b-8 border-secondary"></div>
          <div className="absolute top-0 left-0 size-10 rounded-full border-t-4 border-b-4 border-primary animate-spin">
          </div>
        </div>
      </div>
    </div>
  );
}
