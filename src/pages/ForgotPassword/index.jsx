import React from "react";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mazzard items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[135px] justify-start md:mt-0 mt-5 md:px-5 w-[35%] md:w-full">
            <div className="md:h-[127px] h-[132px] relative w-[38%]">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_2.png"
                alt="rectangle346265"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[99px] w-[81%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_e5 tracking-[0.36px]"
                size="txtMazzardHSemiBold36"
              >
                Forgot Password
              </Text>
              <Text
                className="leading-[30.00px] ml-1 md:ml-[0] mt-[37px] text-black-900_a0 text-lg w-[99%] sm:w-full"
                size="txtMazzardHRegular18"
              >
                Enter the email address on which your account is registered.
              </Text>
              <Input
                name="groupNinetyFour"
                placeholder="Email Address"
                className="!placeholder:text-black-900_38 !text-black-900_38 leading-[normal] p-0 text-[15px] text-center w-full"
                wrapClassName="flex ml-1 md:ml-[0] mt-7 w-[95%]"
                type="email"
                prefix={
                  <Img
                    className="h-[17px] mr-[18px] my-px"
                    src="images/img_icoutlineemail.svg"
                    alt="ic:outline-email"
                  />
                }
                size="sm"
              ></Input>
              <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] mt-[21px] w-[59%] md:w-full">
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_zondiconsexclamationoutline.svg"
                  alt="zondiconsexclam"
                />
                <Text
                  className="mt-1 text-[15px] text-black-900_6b text-center"
                  size="txtMazzardHRegular15"
                >
                  Make sure it belongs to you
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[337px] mt-12 text-center text-xl"
                shape="round"
                size="lg"
              >
                Forgot Password
              </Button>
            </div>
          </div>
          <div className="bg-blue-600_21 flex md:flex-1 flex-col items-center justify-start p-[38px] md:px-5 w-[52%] md:w-full">
            <Img
              className="h-[642px] mb-[183px] mt-[123px] w-[642px]"
              src="images/img_forgotpasswordbro.svg"
              alt="forgotpasswordb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
