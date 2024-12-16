"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface CompanyDetails {
  id: string;
  company: string;
  link: string;
  title: string;
}

const Body = () => {
  const companies = ["All", "Meta", "Apple", "Amazon", "Netflix", "Google"];

  const [data, setData] = useState<CompanyDetails[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [displayCurrentSelection, setCurrentSelection] =
    useState<string>("All");
  const handleSelection = (currentCompany: string) => {
    setCurrentSelection(currentCompany);
  };

  const fetchData = async (filter: string) => {
    try {
      const response = await fetch(`/api/getData?filter=${filter}`);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (data.length > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data]);

  useEffect(() => {
    if (displayCurrentSelection) {
      fetchData(displayCurrentSelection);
    }
  }, [displayCurrentSelection]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col lg:w-1/4 justify-center items-center sticky top-10 mb-8 ">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className=" text-white bg-initial-blue hover:bg-zima-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-5 py-2.5 text-center flex justify-center items-center w-full"
          type="button"
        >
          {displayCurrentSelection == "All"
            ? "All Companies"
            : displayCurrentSelection}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`relative ${
            isOpen ? "block" : "hidden"
          } z-10 w-full  mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}
          style={{ top: "100%", left: 0 }}
          onClick={toggleDropdown}
        >
          <ul
            className="py-2 text-lg text-gray-700 dark:text-gray-200 text-center"
            aria-labelledby="dropdownDefaultButton"
          >
            {companies.map((company, index) => (
              <li key={index}>
                <div
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleSelection(company)}
                >
                  {company == "All" ? "All Companies" : company}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className="flex w-3/4 lg:w-2/4 mx-auto border rounded-3xl bg-white p-10 my-4"
        >
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              src={`${item.company}.svg`}
              alt={item.company}
              width={75}
              height={75}
              className=" w-8 h-auto 2xl:w-16"
            />
            <p className="2xl:text-4xl md:text-2xl ml-7">{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
