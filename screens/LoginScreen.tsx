import React from 'react'
import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    SafeAreaView,
    StyleSheet,
    View,
    KeyboardAvoidingView,
} from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import FormInput from '@/components/form-elements/FormInput'
import FormPasswordInput from '@/components/form-elements/FormPasswordInput'

const validationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, 'This field is required'),
})

type LoginFormFields = z.infer<typeof validationSchema>

const defaultValues: LoginFormFields = {
    email: '',
    password: '',
}

export default function LoginScreen() {
    const form = useForm<LoginFormFields>({
        defaultValues,
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = form.handleSubmit((data) => {
        console.log(data)
    })

    return (
        <FormProvider {...form}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <VStack space="lg" style={{ padding: 40 }}>
                        <Text size="3xl" bold style={{ textAlign: 'center' }}>
                            Login with
                        </Text>
                        <HStack style={{ justifyContent: 'center' }} space="sm">
                            <Button variant="outline" style={{ minWidth: 120 }}>
                                <ButtonText>Facebook</ButtonText>
                            </Button>
                            <Button variant="outline" style={{ minWidth: 120 }}>
                                <ButtonText>Google</ButtonText>
                            </Button>
                        </HStack>
                        <HStack style={{ alignItems: 'center', columnGap: 10 }}>
                            <View style={styles.separator}></View>
                            <Text>Or</Text>
                            <View style={styles.separator}></View>
                        </HStack>
                        <VStack space="lg">
                            <FormInput
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                            />
                            <FormPasswordInput
                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                            />
                            <Button onPress={onSubmit}>
                                <ButtonText>Login</ButtonText>
                            </Button>
                        </VStack>
                    </VStack>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </FormProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        flex: 1,
        backgroundColor: '#ccc',
    },
})
