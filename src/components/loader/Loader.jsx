import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <div className="loader">
        <ThreeDots height="50" width="50" color="var(--color_primary)" />
      </div>
    </>
  );
}
