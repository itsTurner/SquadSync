import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const MyModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleTimeInputChange = (text) => {
    setTimeInput(text);
  };

  const handleDateInputChange = (text) => {
    setDateInput(text);
  };

  const handleLocationInputChange = (text) => {
    setLocationInput(text);
  };

  const handleTimeSubmit = () => {
    setSelectedTime(`${dateInput} ${timeInput}`);
  };

  const useCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    setDateInput(`${year}-${month}-${day}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text style={styles.boldText}>Choose Event Time</Text>
            <TextInput
              placeholder="Date (e.g., 2023-11-07)"
              placeholderTextColor="#000"
              value={dateInput}
              onChangeText={handleDateInputChange}
              style={styles.textInput}
            />
            <TouchableOpacity onPress={useCurrentDate}>
              <Text style={styles.useCurrentDateButton}>Use Current Date</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Time (e.g., 12:00 PM)"
              placeholderTextColor="#000"
              value={timeInput}
              onChangeText={handleTimeInputChange}
              style={styles.textInput}
            />
            <Button title="Set Time" onPress={handleTimeSubmit} />

            <Text style={styles.boldText}>Enter Event Location:</Text>
            <TextInput
              placeholder="Location"
              placeholderTextColor="#000"
              value={locationInput}
              onChangeText={handleLocationInputChange}
              style={styles.textInput}
            />

            {selectedTime && (
              <Text>Selected Time: {selectedTime}</Text>
            )}

            <Button title="Close Modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <View style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
        <Button title="Create Event" onPress={toggleModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  textInput: {
    color: '#000',
  },
  useCurrentDateButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default MyModal;