import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function CertificateSkeleton() {
  return (
    <>
   
   <div className='row mt-5 mb-4'>
              <div className='col-3'>
              <Skeleton duration={1}  height={160} width={160} />   
       </div>
       <div className='col-9 certificate-detail'>
           <div className='edit-bar'>
           <Skeleton duration={1} height={20} width={200} />
      
          
   </div>
           <Skeleton duration={1} height={20} width={260} />
           <Skeleton duration={1} height={20} width={350} />
                  <div className='mt-2'>
                  {Array(4)
                .fill()
                .map((item) => {
                  return <Skeleton duration={1} height={13} width={600} />;
                })}
   </div>
       </div>
   </div>
  
</>
  )
}

export default CertificateSkeleton
