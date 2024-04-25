import {Meta} from "@storybook/react";
import {Box, BoxProps} from "@cl-ui/react/src/components/Box";

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <span>Testando o elemento Box</span>
            </>
        ),
    },
} as Meta<BoxProps>