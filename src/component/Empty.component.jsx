import React from "react";
import { IoNavigateOutline } from "react-icons/io5";

export default function Empty({ applied }) {
  const isApplied = applied ? "applied" : "saved";
  return (
    <div className="mt-24 flex justify-center flex-col items-center">
      <IoNavigateOutline className="w-16 h-16" />
      <h1 className="pt-5 text-base font-semibold font-nuito">
        {` You have not ${isApplied} for any job`}
      </h1>
    </div>
  );
}
