import React from 'react';
import '../Styles/Pages/Home.scss'

import Hero from '../components/Hero/Hero';
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RiCustomerService2Fill, RiMoneyEuroBoxLine } from 'react-icons/ri'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals';
export default function Home() {

    return (
        <main className='main'>
            <Hero />
            <div>
                <div className='main__containers'>
                    <MdOutlineLocalShipping className='icons' />  <p className='main__containers--title'>Free Shipping</p>

                    <span className='main__containers--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>
                <div className='main__containers'>
                    <RiCustomerService2Fill className='icons' /> <p className='main__containers--title'>Support 24/7</p>

                    <span className='main__containers--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>
                <div className='main__containers'>
                    <RiMoneyEuroBoxLine className='icons' />  <p className='main__containers--title'>Money return</p>

                    <span className='main__containers--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                </div>
            </div>
            <NewArrivals />
        </main>
    )
}
