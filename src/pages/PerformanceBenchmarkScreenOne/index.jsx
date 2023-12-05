import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

import { Img, List, Text } from "components";

const PerformanceBenchmarkScreenOnePage = () => {
  let[meter,setMeter]=useState(100)

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
            <div className="flex md:flex-1 md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[477px] md:mt-0 mt-[34px] w-auto md:w-full">
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
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
              <div className="bg-blue-600 flex flex-col gap-5 items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[11px] shadow-bs5">
                <Text
                  className="bg-white-A700 flex h-[79px] items-center justify-center rounded-[39px] sm:text-[25px] md:text-[27px] text-[29px] text-blue-600 text-center w-[79px]"
                  size="txtPoppinsSemiBold29Blue600"
                >
                  56
                </Text>
                <Text
                  className="mb-3 text-[17px] text-center text-white-A700 w-[65%] sm:w-full"
                  size="txtPoppinsRegular17WhiteA700"
                >
                  Confidence Score
                </Text>
              </div>
              <div className="bg-blue-600 flex flex-col gap-5 items-center justify-center md:ml-[0] ml-[35px] p-5 rounded-[11px] shadow-bs5">
                <Text
                  className="bg-white-A700 flex h-[79px] items-center justify-center mt-[25px] sm:px-5 rounded-[39px] sm:text-[25px] md:text-[27px] text-[29px] text-blue-600 text-center w-[79px]"
                  size="txtPoppinsSemiBold29Blue600"
                >
                  76
                </Text>
                <Text
                  className="mb-[11px] text-[17px] text-center text-white-A700 w-[93%] sm:w-full"
                  size="txtPoppinsRegular17WhiteA700"
                >
                  Related insights from your collection were found
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[41px] items-center justify-start ml-14 md:ml-[0] p-[26px] sm:px-5 rounded-[11px] shadow-bs5 w-[48%] md:w-full">
               





              <ReactSpeedometer
  maxValue={500}
  value={meter}
  needleColor="red"
  startColor="green"
  segments={10}
  endColor="blue"
/>







                <Text
                  className="mb-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtPoppinsMedium22"
                >
                  Market Conditions
                </Text>
              </div>
            </div>
            <Text
              className="mt-[68px] text-[17px] text-black-900_ce"
              size="txtPoppinsSemiBold17Black900ce"
            >
              Related Insights
            </Text>
            <List
              className="flex flex-col gap-px items-center md:ml-[0] ml-[3px] mt-[7px] w-[98%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="h-[93px] relative w-[7%] md:w-full">
                  <div className="absolute bg-blue_gray-900_01 h-[63px] inset-[0] justify-center m-auto rounded-[13px] w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] leading-[140.00%] my-auto right-[0] text-[6px] text-white-A700_c9 w-[84%] sm:w-full"
                    size="txtPoppinsRegular6"
                  >
                    Lorem ipsum dolor sit amet cons ectetur. Faci lisis ipsum
                    volut pat blandit ferme ntum...........
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[15px] text-[17px] text-black-900_ce"
                  size="txtPoppinsSemiBold17Black900ce"
                >
                  Willaim Jones
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[139px] w-6"
                  src="images/img_ritimeline.svg"
                  alt="ritimeline"
                />
                <Text
                  className="md:ml-[0] ml-[5px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  23/08
                </Text>
                <Text
                  className="md:ml-[0] ml-[168px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  “ Lorem ipsum dolor sit amet consectetur. Tempor lectus. “
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                <div className="h-[93px] relative w-[8%] md:w-full">
                  <div className="absolute bg-blue_gray-900_01 h-[63px] inset-[0] justify-center m-auto rounded-[13px] w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] leading-[140.00%] my-auto right-[0] text-[6px] text-white-A700_c9 w-[84%] sm:w-full"
                    size="txtPoppinsRegular6"
                  >
                    Lorem ipsum dolor sit amet cons ectetur. Faci lisis ipsum
                    volut pat blandit ferme ntum...........
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[15px] text-[17px] text-black-900_ce"
                  size="txtPoppinsSemiBold17Black900ce"
                >
                  Willaim Jones
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[139px] w-6"
                  src="images/img_ritimeline.svg"
                  alt="ritimeline"
                />
                <Text
                  className="md:ml-[0] ml-[5px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  23/08
                </Text>
                <Text
                  className="md:ml-[0] ml-[168px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  “ Lorem ipsum sit amet consectetur. Tempor lectus. “
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                <div className="h-[93px] relative w-[8%] md:w-full">
                  <div className="absolute bg-blue_gray-900_01 h-[63px] inset-[0] justify-center m-auto rounded-[13px] w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] leading-[140.00%] my-auto right-[0] text-[6px] text-white-A700_c9 w-[84%] sm:w-full"
                    size="txtPoppinsRegular6"
                  >
                    Lorem ipsum dolor sit amet cons ectetur. Faci lisis ipsum
                    volut pat blandit ferme ntum...........
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[15px] md:mt-0 mt-[31px] text-[17px] text-black-900_ce"
                  size="txtPoppinsSemiBold17Black900ce"
                >
                  Willaim Jones
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[139px] md:mt-0 mt-9 w-6"
                  src="images/img_ritimeline.svg"
                  alt="ritimeline"
                />
                <Text
                  className="md:ml-[0] ml-[5px] md:mt-0 mt-[34px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  23/08
                </Text>
                <Text
                  className="md:ml-[0] ml-[168px] md:mt-0 mt-[42px] text-[17px] text-black-900_ce"
                  size="txtPoppinsRegular17Black900ce"
                >
                  “ Lorem ipsum dolor sit amet consectet lectus. “
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceBenchmarkScreenOnePage;
