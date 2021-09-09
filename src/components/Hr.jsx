import React from "react";

function Hr(props) {
  return (
    <div class="relative mt-6">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm leading-5">
        <span class="px-2 text-gray-600 bg-white">Or continue with</span>
      </div>
    </div>
  );
}

export default Hr;
