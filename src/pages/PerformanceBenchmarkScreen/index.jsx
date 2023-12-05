import React from "react";

import { Line as ChartLine } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { Img, Line, List, SelectBox, Text } from "components";

import { ChartJsLineData, ChartJsLineData1 } from "./chartData.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const selectAssetOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PerformanceBenchmarkScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col gap-[33px] items-center justify-start max-w-[1408px] mb-[71px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[213px] justify-start w-[17%] md:w-full">
              <div className="md:h-[127px] h-[132px] mr-[43px] relative w-[81%]">
      
                <Img
                  className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_marketmindslogo.png"
                  alt="marketmindslogo"
                />
                <Img
                  className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_rectangle34626545_13.png"
                  alt="rectangle346265"
                />
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[88px] w-[62%] md:w-full">
                <Text
                  className="text-[15px] whitespace-nowrap text-black-900"
                  size="txtPoppinsMedium15"
                >
                  Asset Percent Gain
                </Text>
                <Line className="bg-blue-600 h-1 rounded-sm w-[107%]" />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col justify-start w-[68%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[52px] items-center justify-end md:ml-[0] ml-[203px] w-[79%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[17px] font-bold text-blue-600 w-auto"
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
                  className="h-[81px] md:h-auto mr-5 rounded-[50%] w-[81px]"
                  src="images/img_ellipse11045.png"
                  alt="ellipse11045"
                />
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[190px] mt-[43px] w-[16%] md:w-full">
                <Text
                  className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                  size="txtPoppinsMedium21"
                >
                  Performance
                </Text>
                <Line className="bg-blue-600 h-[5px] mt-1 rounded-sm w-full" />
              </div>
              <div className="font-mazzard h-16 md:h-[108px] mt-11 relative w-[55%] sm:w-full">
                {/* <div className="bg-blue-600_21 h-9 ml-3.5 my-auto rounded-[50%] w-9"></div> */}

                <SelectBox
                  className="absolute cursor-pointer border-2 inset-[0] justify-center leading-[normal] m-auto text-center text-lg w-full border-2 border-blue-600 border-opacity-100"
                  placeholderClassName="text-black-900_59 cursor-pointer"

                  indicator={
                    <Img
                      className="h-[21px] mr-[0] w-[21px] right-[0] absolute cursor-pointer"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"

                    />
                  }
                  isSearchable={false}
                  placeholder="Select Asset"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-6 mr-3.5 w-6 right-[3%] absolute"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="group108"
                  isMulti={false}
                  options={selectAssetOptionsList}
                  shape="round"
                  color="black_900_23"
                  size="xs"
                  variant="outline"
                />

              </div>
              <div className="flex md:flex-col flex-row font-mazzard md:gap-5 items-start justify-end md:ml-[0] ml-[142px] mr-14 mt-[63px] w-[79%] md:w-full">
                <Text
                  className="md:mt-0 mt-1 text-black-900 text-center text-lg whitespace-nowrap"
                  size="txtMazzardHRegular18Black900"
                >
                  1 week
                </Text>
                <div className="flex flex-col font-poppins justify-start ml-3 md:ml-[0] w-[27%] md:w-full">
                  <div className="flex flex-row gap-[63px] items-end justify-start w-full">
                    <Img
                      className="h-[5px] mb-0.5 mt-[15px]"
                      src="images/img_vector12_black_900.svg"
                      alt="vectorTwelve"
                    />
                    <Text
                      className="text-[15px] text-black-900 whitespace-nowrap"
                      size="txtPoppinsMedium15"
                    >
                      User Performace
                    </Text>
                  </div>
                  <Line className="bg-blue-600 h-1 md:ml-[0] ml-[73px] mr-[23px] rounded-sm w-[70%]" />
                </div>
                <Text
                  className="md:ml-[0] whitespace-nowrap ml-[398px] md:mt-0 mt-1 text-black-900 text-center text-lg"
                  size="txtMazzardHRegular18Black900"
                >
                  1 week
                </Text>
                <Img
                  className="h-[5px] ml-3 md:ml-[0] md:mt-0 mt-[15px]"
                  src="images/img_vector12_black_900.svg"
                  alt="vectorTwelve_One"
                />
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[35px] grid md:grid-cols-1 grid-cols-2 justify-center w-[91%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col h-[506px] items-center justify-start p-[39px] sm:px-5 rounded-[7px] shadow-bs7 w-full">
              <ChartLine
                options={{
                  responsive: true,

                  maintainAspectRatio: false,
                }}
                data={ChartJsLineData}
              />
            </div>

            <div className="bg-white-A700 flex flex-col h-[506px] items-center justify-start p-[39px] sm:px-5 rounded-[7px] shadow-bs7 w-full">
              <ChartLine
                options={{
                  responsive: true,

                  maintainAspectRatio: false,
                }}
                data={ChartJsLineData1}
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default PerformanceBenchmarkScreenPage;
