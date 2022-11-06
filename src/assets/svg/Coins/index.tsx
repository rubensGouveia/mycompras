import React from 'react';

import Svg, { Color, Path } from "react-native-svg"

interface Props {
    fill?: Color
}
export function Coins({ fill = '#000' }: Props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
        >
            <Path d="M6 7.5C8.76142 7.5 11 6.49264 11 5.25C11 4.00736 8.76142 3 6 3C3.23858 3 1 4.00736 1 5.25C1 6.49264 3.23858 7.5 6 7.5Z" stroke={fill} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 5.25V7.75C1 8.99375 3.2375 10 6 10C8.7625 10 11 8.99375 11 7.75V5.25" stroke={fill} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11 6.04373C13.2812 6.25623 15 7.16248 15 8.24998C15 9.49373 12.7625 10.5 10 10.5C8.775 10.5 7.65 10.3 6.78125 9.97498" stroke={fill} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5 9.95625V10.75C5 11.9937 7.2375 13 10 13C12.7625 13 15 11.9937 15 10.75V8.25" stroke={fill} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
}
