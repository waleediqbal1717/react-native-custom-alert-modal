# react-native-custom-alert-modal

A simple and customizable modal for React Native that functions like the default alert but with enhanced styling and functionality.

## Installation

Install the package using npm or yarn:

npm install react-native-custom-alert-modal
or
yarn add react-native-custom-alert-modal

## Usage
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomAlertModal from 'react-native-custom-alert-modal';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const buttons = [
        {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
        },
        {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
        },
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Show Modal" onPress={() => setModalVisible(true)} />
            <CustomAlertModal
                visible={modalVisible}
                title="Custom Alert"
                message="This is a customizable alert modal."
                buttons={buttons}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

export default App;

## Props
Prop	Type	Default	Description
visible	boolean	false	Controls the visibility of the modal.
title	string	null	Title text displayed at the top of the modal.
message	string	null	Message text displayed below the title.
buttons	Array<ButtonType>	[]	Array of button objects. Each button has a text, style, and onPress.
onClose	() => void	null	Callback fired when the modal is closed.


## Button Object Format (ButtonType)
Each button object in the buttons array should have the following properties:

Property	Type	Default	Description
text	string		The text displayed on the button.
style	string	null	Optional: 'default', 'cancel', or 'destructive'.
onPress	function	null	Optional: Callback function triggered when the button is pressed.

## Customization
You can style the modal and its components by modifying the StyleSheet in the source code.
Buttons can have different styles (default, cancel, destructive) for visual cues.

## Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

## License
This project is licensed under the MIT License. See the LICENSE file for details.