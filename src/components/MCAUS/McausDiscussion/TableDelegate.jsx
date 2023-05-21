import React from "react";
import McausSearch from "./SearchDelegate";
const McausTable = () => {
  const data = [
    {
      id: 1,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="india.png"
          alt="India flag"
        />
      ),
      countryName: "India",
      name: "Akash Yadav",
      reserveTime: "10s",
       action: "Start",
      
       
    },
    {
      id: 2,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="russia.png"
          alt="Russia flag"
        />
      ),
      countryName: "Russia",
      name: "Harsh Kumar",
      reserveTime: "19s",
       action: "Start"
       
    },
    {
      id: 3,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="usa.jpeg"
          alt="USA flag"
        />
      ),
      countryName: "USA",
      name: "Manish Yadav",
      reserveTime: "30s",
       action: "Start"
       
    },
    {
      id: 4,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="france.png"
          alt="France flag"
        />
      ),
      countryName: "France",
      name: "Juniper",
      reserveTime: "24s",
       action: "Start"
       
    },
    {
      id: 5,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="india.png"
          alt="India flag"
        />
      ),
      countryName: "India",
      name: "Akash Yadav",
      reserveTime: "13s",
       action: "Start"
       
    },
    {
      id: 6,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="russia.png"
          alt="Russia flag"
        />
      ),
      countryName: "Russia",
      name: "Harsh Kumar",
      reserveTime: "20s",
       action: "Start"
       
    },
    {
      id: 7,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="usa.jpeg"
          alt="USA flag"
        />
      ),
      countryName: "USA",
      name: "Manish Yadav",
      reserveTime: "32s",
       action: "Start"
       
    },
    {
      id: 8,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="france.png"
          alt="France flag"
        />
      ),
      countryName: "France",
      name: "Juniper",
      reserveTime: "08s",
       action: "Start"
       
    },
    {
      id: 9,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="russia.png"
          alt="Russia flag"
        />
      ),
      countryName: "Russia",
      name: "Harsh Kumar",
      reserveTime: "20s",
       action: "Start"
       
    },
    {
      id: 10,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="usa.jpeg"
          alt="USA flag"
        />
      ),
      countryName: "USA",
      name: "Manish Yadav",
      reserveTime: "32s",
       action: "Start"
       
    },
    {
      id: 11,
      flag: (
        <img
          className="border-2 rounded-xl border-gray-300"
          src="france.png"
          alt="France flag"
        />
      ),
      countryName: "France",
      name: "Juniper",
      reserveTime: "08s",
       action: "Start"
       
    },
  ];
  return (
    <div className="mt-1 container mx-auto">
      <div className="bg-gray-600 h-20 border-t-8 border-[#74C5FF] rounded-md w-full">
        <div class="grid grid-cols-2 gap-2">
          <div >
            <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
              Delegates
            </h2>
          </div>
          <McausSearch />
        </div>
      </div>
      <div className="mt-1 overflow-x-auto rounded-md  border-4 border-[#ABABAB]">
        <div className="table-container scrollbar-hide overflow-y-auto h-[76vh]">
          <table className="text-center   table-auto w-full ">
            <thead className="sticky top-0 bg-[#2194FF] text-gray-800">
              <tr>
                <th className="px-2 border text-white  py-2">ID</th>
                <th className="px-2 border text-white   py-2">Country Flag</th>
                <th className="px-2 border text-white py-2">Country Name</th>
                <th className="px-2 border text-white py-2">Name</th>
                <th colspan="2" className="px-2  text-white py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 overflow-y-auto ">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.id}
                  </td>
                  <td className="border rounded-full p-2 w-10 h-10 py-2">
                    {item.flag}
                  </td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.countryName}
                  </td>
                  <td className="border font-medium lg:text-xl py-2">
                    {item.name}
                  </td>
                  <td className="border py-2">
                    <button className="bg-[#62BDFF] hover:bg-blue-700 text-white font-bold text-lg py-2 px-8 rounded-lg">
                      {item.action}
                    </button>
                  </td>
                 
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default McausTable;
