import React from "react";
import Chart from "react-apexcharts";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";
import { useState } from "react";

const RiskAssessmentScreenPage = () => {

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });
  const table2Data = React.useRef([
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
    { date: "24/3", outcome: "XZY", asset: "XZY", rrratio: "5.6", gain: "70%" },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("date", {
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
      table2ColumnHelper.accessor("outcome", {
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
      table2ColumnHelper.accessor("asset", {
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
      table2ColumnHelper.accessor("rrratio", {
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
      table2ColumnHelper.accessor("gain", {
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
        <div className="flex flex-col items-center justify-start max-w-[1408px] mb-[57px] mx-auto md:px-5 w-full">
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
          <div className="bg-blue-600_2d flex flex-row font-mazzard items-start justify-start p-[19px] rounded-md w-[29%] md:w-full">
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
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-[43px] w-[88%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start p-[31px] sm:px-5 rounded-[11px] shadow-bs5 w-[52%] md:w-full">
              <Text
                className="text-[19px] text-black-900"
                size="txtPoppinsMedium19"
              >
                Trades with Poor Risk
              </Text>
              <Line className="bg-blue-600 h-1 mt-1 rounded-sm w-[26%]" />
              <div className="flex flex-col items-center justify-start mb-[156px] md:ml-[0] ml-[9px] mt-[63px] w-[94%] md:w-full">
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={table2Columns}
                    data={table2Data.current}
                    rowClass={"border-b border-black-900_16"}
                    headerClass="border-b border-black-900_16"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[43px] items-center justify-start w-[41%] md:w-full">
              <div className="bg-blue-600 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[11px] shadow-bs5 w-full">
                <Text
                  className="mb-[29px] text-center text-white-A700 text-xl w-[91%] sm:w-full"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  ‘Your portfolio would have lost 12 % less’ OR ‘Your portoflio
                  could have made additional 5 % more’
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-end justify-start p-3 rounded-[7px] shadow-bs7 w-full">
                <div className="flex flex-col gap-3.5 justify-start mb-[70px] mt-[22px]  md:w-full">
                <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskAssessmentScreenPage;
