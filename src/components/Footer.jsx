import React from 'react'

const Footer = () => {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <p className='font-semibold text-gray-500 text-xs'>More ways to shop:
                    {' '}
                    <span className='underline text-blue-500'>
                        Find an Apple sttore
                    </span>
                    {' '}
                    or
                    {' '}
                    <span className='underline text-blue-500'>
                        other retailer
                    </span>
                    {' '}
                    near you
                </p>
            </div>
        </footer>
    )
}

export default Footer