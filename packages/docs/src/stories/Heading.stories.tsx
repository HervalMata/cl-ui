// @ts-ignore
import {Heading, HeadingProps} from "@cl-ui/react";
import {Meta, StoryObj} from "@storybook/react";

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
    argTypes: {
        size: {
            control: {
                options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
                type: 'inline-radio',
            },
        },
    },
    parameters: {
        docs: {
            description: {
                story:
                    'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
            },
        },
    },
}