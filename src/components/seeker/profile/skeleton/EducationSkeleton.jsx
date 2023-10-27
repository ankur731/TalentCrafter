import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function EducationSkeleton() {
  return (
    <>
    <div className="edit-bar mt-3">
       
     
        <Skeleton duration={1} height={20} width={300} />
      
    </div>
        <Skeleton duration={1} height={15} width={220} />
        <Skeleton duration={1} height={14} width={100} />
          <div className='mt-3'>
          {Array(4)
                .fill()
                .map((item) => {
                  return <Skeleton duration={1} height={13} width={870} />;
                })}
        </div>
    </>
  )
}

export default EducationSkeleton
