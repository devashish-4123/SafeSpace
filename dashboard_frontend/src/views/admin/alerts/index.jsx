// import { Box, SimpleGrid } from "@chakra-ui/react";
// import React from "react";
// import Player from "components/camera/player";

// export default function Settings() {
//   // Chakra Color Mode
//   return (
//     <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
//       <SimpleGrid
//         mb='20px'
//         columns={{ sm: 1, md: 2 }}
//         spacing={{ base: "20px", xl: "20px" }}>
//         <Player/>
//         <Player/>
//         <Player/>
//         <Player/>

//       </SimpleGrid>
//     </Box>
//   );
// }
import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  AlertIcon,
  AlertTitle,
  Textarea,
} from '@chakra-ui/react';

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'Sample Alert 1', read: false },
    { id: 2, message: 'Sample Alert 2', read: false },
    { id: 3, message: 'Viewed Alert', read: true },
  ]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [complaintText, setComplaintText] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const unReadAlerts = alerts.filter((alert) => !alert.read);
  const readAlerts = alerts.filter((alert) => alert.read);

  const handleOpenComplaint = (alert) => {
    setSelectedAlert(alert);
    onOpen();
  };

  const handleMarkAsViewed = (alertId) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, read: true } : alert
      )
    );
  };

  const handleMarkAsUnviewed = (alertId) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, read: false } : alert
      )
    );
  };

  return (
    <Box pt="80px">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Unread Alerts ({unReadAlerts.length})
          </Text>
          {unReadAlerts.map((alert) => (
            <Alert
              status="info"
              variant="left-accent"
              borderRadius="md"
              mb="2"
              key={alert.id}
              cursor="pointer"
              onClick={() => setSelectedAlert(alert)}
            >
              <AlertIcon />
              <AlertTitle>{alert.message}</AlertTitle>
              <Button
                ml="auto"
                size="sm"
                colorScheme="blue"
                onClick={() => handleMarkAsViewed(alert.id)}
              >
                Mark as Viewed
              </Button>
            </Alert>
          ))}
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Viewed Alerts ({readAlerts.length})
          </Text>
          {readAlerts.map((alert) => (
            <Alert
              status="success"
              variant="left-accent"
              borderRadius="md"
              mb="2"
              key={alert.id}
              cursor="pointer"
              onClick={() => handleOpenComplaint(alert)}
            >
              <AlertIcon />
              <AlertTitle>{alert.message}</AlertTitle>
              <Button
                ml="auto"
                size="sm"
                colorScheme="yellow"
                onClick={() => handleMarkAsUnviewed(alert.id)}
              >
                Mark as Unviewed
              </Button>
            </Alert>
          ))}
        </Box>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lodge a Complaint</ModalHeader>
          <ModalBody>
            <Text mb="2"><strong>Alert:</strong> {selectedAlert?.message}</Text>
            <Textarea
              placeholder="Enter additional info..."
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
              rows={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {
              // Handle complaint submission here if needed
              setComplaintText('');
              onClose();
            }}>
              Send Complaint
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}



