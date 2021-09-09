import React from "react";

function Button() {
  return (
    <div class="pt-2 pb-2">
      <button
        type="button"
        class="py-2 px-4 bg-yellow-900 hover:bg-yellow-800 focus:ring-yellow-900 focus:ring-offset-yellow-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Sign in
      </button>
    </div>
  );
}

export default Button;
