import {createStitches, defaultThemeMap} from "@stitches/react";
import {colors, fonts, fontSizes, fontWeights, lineHeight, radil, space} from "@cl-ui/tokens/src";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },

    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeight,
        radil,
        space,
    },
})