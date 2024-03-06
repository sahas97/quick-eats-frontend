import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

const Homepage = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='bg-yellow-100 rounded-[20px] shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
            <h1 className='text-5xl font-bold tracking-tight text-orange-500'>Tuck into takeaway Today</h1>

                <span className='text-xl font-medium text-yellow-800'>Food is just a click away!</span>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={landingImage} alt="Lnading Image" />
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <span className='text-3xl font-bold tracking-tighter'>Order takeaway even faster!</span>
                    <span>Download the Quick Eats App for faster ordering and personalized recomdations.</span>
                    <img src={appDownloadImage} alt="App download Image" />
                </div>
            </div>
        </div>
    )
}

export default Homepage
