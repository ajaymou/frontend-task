import React from "react";

function OauthButton(props) {
  return (
    <button
      type="button"
      class="py-2 px-4 flex justify-center items-center border-2 border-gray-200 hover:bg-gray-100 focus:ring-gray-200 focus:ring-offset-gary-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      <img class="mr-3" src={props.src} alt="Oauth"/>
      {props.text}
    </button>
  );
}

export default OauthButton;
