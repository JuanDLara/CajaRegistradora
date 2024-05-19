import React, { useState } from 'react';
import { TbPasswordMobilePhone } from "react-icons/tb";


const Twofa = () => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setCode(value);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="flex justify-center space-x-2">
        <TbPasswordMobilePhone className="text-xl size-12" />
        <h2 className=" text-2xl font-bold text-gray-900">
          Insert your telegram code
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={code}
              onChange={handleChange}
              maxLength="4"
              className="border border-gray-300 rounded-md p-2 w-20 text-center text-2xl"
              placeholder="0000"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-emerald-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Twofa