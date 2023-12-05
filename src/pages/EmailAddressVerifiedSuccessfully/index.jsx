import React from "react";

import { Button, Img, Input, Text } from "components";

const EmailAddressVerifiedSuccessfullyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mazzard items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[123px] justify-start md:mt-0 mt-5 md:px-5 w-[35%] md:w-full">
            <div className="md:h-[127px] h-[132px] relative w-[38%]">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_4.png"
                alt="rectangle346265"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[99px] w-4/5 md:w-full">
              <Text
                className="leading-[34.00px] ml-1 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900_e5 tracking-[0.36px]"
                size="txtMazzardHSemiBold36"
              >
                <>
                  Email Address Verified
                  <br />
                  Successfully.
                </>
              </Text>
              <Text
                className="ml-1 md:ml-[0] mt-[38px] text-black-900_a0 text-xl"
                size="txtMazzardHRegular20"
              >
                Set new password
              </Text>
              <Input
                name="group112"
                placeholder="Password"
                className="!placeholder:text-black-900_38 !text-black-900_38 leading-[normal] p-0 text-[15px] text-center w-full"
                wrapClassName="flex ml-1 md:ml-[0] mt-[33px] w-[93%]"
                type="password"
                prefix={
                  <div className="h-[31px] mr-[11px] pt-1.5 pb-[7px] pl-1.5 pr-[7px] w-[31px] outline-blue-600 outline-[0.5px] outline rounded-[15px]">
                    <Img
                      className="h-[18px] my-auto"
                      src="images/img_akariconslockon.svg"
                      alt="akar-icons:lock-on"
                    />
                  </div>
                }
              ></Input>
              <Input
                name="group111"
                placeholder="Confirm Password"
                className="!placeholder:text-black-900_38 !text-black-900_38 leading-[normal] p-0 text-[15px] text-center w-full"
                wrapClassName="flex ml-1 md:ml-[0] mt-[19px] w-[93%]"
                type="password"
                prefix={
                  <div className="h-[31px] mr-[11px] pt-1.5 pb-[7px] pl-1.5 pr-[7px] w-[31px] outline-blue-600 outline-[0.5px] outline rounded-[15px]">
                    <Img
                      className="h-[18px] my-auto"
                      src="images/img_akariconslockon.svg"
                      alt="akar-icons:lock-on"
                    />
                  </div>
                }
              ></Input>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[368px] mt-[87px] text-center text-xl"
                shape="round"
                size="lg"
              >
                Verify
              </Button>
            </div>
          </div>
          <div className="bg-blue-600_21 flex md:flex-1 flex-col items-center justify-start p-[132px] md:px-5 w-[52%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[382px] items-end justify-end mb-[218px] mt-[158px] p-[83px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group115.svg')" }}
            >
              <Img
                className="h-[205px] mr-[41px] mt-[11px] w-[205px]"
                src="images/img_frame1171277917.svg"
                alt="frame1171277917"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailAddressVerifiedSuccessfullyPage;
