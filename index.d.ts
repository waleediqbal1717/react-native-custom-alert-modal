declare module 'react-native-custom-alert-modal' {
    import { ComponentType } from 'react';
    import { ModalProps, ViewStyle } from 'react-native';

    export interface ButtonType {
        text: string;
        style?: 'default' | 'cancel' | 'destructive';
        onPress?: () => void;
    }

    export interface CustomAlertModalProps extends ModalProps {
        visible: boolean;
        title?: string;
        message?: string;
        buttons?: ButtonType[];
        onClose?: () => void;
        style?: ViewStyle;
    }

    const CustomAlertModal: ComponentType<CustomAlertModalProps>;
    export default CustomAlertModal;
}
