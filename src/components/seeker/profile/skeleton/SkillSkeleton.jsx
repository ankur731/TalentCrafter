import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function SkillSkeleton() {
  return (
    <div style={{ display: "flex", gap: "0 10px" }}>
    {Array(8)
      .fill()
      .map((item) => {
        return <Skeleton duration={1} height={24} width={100} />;
      })}
  </div>
  )
}

export default SkillSkeleton
