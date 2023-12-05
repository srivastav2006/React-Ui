import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mazzard items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col md:gap-10 gap-[74px] justify-start md:mt-0 mt-5 md:px-5">
            <div className="md:h-[127px] h-[132px] relative w-[43%]">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_48x186.png"
                alt="rectangle346265"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[99px] w-[78%] md:w-full">
              <Text
                className="md:ml-[0] ml-[3px] sm:text-[27px] md:text-[29px] text-[31px] text-black-900_e5 tracking-[0.31px]"
                size="txtMazzardHSemiBold31"
              >
                WELCOME BACK
              </Text>
              <Text
                className="ml-1 md:ml-[0] mt-[19px] text-[19px] text-black-900_66"
                size="txtMazzardHRegular19"
              >
                Connect back to your account
              </Text>
              <Input
                name="emailaddress"
                placeholder="Email Address"
                className="!placeholder:text-black-900_38 !text-black-900_38 leading-[normal] p-0 text-[15px] text-center w-full"
                wrapClassName="flex mt-[33px] w-full"
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
              <Input
                name="password"
                placeholder="Password"
                className="!placeholder:text-black-900_38 !text-black-900_38 leading-[normal] p-0 text-[15px] text-center w-full"
                wrapClassName="flex mt-5 w-full"
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
              <a
                
                className="md:ml-[0] ml-[191px] mt-[26px] text-[17px] text-black-900_a8 text-center"
              >
                <Text size="txtMazzardHMedium17">Forgot password?</Text>
              </a>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[337px] mt-[26px] text-center text-lg"
                shape="round"
                size="lg"
              >
                Login
              </Button>
              <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[37px] mt-[50px] w-4/5 md:w-full">
                <Text
                  className="text-base text-black-900_a8 text-center"
                  size="txtMazzardHMedium16"
                >
                  Are you a new member?
                </Text>
                <Text
                  className="text-blue-600 text-center text-lg"
                  size="txtMazzardHMedium18"
                >
                  Register{" "}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between ml-2.5 md:ml-[0] mt-9 w-[94%] md:w-full">
                <Line className="bg-black-900_38 h-px mb-2.5 mt-[7px] w-[32%]" />
                <Text
                  className="text-base text-black-900_7c text-center"
                  size="txtMazzardHRegular16"
                >
                  Or login with
                </Text>
                <Line className="bg-black-900_38 h-px my-2 w-[30%]" />
              </div>
              <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[97px] mt-[33px] pt-2.5 w-auto">
                <Img
                  className="h-[38px] md:h-auto object-cover w-[38px]"
                  src="images/img_001apple.png"
                  alt="001apple"
                />
                <Img
                  className="h-[38px] md:h-auto object-cover w-[39px]"
                  src="images/img_002search.png"
                  alt="002search"
                />
                <Img
                  className="h-[38px] md:h-auto object-cover w-[38px]"
                  src="images/img_003facebook.png"
                  alt="003facebook"
                />
              </div>
            </div>
          </div>
          <Img
            className="h-[1024px] md:h-auto object-cover"
            src="images/img_rectangle34626678.png"
            alt="rectangle346266"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
