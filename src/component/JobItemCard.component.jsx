import React from "react";
import companyLogo from "../img/placeholder.png";
import Time from "./Time";

export default function JobItemCard({
  feed,
  onOpen,
  setSeletedJob,
  isApplied,
}) {
  const { title, company, location, company_logo, created_at } = feed;

  const handleClick = () => {
    onOpen();
    setSeletedJob(feed);
  };

  return (
    <div>
      <div
        className=" border-2 border-opacity-60 border-indigo-100   mx-2 md:mx-5 grid break-all cursor-pointer bg-white shadow-sm grid-cols-mobile md:grid-cols-card  rounded-md mt-2 p-2"
        onClick={handleClick}
      >
        <img
          src={company_logo ? company_logo : companyLogo}
          className="md:w-16 w-12 md:h-16 h-12 rounded-full object-cover justify-self-center self-center"
          alt="Company Logo"
        />
        <div className="flex flex-col  p-2">
          <h1
            className="text-black   md:font-bold pr-1 md:pr-0 text-base font-bold md:text-xl
                     font-nuito  "
          >
            {title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-medium font-nuito">
            {company}
          </p>
          {isApplied ? (
            <>
              {" "}
              <Time date={feed.timestamp} />
            </>
          ) : (
            <>
              <div className="flex items-center text-base">
                <Time date={created_at} />
                <p className="text-base pl-3">{location}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col justify-between items-center"></div>
      </div>
    </div>
  );
}
