import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full bg-[#173647] flex flex-col items-center justify-center p-6 relative'>
      <div className="font-DM Sans rounded-full border-white text-white border flex items-center gap-4 p-3 absolute top-0 right-0 mt-12 md:mr-11">
        <h1>SOUND ON</h1>
        <Image src="/Group 1000008110.svg" width={30} height={30} />
      </div>

      <div className="flex flex-col items-center mt-10 md:mt-24 sm:text-center">
        <h1 className="text-white font-DM Sans text-4xl sm:text-5xl md:text-6xl leading-tight tracking-widest md:leading-tight">
          Start Your Life Reset
        </h1>

        <p className='text-white font-DM Sans text-sm md:text-base text-center md:w-2/3 mt-4'>
          Our 16-week transformation program stacks the best of proven science, somatic training methods, and behavioral change theory to bring you lasting change.
        </p>
      </div>

    <form className='flex flex-col items-center mt-8 border-none via-[#173647] w-full md:w-1/2 bg-gradient-radial from-gray-400 to-[#173647]'>
        <div className='flex flex-col w-full mt-4'>
          <div className="flex items-center w-full md:w-1/2 border-b border-white py-2">
            <input className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="First Name*" aria-label="Full name" />
          </div>
          <div className="flex items-center w-full md:w-1/2 border-b border-white py-2 mt-4 md:mt-0">
            <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Last Name*" aria-label="Full name" />
          </div>
        </div>
        <div className="flex items-center w-full border-b border-white py-2 mt-5">
          <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Email*" aria-label="Email" />
        </div>
        <div className="flex items-center w-full py-2 mt-5">
          <label htmlFor="who do you want to become" className="text-white text-sm">
            Who do you want to become?
          </label>
        </div>
        <div class="flex items-center w-full border-b border-white py-2 mt-4">
          <input className="appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 leading-tight focus:outline-none text-sm" type="text" placeholder="Type your answer here*" aria-label="Answer" />
        </div>
        <p className='font-DM Sans text-gray-400 text-xs text-center mt-4'>By clicking submit, you agree to our Terms & Conditions</p>
        <button className='bg-[#628191] text-[#173647] font-DM Sans rounded-full text-center py-3 px-16 mt-8'>Submit</button>
      </form>

      <h1 className='text-[#eeeff0] text-xs text-center mt-4 '>GO BACK</h1>
    </main>
  );
}
