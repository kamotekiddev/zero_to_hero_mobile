import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CustomInput, {
    CustomInputProps,
} from '@/components/form-elements/FormInput/Input'

interface FormInputProps
    extends Pick<
        CustomInputProps,
        'label' | 'isDisabled' | 'description' | 'placeholder'
    > {
    name: string
}

export default function FormInput({ name, ...props }: FormInputProps) {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <CustomInput
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
