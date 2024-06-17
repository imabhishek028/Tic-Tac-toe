import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { scale } from 'react-native-size-matters';

export default function App() {
  const [clicked, setClicked] = useState(true);
  const [box, setBox] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const resetBox = () => {
    setBox([
      null, null, null,
      null, null, null,
      null, null, null
    ]);
  };

  const onPressReset = () => {
    resetBox();
    setClicked(true);
  };

  const winWays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const calculateWinner = (box) => {
    for (let i = 0; i < winWays.length; i++) {
      const [a, b, c] = winWays[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(box);
    if (winner === 'X') {
      Alert.alert('X Won!', 'Player X won, keep playing!');
      resetBox();
    } else if (winner === 'O') {
      Alert.alert('O Won!', 'Player O won, keep playing!');
      resetBox();
    } else if (!box.includes(null)) {
      Alert.alert('Draw!', 'It\'s a draw, keep playing!');
      resetBox();
    }
  }, [box]);

  const OnPressButton = (mark) => {
    if (box[mark] == null) {
      let temp = [...box];
      temp[mark] = clicked ? 'X' : 'O';
      setBox(temp);
      setClicked(!clicked);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='#353935' />
      <View>
        <Text style={styles.headingText}>
          Tic Tac Toe
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.rowButton1}>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(0)}
              disabled={box[0] !== null}>
              <Text style={styles.text}>{box[0]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(1)}
              disabled={box[1] !== null}>
              <Text style={styles.text}>{box[1]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(2)}
              disabled={box[2] !== null}>
              <Text style={styles.text}>{box[2]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowButton2}>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(3)}
              disabled={box[3] !== null}>
              <Text style={styles.text}>{box[3]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(4)}
              disabled={box[4] !== null}>
              <Text style={styles.text}>{box[4]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(5)}
              disabled={box[5] !== null}>
              <Text style={styles.text}>{box[5]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowButton3}>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(6)}
              disabled={box[6] !== null}>
              <Text style={styles.text}>{box[6]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(7)}
              disabled={box[7] !== null}>
              <Text style={styles.text}>{box[7]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSingleButton}>
            <TouchableOpacity style={styles.button} onPress={() => OnPressButton(8)}
              disabled={box[8] !== null}>
              <Text style={styles.text}>{box[8]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.resetButtonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={onPressReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353935',
    flex: 1,
  },
  headingText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: scale(40),
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: scale(10),
  },
  buttonContainer: {
    marginTop: scale(50),
    height: '50%',
    width: '95%',
    alignSelf: 'center',
  },
  rowButton1: {
    padding: scale(5),
    flex: 1 / 3,
    flexDirection: 'row',
  },
  rowButton2: {
    padding: scale(5),
    flex: 1 / 3,
    flexDirection: 'row',
  },
  rowButton3: {
    padding: scale(5),
    flex: 1 / 3,
    flexDirection: 'row',
  },
  viewSingleButton: {
    flex: 1 / 3,
    margin: scale(10),
  },
  button: {
    flex: 1,
    borderRadius: scale(8),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: scale(36),
    fontWeight: 'bold',
  },
  resetButtonContainer: {
    marginTop: scale(20),
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ff6347',
    padding: scale(10),
    borderRadius: scale(8),
    marginTop:scale(50)
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: scale(20),
    fontWeight: 'bold',
  },
});
