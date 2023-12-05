import React from "react";

import { Button, Img, Text } from "components";

const VerifyEmailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mazzard items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[153px] justify-start md:mt-0 mt-5 md:px-5 w-[35%] md:w-full">
            <div className="md:h-[127px] h-[132px] relative w-[38%]">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_3.png"
                alt="rectangle346265"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[99px] w-[81%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_e5 tracking-[0.36px]"
                size="txtMazzardHSemiBold36"
              >
                Verify Email
              </Text>
              <Text
                className="leading-[30.00px] ml-1 md:ml-[0] mt-[30px] text-black-900_a0 text-xl"
                size="txtMazzardHRegular20"
              >
                <>
                  Enter the 5 digit code received in
                  <br />
                  your phone number.
                </>
              </Text>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[27px] mt-[54px] w-[86%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtMazzardHMedium28"
                >
                  0
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtMazzardHMedium28"
                >
                  3
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtMazzardHMedium28"
                >
                  8
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtMazzardHMedium28"
                >
                  6
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                  size="txtMazzardHMedium28"
                >
                  5
                </Text>
              </div>
              <Img
                className="h-px md:ml-[0] ml-[5px] mt-1.5"
                src="images/img_group1171276666.svg"
                alt="group1171276666"
              />
              <Text
                className="ml-1.5 md:ml-[0] mt-[53px] text-[19px] text-black-900 text-center tracking-[0.19px]"
                size="txtMazzardHRegular19Black900"
              >
                <span className="text-black-900 font-mazzard font-normal">
                  Not received?{" "}
                </span>
                <span className="text-black-900 font-mazzard font-semibold">
                  Resend
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[368px] mt-[62px] text-center text-xl"
                shape="round"
                size="lg"
              >
                Verify
              </Button>
            </div>
          </div>
          <div className="bg-blue-600_21 flex md:flex-1 flex-col items-center justify-start p-[97px] md:px-5 w-[52%] md:w-full">
            <Img
              className="h-[519px] mb-[195px] mt-[116px] w-[519px]"
              src="images/img_forgotpasswordbro.svg"
              alt="togglerafikiOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailPage;
