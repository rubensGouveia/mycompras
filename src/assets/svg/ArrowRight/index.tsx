import React from 'react';

import Svg, { Color, Path } from "react-native-svg"

interface Props {
    fill?: Color
    width?: number
    height?: number
}
export function ArrowRight({ fill = '#000', width = 7, height = 12 }: Props) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            <Path d="M1 1L6 6L1 11" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
}
