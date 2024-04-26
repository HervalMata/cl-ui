// @ts-ignore
import {Meta, StoryObj} from '@storybook/react';
import {Box, Checkbox, CheckboxProps, Text, TextArea, TextAreaProps} from "@cl-ui/react/src";

export default {
    title: 'Form/Checkbox',
    component: Checkbox,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    {Story()}
                    <Text size="sm">Accept terms os use</Text>
                </Box>
            )
        },
    ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}