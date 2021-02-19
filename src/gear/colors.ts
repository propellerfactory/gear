import Color from 'color'

const darken = (color: string, value: number): string => Color(color).darken(value).string()
const alpha = (color: string, value: number): string => Color(color).alpha(value).string()
const lighten = (color: string, value: number): string => Color(color).lighten(value).string()

const colors = {
    deep: '#030711',
    green: '#00614A',
    granite: '#d8dce5',
    moody: '#7c8391',
    silver: '#f0f1f5',
    fog: '#fbfbfb',
    red: '#ff5c40',
    gray: '#c4c4c4',
    shadow: '#1F2229',
    white: '#ffffff',
    light: {
        hover: '#E7EAF0',
        down: '#D8DCE5'
    },
    dark: {
        hover: '#323742',
        down: '#7C8391'
    },
    pink: {
        default: '#f0bfff',
        hover: '#ebadff',
        down: '#e08efa'
    },

    darken,
    alpha,
    lighten
}

export default colors
