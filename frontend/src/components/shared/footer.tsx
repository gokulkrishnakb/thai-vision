'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTripadvisor, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-gray-300 pt-10 pb-6 px-10 md:px-25 overflow-hidden flex-wrap">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-10 md:m-15">
        {/* Column 1 - Logo + Address */}
        <div className="col-span-2 mb-3">
           <div className='flex items-center mb-3 '>
                <Image
                  src="/logo.webp" // 👈 replace with your logo file in public/
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="mr-2 rounded-full object-cover"
                />
              <h2 className="text-2xl font-bold text-white">Thai Vision</h2>
           </div>
          <p className="text-md text-gray-600 leading-6 ms-13">
            Thai Vision Holidays <br />
            Bangkok, Thailand - 10250 <br />
            Thailand
          </p>
        <Image
                  src="/map-thailand.png" // 👈 replace with your logo file in public/
                  alt="map"
                  width={150}
                  height={50}
                  className="ms-8 -full object-cover"
                />
        </div>

        {/* Column 2 - Services Offered */}
        <div className='col-span-4'>
            <h3 className="text-xl font-semibold text-white mb-5">Explore the Best of Thailand</h3>
            <div  className='grid grid-cols-2 gap-5 '>
              <ul className="space-y-2 text-md text-gray-600 ">
                <li className='hover:text-white transition-colors'>Bangkok City Tours</li>
                <li className='hover:text-white transition-colors'>Chiang Mai & Northern Thailand Tours</li>
                <li className='hover:text-white transition-colors'>Phuket & Southern Thailand Tours</li>
                <li className='hover:text-white transition-colors'>Krabi & Ao Nang Tours</li>
                <li className='hover:text-white transition-colors'>Thailand Cultural Tours</li>
                <li className='hover:text-white transition-colors'>Thailand Adveture Tours</li>
                <a href="" className='text-md text-white font-semibold underline hover:text-white transition-colors '>Explore All</a>
              </ul>
              <ul className="space-y-2 text-md text-gray-600 ">
                <li className='hover:text-white transition-colors'>Island Hopping & Cruises</li>
                <li className='hover:text-white transition-colors'>Koh Samui & Koh Tao Tour</li>
                <li className='hover:text-white transition-colors'>Full Moon Party on Koh Phangan</li>
                <li className='hover:text-white transition-colors'>Luxury Yacht Cruise</li>
                <li className='hover:text-white transition-colors'>Baech Tours in Thailand</li>
                <li className='hover:text-white transition-colors'>Island Tours in Thailand</li>

              </ul>
            </div>
    
            
        </div>

        {/* Column 3 - Contact */}
        <div className='col-span-2'>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-md text-gray-600 leading-6">
            Email: info@thaivision.com <br />
            Phone: +91 ##########
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Row - Social Icons */}
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-400 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
        >
          <FaInstagram  />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
        >
          <FaPinterestP className="text-white" />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition-colors"
        >
          <FaTripadvisor className="text-white" />
        </a>
      </div>
    </footer>
  );
}
