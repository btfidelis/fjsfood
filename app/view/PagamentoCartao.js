import React, { Component } from "react";
import { StyleSheet, View, Switch, Button, Text } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.4.1
import Spinner from 'react-native-loading-spinner-overlay'

const s = StyleSheet.create({
    switch: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        marginTop: 60,
    },
    label: {
        color: "black",
        fontSize: 12,
    },
    input: {
        fontSize: 16,
        color: "black",
    },
});


export default class PagamentoCartao extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Pagamento',
  };

  state = { loading: false }
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  fakePayment = () => {
    const threeSeconds = 3000
    this.setState(() => ({ loading: true }))

    const paymentSuccess = () => {
      this.setState(() => ({ loading: false }))
      this.props.navigation.navigate('ConfirmacaoPagamento')
    }

    setTimeout(paymentSuccess.bind(this), threeSeconds);
  }

  render() {
    return (
      <View style={s.container}>
        <Spinner visible={this.state.loading} />
        <CreditCardInput
            autoFocus

            requiresName
            requiresCVC
            requiresPostalCode

            cardScale={1.0}
            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange} />
        <Text style={{ marginTop: 50 }} ></Text>
        <Button 
          onPress={this.fakePayment.bind(this)}
          title="Efetuar Pagamento"
          color="#FFC107"
        />
      </View>
    );
  }
}