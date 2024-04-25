import {Avatar, AvatarProps} from "@cl-ui/react/src/components/Avatar";
import {Meta, StoryObj} from "@storybook/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/diego3g.png',
        alt: 'Herval Mata',
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}