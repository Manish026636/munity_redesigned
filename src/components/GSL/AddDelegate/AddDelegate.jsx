import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import AddDelTable from "./AddDelTable";

const AddDelegate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div>
        <div className="flex justify-center items-center ">
          <button
            onClick={openModal}
            className="bg-[#F4F6F9] border border-[#959595] rounded-lg hover:bg-blue-400 hover:text-white text-gray-500 font-bold py-3 px-6 flex items-center"
          >
            <RiAddLine className="inline-block text-[#3DBFDB]   mr-1 text-xl" />
            Add Delegates
          </button>
        </div>

        {isOpen && (
          <div
            className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            style={{ background: "rgba(0,0,0,.7)" }}
          >
            <div className="border border-teal-500  modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left ">
                <div className="flex justify-between items-center pb-3 px-6">
                  <p className="text-2xl text-gray-500 font-bold">Add Delegate</p>
                  <div
                    className="modal-close cursor-pointer z-50"
                    onClick={closeModal}
                  >
                    <svg
                      className="fill-current text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </div>
                </div>
                <AddDelTable/>
                <div className="flex justify-end pt-2 px-6 ">
                  <button
                    className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-white hover:bg-gray-300"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDelegate;
