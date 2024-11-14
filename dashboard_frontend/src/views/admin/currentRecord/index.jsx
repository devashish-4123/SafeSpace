import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";

  // Custom components
  

  import React,{useMemo} from "react";




  import RecordIndicator from "./components/RecordIndicator";
  import GasConcentrationCard from "./components/GasConc";
  import TemperatureCard from "./components/Temperature";
  
  export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <RecordIndicator/>
          <GasConcentrationCard/>
          <TemperatureCard/>
          
        </SimpleGrid>
        
        
      </Box>
    );
  }