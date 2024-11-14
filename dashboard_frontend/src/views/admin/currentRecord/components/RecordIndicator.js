// // Chakra imports
// import {
//     Box,
//     Flex,
//     Icon,
//     Text,
//     useColorModeValue,
//     VStack,
//   } from "@chakra-ui/react";
//   // Custom components
//   import Card from "components/card/Card.js";
//   import GaugeChart from "react-gauge-chart";
//   import React from "react";
//   import { MdThermostat, MdWaterDrop } from "react-icons/md";
  
//   export default function EnvironmentStats(props) {
//     const { ...rest } = props;
  
//     // Chakra Color Mode
//     const textColor = useColorModeValue("secondaryGray.900", "white");
//     const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
//     const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
//     const iconColor = useColorModeValue("brand.500", "white");
  
//     // Mock data for humidity and temperature
//     const humidity = 0.7; // Value between 0 and 1 for gauge
//     const temperature = 0.5; // Value between 0 and 1 for gauge
  
//     return (
//       <Flex justifyContent="space-between" flexWrap="wrap" pt="80px">
//         {/* Temperature Card */}
//         <Card
//           justifyContent="center"
//           align="center"
//           direction="column"
//           w="45%"
//           mb="20px"
//           {...rest}
//         >
//           <VStack spacing={3} align="center">
//             <Icon as={MdThermostat} color={iconColor} w="24px" h="24px" />
//             <Text fontSize="lg" fontWeight="bold" color={textColor}>
//               Temperature
//             </Text>
//             <Text fontSize="sm" color={textColorSecondary}>
//               Current Temperature Level
//             </Text>
//           </VStack>
//           <Box minH="200px" w="100%" mt="20px">
//             <GaugeChart
//               id="temperature-gauge"
//               nrOfLevels={20}
//               colors={["#00c6ff", "#ff6363"]}
//               arcWidth={0.3}
//               percent={temperature}
//               needleColor="#345243"
//               textColor={textColor}
//             />
//           </Box>
//           <Text fontSize="md" mt="4" color={textColorSecondary}>
//             25°C - Moderate
//           </Text>
//         </Card>
  
//         {/* Humidity Card */}
//         <Card
//           justifyContent="center"
//           align="center"
//           direction="column"
//           w="45%"
//           mb="20px"
//           {...rest}
//         >
//           <VStack spacing={3} align="center">
//             <Icon as={MdWaterDrop} color={iconColor} w="24px" h="24px" />
//             <Text fontSize="lg" fontWeight="bold" color={textColor}>
//               Humidity
//             </Text>
//             <Text fontSize="sm" color={textColorSecondary}>
//               Current Humidity Level
//             </Text>
//           </VStack>
//           <Box minH="200px" w="100%" mt="20px">
//             <GaugeChart
//               id="humidity-gauge"
//               nrOfLevels={20}
//               colors={["#f7d154", "#4bb543"]}
//               arcWidth={0.3}
//               percent={humidity}
//               needleColor="#345243"
//               textColor={textColor}
//             />
//           </Box>
//           <Text fontSize="md" mt="4" color={textColorSecondary}>
//             70% - High Humidity
//           </Text>
//         </Card>
//       </Flex>
//     );
//   }
  
// import GaugeComponent from 'react-gauge-component';
//or





// import { GaugeComponent } from 'react-gauge-component';
// //Component with default values
// const DefaultComponent = () => {
//     return (
// <GaugeComponent
//   arc={{
//     subArcs: [
//       {
//         limit: 20,
//         color: '#EA4228',
//         showTick: true
//       },
//       {
//         limit: 40,
//         color: '#F58B19',
//         showTick: true
//       },
//       {
//         limit: 60,
//         color: '#F5CD19',
//         showTick: true
//       },
//       {
//         limit: 100,
//         color: '#5BE12C',
//         showTick: true
//       },
//     ]
//   }}
//   value={50}
// />
// );
// };
// export default DefaultComponent;


// Chakra imports



// import {
//     Box,
//     Flex,
//     Text,
//     useColorModeValue,
//   } from "@chakra-ui/react";
//   // Custom components
//   import Card from "components/card/Card.js";
//   import React from "react";
//   // Gauge Component
//   import { GaugeComponent } from 'react-gauge-component';
  
//   export default function EnvironmentStats() {
//     // Chakra Color Mode
//     const textColor = useColorModeValue("secondaryGray.900", "white");
//     const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  
//     return (
//       <Card
//         justifyContent="center"
//         align="center"
//         direction="column"
//         w="100%"
//         mb="0px"
//       >
//         <Flex direction="column" align="center" p="20px">
//           <Text fontSize="lg" fontWeight="bold" color={textColor} mb="5px">
//             Environment Statistics
//           </Text>
//           <Text fontSize="md" color={textColorSecondary} mb="20px">
//             Monitoring humidity and temperature
//           </Text>
          
//           <Flex justify="space-between" w="100%" px="10px">
//             {/* Humidity Gauge */}
//             <Box align="center" mx="10px">
//               <Text fontSize="sm" color={textColorSecondary} mb="10px">Humidity</Text>
//               <GaugeComponent
//                 value={65} // Set the humidity value here
//                 arc={{
//                   subArcs: [
//                     { limit: 20, color: '#EA4228', showTick: true },
//                     { limit: 40, color: '#F58B19', showTick: true },
//                     { limit: 60, color: '#F5CD19', showTick: true },
//                     { limit: 100, color: '#5BE12C', showTick: true },
//                   ]
//                 }}
//                 labels={{
//                   markLabel: { fontSize: 10 },
//                   markFontColor: textColorSecondary,
//                 }}
//                 pointer={{
//                   color: "#8884d8",
//                 }}
//                 animate={{
//                   enabled: true,
//                   easing: "linear",
//                   duration: 2000,
//                 }}
//               />
//             </Box>
            
//             {/* Temperature Gauge
//             <Box align="center" mx="10px">
//               <Text fontSize="sm" color={textColorSecondary} mb="10px">Temperature</Text>
//               <GaugeComponent
//                 value={25} // Set the temperature value here
//                 arc={{
//                   subArcs: [
//                     { limit: 10, color: '#EA4228', showTick: true },
//                     { limit: 20, color: '#F58B19', showTick: true },
//                     { limit: 30, color: '#F5CD19', showTick: true },
//                     { limit: 50, color: '#5BE12C', showTick: true },
//                   ]
//                 }}
//                 labels={{
//                   markLabel: { fontSize: 10 },
//                   markFontColor: textColorSecondary,
//                 }}
//                 pointer={{
//                   color: "#FF6347",
//                 }}
//                 animate={{
//                   enabled: true,
//                   easing: "linear",
//                   duration: 2000,
//                 }}
//               />
//             </Box> */}
//           </Flex>
//         </Flex>
//       </Card>
//     );
//   }
  


// Chakra imports
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Icon,
  } from "@chakra-ui/react";
  import { WiHumidity } from "react-icons/wi"; // Import relevant icons
  import Card from "components/card/Card.js";
  import React from "react";
  import { GaugeComponent } from 'react-gauge-component';
  
  export default function HumidityCard() {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  
    return (
      <Card
        justifyContent="center"
        align="center"
        direction="column"
        w="100%"
        mb="20px"
        p="20px"
        borderWidth="1px"
        borderRadius="15px"
        shadow="md"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <Flex direction="column" align="center">
          {/* Icon and Title */}
          <Flex align="center" mb="10px">
            <Icon as={WiHumidity} w="30px" h="30px" color="#5BE12C" />
            <Text fontSize="xl" fontWeight="bold" color={textColor} ml="10px">
              Humidity
            </Text>
          </Flex>
          
          {/* Gauge and Info */}
          <GaugeComponent
            value={65}
            arc={{
              subArcs: [
                { limit: 20, color: '#EA4228', showTick: true },
                { limit: 40, color: '#F58B19', showTick: true },
                { limit: 60, color: '#F5CD19', showTick: true },
                { limit: 100, color: '#5BE12C', showTick: true },
              ]
            }}
            labels={{
              markLabel: { fontSize: 10 },
              markFontColor: textColorSecondary,
            }}
            pointer={{
              color: "#8884d8",
            }}
            animate={{
              enabled: true,
              easing: "linear",
              duration: 2000,
            }}
          />
  
          {/* Additional Info */}
          <Text mt="10px" fontSize="sm" color={textColorSecondary}>
            Current level: 65%
          </Text>
          <Text mt="5px" fontSize="xs" color={textColorSecondary}>
            Optimal range: 40-60%
          </Text>
        </Flex>
      </Card>
    );
  }
  