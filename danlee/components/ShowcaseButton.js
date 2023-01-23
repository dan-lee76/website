import React from "react";

export default function (props) {
  return (
      <div>
          <a href={props.location}>
      <button type="button"
              className=" inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
          {props.title}
      </button>
          </a>
      </div>
  );
}