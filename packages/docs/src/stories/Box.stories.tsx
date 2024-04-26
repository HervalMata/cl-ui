import {Meta} from "@storybook/react";
import {Box, BoxProps} from "@cl-ui/react/src/components/Box";
import {Text} from "@cl-ui/react/src";

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: <Text>Testando o elemento Box</Text>,
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
} as Meta<BoxProps>