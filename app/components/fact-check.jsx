import React from "react";

export const FactCheck = () => {
    return (
        <div className="col-span-5 sm:col-span-1">
          Facts
          <div className="m-10">
            <div role="alert" className="alert alert-success bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>This is likely REAL!</span>
            </div>
          </div>
        </div>
      );
    };
