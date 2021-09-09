import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function Form() {
  return (
    <>
      <form class="flex flex-col">
        <InputField
          label="Email address"
          type="text"
          id="email"
          name="email"
          placeholder="john.doe@acme.com"
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
        <div class="flex justify-between mt-6">
          <div>
            <label class="flex items-center space-x-1 mb-3">
              <input
                type="checkbox"
                name="checked-demo"
                class="form-tick bg-white bg-check h-3.5 w-3.5 border border-gray-300 rounded-md checked:bg-yellow-800 checked:border-transparent focus:outline-none"
              />
              <span class="text-gray-700 dark:text-white font-normal">
                Remember me
              </span>
            </label>
          </div>
          <div>
            <a
              href="#"
              class="text-sm ml-1.5 font-bold text-yellow-800 hover:underline"
            >
              Forgot your Password?
            </a>
          </div>
        </div>
      </form>
      <Button />
    </>
  );
}

export default Form;
