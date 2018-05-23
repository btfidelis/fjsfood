import React, { Component } from 'react';
import { Permissions } from 'expo'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';



export default class ScanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: false,
    }
  }

  // async componentWillMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA)
  //   this.setState(prev => ({
  //     hasCameraPermission: (status === 'granted')
  //   }))
  // }

  onSuccess(e) {
    Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));
  }

  render() {

    const renderQR = () => {
      if (this.state.hasCameraPermission) {
        return <Text>Sem permissão para camera</Text>
      } else {
        return (<QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />)
      }
    }

    return (renderQR());
  }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
