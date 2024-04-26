// @ts-ignore
import {Meta, StoryObj} from '@storybook/react';
import {Box, Text, TextArea, TextAreaProps} from "@cl-ui/react/src";

export default {
    title: 'Form/Text Area',
    component: TextArea,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm">Observations</Text>
                    {Story()}
                </Box>
            )
        },
    ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add any observations...',
    }
}

export const WithPrefix: StoryObj<TextAreaProps> = {
    args: {
        prefix: 'cal.com/',
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}