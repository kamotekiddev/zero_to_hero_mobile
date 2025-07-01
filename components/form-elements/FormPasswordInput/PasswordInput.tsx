import { IFormControlProps } from '@gluestack-ui/form-control/lib/types';
import React, { useState } from 'react';
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
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';

export interface CustomPasswordInputProps extends IFormControlProps {
    value: string;
    label?: string;
    onChangeText: (text: string) => void;
    description?: string;
    error?: string;
    placeholder?: string;
}

export default function CustomPasswordInput({
    value,
    label,
    onChangeText,
    description,
    error,
    placeholder,
    ...props
}: CustomPasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormControl {...props}>
            {!!label && (
                <FormControlLabel>
                    <FormControlLabelText>{label}</FormControlLabelText>
                </FormControlLabel>
            )}
            <Input className="my-1">
                <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
                <InputSlot
                    className="mr-2"
                    onPress={() => setShowPassword((prev) => !prev)}
                >
                    <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
                </InputSlot>
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
