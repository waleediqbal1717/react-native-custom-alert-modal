declare module 'react-native-custom-alert-modal' {
    import { ComponentType } from 'react';
    import { ModalProps, ViewStyle } from 'react-native';

    export interface ButtonType {
       text: string;
    style?: 'default' | 'cancel' | 'destructive'; // Optional styling
    backgroundColor?: string; // Dynamic background color
    buttonsStyle?: 'row' | 'column';
    textColor?: string; // Dynamic text color
    onPress?: () => void; // Optional callback
    }

    export interface AlertModalProps extends ModalProps {
        visible: boolean;
        title?: string;
        message?: string;
        buttonsStyle?:string;
        buttons?: ButtonType[];
        onClose?: () => void;
        style?: ViewStyle;
    }

    const AlertModal: ComponentType<AlertModalProps>;
    export default AlertModal;
}
