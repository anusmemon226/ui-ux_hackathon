"use client"
import BreadCrumbHero from '@/app/sections/BreadCrumbHero'
import WhyUs from '@/components/WhyUs'
import Image from 'next/image'
import React from 'react'
import AddToCartImg from '../../assets/addedToCart.png'
function page() {
    return (
        <div className=''>
            <BreadCrumbHero title='Cart'/>
            <div className='w-[95%] 2xl:w-[1240px] mx-auto flex max-lg:flex-col justify-between py-14'>
                <div className='lg:flex-1 lg:mr-5 max-sm:overflow-x-scroll'>
                    <table className='max-sm:w-[640px] w-full'>
                        <thead>
                            <tr className='bg-[#F9F1E7]'>
                                <td></td>
                                <td><p className='text=black text-[16px] font-medium'>Product</p></td>
                                <td><p className='text=black text-[16px] font-medium'>Price</p></td>
                                <td><p className='text=black text-[16px] font-medium'>Quantity</p></td>
                                <td><p className='text=black text-[16px] font-medium'>Subtotal</p></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className=''>
                                <td className=''>
                                    <Image src={AddToCartImg} style={{ width: 105, height: 105, objectFit: "cover" }} alt='Cart Image' />
                                </td>
                                <td><p className='text-[#9F9F9F] text-[16px]'>Asgaard sofa</p></td>
                                <td><p className='text-[#9F9F9F] text-[16px]'>Rs. 250,000.00</p></td>
                                <td>
                                    <input type="number" name="" id="" className='outline outline-1 outline-black w-[32px] h-[32px] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center ml-4' defaultValue={1} />
                                </td>
                                <td><p className='text-[#9F9F9F] text-[16px]'>Rs. 250,000.00</p></td>
                                <td>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='bg-[#F9F1E7] pt-6 pb-16 px-5 sm:px-16 w-[100%] max-sm:mt-10 sm:w-[380px] h-[390px]'>
                    <h1 className='text-center text-[32px] font-semibold'>Cart Totals</h1>
                    <div className='flex flex-col justify-center mt-14'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[16px] font-medium'>Subtotal</p>
                            <p className='text-[#9F9F9F] text-[16px]'>Rs. 250,000.00</p>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-[16px] font-medium'>Total</p>
                            <p className='text-[#B88E2F] text-[20px] font-medium'>Rs. 250,000.00</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='mt-8 border border-black rounded-lg py-3 px-10 w-full'>
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
            <WhyUs/>
        </div>
    )
}

export default page