const Footer = () => {
    return (
        <div className='bg-yellow-50 py-10'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <span className='text-3xl font-bold tracking-tight'>Quick Eats</span>
                <span className='font-bold tracking-tight flex gap-4'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    )
}

export default Footer