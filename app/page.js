import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full bg-[#173647] flex flex-col items-center justify-center p-6 relative'>
      <div className='flex justify-between w-full md:w-auto pb-10 mb-16'>
        <div className=' md:hidden absolute top-0 left-0 mt-12 ml-12'>
          <Image src="/Group 1000008081.svg" width={180} height={30} />
        </div>
        <div className="font-DM Sans md:rounded-full border-white text-white border flex items-center gap-4 p-3 top-0 right-0 mt-12 absolute mr-8 rounded-2xl">
          <h1 className='hidden md:block'>SOUND ON</h1>
          <Image src="/Group 1000008110.svg" width={30} height={30} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <h1 className="text-center text-white font-DM Sans leading-100% tracking-2% sm:text-2xl sm:font-normal sm:text-80 sm:leading-50 sm:tracking-3% md:text-5xl md:leading-52 md:text-44 text-4xl">
          Start Your Life Reset
        </h1>

        <p className='text-white text-center font-DM Sans md:h-10 md:w-auto mt-7 mb-12 md:mb-8 w-full md:text-sm'>
          Our 16-week transformation program stacks the best of proven science,
          somatic training methods,<br/> and behavioral change theory to bring you
          lasting change.
        </p>
      </div>

      <form className='flex flex-col items-center mt-4 border-none via-[#173647] w-full md:w-1/2 bg-gradient-radial from-gray-400 to-[#173647]'>
        <div className=' md:flex w-full md:space-x-5'>
          <div className="flex items-center md:w-1/2 border-b border-white mb-6 pb-3 md:py-2 w-full">
            <input className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="First Name*" aria-label="Full name" />
          </div>
          <div className="flex items-center md:w-1/2 border-b border-white mb-6 pb-3 md:py-2 w-full">
            <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Last Name*" aria-label="Full name" />
          </div>
        </div>
        <div className="flex items-center w-full border-b border-white py-2 mt-5">
          <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Email*" aria-label="Email" />
        </div>
        <div className="flex items-center w-full py-2 mt-5 pb-20">
          <label htmlFor="who do you want to become" className="text-gray-400 text-sm">
            Who do you want to become?
          </label>
        </div>
        <div class="flex items-center w-full border-b border-white py-2 mt-4">
          <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Type your answer here*" aria-label="Answer" />
        </div>
        <p className='font-DM Sans text-gray-400 text-sm mt-4'>By clicking submit, you agree to our Terms & Conditions</p>
        <button className='bg-[#628191] text-[#173647] font-DM Sans rounded-full text-center py-3 px-16 mt-8'>Submit</button>
      </form>

      <h1 className='text-[#dde2e4] text-sm text-center mt-4 '>GO BACK</h1>
    </main>
  );
}
