import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";

const TradeStrategyLoggerScreenPage = () => {
  const table1Data = React.useRef([
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-2 pt-[35px] text-[13px] text-black-900 text-center"
            size="txtPoppinsRegular13Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[103px] text-[15px] text-black-900 text-center"
            size="txtPoppinsMedium15"
          >
            Date
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("outcome", {
        cell: (info) => (
          <Text
            className="pb-[5px] sm:pl-5 pl-[25px] pt-[35px] text-[13px] text-black-900 text-center"
            size="txtPoppinsRegular13Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[138px] text-[15px] text-black-900 text-center"
            size="txtPoppinsMedium15"
          >
            Outcome
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("asset", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-[9px] pt-[35px] text-[13px] text-black-900 text-center"
            size="txtPoppinsRegular13Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[109px] text-[15px] text-black-900 text-center"
            size="txtPoppinsMedium15"
          >
            Asset
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rrratio", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-[19px] pt-[35px] text-[13px] text-black-900 text-center"
            size="txtPoppinsRegular13Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[129px] text-[15px] text-black-900 text-center"
            size="txtPoppinsMedium15"
          >
            RR Ratio
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("gain", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-[13px] pt-[35px] text-[13px] text-black-900 text-center"
            size="txtPoppinsRegular13Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[52px] text-[15px] text-black-900 text-center"
            size="txtPoppinsMedium15"
          >
            % Gain
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col items-end justify-start max-w-[1408px] mb-[65px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[19px] items-end justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="md:h-[127px] h-[132px] relative w-[14%] md:w-full">
                  <Img
                    className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_marketmindslogo_127x186.png"
                    alt="marketmindslogo"
                  />
                  <Img
                    className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                    src="images/img_rectangle34626545_9.png"
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
              <div className="flex flex-col font-mazzard md:gap-10 gap-[67px] items-center justify-start w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="bg-blue-600_2d flex md:flex-1 flex-row items-start justify-start mb-1 md:mt-0 mt-[18px] p-[19px] rounded-md w-[31%] md:w-full">
                    <Text
                      className="ml-[11px] my-0.5 text-black-900 text-center text-lg"
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
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-poppins h-[86px] items-center justify-start p-4 w-2/5 md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1171277871.svg')",
                    }}
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-0.5 w-[94%] md:w-full">
                      <Button
                        className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                        color="white_A700"
                        size="sm"
                      >
                        <Img
                          className="h-[31px]"
                          src="images/img_carbonworkspaceimport.svg"
                          alt="carbonworkspace"
                        />
                      </Button>
                      <Text
                        className="leading-[137.00%] ml-4 sm:ml-[0] text-lg text-white-A700 w-[28%] sm:w-full"
                        size="txtPoppinsRegular18WhiteA700"
                      >
                        Manual Trade Import
                      </Text>
                      <Button
                        className="flex h-[51px] items-center justify-center ml-20 sm:ml-[0] rounded-[25px] w-[51px]"
                        color="white_A700"
                        size="xs"
                      >
                        <Img
                          src="images/img_tdesignfileimport.svg"
                          alt="tdesignfileimpo"
                        />
                      </Button>
                      <Text
                        className="leading-[137.00%] sm:ml-[0] ml-[23px] text-lg text-white-A700 w-1/4 sm:w-full"
                        size="txtPoppinsRegular18WhiteA700"
                      >
                        Import from .CSV
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[7px] shadow-bs7 w-[24%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start mb-[22px] mt-2.5 w-full">
                      <div className="flex flex-col gap-[9px] justify-start w-[59%]">
                        <Text
                          className="md:ml-[0] ml-[9px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                          size="txtPoppinsRegular22Black900"
                        >
                          Winrate %
                        </Text>
                        <div className="h-14 md:h-[52px] relative w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[53px] inset-x-[0] items-center justify-start mx-auto pb-6 sm:px-5 px-6 top-[0] w-full"
                            style={{
                              backgroundImage: "url('images/img_group92.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-between mb-1.5 w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-400 text-sm tracking-[1.00px]"
                                size="txtPoppinsRegular14Bluegray400"
                              >
                                XYZ
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-sm tracking-[1.00px]"
                                size="txtPoppinsRegular14Bluegray400"
                              >
                                XYZ
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] left-[16%] text-blue_gray-400 text-sm tracking-[1.00px]"
                            size="txtPoppinsRegular14Bluegray400"
                          >
                            XYZ
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[15%] text-blue_gray-400 text-sm tracking-[1.00px]"
                            size="txtPoppinsRegular14Bluegray400"
                          >
                            XYZ
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[98px] md:h-auto object-cover w-[38%]"
                        src="images/img_image1.png"
                        alt="imageOne"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[13px] items-start justify-center p-7 sm:px-5 rounded-[7px] shadow-bs7">
                    <Text
                      className="ml-1 md:ml-[0] mt-2.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22Black900"
                    >
                      Average risk to reward ration
                    </Text>
                    <Text
                      className="mb-[15px] ml-1 md:ml-[0] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                      size="txtPoppinsSemiBold29"
                    >
                      1:2.4
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-11 grid sm:grid-cols-1 grid-cols-2 w-[42%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-center sm:ml-[0] p-7 sm:px-5 rounded-[7px] shadow-bs7 w-full">
                      <Text
                        className="mt-[11px] text-[19px] text-black-900"
                        size="txtPoppinsRegular19"
                      >
                        Total pnl% Gain{" "}
                      </Text>
                      <Text
                        className="mb-[15px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                        size="txtPoppinsSemiBold29"
                      >
                        560
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-center sm:ml-[0] p-7 sm:px-5 rounded-[7px] shadow-bs7 w-full">
                      <Text
                        className="mt-[11px] text-[19px] text-black-900"
                        size="txtPoppinsRegular19"
                      >
                        Total pnl$ Gain
                      </Text>
                      <Text
                        className="mb-[15px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                        size="txtPoppinsSemiBold29"
                      >
                        560
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-mazzard gap-1.5 items-start justify-start mt-[37px] w-[9%] md:w-full">
            <Text
              className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
              size="txtMazzardHSemiBold22"
            >
              Graph View
            </Text>
            <Line className="bg-blue-600 h-[5px] md:ml-[0] ml-[3px] rounded-sm w-[73%]" />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[60px] items-center justify-end mt-8 w-[95%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start p-[39px] sm:px-5 rounded-[7px] shadow-bs7 w-1/2 md:w-full">
              <div className="flex flex-col gap-[22px] justify-start mb-[33px] mt-7 w-[93%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[37px] w-[94%] md:w-full">
                  <div className="flex flex-col gap-12 items-start justify-start w-auto">
                    <Text
                      className="text-black-900_7f_01 text-sm w-auto"
                      size="txtPoppinsRegular14Black9007f01"
                    >
                      100k
                    </Text>
                    <Text
                      className="text-black-900_7f_01 text-sm w-auto"
                      size="txtPoppinsRegular14Black9007f01"
                    >
                      80k
                    </Text>
                    <Text
                      className="text-black-900_7f_01 text-sm w-auto"
                      size="txtPoppinsRegular14Black9007f01"
                    >
                      60k
                    </Text>
                    <Text
                      className="text-black-900_7f_01 text-sm w-auto"
                      size="txtPoppinsRegular14Black9007f01"
                    >
                      40k
                    </Text>
                    <Text
                      className="text-black-900_7f_01 text-sm w-auto"
                      size="txtPoppinsRegular14Black9007f01"
                    >
                      20k
                    </Text>
                  </div>
                  <div className="bg-blue-600 h-[321px] sm:ml-[0] ml-[25px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-[250px] sm:ml-[0] ml-[65px] sm:mt-0 mt-[71px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-[196px] sm:ml-[0] ml-[58px] sm:mt-0 mt-[125px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-[321px] sm:ml-[0] ml-[63px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-[184px] sm:ml-[0] ml-[63px] sm:mt-0 mt-[137px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-[321px] sm:ml-[0] ml-[60px] rounded-md w-[3%]"></div>
                  <div className="bg-blue-600 h-60 sm:ml-[0] ml-[51px] sm:mt-0 mt-[81px] rounded-md w-[3%]"></div>
                </div>
                <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[55px] w-auto sm:w-full">
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Feb
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Mar
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Apr
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    May
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Jun
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Jul
                  </Text>
                  <Text
                    className="text-black-900_7f_01 text-sm w-auto"
                    size="txtPoppinsRegular14Black9007f01"
                  >
                    Aug
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start p-7 sm:px-5 rounded-[7px] shadow-bs7 w-[47%] md:w-full">
              <Text
                className="md:ml-[0] ml-[9px] text-[17px] text-black-900"
                size="txtPoppinsMedium17"
              >
                Trade History Log
              </Text>
              <Line className="bg-blue-600 h-[3px] md:ml-[0] ml-[11px] rounded-[1px] w-[23%]" />
              <div className="overflow-auto mb-[31px] md:ml-[0] ml-[7px] mt-5 w-[95%]">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={"border-b border-black-900_16"}
                  headerClass="border-b border-black-900_16"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-robotomono items-center justify-start mt-[46px] w-[96%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[7px] shadow-bs7 w-full">
              <div className="h-[549px] relative w-full">
                <Button
                  className="border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] mb-[-1px] min-w-[1291px] md:min-w-full mx-auto rounded-tl-[5px] rounded-tr-[5px] sm:text-[32px] md:text-[38px] text-[42px] text-center z-[1]"
                  color="white_A700"
                  size="xl"
                >
                  September 2023
                </Button>
                <div className="h-[450px] md:h-[83px] mt-auto mx-auto w-full">
                  <div className="h-[450px] md:h-[83px] m-auto w-full">
                    <div className="h-[450px] md:h-[83px] m-auto w-full">
                      <div className="h-[450px] md:h-[83px] m-auto w-full">
                        <div className="h-[450px] md:h-[83px] m-auto w-full">
                          <div className="h-[450px] md:h-[83px] m-auto w-full">
                            <div className="h-[450px] m-auto w-full">
                              <Text
                                className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[undefinedpx] mt-[39px] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[185px] z-[1]"
                                size="txtRobotoMonoBold20"
                              >
                                1
                              </Text>
                              <Button
                                className="border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] mb-[-1px] min-w-[186px] ml-auto text-center text-sm uppercase z-[1]"
                                shape="square"
                                color="white_A700"
                                size="sm"
                              >
                                saturday
                              </Button>
                              <div className="h-[411px] md:h-[83px] mt-auto mx-auto w-full">
                                <div className="h-[411px] md:h-[83px] m-auto w-full">
                                  <div className="h-[411px] md:h-[83px] m-auto w-full">
                                    <div className="h-[411px] md:h-[83px] m-auto w-full">
                                      <div className="h-[411px] md:h-[83px] m-auto w-full">
                                        <div className="h-[411px] m-auto w-full">
                                          <Text
                                            className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[undefinedpx] mt-[82px] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[185px] z-[1]"
                                            size="txtRobotoMonoBold20"
                                          >
                                            8
                                          </Text>
                                          <Text
                                            className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[-1px] ml-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[186px] z-[1]"
                                            size="txtRobotoMonoBold20"
                                          >
                                            7
                                          </Text>
                                          <div className="h-[329px] md:h-[83px] mt-auto mx-auto w-full">
                                            <div className="h-[329px] md:h-[83px] m-auto w-full">
                                              <div className="h-[329px] md:h-[83px] m-auto w-full">
                                                <div className="h-[329px] md:h-[83px] m-auto w-full">
                                                  <div className="h-[329px] md:h-[83px] m-auto w-full">
                                                    <div className="h-[329px] m-auto w-full">
                                                      <div className="bg-white-A700 border border-gray-200_02 border-solid flex flex-row items-start justify-between mb-[undefinedpx] mt-[82px] p-2 w-[15%] z-[1]">
                                                        <Text
                                                          className="ml-1.5 text-black-900 text-xl uppercase"
                                                          size="txtRobotoMonoBold20"
                                                        >
                                                          15
                                                        </Text>
                                                        <div className="flex flex-col items-end justify-start mr-0.5 mt-5">
                                                          <Text
                                                            className="text-blue-600 text-center text-xl"
                                                            size="txtRobotoMonoBold20Blue600"
                                                          >
                                                            $1.16K
                                                          </Text>
                                                          <Text
                                                            className="text-black-900 text-center text-xs"
                                                            size="txtRobotoMonoBold12"
                                                          >
                                                            5 Trades
                                                          </Text>
                                                        </div>
                                                      </div>
                                                      <Text
                                                        className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[-1px] ml-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[186px] z-[1]"
                                                        size="txtRobotoMonoBold20"
                                                      >
                                                        14
                                                      </Text>
                                                      <div className="h-[247px] md:h-[83px] mt-auto mx-auto w-full">
                                                        <div className="h-[247px] md:h-[83px] m-auto w-full">
                                                          <div className="h-[247px] md:h-[83px] m-auto w-full">
                                                            <div className="h-[247px] md:h-[83px] m-auto w-full">
                                                              <div className="h-[247px] md:h-[83px] m-auto w-full">
                                                                <div className="h-[247px] m-auto w-full">
                                                                  <Text
                                                                    className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[undefinedpx] mt-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[185px] z-[1]"
                                                                    size="txtRobotoMonoBold20"
                                                                  >
                                                                    22
                                                                  </Text>
                                                                  <Text
                                                                    className="bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center mb-[-1px] ml-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[186px] z-[1]"
                                                                    size="txtRobotoMonoBold20"
                                                                  >
                                                                    21
                                                                  </Text>
                                                                  <div className="h-[165px] md:h-[83px] mt-auto mx-auto w-full">
                                                                    <div className="h-[165px] md:h-[83px] m-auto w-full">
                                                                      <div className="h-[165px] md:h-[83px] m-auto w-full">
                                                                        <div className="h-[165px] md:h-[83px] m-auto w-full">
                                                                          <div className="h-[165px] md:h-[83px] m-auto w-full">
                                                                            <div className="h-[165px] md:h-[83px] m-auto w-full">
                                                                              <div className="absolute bottom-[0] h-[83px] right-[0] w-[86%] md:w-full">
                                                                                <div className="absolute h-[83px] inset-y-[0] my-auto right-[0] w-[84%] md:w-full">
                                                                                  <div className="absolute h-[83px] inset-y-[0] my-auto right-[0] w-[81%] md:w-full">
                                                                                    <div className="absolute h-[83px] inset-y-[0] my-auto right-[0] w-[76%] sm:w-full">
                                                                                      <div className="absolute h-[83px] inset-y-[0] my-auto right-[0] w-[67%] sm:w-full">
                                                                                        <Img
                                                                                          className="absolute h-[83px] inset-y-[0] my-auto right-[0]"
                                                                                          src="images/img_4.svg"
                                                                                          alt="Four"
                                                                                        />
                                                                                        <Img
                                                                                          className="absolute h-[83px] inset-y-[0] left-[0] my-auto"
                                                                                          src="images/img_3.svg"
                                                                                          alt="Three"
                                                                                        />
                                                                                      </div>
                                                                                      <Img
                                                                                        className="absolute h-[83px] inset-y-[0] left-[0] my-auto"
                                                                                        src="images/img_3.svg"
                                                                                        alt="Two"
                                                                                      />
                                                                                    </div>
                                                                                    <Img
                                                                                      className="absolute h-[83px] inset-y-[0] left-[0] my-auto"
                                                                                      src="images/img_3.svg"
                                                                                      alt="One"
                                                                                    />
                                                                                  </div>
                                                                                  <Text
                                                                                    className="absolute bg-white-A700 border border-gray-200_02 border-solid h-full inset-y-[0] justify-center left-[0] my-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl uppercase w-[185px]"
                                                                                    size="txtRobotoMonoBold20"
                                                                                  >
                                                                                    31
                                                                                  </Text>
                                                                                </div>
                                                                                <div className="absolute bg-white-A700 border border-gray-200_02 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-2">
                                                                                  <Text
                                                                                    className="mb-[39px] ml-1.5 md:ml-[0] text-black-900 text-xl uppercase"
                                                                                    size="txtRobotoMonoBold20"
                                                                                  >
                                                                                    30
                                                                                  </Text>
                                                                                </div>
                                                                              </div>
                                                                              <div
                                                                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[83px] items-start justify-start left-[0] p-2"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_29.svg')",
                                                                                }}
                                                                              >
                                                                                <Text
                                                                                  className="mb-[39px] ml-1.5 md:ml-[0] text-black-900 text-xl uppercase"
                                                                                  size="txtRobotoMonoBold20"
                                                                                >
                                                                                  29
                                                                                </Text>
                                                                              </div>
                                                                              <Text
                                                                                className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[0] text-black-900 text-xl top-[0] uppercase w-[186px]"
                                                                                size="txtRobotoMonoBold20"
                                                                              >
                                                                                28
                                                                              </Text>
                                                                            </div>
                                                                            <Text
                                                                              className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[14%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                              size="txtRobotoMonoBold20"
                                                                            >
                                                                              27
                                                                            </Text>
                                                                          </div>
                                                                          <Text
                                                                            className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[29%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                            size="txtRobotoMonoBold20"
                                                                          >
                                                                            26
                                                                          </Text>
                                                                        </div>
                                                                        <Text
                                                                          className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] inset-x-[0] justify-center mx-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-max"
                                                                          size="txtRobotoMonoBold20"
                                                                        >
                                                                          25
                                                                        </Text>
                                                                      </div>
                                                                      <Text
                                                                        className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[29%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                        size="txtRobotoMonoBold20"
                                                                      >
                                                                        24
                                                                      </Text>
                                                                    </div>
                                                                    <Text
                                                                      className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[14%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                      size="txtRobotoMonoBold20"
                                                                    >
                                                                      23
                                                                    </Text>
                                                                  </div>
                                                                </div>
                                                                <Text
                                                                  className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[14%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                  size="txtRobotoMonoBold20"
                                                                >
                                                                  20
                                                                </Text>
                                                              </div>
                                                              <Text
                                                                className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[29%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                                size="txtRobotoMonoBold20"
                                                              >
                                                                19
                                                              </Text>
                                                            </div>
                                                            <Text
                                                              className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] inset-x-[0] justify-center mx-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-max"
                                                              size="txtRobotoMonoBold20"
                                                            >
                                                              18
                                                            </Text>
                                                          </div>
                                                          <div className="absolute bg-white-A700 border border-gray-200_02 border-solid flex flex-row gap-[55px] items-start justify-center left-[29%] p-2 top-[0] w-[15%]">
                                                            <Text
                                                              className="ml-1.5 text-black-900 text-xl uppercase"
                                                              size="txtRobotoMonoBold20"
                                                            >
                                                              17
                                                            </Text>
                                                            <div className="flex flex-col items-end justify-start mr-[11px] mt-5">
                                                              <Text
                                                                className="text-blue-600 text-center text-xl"
                                                                size="txtRobotoMonoBold20Blue600"
                                                              >
                                                                $1.76K
                                                              </Text>
                                                              <Text
                                                                className="text-black-900 text-center text-xs"
                                                                size="txtRobotoMonoBold12"
                                                              >
                                                                2 Trades
                                                              </Text>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <Text
                                                          className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[14%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                          size="txtRobotoMonoBold20"
                                                        >
                                                          16
                                                        </Text>
                                                      </div>
                                                    </div>
                                                    <div className="absolute bg-white-A700 border border-gray-200_02 border-solid flex flex-row gap-[58px] items-start justify-center p-2 right-[14%] top-[0] w-[15%]">
                                                      <Text
                                                        className="ml-1.5 text-black-900 text-xl uppercase"
                                                        size="txtRobotoMonoBold20"
                                                      >
                                                        13
                                                      </Text>
                                                      <div className="flex flex-col items-end justify-start mb-0.5 mr-1.5 mt-[19px]">
                                                        <Text
                                                          className="text-blue-600 text-center text-xl"
                                                          size="txtRobotoMonoBold20Blue600"
                                                        >
                                                          $1.53K
                                                        </Text>
                                                        <Text
                                                          className="text-black-900 text-center text-xs"
                                                          size="txtRobotoMonoBold12"
                                                        >
                                                          3 Trades
                                                        </Text>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <Text
                                                    className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[29%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                    size="txtRobotoMonoBold20"
                                                  >
                                                    12
                                                  </Text>
                                                </div>
                                                <Text
                                                  className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] inset-x-[0] justify-center mx-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-max"
                                                  size="txtRobotoMonoBold20"
                                                >
                                                  11
                                                </Text>
                                              </div>
                                              <Text
                                                className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[29%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                                size="txtRobotoMonoBold20"
                                              >
                                                10
                                              </Text>
                                            </div>
                                            <Text
                                              className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[14%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                              size="txtRobotoMonoBold20"
                                            >
                                              9
                                            </Text>
                                          </div>
                                        </div>
                                        <Text
                                          className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[14%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                          size="txtRobotoMonoBold20"
                                        >
                                          6
                                        </Text>
                                      </div>
                                      <Text
                                        className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 right-[29%] text-black-900 text-xl top-[0] uppercase w-[185px]"
                                        size="txtRobotoMonoBold20"
                                      >
                                        5
                                      </Text>
                                    </div>
                                    <Text
                                      className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] inset-x-[0] justify-center mx-auto pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-max"
                                      size="txtRobotoMonoBold20"
                                    >
                                      4
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[29%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                    size="txtRobotoMonoBold20"
                                  >
                                    3
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bg-white-A700 border border-gray-200_02 border-solid h-[83px] justify-center left-[14%] pb-[35px] pl-3.5 sm:pr-5 pr-[35px] pt-2 text-black-900 text-xl top-[0] uppercase w-[185px]"
                                  size="txtRobotoMonoBold20"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] min-w-[186px] right-[14%] text-center text-sm top-[0] uppercase"
                              shape="square"
                              color="white_A700"
                              size="sm"
                            >
                              Friday
                            </Button>
                          </div>
                          <Button
                            className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] min-w-[186px] right-[29%] text-center text-sm top-[0] uppercase"
                            shape="square"
                            color="white_A700"
                            size="sm"
                          >
                            Thursday
                          </Button>
                        </div>
                        <Button
                          className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[186px] mx-auto text-center text-sm top-[0] uppercase"
                          shape="square"
                          color="white_A700"
                          size="sm"
                        >
                          Wednesday
                        </Button>
                      </div>
                      <Button
                        className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] left-[29%] min-w-[186px] text-center text-sm top-[0] uppercase"
                        shape="square"
                        color="white_A700"
                        size="sm"
                      >
                        TUESDAY
                      </Button>
                    </div>
                    <Button
                      className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] left-[14%] min-w-[186px] text-center text-sm top-[0] uppercase"
                      shape="square"
                      color="white_A700"
                      size="sm"
                    >
                      MONDAY
                    </Button>
                  </div>
                  <Button
                    className="absolute border border-gray-200_02 border-solid cursor-pointer font-bold leading-[normal] left-[0] min-w-[186px] text-center text-sm top-[0] uppercase"
                    shape="square"
                    color="white_A700"
                    size="sm"
                  >
                    SUNDAY
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-[46px] w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[26px] sm:px-5 rounded-[7px] shadow-bs7 w-[48%] md:w-full">
                <div className="flex flex-col gap-[50px] items-center justify-start mb-[63px] md:ml-[0] ml-[17px] w-[61%] md:w-full">
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                    size="txtPoppinsRegular23"
                  >
                    Projected 30 Day Performance
                  </Text>
                  <div className="flex flex-row gap-[39px] items-center justify-start w-full">
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-blue-600"
                      size="txtPoppinsMedium42"
                    >
                      18% |
                    </Text>
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-blue-600"
                      size="txtPoppinsMedium42"
                    >
                      $1842.24
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end p-[11px] rounded-[7px] shadow-bs7 w-[48%] md:w-full">
                <div className="flex flex-col gap-[30px] justify-start ml-7 md:ml-[0] mt-[15px] w-[86%] md:w-full">
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                    size="txtPoppinsRegular23"
                  >
                    Average Performance By Day
                  </Text>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
                    <Img
                      className="h-[126px]"
                      src="images/img_bars.svg"
                      alt="bars"
                    />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        M
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        T
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        W
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        T
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        F
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        S
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        S
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-[53px] w-full">
              <div className="bg-white-A700 flex flex-col gap-11 justify-start p-[30px] sm:px-5 rounded-[7px] shadow-bs7">
                <Text
                  className="ml-3 md:ml-[0] mr-[239px] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                  size="txtPoppinsSemiBold29"
                >
                  Statisfic Placeholder 1
                </Text>
                <Text
                  className="mb-5 md:ml-[0] ml-[19px] sm:text-[40px] md:text-[46px] text-[54px] text-blue-600"
                  size="txtPoppinsSemiBold54"
                >
                  18%
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-10 items-start justify-start p-[34px] sm:px-5 rounded-[7px] shadow-bs7">
                <Text
                  className="ml-1 md:ml-[0] sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                  size="txtPoppinsSemiBold29"
                >
                  Average Performance By Day
                </Text>
                <Text
                  className="mb-4 ml-1 md:ml-[0] sm:text-[40px] md:text-[46px] text-[54px] text-blue-600"
                  size="txtPoppinsSemiBold54"
                >
                  19%
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mt-11 p-[19px] rounded-[7px] shadow-bs7 w-full">
              <div className="flex flex-col gap-3.5 justify-start mt-[7px] w-[95%] md:w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                  size="txtPoppinsRegular23"
                >
                  Average Performance By Hour
                </Text>
                <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[7px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Img
                      className="h-[126px]"
                      src="images/img_bars.svg"
                      alt="bars_One"
                    />
                    <Img
                      className="h-[126px]"
                      src="images/img_bars_gray_200.svg"
                      alt="bars_Two"
                    />
                    <Img
                      className="h-[126px]"
                      src="images/img_bars.svg"
                      alt="bars_Three"
                    />
                    <Img
                      className="h-[126px]"
                      src="images/img_bars_gray_200_126x112.svg"
                      alt="bars_Four"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      1
                    </Text>
                    <Text
                      className="ml-12 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      2
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[39px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      3
                    </Text>
                    <Text
                      className="ml-10 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      4
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[35px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      5
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[39px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      6
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[37px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      7
                    </Text>
                    <Text
                      className="ml-9 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      8
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[41px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      9
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[33px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      10
                    </Text>
                    <Text
                      className="ml-9 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      11
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[35px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      12
                    </Text>
                    <Text
                      className="ml-8 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      13
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[31px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      14
                    </Text>
                    <Text
                      className="ml-7 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      15
                    </Text>
                    <Text
                      className="ml-8 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      16
                    </Text>
                    <Text
                      className="ml-8 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      17
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[31px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      18
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[30px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      19
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[30px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      20
                    </Text>
                    <Text
                      className="ml-7 sm:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      21
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[25px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      22
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[23px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      24
                    </Text>
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

export default TradeStrategyLoggerScreenPage;
