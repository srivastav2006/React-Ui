import React, { useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import ReactSpeedometer from "react-d3-speedometer";

const DashboardPage = () => {
  let[meter,setMeter]=useState(100)

  const tableData = React.useRef([
    {
      stock: "images/img_ritimeline.svg",
      time: "18/08/2023",
      amount: "$450.99",
    },
    {
      stock: "images/img_ritimeline.svg",
      time: "16/08/2023",
      amount: "$250.99",
    },
    {
      stock: "images/img_ritimeline.svg",
      time: "13/08/2023",
      amount: "$350.99",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("stock", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-end p-1">
            <Button
              className="flex h-[52px] items-center justify-center mt-[15px] w-[52px]"
              shape="circle"
              color="blue_600_2b"
              size="xs"
            >
              <Img
                className="h-[35px]"
                src="images/img_materialsymbolssend.svg"
                alt="materialsymbols"
              />
            </Button>
            <Text
              className="ml-[9px] text-[15px] text-black-900_aa"
              size="txtMazzardHMedium15Black900aa"
            >
              Stock Traded
            </Text>
            <Img
              className="h-[19px] ml-[99px] mr-0.5 w-[19px]"
              alt="ritimeline"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[136px] pl-[34px] py-[18px] text-[15px] text-white-A700"
            size="txtMazzardHMedium15"
          >
            Stock
          </Text>
        ),
      }),
      tableColumnHelper.accessor("time", {
        cell: (info) => (
          <Text
            className="pb-[19px] pt-[35px] text-black-900_aa text-sm"
            size="txtMazzardHRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[232px] pl-3 py-[18px] text-[15px] text-white-A700"
            size="txtMazzardHMedium15"
          >
            Time
          </Text>
        ),
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[35px] text-black-900_aa text-lg"
            size="txtMazzardHMedium18Black900aa"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[136px] pl-[7px] py-[18px] text-[15px] text-white-A700"
            size="txtMazzardHMedium15"
          >
            Amount
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1408px] mb-6 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="md:h-[127px] h-[132px] relative w-[14%] md:w-full">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo_127x186.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545_5.png"
                alt="rectangle346265"
              />
            </div>
            <Img
              className="self-center h-[81px] md:h-auto mr-1 md:ml-[0] ml-[50px] md:mt-0 -mt-12 rounded-[50%] w-[81px]"
              src="images/img_ellipse11045.png"
              alt="ellipse11045"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[477px] md:mt-0 mt-[34px] w-auto md:w-full">
              <Text
                className="text-[17px] text-blue-600 w-auto self-center"
                size="txtPoppinsSemiBold17"
              >
                Dashboard
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto self-center"
                size="txtPoppinsRegular17Black900c1"
              >
                Journals
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto self-center"
                size="txtPoppinsRegular17Black900c1"
              >
                Trading
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto self-center"
                size="txtPoppinsRegular17Black900c1"
              >
                Assesments
              </Text>
              <Text
                className="text-[17px] text-black-900_c1 w-auto self-center"
                size="txtPoppinsRegular17Black900c1"
              >
                Learning
              </Text>
            </div>
            <Img
              className="self-center h-[81px] md:h-auto md:ml-[0] ml-[50px] md:mt-0 -mt-12 rounded-[50%] w-[81px]"
              src="images/img_ellipse11045.png"
              alt="ellipse11045"
            />
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[95%] md:w-full">
            <Text
              className="leading-[41.00px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
              size="txtPoppinsRegular23"
            >
              <span className="text-black-900 font-poppins text-left text-lg font-normal">
                <>
                  Good Morning
                  <br />
                </>
              </span>
              <span className="md:text-[27px] sm:text-[25px] text-blue-600 font-poppins text-left text-[29px] font-semibold">
                Hales Smith
              </span>
            </Text>
            <div className="bg-blue-600_2d flex flex-row font-mazzard items-start justify-start sm:mt-0 mt-[19px] p-[19px] rounded-md">
              <Text
                className="ml-[1px] my-0.5 text-blue-600 font-bold  underline  text-center text-lg"
                size="txtMazzardHSemiBold18"
              >
                Timeframe
              </Text>
              <Text
                className="mb-[3px] ml-40 text-black-900 text-center text-lg"
                size="txtMazzardHRegular18Black900"
              >
                1 week
              </Text>
              <div className="flex flex-col h-[21px] items-center justify-start ml-[7px] mt-0.5 w-[21px]">
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[35px] items-start justify-start mt-8 w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[244px] items-center justify-start p-5 w-[39%] md:w-full"
                style={{ backgroundImage: "url('images/img_group105.svg')" }}
              >
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-4 mt-0.5 w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-1.5">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      Total Trades
                    </Text>
                    <Text
                      className="mt-2 sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtPoppinsSemiBold27"
                    >
                      105
                    </Text>
                    <Text
                      className="mt-[9px] text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      Risk Award Ratio
                    </Text>
                    <Text
                      className="mt-[19px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtPoppinsSemiBold27"
                    >
                      15%
                    </Text>
                  </div>
                  <Img
                    className="h-[169px] sm:mt-0 mt-[15px]"
                    src="images/img_group1171277858.svg"
                    alt="group1171277858"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col font-mazzard gap-[30px] items-center justify-start md:mt-0 mt-[3px] p-[34px] sm:px-5 rounded-md shadow-bs4 w-1/4 md:w-full">
                <div className="bg-blue-600 flex flex-col items-center justify-end p-5 rounded-[45px] w-[90px] md:w-full">
                  <Img
                    className="h-[47px] mt-0.5 w-[47px]"
                    src="images/img_iconoirstrategy.svg"
                    alt="iconoirstrategy"
                  />
                </div>
                <Text
                  className="mb-[26px] text-[22px] text-black-900_aa sm:text-lg md:text-xl"
                  size="txtMazzardHRegular22"
                >
                  Trade History Log
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col font-mazzard gap-[46px] items-center justify-start md:mt-0 mt-[3px] p-[29px] sm:px-5 rounded-md shadow-bs4 w-[26%] md:w-full">
                <div className="bg-blue-600 flex flex-col items-center justify-start p-4 rounded-[45px] w-[90px] md:w-full">
                  <Img
                    className="h-[55px] mb-0.5 w-[55px]"
                    src="images/img_carbonstormtracker.svg"
                    alt="carbonstormtrac"
                  />
                </div>
                <Text
                  className="mb-5 text-[22px] text-black-900_aa sm:text-lg md:text-xl"
                  size="txtMazzardHRegular22"
                >
                  User Sentiment Analytics
                </Text>
              </div>
            </div>
            <Text
              className="text-black-900 text-xl"
              size="txtPoppinsSemiBold20"
            >
              Recent Activities
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[17px] rounded-md shadow-bs4 w-[52%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                    <div className="overflow-auto font-mazzard w-full">
                      <ReactTable
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={""}
                        headerClass="bg-blue-600"
                      />
                    </div>
                    <a

                      className="text-black-900_c1 text-lg underline"
                    >
                      <Text size="txtPoppinsRegular18">View All</Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[62px] items-center justify-end mb-[15px] p-[29px] sm:px-5 rounded-[11px] shadow-bs5 w-[44%] md:w-full">

                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Market Conditions
                </Text>
                <ReactSpeedometer
  maxValue={500}
  value={meter}
  needleColor="red"
  startColor="green"
  segments={10}
  endColor="blue"
/>
<button onClick={()=>{setMeter(meter + 10 )}}>Add+</button>
<Button onClick={()=>{setMeter(meter - 10 )}}>Remove - </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
