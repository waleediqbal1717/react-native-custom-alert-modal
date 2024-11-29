import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonType = {
    text: string;
    style?: 'default' | 'cancel' | 'destructive'; // Optional styling
    buttonsStyle?: 'row' | 'column';
    backgroundColor?: string; // Dynamic background color
    textColor?: string; // Dynamic text color
    onPress?: () => void; // Optional callback
};

interface CustomAlertModalProps {
    visible: boolean;
    title?: string;
    message?: string;
    buttonsStyle?: 'row' | 'column'; // Layout for buttons
    buttons?: ButtonType[]; // Array of buttons
    onClose?: () => void; // Optional close handler
}
const CustomAlertModal: React.FC<CustomAlertModalProps> = ({
    visible,
    title,
    message,
    buttonsStyle = 'row', // Default to row layout
    buttons = [],
    onClose,
}) => {
    const defaultButtons: ButtonType[] = buttons.length
        ? buttons
        : [
            {
                text: 'OK',
                style: 'default',
                backgroundColor: '#007BFF', // Default blue background
                textColor: '#FFFFFF', // Default white text
                onPress: () => {
                    onClose?.(); // Close the modal
                },
            },
        ];

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <Text style={styles.message}>{message}</Text>
                    <View
                        style={[
                            styles.buttonContainer,
                            { flexDirection: buttonsStyle },
                            buttonsStyle === 'column' && styles.columnContainer, // Apply column-specific styles
                        ]}
                    >
                        {defaultButtons.map((button: ButtonType, index: number) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.button,
                                    buttonsStyle !== 'column' && styles.rowButton,
                                    { backgroundColor: button.backgroundColor || '#007BFF' }, // Use dynamic or default color
                                    buttonsStyle === 'column' && styles.fixedButtonSize, // Fixed size for column layout
                                    button.style === 'cancel' && styles.cancelButton,
                                ]}
                                onPress={() => {
                                    button.onPress?.(); // Safely call onPress if it exists
                                    onClose?.(); // Close the modal
                                }}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                        { color: button.textColor || '#FFFFFF' }, // Use dynamic or default text color
                                    ]}
                                >
                                    {button.text}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-evenly', // Default row layout
    },
    columnContainer: {
        alignItems: 'center', // Align buttons in the center
        justifyContent: 'flex-start', // Stack buttons vertically
    },
    rowButton: {
        flex: 1
    },
    button: {

        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF', // Default background
        justifyContent: 'center',
        alignItems: 'center',
    },
    fixedButtonSize: {
        width: '100%', // Fixed width
        marginVertical: 5, // Spacing between buttons in column
    },
    cancelButton: {
        backgroundColor: '#aaa', // Cancel button default background
    },
    buttonText: {
        color: '#FFFFFF', // Default text color
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CustomAlertModal;
