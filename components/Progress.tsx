import { motion } from "framer-motion";

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <div className='mt-2.5 h-[5px] w-full overflow-hidden rounded-md border border-secondary'>
      <motion.div
        className='h-[5px] w-full -translate-x-full bg-secondary transition-all duration-100 ease-in-out'
        initial={false}
        transition={{ ease: "easeOut", duration: 1 }}
        animate={{ x: `${percentage - 100}%` }}
      />
    </div>
  );
};

export default Progress;
