import React from "react";

import { Button, Img, Input, Text } from "components";

const ProfileScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col justify-start max-w-[1408px] mb-[59px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="md:h-[127px] h-[132px] relative w-[14%] md:w-full">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_6.png"
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
          <Img
            className="h-[169px] md:ml-[0] ml-[637px] mt-[46px]"
            src="images/img_group1171277859.svg"
            alt="group1171277859"
          />
          <div className="flex flex-row font-mazzard sm:gap-10 items-center justify-between md:ml-[0] ml-[247px] mt-[87px] w-[43%] md:w-full">
            <Text
              className="text-black-900_ed text-center text-lg"
              size="txtMazzardHRegular18Black900ed"
            >
              First Name
            </Text>
            <Text
              className="text-black-900_ed text-center text-lg"
              size="txtMazzardHRegular18Black900ed"
            >
              Last Name
            </Text>
          </div>
          <div className="flex flex-col font-mazzard items-start justify-start md:ml-[0] ml-[241px] mt-4 w-[68%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between w-full">
              <Input
                name="groupSixtySix"
                placeholder="First Name"
                className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                wrapClassName="flex sm:flex-1 sm:w-full"
                type="text"
                prefix={
                  <div className="h-[37px] mr-3.5 pt-1.5 pb-[7px] pl-[7px] pr-1.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                    <Img
                      className="h-6 my-auto"
                      src="images/img_mdiuseroutline.svg"
                      alt="mdi:user-outline"
                    />
                  </div>
                }
              ></Input>
              <Input
                name="groupSixtyThree"
                placeholder="Last Name"
                className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                wrapClassName="flex sm:flex-1 sm:w-full"
                type="text"
                prefix={
                  <div className="h-[37px] mr-3.5 pt-1.5 pb-[7px] pl-[7px] pr-1.5 w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                    <Img
                      className="h-6 my-auto"
                      src="images/img_mdiuseroutline.svg"
                      alt="mdi:user-outline"
                    />
                  </div>
                }
              ></Input>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between ml-1.5 md:ml-[0] mt-[41px] w-[61%] md:w-full">
              <Text
                className="text-black-900_ed text-center text-lg"
                size="txtMazzardHRegular18Black900ed"
              >
                Email Address
              </Text>
              <Text
                className="text-black-900_ed text-center text-lg"
                size="txtMazzardHRegular18Black900ed"
              >
                Address
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[58px] items-center justify-between mt-4 w-full">
              <div className="md:h-52 h-[210px] relative w-[47%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[39px] justify-start w-full">
                      <div className="border border-black-900_30 border-solid flex flex-col items-start justify-end p-[22px] sm:px-5 rounded-[9px] shadow-bs w-full">
                        <Text
                          className="md:ml-[0] ml-[43px] text-[17px] text-black-900_42 text-center"
                          size="txtMazzardHRegular17"
                        >
                          First Name
                        </Text>
                      </div>
                      <Text
                        className="ml-1.5 md:ml-[0] text-black-900_ed text-center text-lg"
                        size="txtMazzardHRegular18Black900ed"
                      >
                        Account Balance
                      </Text>
                    </div>
                    <div className="border border-black-900_30 border-solid flex flex-col items-start justify-end p-[22px] sm:px-5 rounded-[9px] shadow-bs w-full">
                      <Text
                        className="md:ml-[0] ml-[43px] text-[17px] text-black-900 text-center"
                        size="txtMazzardHRegular17Black900"
                      >
                        300$
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[107px] h-max inset-y-[0] items-center justify-start left-[3%] my-auto w-[9%]">
                  <Button
                    className="flex h-[37px] items-center justify-center rounded-[18px] w-[37px]"
                    size="sm"
                    variant="outline"
                  >
                    <Img src="images/img_mail.svg" alt="mail" />
                  </Button>
                  <Button
                    className="flex h-[37px] items-center justify-center rounded-[18px] w-[37px]"
                    size="xs"
                    variant="outline"
                  >
                    <Img
                      className="h-[21px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                <Input
                  name="groupSixtyTwo"
                  placeholder="Last Name"
                  className="leading-[normal] p-0 placeholder:text-black-900_42 text-[17px] text-center w-full"
                  wrapClassName="flex w-full"
                  type="text"
                  prefix={
                    <div className="h-[37px] mr-3.5 pt-1.5 pb-[7px] pl-1.5 pr-[7px] w-[37px] outline-blue-600 outline-[0.5px] outline rounded-[18px] flex justify-center items-center">
                      <Img
                        className="h-6 my-auto"
                        src="images/img_iconamoonlocationpinbold.svg"
                        alt="iconamoon:location-pin-bold"
                      />
                    </div>
                  }
                ></Input>
                <Text
                  className="md:ml-[0] ml-[9px] mt-[39px] text-black-900_ed text-center text-lg"
                  size="txtMazzardHRegular18Black900ed"
                >
                  Preferred Trading Instruments
                </Text>
                <div className="md:h-20 sm:h-[151px] h-[66px] mt-3.5 relative w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-between ml-[9px] my-auto w-1/2">
                    <div className="bg-blue-600_30 h-[49px] rounded-md w-[48%]"></div>
                    <div className="bg-blue-600_30 h-[49px] rounded-md w-[48%]"></div>
                  </div>
                  <div className="absolute border border-black-900_30 border-solid flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-[19px] rounded-[9px] shadow-bs w-full">
                    <Text
                      className="mb-[5px] text-[17px] text-blue-600 text-center"
                      size="txtMazzardHSemiBold17"
                    >
                      BTC
                    </Text>
                    <Text
                      className="mb-[5px] sm:ml-[0] ml-[82px] text-[17px] text-blue-600 text-center"
                      size="txtMazzardHSemiBold17"
                    >
                      ETH
                    </Text>
                    <Img
                      className="h-[7px] sm:ml-[0] ml-[215px] mr-[3px] sm:mt-0 mt-[9px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[313px] md:ml-[0] ml-[323px] mt-[37px] text-center text-lg"
              shape="round"
              size="lg"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreenPage;
