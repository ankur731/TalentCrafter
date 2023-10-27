import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function SideBox() {
  return (
    <div className="other-job-bar mt-3">
                        <div className="other-job-bar-top ">
                          <Skeleton duration={1} height={15} width={150} />
                          <p>
                            <Skeleton duration={1} height={15} width={50} />
                          </p>
                        </div>
                        <div className="other-job-bar-top">
                          <p>
                            <Skeleton duration={1} height={15} width={100} />
                          </p>
                          <p>
                            <Skeleton duration={1} height={15} width={70} />
                          </p>
                        </div>
                      </div>
  )
}

export default SideBox
