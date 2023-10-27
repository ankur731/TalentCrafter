import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PersonalDetailsSkeleton() {
  return (
    <div>
      <div style={{display:"flex", gap:"0 15px"}}>
        <Skeleton duration={1} circle={true} height={60} width={60} />
        <div>
          <Skeleton duration={1} height={20} width={300} />
          <Skeleton duration={1} height={10} width={200} />
        </div>
      </div>

      <Skeleton duration={1} height={20} width={300} />
      <Skeleton duration={1} height={10} width={200} />
    </div>
  );
}

export default PersonalDetailsSkeleton;
