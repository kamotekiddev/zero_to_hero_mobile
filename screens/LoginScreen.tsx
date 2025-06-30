import React from 'react'
import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import AntDesign from '@expo/vector-icons/AntDesign'
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
                    <View style={styles.formContainer}>
                        <Text size="3xl" bold style={{ textAlign: 'center' }}>
                            Login with
                        </Text>
                        <HStack style={{ justifyContent: 'center' }} space="md">
                            <TouchableOpacity>
                                <AntDesign
                                    name="facebook-square"
                                    size={40}
                                    color="#3b5998"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign
                                    name="google"
                                    size={40}
                                    color="#3b5998"
                                />
                            </TouchableOpacity>
                        </HStack>
                        <HStack style={{ alignItems: 'center', columnGap: 10 }}>
                            <View style={styles.separator}></View>
                            <Text>Or</Text>
                            <View style={styles.separator}></View>
                        </HStack>
                        <VStack space="xl">
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
                    </View>
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
    formContainer: {
        padding: 40,
        rowGap: 30,
    },
})
