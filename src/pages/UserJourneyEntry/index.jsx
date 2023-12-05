import React from "react";
import { Button, Img, List, Text } from "components";
import "./UserJourneyEntry.css"; // Import the CSS file

const UserJourneyEntryPage = () => {
  return (
    <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pr-5 pt-5 w-full">
      <div className="flex flex-col items-center justify-end max-w-[1408px] mx-auto md:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Img
            className="h-[81px] md:h-auto md:ml-[0] ml-[52px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
            src="images/img_ellipse11045.png"
            alt="ellipse11045"
          />
          <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[477px] md:mt-0 mt-[34px] w-auto md:w-full">
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
            className="h-[81px] md:h-auto md:ml-[0] ml-[52px] md:mt-0 mt-1.5 rounded-[50%] w-[81px]"
            src="images/img_ellipse11045.png"
            alt="ellipse11045"
          />
        </div>

        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3 w-full md:w-full">
          <Button
            className="flex h-[39px] items-center justify-center md:mt-0 my-[5px] rounded-[19px] w-[39px]"
            color="blue_600_1e"
            size="xs"
          >
            <img
              src="images/img_uilcalender.svg"
              alt="uilcalender"
            />
          </Button>
          <Text
            className="md:ml-[0] ml-[13px] md:mt-0 mt-3 text-[17px] text-black-900"
            size="txtPoppinsRegular17Black900"
          >
            September 28, 2023
          </Text>
          {["BTC", "ETH", "SOI"].map((item, index) => (
            <Button
              key={index}
              className="cursor-pointer font-mazzard font-semibold leading-[normal] min-w-[81px] md:ml-[0] ml-[23px] mb-2 rounded-md text-[17px] text-center"
              color="blue_600_30"
              size="md"
            >
              {item}
            </Button>
          ))}
          <Text
            className="md:ml-0 ml-33 md:mt-0 mt-2 ml-96 text-[30px] mb-3 autosave-text"
            size="txtPoppinsRegular17Black900"
          >
            AutoSaving.......Saved
          </Text>
        </div>

        <List
          className="flex flex-col gap-9 items-center mt-[23px] w-[91%]"
          orientation="vertical"
        >
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-row gap-[9px] items-end justify-start w-[21%] md:w-full">
                  <Button
                    className="flex h-[53px] items-center justify-center rounded-[26px] w-[53px]"
                    color="blue_600_1e"
                    size="xs"
                  >
                    <Img
                      className="h-[33px]"
                      src="images/img_phnoteduotone.svg"
                      alt="phnoteduotone"
                    />
                  </Button>
                  <Text
                    className="mb-[3px] mt-4 text-[22px] text-black-900_7f_01 sm:text-lg md:text-xl"
                    size="txtPoppinsLight22"
                  >
                    Pre-Trading Notes
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs6 w-full">
                  <Text
                    className="leading-[195.00%] mb-2 text-[15px] text-black-900_a8 w-[96%] sm:w-full"
                    size="txtPoppinsRegular15"
                  >
                    Lorem ipsum dolor sit amet consectetur. Tincidunt elit purus
                    elementum a nunc...
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};

export default UserJourneyEntryPage;
  