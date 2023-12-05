import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./PerformanceBenchmarkScreenOne.css"; // Import the CSS file

import { Img, List, Text } from "components";

const PerformanceBenchmarkScreenOnePage = () => {
  let [meter, setMeter] = useState(100)

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col gap-[41px] items-center justify-start max-w-[1408px] mb-[177px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="md:h-[127px] h-[132px] relative w-[14%] md:w-full">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_10.png"
                alt="rectangle346265"
              />
            </div>
            <Img
              className="h-[81px] md:h-auto md:ml-[0] ml-[52px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
              src="images/img_ellipse11045.png"
              alt="ellipse11045"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-[32px] items-start justify-start md:ml-[0] ml-[477px] md:mt-0 mt-[34px] w-auto md:w-full">
              <Text
                className="text-[17px] text-blue-600 font-bold  w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Dashboard
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Journals
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Trading
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Assesments
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Learning
              </Text>
            </div>
            <Img
              className="h-[81px] md:h-auto md:ml-[0] ml-[52px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
              src="images/img_ellipse11045.png"
              alt="ellipse11045"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-4/5 md:w-full">

            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="bg-blue-600 flex flex-col gap-5 items-center justify-start p-[35px] w-96 md:px-10 sm:px-5 rounded-[11px] shadow-bs5">
                <Text className="bg-white-A700 flex h-[79px] items-center justify-center rounded-[39px] sm:text-[25px] md:text-[27px] text-[29px] text-blue-600 text-center w-[79px]" size="txtPoppinsSemiBold29Blue600">
                  56
                </Text>
                <Text className="mb-3 text-[17px] text-center text-white-A700 w-[79%] sm:w-full" size="txtPoppinsRegular17WhiteA700">
                  Confidence Score
                </Text>
              </div>

              <div className="bg-blue-600 flex flex-col gap-5 w-96 items-center justify-center md:ml-[0] ml-[35px]   rounded-[11px] shadow-bs5">
                <Text className="bg-white-A700 flex h-[79px] items-center justify-center mt-[25px] sm:px-5 rounded-[39px] sm:text-[25px] md:text-[27px] text-[29px] text-blue-600 text-center w-[79px]" size="txtPoppinsSemiBold29Blue600">
                  76
                </Text>
                <Text className="mb-[11px] text-[17px] text-center text-white-A700 w-[79%] sm:w-full" size="txtPoppinsRegular17WhiteA700">
                  Related insights from your collection were found
                </Text>
              </div>

              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[41px] items-center justify-start ml-14 md:ml-[0] p-[26px] sm:px-5 rounded-[11px] shadow-bs5 w-[35%] md:w-full" style={{ height: '300px' }}>
                <Text className="autosave-text mb-0.5 text-[22px] mt-0 text-black-900 sm:text-lg md:text-xl" size="txtPoppinsMedium22 ">
                  Market Conditions
                </Text>
                <ReactSpeedometer
                  maxValue={500}
                  value={meter}
                  needleColor="red"
                  startColor="green"
                  segments={10}
                  endColor="blue"
                />
              </div>


            </div>
            <Text
              className="mt-[68px] text-[17px] text-black-900_ce"
              size="txtPoppinsSemiBold17Black900ce"
            >
              Related Insights
            </Text>
            <section class="mx-auto w-full max-w-7xl px-4 py-4">

              <div class="mt-6 flex flex-col">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              <span>Employee</span>
                            </th>
                            <th
                              scope="col"
                              class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Time
                            </th>
                            <th
                              scope="col"
                              class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Role
                            </th>
                            <th scope="col" class="relative px-4 py-3.5">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex items-center">
                                <div class="h-10 w-10 flex-shrink-0">
                                  <img
                                    class="h-10 w-10 rounded-full object-cover"
                                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                    alt=""
                                  />
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    John Doe
                                  </div>
                                  <div class="text-sm text-gray-700">john@devui.com</div>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-12 py-4">
                              <div class="date ">Front-end Developer</div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Active
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              Developer
                            </td>
                            <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <a href="#" class="text-gray-700">
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex items-center">
                                <div class="h-10 w-10 flex-shrink-0">
                                  <img
                                    class="h-10 w-10 rounded-full object-cover"
                                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                                    alt=""
                                  />
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    Jane Doe
                                  </div>
                                  <div class="text-sm text-gray-700">jane@devui.com</div>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-12 py-4">
                              <div class="text-sm text-gray-900 ">Back-end Developer</div>
                              <div class="text-sm text-gray-700">Engineering</div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Active
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                              CTO
                            </td>
                            <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <a href="#" class="text-gray-700">
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceBenchmarkScreenOnePage;
