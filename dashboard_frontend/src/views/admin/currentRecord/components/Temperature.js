import { Box, Flex, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { GaugeComponent } from 'react-gauge-component';
import { FaTemperatureHigh } from "react-icons/fa";

export default function TemperatureCard() {
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
          <Icon as={FaTemperatureHigh} w="30px" h="30px" color="#FF6347" />
          <Text fontSize="xl" fontWeight="bold" color={textColor} ml="10px">
            Temperature
          </Text>
        </Flex>

        {/* Gauge and Info */}
        <GaugeComponent
          value={28} // Set the current temperature value here
          arc={{
            subArcs: [
              {
                limit: 15,
                color: '#EA4228',
                showTick: true,
                tooltip: {
                  text: 'Too low temperature!'
                },
                onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
                onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
              },
              {
                limit: 17,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                  text: 'Low temperature!'
                }
              },
              {
                limit: 28,
                color: '#5BE12C',
                showTick: true,
                tooltip: {
                  text: 'OK temperature!'
                }
              },
              {
                limit: 30, color: '#F5CD19', showTick: true,
                tooltip: {
                  text: 'High temperature!'
                }
              },
              {
                color: '#EA4228',
                tooltip: {
                  text: 'Too high temperature!'
                }
              }
            ]
          }}
          pointer={{
            color: '#345243',
            length: 0.80,
            width: 15,
            // elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: value => value + 'ºC' },
            tickLabels: {
              type: 'outer',
              defaultTickValueConfig: { 
                formatTextValue: (value: any) => value + 'ºC' ,
                style: {fontSize: 10}
            },
              ticks: [
                { value: 13 },
                { value: 22.5 },
                { value: 32 }
              ],
            }
          }}
          value={22.5}
          minValue={10}
          maxValue={35}
        />

        {/* Additional Info */}
        <Text mt="10px" fontSize="sm" color={textColorSecondary}>
          Current temperature: 28°C
        </Text>
        <Text mt="5px" fontSize="xs" color={textColorSecondary}>
          Ideal range: 18-24°C
        </Text>
      </Flex>
    </Card>
  );
}






