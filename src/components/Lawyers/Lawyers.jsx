import React from 'react';
import './Lawyers.css';
import LawyersCard from './LawyersCard';
import lawimg1 from './Lawyer1.png';
import lawimg2 from './Lawyer2.png';
import lawimg3 from './Lawyer3.png';
import lawimg4 from './Lawyer4.png';
import lawimg5 from './Lawyer5.png';
import lawimg6 from './Lawyer6.png';


const Lawyers = () => {
  const Lawyerss = [
    {
      title: "Shuvo Roy",
      imgUrl: lawimg1,
    },
    {
      title: "Jamil Ahmed",
      imgUrl: lawimg2,
    },
    {
      title: "Akask Sinha",
      imgUrl: lawimg3,
    },
    {
      title: "Jackson",
      imgUrl: lawimg4,
    },
    {
      title: "Jon Doe",
      imgUrl: lawimg5,
    },
    {
      title: "Sayontika",
      imgUrl: lawimg6,
    },
  ];
  return (
    <div className='lawyers' id='lawyers'>
      <div className='flex flex-col px-[120px]'>
        <div className='flex justify-center items-center lawyers_heading'>
          <h2>Popular Lawyers</h2>
        </div>
        <div className='flex justify-center items-center lawyers_p'>
          <p>Discover our elite team of legal experts, meticulously selected to provide you with top-notch legal counsel. Our best lawyers are here to guide you through your legal journey with unparalleled expertise and dedication</p>
        </div>
        <div className='flex flex-col justify-center items-center lawyers_city '>
          <div className=' w-full flex  justify-between items-center'>
            <h4>Mumbai</h4>
            <h4>Chennai</h4>
            <h4>Kolkata</h4>
            <h4>Bangalore</h4>
            <h4>Hyderabad</h4>
          </div>
          <div className='w-full bg-[#132A47] h-[1px] mt-[5px]' />
        </div>
        <div className='grid grid-cols-3 gap-5 md:grid-cols-3 sm:gird-cols-1'>
          {
            Lawyerss.map((project, index) => {
              return (
                <LawyersCard
                  key={index}
                  {...project}

                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Lawyers
