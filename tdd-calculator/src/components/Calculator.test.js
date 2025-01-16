import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';


// test cases for add functionality

describe('Calculator Add Functionality', () => {

 beforeEach(() => {
        render(<Calculator />);
    });
  test('should add two positive numbers', () => {
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('5');
  });

  test('should add a positive and a negative number', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('3');
  });

  test('should handle adding zero', () => {
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('7');
  });
});

// test cases for subtract functionality

describe('Calculator Subtract Functionality', () => {
    beforeEach(() => {
        render(<Calculator />);
    });
    test('should subtract two positive numbers ', () => {
      fireEvent.click(screen.getByText('9'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('4'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('5');
    });
  
    test('should handle subtracting a negative number', () => {
      fireEvent.click(screen.getByText('3'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('6'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('9');
    });
  
    test('should handle subtracting zero', () => {
      fireEvent.click(screen.getByText('5'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('0'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('5');
    });
  });

// test cases for Multiply functionality

describe('Calculator Multiply Functionality', () => {
    beforeEach(() => {
        render(<Calculator />);
    });
    test('should multiply two positive numbers correctly', () => {
      fireEvent.click(screen.getByText('3'));
      fireEvent.click(screen.getByText('*'));
      fireEvent.click(screen.getByText('4'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('12');
    });
  
    test('should multiply a positive and a negative number correctly', () => {
      fireEvent.click(screen.getByText('8'));
      fireEvent.click(screen.getByText('*'));
      fireEvent.click(screen.getByText('-'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('-16');
    });
  
    test('should handle multiplying by zero', () => {
      fireEvent.click(screen.getByText('6'));
      fireEvent.click(screen.getByText('*'));
      fireEvent.click(screen.getByText('0'));
      fireEvent.click(screen.getByText('='));
      expect(screen.getByTestId('display')).toHaveTextContent('0');
    });
  });
  
