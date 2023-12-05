import React from "react";

import { Button, Img, Text } from "components";

const UserJournalCollectionScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1408px] mb-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="md:h-[127px] h-[132px] relative w-[14%] md:w-full">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_7.png"
                alt="rectangle346265"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[41px] justify-start md:mt-0 mt-1.5 w-3/5 md:w-full">
              <div className="flex md:flex-col flex-row font-poppins gap-[49px] items-center justify-end ml-24 md:ml-[0] w-[89%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[17px] text-black-900_c1 w-auto"
                    size="txtPoppinsRegular17Black900c1"
                  >
                    Dashboard
                  </Text>
                  <Text
                    className="text-[17px] text-blue-600 w-auto"
                    size="txtPoppinsSemiBold17"
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
                  className="h-[81px] md:h-auto rounded-[50%] w-[81px]"
                  src="images/img_ellipse11045.png"
                  alt="ellipse11045"
                />
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[313px] mr-[527px]"
                leftIcon={
                  <div className="h-[25px] mt-px mr-1.5 w-[25px] bg-white-A700">
                    <Img
                      className="h-[25px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                }
                shape="round"
                size="lg"
              >
                <div className="font-mazzard font-semibold leading-[normal] text-center text-lg">
                  Create New Journal
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
            <div className="md:gap-5 gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[5px] rounded-lg shadow-bs6 w-full">
                <div className="flex flex-col gap-[19px] justify-start mb-[29px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tl-lg rounded-tr-lg w-full">
                    <Text
                      className="leading-[160.00%] text-[13px] text-white-A700_c9 w-[95%] sm:w-full"
                      size="txtPoppinsRegular13"
                    >
                      Lorem ipsum dolor sit amet consectetur. Pharetra sagittis
                      sed ultricies amet nullam velit pharetra. Sed dolor nibh
                      etiam massa. Tellus aliquet porta pellentesque pretium
                      nibh ac sagittis arcu volutpat. Interdum turpis dictum
                      interdum faucibus. Platea tristiqu
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[18px] w-[37%] md:w-full">
                    <Text
                      className="text-[19px] text-black-900"
                      size="txtPoppinsMedium19"
                    >
                      William Jones
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[21px] w-[21px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        12/08/23
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserJournalCollectionScreenPage;
