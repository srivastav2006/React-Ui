import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, Img, Text } from "components";

const HomePagePage = () => {
  const openGoogle = () => {
    console.log("Sdsdsd");
    window.open('https://www.google.com', '_blank');
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto pt-[19px] w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="font-mulish md:h-[490px] sm:h-[670px] h-[796px] mr-[58px] md:px-5 relative w-[96%] md:w-full">
            <div className="absolute md:h-[490px] h-[670px] inset-x-[0] mx-auto top-[3%] w-[90%] md:w-full">
            <div className="absolute md:h-[127px] h-[132px] left-[0] top-[0] w-[15%]">
              <Img
                className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_marketmindslogo.png"
                alt="marketmindslogo"
              />
              <Img
                className="absolute bottom-[0] h-12 inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle34626545.png"
                alt="rectangle346265"
              />
            </div>  
            <div className="flex items-center  whitespace-nowrap gap-10 sm:w-full ml-96  mt-2 w-3/5">
                  <span
                    className=" font-bold text-blue-600  "
                     size="txtMulishRomanExtraBold16"
                  >
                    Home
                  </span>
                  <span
                    className="text-base text-gray-600 w-auto cursor-pointer"
                    size="txtMulishRegular16"
                    onClick={openGoogle}
                  >
                    How It Works
                  </span>
                  <span
                    className="text-base text-gray-600 w-auto cursor-pointer"
                    onClick={openGoogle}
                  >
                    FAQs
                  </span>
                  <span
                    className="text-base text-gray-600 w-auto cursor-pointer"
                    onClick={openGoogle}
                  >
                    Contact Us
                  </span>
                  <span
                    className="text-base text-gray-600 w-auto cursor-pointer"
                    onClick={openGoogle}
                  >
                    Login
                  </span>
                  <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[163px] text-base text-center"
                      shape="round"
                      size="lg"
                      onClick={openGoogle}
                    >
                      Register
                    </Button>
                    <Img
              className="absolute h-6 right-[0] top-[3%] w-6"
              src="images/img_search.svg"
              alt="search"
            />
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[220px] justify-start w-full">
                  
                  <div className="flex flex-col gap-[45px] items-start justify-start mr-[477px] w-[62%] md:w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="leading-[75.00px] sm:text-[37px] md:text-[43px] text-[51px] text-blue_gray-800 w-full"
                        size="txtVigaRegular51"
                      >
                        <span className="text-black-900_b5 tracking-[0.51px] font-mazzard text-left font-semibold">
                          Provide you with a Awesome AI-driven{" "}
                        </span>
                        <span className="text-blue-600 tracking-[0.51px] font-mazzard text-left font-semibold">
                          Trading.
                        </span>
                      </Text>
                      <Text
                        className="leading-[40.00px] text-2xl md:text-[22px] text-gray-500 sm:text-xl w-[89%] sm:w-full"
                        size="txtMulishRegular24"
                      >
                        Lorem ipsum dolor sit amet consectetur. Enim a tincidunt
                        sem libero quam id ut vulputate. Faucibus semper cras
                        imperdiet morbi tristique vulputate. Augue.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[31px] items-center justify-start w-[49%] md:w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[170px] text-base text-center"
                        shape="round"
                        size="lg"
                      >
                        Get Started
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[163px] text-base text-center"
                        shape="round"
                        color="black_900"
                        size="lg"
                        variant="outline"
                      >
                        How It Works
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="absolute bottom-[0] md:h-[393px] h-[616px] right-[1%] w-[38%] sm:w-full">
              <Img
                className="absolute h-[393px] left-[5%] object-cover top-[4%] w-4/5"
                src="images/img_container.png"
                alt="container"
              />
              <Img
                className="absolute bottom-[0] h-[330px] object-cover right-[0] rounded-[14px] w-[67%]"
                src="images/img_container_330x345.png"
                alt="container_One"
              />
              <Button
                className="absolute flex h-[66px] items-center justify-center left-[0] rounded-[10px] top-[0] w-[66px]"
                shape="round"
              >
                <Img
                  className="h-[33px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
              </Button>
            </div>
          
          </div>
          <Text
            className="capitalize mt-[140px] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtPoppinsSemiBold40"
          >
            Why Choose Us
          </Text>
          <Text
            className="mt-[18px] mx-auto text-center text-gray-600_01 text-xl"
            size="txtPoppinsRegular20"
          >
            The reason why you choose us is because we are:
          </Text>
          <div className="flex md:flex-col flex-row font-poppins gap-[54px] items-start justify-start md:ml-[0] ml-[58px] mr-[116px] mt-16 md:px-5 w-[88%] md:w-full">
            <div className="md:h-[348px] h-[413px] relative w-[34%] md:w-full">
              <div className="absolute bg-blue-600_16 bottom-[0] h-[137px] left-[0] rounded-[68px] w-[137px]"></div>
              <div className="absolute bg-white-A700 flex flex-col gap-[9px] items-center justify-end outline outline-[3px] outline-blue-600 pt-[17px] px-[17px] right-[0] rounded-[18px] shadow-bs1 top-[0] w-[87%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start mt-[30px] p-[23px] sm:px-5 w-[95px]"
                  style={{ backgroundImage: "url('images/img_group21.svg')" }}
                >
                  <Img
                    className="h-[49px] w-12"
                    src="images/img_eosiconsservi.svg"
                    alt="eosiconsservi"
                  />
                </div>
                <div className="flex flex-col items-center justify-start py-4 w-full">
                  <div className="flex flex-col gap-[18px] items-center justify-start mb-[33px] w-full">
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Simple
                    </Text>
                    <Text
                      className="leading-[26.00px] text-[17px] text-center text-gray-600_01 w-full"
                      size="txtPoppinsRegular17"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-end mb-[63px] outline outline-[3px] outline-blue-600 pt-[17px] px-[17px] rounded-[18px] shadow-bs1 w-[29%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[95px] items-end justify-start mt-[30px] p-5 w-[95px]"
                style={{ backgroundImage: "url('images/img_group21.svg')" }}
              >
                <Img
                  className="h-[47px] mb-2 w-[47px]"
                  src="images/img_mdiaccountsecureoutline.svg"
                  alt="mdiaccountsecur"
                />
              </div>
              <div className="flex flex-col gap-[21px] items-center justify-start py-[13px] w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Safe
                </Text>
                <div className="flex flex-col items-center justify-start mb-9 w-full">
                  <Text
                    className="leading-[26.00px] text-[17px] text-center text-gray-600_01 w-full"
                    size="txtPoppinsRegular17"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-end mb-[63px] outline outline-[3px] outline-blue-600 pt-[17px] px-[17px] rounded-[18px] shadow-bs1 w-[29%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start mt-[30px] p-[19px] w-[95px]"
                style={{ backgroundImage: "url('images/img_group21.svg')" }}
              >
                <Img
                  className="h-[49px] mb-2 w-[50px]"
                  src="images/img_lahandshelping.svg"
                  alt="lahandshelping"
                />
              </div>
              <div className="flex flex-col items-center justify-start py-[13px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start mb-[35px] w-full">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    Secure
                  </Text>
                  <Text
                    className="leading-[26.00px] text-[17px] text-center text-gray-600_01 w-full"
                    size="txtPoppinsRegular17"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[97px] items-end justify-start max-w-[1213px] mt-[122px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[22px] w-[51%] md:w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-blue_gray-900"
                size="txtPoppinsSemiBold38"
              >
                Know About Us
              </Text>
              <div className="bg-blue-600 h-2 mt-[9px] rounded w-[37%]"></div>
              <Text
                className="leading-[48.00px] mt-[23px] text-[22px] text-black-900_7f sm:text-lg md:text-xl w-full"
                size="txtPoppinsRegular22"
              >
                Lorem ipsum dolor sit amet consectetur. Cras id pharetra auctor
                suspendisse. Ornare vel metus ipsum iaculis aenean urna
                venenatis tortor interdum. Bibendum neque orci metus tincidunt
                vitae vitae etiam quam feugiat. Nunc ultricies morbi ultricies
                massa blandit adipiscing sit. Varius purus eros vitae velit
                consectetur. Tristique nibh sagittis at a. Nisl a.
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[183px] mt-[23px] text-[17px] text-center"
                shape="round"
                size="lg"
              >
                Explore More
              </Button>
            </div>
            <div className="md:h-[509px] h-[548px] relative w-[42%] md:w-full">
              <div className="md:h-[509px] h-[548px] m-auto w-full">
                <div className="absolute bg-blue-600 h-[509px] right-[0] rounded-tl-[250px] rounded-tr-[250px] top-[0] w-[95%]"></div>
                <Img
                  className="absolute bottom-[0] h-[509px] left-[0] object-cover rounded-tl-[250px] rounded-tr-[250px] w-[95%]"
                  src="images/img_rectangle34625987.png"
                  alt="rectangle346259_One"
                />
              </div>
              <div className="absolute bg-black-900_bc flex flex-col h-[142px] items-center justify-start p-[22px] sm:px-5 right-[0] rounded-[50%] top-[6%] w-[142px]">
                <div className="bg-white-A700 flex flex-col h-24 items-end justify-start p-[13px] rounded-[50%] w-24">
                  <Img
                    className="h-[67px] w-[66px]"
                    src="images/img_iconparkoutli.svg"
                    alt="iconparkoutli"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins md:h-[1759px] h-[797px] sm:h-[825px] mt-36 md:px-5 relative w-full">
            <div className="md:h-[1615px] sm:h-[681px] h-[797px] m-auto w-full">
              <Img
                className="absolute bottom-[0] h-[135px] inset-x-[0] mx-auto object-cover rounded-[11px]"
                src="images/img_vector.png"
                alt="vector"
              />
              <div className="absolute bg-blue-600 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[59px] md:px-10 sm:px-5 rounded-[11px] top-[0] w-full">
                <div className="flex flex-col items-center justify-start mt-[3px] w-[89%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
                    <div className="md:h-[60px] h-[61px] relative w-[23%]">
                      <Text
                        className="absolute capitalize h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Top Features
                      </Text>
                      <div className="absolute bg-white-A700 bottom-[0] h-[7px] inset-x-[0] mx-auto rounded-[3px] w-[67%]"></div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[45px] rounded-[14px] shadow-bs2 w-[30%] md:w-full">
                        <Img
                          className="h-[234px] sm:h-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-full"
                          src="images/img_rectangle12980.png"
                          alt="rectangle12980"
                        />
                        <Text
                          className="mt-[25px] text-2xl md:text-[22px] text-black-900_c1 text-center sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          Risk Asessements
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-5">
                          <Text
                            className="leading-[26.00px] text-[17px] text-black-900_7a text-center tracking-[-0.10px] w-full"
                            size="txtPoppinsRegular17Black9007a"
                          >
                            Lorem ipsum dolor sit amet consectetur. Lacus
                            integer massa sodales nunc porta lobortis.
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[438px] h-[439px] relative w-[30%] md:w-full">
                        <div className="absolute bg-white-A700 flex flex-col gap-[21px] h-full inset-[0] items-center justify-center m-auto p-4 rounded-[14px] shadow-bs2 w-full">
                          <Text
                            className="mt-[241px] text-2xl md:text-[22px] text-black-900_c1 text-center sm:text-xl"
                            size="txtPoppinsSemiBold24"
                          >
                            Performance Benchmark
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-[30px]">
                            <Text
                              className="leading-[26.00px] text-[17px] text-black-900_7a text-center tracking-[-0.10px] w-full"
                              size="txtPoppinsRegular17Black9007a"
                            >
                              Lorem ipsum dolor sit amet consectetur. Lacus
                              integer massa sodales nunc porta lobortis.
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[234px] inset-x-[0] mx-auto object-cover rounded-tl-[14px] rounded-tr-[14px] top-[0] w-full"
                          src="images/img_rectangle34625555.png"
                          alt="rectangle346255_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start pb-[47px] rounded-[14px] shadow-bs2 w-[30%] md:w-full">
                        <Img
                          className="h-[234px] sm:h-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-full"
                          src="images/img_rectangle34625556.png"
                          alt="rectangle346255_Two"
                        />
                        <Text
                          className="ml-20 md:ml-[0] mt-[27px] text-2xl md:text-[22px] text-black-900_c1 text-center sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          Trade Strategy
                        </Text>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] mt-4">
                          <Text
                            className="leading-[26.00px] text-[17px] text-black-900_7a text-center tracking-[-0.10px] w-full"
                            size="txtPoppinsRegular17Black9007a"
                          >
                            Lorem ipsum dolor sit amet consectetur. Lacus
                            integer massa sodales nunc porta lobortis.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="absolute bottom-[8%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[183px] mx-auto text-[17px] text-center"
              shape="round"
              color="white_A700"
              size="lg"
              variant="outline"
            >
              Explore More
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-col font-mulish md:gap-10 gap-[61px] items-center justify-start max-w-[1289px] mt-[97px] mx-auto p-[34px] md:px-5 rounded-[13px] shadow-bs3 w-full">
            <Text
              className="mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-blue-600"
              size="txtMulishRomanExtraBold40"
            >
              FAQs
            </Text>
            <Accordion
              preExpanded={[0]}
              className="flex flex-col font-nunito gap-6 mb-[31px] w-[99%]"
            >
              {[...Array(4)].map((item, index) => (
                <AccordionItem uuid={index} key={Math.random()}>
                  <div className="bg-white-A700 border border-black-900_3d border-solid flex flex-col gap-[15px] items-start justify-start mt-6 p-[38px] sm:px-5 rounded-[16px] w-full">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {({ expanded }) => (
                            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-full">
                              <Text
                                className="md:mt-0 mt-0.5 text-black-900 text-xl tracking-[0.50px]"
                                size="txtNunitoSemiBold20"
                              >
                                Lorem ipsum dolor sit amet consectetur. At
                                mattis ipsum lacus magna morbi.
                              </Text>
                              {expanded && (
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown"
                                />
                              )}
                              {!expanded && (
                                <Img
                                  className="h-6 mr-[5px] md:mt-0 mt-[3px] w-6"
                                  src="images/img_arrowright.svg"
                                  alt="arrowright"
                                />
                              )}
                            </div>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="w-full ">
                      <div className="flex flex-col items-center justify-start mb-0.5 ml-0.5 md:ml-[0]">
                        <Text
                          className="leading-[30.00px] text-black-900_7f_01 text-sm tracking-[0.50px] w-full"
                          size="txtNunitoRegular14"
                        >
                          Lorem ipsum dolor sit amet consectetur. Consequat at
                          et scelerisque quis id nibh facilisis lectus. Urna
                          egestas ac gravida erat neque lorem pellentesque quis
                          id. Erat adipiscing facilisis et sit facilisis ut non
                          nulla suspendisse. Nulla amet vitae leo sit eget
                          maecenas justo. Feugiat eros rhoncus quam adipiscing
                          cursus sollicitudin sed. Facilisis aliquam sodales
                          massa a nisi. Mauris risus pellentesque.
                        </Text>
                      </div>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="bg-blue-600 flex flex-col font-poppins items-center justify-start mt-[107px] p-[63px] md:px-10 sm:px-5 rounded-[11px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1232px] mb-[7px] mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-white-A700"
                  size="txtPoppinsSemiBold42"
                >
                  Feel free to Contact
                </Text>
                <Text
                  className="mt-[29px] text-center text-white-A700 text-xl"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Enter the following Details to reach us.
                </Text>
                <div className="flex flex-col items-center justify-start mt-[68px] w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">






                    <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[33%] md:w-full">
                      <Text className="text-base text-white-A700" size="txtPoppinsMedium16">
                        First Name
                      </Text>
                      <input
                        type="text"
                        className="h-14 p-2 rounded-lg   text-white border-b-3 border-white-A700 "
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[33%] md:w-full">
                      <Text className="text-base text-white-A700" size="txtPoppinsMedium16">
                        Last Name
                      </Text>
                      <input
                        type="text"
                        className="h-14 p-2 rounded-lg text-white border-b-3 border-white-A700 "
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[33%] md:w-full">
                      <Text className="text-base text-white-A700" size="txtPoppinsMedium16">
                        Your Email
                      </Text>
                      <input
                        type="email"
                        className="h-14 p-2 rounded-lg text-white border-b-3 border-white-A700"
                        placeholder="Enter your email"
                      />
                    </div>










                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[25px] w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsMedium16"
                    >
                      Message
                    </Text>
                    <div className="border-2 border-solid border-white-A700 flex flex-col items-start justify-start p-4 rounded-lg w-full">
                      <Text
                        className="mb-44 mt-2.5 text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Write message here
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="!text-blue-600 cursor-pointer font-medium min-w-[206px] mt-[60px] text-[17px] text-center"
                    shape="round"
                    color="white_A700"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish md:gap-5 items-center justify-start md:ml-[0] ml-[51px] mr-[265px] mt-[46px] md:px-5 w-[78%] md:w-full">
            <div className="md:h-[127px] h-[186px] relative w-[42%] md:w-full">
  <div className="absolute md:h-[127px] h-[132px] left-[0] top-[0] w-1/2">
    <Img
      className="absolute h-[127px] inset-[0] justify-center m-auto object-cover w-full"
      src="images/img_marketmindslogo_127x230.png"
      alt="marketmindslogo_One"
    />
    <div className="absolute bg-white-A700 bottom-0 h-12 inset-x-0 mx-auto w-98%"></div>
  </div>
  <Text
    className="absolute bottom-0 leading-[40.00px] right-0 text-[17px] text-gray-500 w-83% sm:w-full"
    size="txtMulishRegular17"
  >
    Lorem ipsum dolor sit amet consectetur. Enim a tincidunt sem libero quam id ut vulputate
  </Text>
</div>

            <div className="flex flex-col font-poppins gap-5 items-start justify-start md:ml-[0] ml-[109px]">
              <Text
                className="text-base text-black-900_d6"
                size="txtPoppinsSemiBold16"
              >
                Quick Links
              </Text>
              <Text
                className="text-gray-600_01 text-sm"
                size="txtPoppinsRegular14Gray60001"
              >
                How It Works
              </Text>
              <Text
                className="text-gray-600_01 text-sm"
                size="txtPoppinsRegular14Gray60001"
              >
                Why Choose Us
              </Text>
            </div>
            <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[126px]">
              <Text
                className="text-base text-black-900_d6"
                size="txtPoppinsSemiBold16"
              >
                About
              </Text>
              <a
                className="mt-[22px] text-gray-600_01 text-sm"
              >
                <Text size="txtPoppinsRegular14Gray60001">Privacy Policy</Text>
              </a>
              <a
                className="mt-[17px] text-gray-600_01 text-sm"
              >
                <Text size="txtPoppinsRegular14Gray60001">
                  Terms & Conditions
                </Text>
              </a>
            </div>
            <div className="flex flex-col font-poppins gap-[21px] items-start justify-start md:ml-[0] ml-[99px]">
              <Text
                className="text-base text-black-900_d6"
                size="txtPoppinsSemiBold16"
              >
                Contact
              </Text>
              <a className="text-gray-600_01 text-sm">
                <Text size="txtPoppinsRegular14Gray60001">Contact Us</Text>
              </a>
              <Text
                className="text-gray-600_01 text-sm"
                size="txtPoppinsRegular14Gray60001"
              >
                FAQ
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[131px] mr-[1074px] mt-[19px] md:px-5 w-[17%] md:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-start w-[58%] md:w-full">
              <Button
                className="flex h-[35px] items-center justify-center rounded-lg w-[35px]"
                shape="round"
                size="sm"
              >
                <Img src="images/img_facebook.svg" alt="facebook" />
              </Button>
              <Button
                className="flex h-[35px] items-center justify-center rounded-lg w-[35px]"
                shape="round"
                size="xs"
              >
                <Img src="images/img_twitter.svg" alt="twitter" />
              </Button>
              <Button
                className="flex h-[35px] items-center justify-center rounded-lg w-[35px]"
                shape="round"
                size="xs"
              >
                <Img src="images/img_play.svg" alt="play" />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 h-[86px] md:ml-[0] ml-[100px] mr-[1144px] mt-20 md:px-5 rounded-[43px] w-[14%]"></div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
