import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SideBox from "./SideBox";

const SkeletonItem = () => {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-1"></div>
      <div className="col-11">
        <h4 className="ps-2">Job Details</h4>
        <div className="job-div">
          <div className="row mt-1 ">
            <div className="col-8  job-main">
              <div className="job-main-top">
                <div>
                  <Skeleton duration={1} height={20} width={300} />
                  <Skeleton duration={1} height={15} width={100} />
                </div>
                <p>
                  <Skeleton duration={1} height={15} width={100} />
                </p>
              </div>
              <hr className="top-divider" />
              <div className="row ">{/* <Tile bgColor="#f0ebfd" /> */}</div>
              <Skeleton duration={1} height={17} width={150} />
              {Array(4)
                .fill()
                .map((item) => {
                  return <Skeleton duration={1} height={13} width={900} />;
                })}
              <div className="mt-3">
                <Skeleton duration={1} height={17} width={150} />
                {Array(4)
                  .fill()
                  .map((item) => {
                    return <Skeleton duration={1} height={13} width={900} />;
                  })}
              </div>
              <div className="mt-3">
                <Skeleton duration={1} height={17} width={150} />
                <div style={{ display: "flex", gap: "0 10px" }}>
                  {Array(8)
                    .fill()
                    .map((item) => {
                      return <Skeleton duration={1} height={19} width={100} />;
                    })}
                </div>
              </div>

              <hr className="bottom-divider" />
              <div className="job-bottom">
                <button className="apply-btn">Apply Now</button>

                <button className="save-job-btn">Save Job</button>
              </div>
            </div>
            <div className="col-3">
              <div className="job-side job-side-top">
                <div className="about-company-top">
                  <Skeleton circle={true} duration={1} height={60} width={60} />

                  <div className="abt-company">
                    <Skeleton duration={1} height={20} width={150} />
                    <Skeleton duration={1} height={15} width={110} />
                  </div>
                </div>
                <div className="about-company mt-2">
                  <Skeleton duration={1} height={15} width={150} />
                  <Skeleton duration={1} height={15} width={120} />
                  <Skeleton duration={1} height={15} width={100} />
                  {Array(3)
                    .fill()
                    .map((item) => {
                      return <Skeleton duration={1} height={12} width={280} />;
                    })}
                </div>
              </div>
              <div className="job-side job-side-bottom mt-3">
                <h5>Other open role</h5>
                {Array(3)
                  .fill()
                  .map((item) => {
                    return (
                      <SideBox />
                    );
                  })}
              </div>
              <div className="job-link mt-3">
                <h5>Job link</h5>
                <Skeleton duration={1} height={30} width={290} />

                <p>Copy link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function JobSkeleton() {
  return <SkeletonItem />;
}

export default JobSkeleton;
