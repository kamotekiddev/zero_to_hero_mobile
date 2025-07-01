import { IFormControlProps } from '@gluestack-ui/form-control/lib/types';
import React from 'react';
import { StyleSheet } from 'react-native';

import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabel,
    FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';

export interface CustomInputProps extends IFormControlProps {
    value: string;
    label?: string;
    onChangeText: (text: string) => void;
    description?: string;
    error?: string;
    placeholder?: string;
}

export default function CustomInput({
    value,
    label,
    onChangeText,
    description,
    error,
    placeholder,
    ...props
}: CustomInputProps) {
    return (
        <FormControl {...props}>
            {!!label && (
                <FormControlLabel>
                    <FormControlLabelText>{label}</FormControlLabelText>
                </FormControlLabel>
            )}
            <Input className="my-1">
                <InputField
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </Input>
            {!!description && (
                <FormControlHelper>
                    <FormControlHelperText>{description}</FormControlHelperText>
                </FormControlHelper>
            )}
            {!!error && (
                <FormControlError>
                    <FormControlErrorText>{error}</FormControlErrorText>
                </FormControlError>
            )}
        </FormControl>
    );
}
const styles = StyleSheet.create({});
