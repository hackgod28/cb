import React from 'react'

const LoanOne = () => {
  return (
    <div className='py-6'>
        <div className="mycontainer">
            <div className="px-4">
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='text-primary text-center text-[30px] font-bold lg:text-[80px]'>Get Your Dream Loan Today!</h1>
                    </div>

                    <div className='text-center flex flex-col gap-3'>
                        <p className='text-primary'><strong>$ Amount:</strong> Up to $50,00</p>
                        <p className='text-primary'><strong>% Interest Rate:</strong> As low as 3.5% APR</p>
                        <p className='text-primary'><strong>Flexible Repayment Terms:</strong> 12 to 60 months</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-primary font-medium'>Our loan products are designed to meet your financial needs, whether you're looking to consolidate debt, make a big purchase, or cover unexpected expenses. With competitive rates and flexible terms, we have the right loan for you.</p>
                    </div>

                    <div className='flex justify-center'>
                        <button className='hover:shadow-2xl hover:shadow-primary cursor-pointer transition-all ease-in-out duration-[0.2s] flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-[30px] font-bold text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className='w-[25px] transform rotate-45'><path d="M5.33053 15.9288C5.115 14.9914 5.00054 14.0103 5.00054 12.9999C5.00054 7.91198 7.90319 3.5636 12.0005 1.81799C16.0979 3.5636 19.0005 7.91198 19.0005 12.9999C19.0005 14.0103 18.8861 14.9914 18.6706 15.9288L20.6907 17.7245C20.8704 17.8842 20.9109 18.1493 20.7872 18.3555L18.33 22.4508C18.1879 22.6876 17.8808 22.7644 17.644 22.6223C17.609 22.6013 17.5766 22.576 17.5477 22.5471L15.2934 20.2928C15.1059 20.1053 14.8515 19.9999 14.5863 19.9999H9.41476C9.14954 19.9999 8.89519 20.1053 8.70765 20.2928L6.45337 22.5471C6.2581 22.7424 5.94152 22.7424 5.74626 22.5471C5.71735 22.5182 5.6921 22.4859 5.67107 22.4508L3.21385 18.3555C3.09014 18.1493 3.13071 17.8842 3.31042 17.7245L5.33053 15.9288ZM12.0005 12.9999C13.1051 12.9999 14.0005 12.1045 14.0005 10.9999C14.0005 9.89537 13.1051 8.99994 12.0005 8.99994C10.896 8.99994 10.0005 9.89537 10.0005 10.9999C10.0005 12.1045 10.896 12.9999 12.0005 12.9999Z"></path></svg>

                        Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoanOne