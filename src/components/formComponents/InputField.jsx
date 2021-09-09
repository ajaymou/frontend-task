import React from "react";

function InputField(props) {
  return (
    <div class="flex flex-col pt-4">
      <div class="relative ">
        <label for={props.label} class="text-gray-600 text-sm">
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-2"
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default InputField;
