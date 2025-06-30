import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CustomInputProps } from '@/components/form-elements/FormInput/Input'
import CustomPasswordInput from '@/components/form-elements/FormPasswordInput/PasswordInput'

interface FormInputProps
    extends Pick<
        CustomInputProps,
        'label' | 'isDisabled' | 'description' | 'placeholder'
    > {
    name: string
}

export default function FormPasswordInput({ name, ...props }: FormInputProps) {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <CustomPasswordInput
                    value={field.value}
                    onChangeText={field.onChange}
                    isInvalid={!!error?.message}
                    error={error?.message}
                    {...props}
                />
            )}
        />
    )
}
