import React from 'react'
import "./JobCard.css"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItem = () => {
    return (
        <div className='job-card' >
        <div className='d-flex mb-3 justify-content-between align-items-start'>
        <div className='job-card-top d-flex ' >
        <Skeleton circle={true} duration={1} height={60} width={60} />
        <div className='job-card-abt'>
        <Skeleton duration={1} height={20} width={300} />
        <Skeleton duration={1} height={20} width={200} />
            </div>
            </div>
        <Skeleton duration={1} height={30} width={110} />
           
        </div>
        {Array(4)
                    .fill()
                    .map((item) => {
                      return <Skeleton duration={1} height={13} width={700} />;
                    })}
        <div className='job-card-middle mt-2' style={{display:"flex", gap:"0 15px"}}>
        {Array(3)
                    .fill()
                    .map((item) => {
                      return <Skeleton duration={1} height={30} width={170} />;
                    })}
        </div>
        <hr className='job-card-bottom-line' />
        
        <div className='job-card-bottom'>
        <Skeleton duration={1} height={30} width={140} />
        <Skeleton duration={1} height={30} width={140} />
        <Skeleton duration={1} height={45} width={160} />
        </div>
    </div>
    )
}
function JobCardSkeleton() {
  return (<>
    <SkeletonItem />
    <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      </>
  )
}

export default JobCardSkeleton
