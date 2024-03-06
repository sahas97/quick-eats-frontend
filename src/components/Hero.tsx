import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='flex flex-colomn justify-center px-12 py-12 items-center bg-yellow-50'>
      <img src={hero} className=' max-h-[600px] object-cover color-blue ' />
    </div>
  );
}

export default Hero