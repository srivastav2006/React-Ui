import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const ManualTradeImportPage = () => {

  
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">

        <div className="flex flex-col items-center justify-start max-w-[1408px] mb-[83px] mx-auto md:px-5 w-full">

          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[81px] md:h-auto md:ml-[0] ml-[52px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
              src="images/abcd.png"
              alt="ellipse11045"
            />

            <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start md:ml-[0] ml-[477px] md:mt-0 mt-[34px] w-auto md:w-full">
              <Text
                className="text-[17px] text-blue-600 font-bold w-auto"
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
                Assessments
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto"
                size="txtPoppinsRegular17Black900c1"
              >
                Learning
              </Text>
            </div>
            <Img
              className="h-[81px] md:h-auto md:ml-[0] ml-[20px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
              src="images/img_ellipse11045.png"
              alt="ellipse11045"
            />
          </div>

          <Text
            className="sm:text-[17px] md:text-[19px] mt-10 text-[21px] text-black-900"
            size="txtPoppinsMedium21"
          >
            Manual Trade Import
          </Text>
          <Line className="bg-blue-600 h-[5px] rounded-sm w-[15%]" />
          <div className="flex flex-col font-mazzard items-center justify-start mt-[55px] w-[68%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-4 justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-[77%] md:w-full">
                  <Text
                    className="text-black-900_ed text-center text-lg"
                    size="txtMazzardHRegular18Black900ed"
                  >
                    Time Entered
                  </Text>
                  <Text
                    className="text-black-900_ed text-center text-lg"
                    size="txtMazzardHRegular18Black900ed"
                  >
                    Time Exited
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between w-full">
                    <Input
                      name="groupThirty"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-3.5 pt-1.5 pb-[7px] pl-[7px] pr-1.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-6 my-auto"
                            src="images/img_mdiuseroutline_blue_600.svg"
                            alt="mdi:user-outline"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      name="groupTwentyEight"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-[18px] pt-[9px] pb-2.5 pl-[9px] pr-2.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-[18px] my-auto"
                            src="images/img_mdiuseroutline_blue_600.svg"
                            alt="ri:time-line"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[25px] w-[76%] md:w-full">
                    <Text
                      className="text-black-900_ed text-center text-lg"
                      size="txtMazzardHRegular18Black900ed"
                    >
                      Asset
                    </Text>
                    <Text
                      className="text-black-900_ed text-center text-lg"
                      size="txtMazzardHRegular18Black900ed"
                    >
                      Entry Price
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[580px] items-center justify-between mt-3.5 w-full">
                    <Input
                      name="groupTwentyNine"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-3.5 pt-[9px] pb-2.5 pl-2.5 pr-[9px] w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-[18px] my-auto"
                            src="images/img_fluentwebasset16regular.svg"
                            alt="fluent:web-asset-16-regular"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      name="groupTwentySeven"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-[18px] pt-[11px] pb-2.5 pl-[11px] pr-2.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-4 my-auto"
                            src="images/img_epmoney.svg"
                            alt="ep:money"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[55px] w-full">
              <div className="flex flex-col gap-4 justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-0 w-[81%] md:w-full">
                  <Text
                    className="text-black-900_ed text-center text-lg"
                    size="txtMazzardHRegular18Black900ed"
                  >
                    Exit Price
                  </Text>
                  <Text
                    className="text-black-900_ed text-center text-lg"
                    size="txtMazzardHRegular18Black900ed"
                  >
                    Take Profit Level
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between w-full">
                    <Input
                      name="groupThirtyFour"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-3.5 pt-2.5 pb-[11px] pl-2.5 pr-[11px] w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-4 my-auto"
                            src="images/img_epmoney.svg"
                            alt="ep:money"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      name="groupThirtyTwo"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-[18px] pt-2.5 pb-[11px] pl-[11px] pr-2.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-4 my-auto"
                            src="images/img_epmoney.svg"
                            alt="ep:money"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0]  mt-[41px] w-[77%] md:w-full">
                    <Text
                      className="text-black-900_ed text-center text-lg"
                      size="txtMazzardHRegular18Black900ed"
                    >
                      Stop Loss Level
                    </Text>
                    <Text
                      className="text-black-900_ed text-center text-lg"
                      size="txtMazzardHRegular18Black900ed"
                    >
                      Trade Notes
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between mt-3.5 w-full">
                    <Input
                      name="groupThirtyThree"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-3.5 pt-[9px] pb-3 pl-[11px] pr-2.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-4 my-auto"
                            src="images/img_epmoney.svg"
                            alt="ep:money"
                          />
                        </div>
                      }
                    ></Input>
                    <Input
                      name="groupThirtyOne"
                      placeholder="Enter"
                      className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      prefix={
                        <div className="h-[37px] mr-[18px] pt-[9px] pb-2.5 pl-2.5 pr-[9px] w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                          <Img
                            className="h-[18px] my-auto"
                            src="images/img_phnotelight.svg"
                            alt="ph:note-light"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[319px] mt-[58px] text-center text-lg"
              shape="round"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManualTradeImportPage;
