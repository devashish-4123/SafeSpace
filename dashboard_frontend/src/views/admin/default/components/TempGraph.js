// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  import React from "react";
  import Chart from "react-apexcharts";
  import { IoCheckmarkCircle } from "react-icons/io5";
  import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
  // Assets
  import { RiArrowUpSFill } from "react-icons/ri";
  
  export default function TempGraph(props) {
    const { ...rest } = props;
  
    // ApexChart configuration
    const chartOptions = {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        name: "Months",
        categories: [ 'April','May', 'June', 'July', 'Aug', 'Sep'],
      },
    };
    const chartSeries = [
      {
        name: "Temperature",
        data: [ 33, 39, 47, 37, 50, 41],
      },
    ];
  
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const iconColor = useColorModeValue("brand.500", "white");
    const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const bgHover = useColorModeValue(
      { bg: "secondaryGray.400" },
      { bg: "whiteAlpha.50" }
    );
    const bgFocus = useColorModeValue(
      { bg: "secondaryGray.300" },
      { bg: "whiteAlpha.100" }
    );
  
    return (
      <Card
        justifyContent="center"
        align="center"
        direction="column"
        w="100%"
        mb="0px"
        {...rest}
      >
        <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
          <Flex align="center" w="100%">
            <Button
              bg={boxBg}
              fontSize="sm"
              fontWeight="500"
              color={textColorSecondary}
              borderRadius="7px"
            >
              <Icon
                as={MdOutlineCalendarToday}
                color={textColorSecondary}
                me="4px"
              />
              Last 6 Months
            </Button>
            <Button
              ms="auto"
              align="center"
              justifyContent="center"
              bg={bgButton}
              _hover={bgHover}
              _focus={bgFocus}
              _active={bgFocus}
              w="37px"
              h="37px"
              lineHeight="100%"
              borderRadius="10px"
              {...rest}
            >
              <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
            </Button>
          </Flex>
        </Flex>
        
          <Box minH="260px" minW="75%" mt="auto">
            {/* Replace the LineChart with ApexChart */}
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              width="100%"
              height="260px"
            />
            <h4>Temperature Statistic of 6 months</h4>
          </Box>
        
      </Card>
    );
  }
  