// @ts-ignore
import {Meta, StoryObj} from '@storybook/react';
import {TextInput, TextInputProps} from "@cl-ui/react/src/components/TextInput";
import {Box, Text} from "@cl-ui/react/src";

export default {
    title: 'Form/Text Input',
    component: TextInput,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm">Email</Text>
                    {Story()}
                </Box>
            )
        },
    ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name',
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username',
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}