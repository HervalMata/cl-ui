import {styled} from "../styles";
import {ComponentProps, ElementType} from "react";

export const Heading = styled('h2', {
    fontFamily: '$default',
    lineHeight: '$shorter',
    margin: 0,
    color: '$gray100',

    variants: {
        size: {
            sm: { fontSize: '$sm' },
            md: { fontSize: '$md' },
            lg: { fontSize: '$lg' },
            '2xl': { fontSize: '$2xl' },
            '4xl': { fontSize: '$4xl' },
            '5xl': { fontSize: '$5xl' },
            '6xl': { fontSize: '$6xl' },
        },
    },

    defaultVariants: {
        size: 'md',
    }
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}