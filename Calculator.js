import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Button.js';
import styles from './styles.js';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  

  const renderButton = (value) => (
    <Button onPress={() => value === '=' ? handleCalculate() : handleButtonPress(value)} value={value} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+')}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-')}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('*')}
        </View>
        <View style={styles.row}>
          {renderButton('0')}
          {renderButton('.')}
          {renderButton('=')}
          {renderButton('/')}
        </View>
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculator;
