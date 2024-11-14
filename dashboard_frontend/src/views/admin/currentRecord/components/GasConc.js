import { Box, Flex, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { GaugeComponent } from 'react-gauge-component';
import { GiGasMask } from "react-icons/gi"; // Import relevant icon

export default function GasConcentrationCard() {
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
          <Icon as={GiGasMask} w="30px" h="30px" color="#8884d8" />
          <Text fontSize="xl" fontWeight="bold" color={textColor} ml="10px">
            Gas Concentration
          </Text>
        </Flex>

        {/* Gauge and Info */}
        <GaugeComponent
          value={300} // Set the current gas concentration value here (e.g., in ppm)
          arc={{
            // subArcs: [
            //   { limit: 200, color: '#5BE12C', showTick: true },
            //   { limit: 400, color: '#F5CD19', showTick: true },
            //   { limit: 600, color: '#F58B19', showTick: true },
            //   { limit: 1000, color: '#EA4228', showTick: true },
            // ]
          }}
          labels={{
            markLabel: { fontSize: 10 },
            markFontColor: textColorSecondary,
          }}
          pointer={{
            color: "#F5CD19",
          }}
          animate={{
            enabled: true,
            easing: "linear",
            duration: 2000,
          }}
          minValue={0}
          maxValue={500}
        />

        {/* Additional Info */}
        <Text mt="10px" fontSize="sm" color={textColorSecondary}>
          Current level: 300 ppm
        </Text>
        <Text mt="5px" fontSize="xs" color={textColorSecondary}>
          Safe range: 0-400 ppm
        </Text>
      </Flex>
    </Card>
  );
}
