import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonType = {
    text: string;
    style?: 'default' | 'cancel' | 'destructive'; // Optional styling
    onPress?: () => void; // Optional callback
};

interface CustomAlertModalProps {
    visible: boolean;
    title?: string;
    message?: string;
    buttons?: ButtonType[]; // Correct type for buttons array
    onClose?: () => void; // Optional close handler
}

const CustomAlertModal: React.FC<CustomAlertModalProps> = ({
    visible,
    title,
    message,
    buttons = [],
    onClose,
}) => {
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
                    <View style={styles.buttonContainer}>
                        {buttons.map((button: ButtonType, index: number) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.button, button.style === 'cancel' && styles.cancelButton]}
                                onPress={() => {
                                    button.onPress?.(); // Safely call the onPress if it exists
                                    onClose?.(); // Close the modal
                                }}
                            >
                                <Text style={styles.buttonText}>{button.text}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#aaa',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CustomAlertModal;
