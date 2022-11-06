import React from 'react';

import Svg, { Color, Path } from "react-native-svg"

interface Props {
    fill?: Color
    size?: number
}
export function More({ fill = '#000', size = 32 }: Props) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <Path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill={fill} />
            <Path d="M24 17.5C24.8284 17.5 25.5 16.8284 25.5 16C25.5 15.1716 24.8284 14.5 24 14.5C23.1716 14.5 22.5 15.1716 22.5 16C22.5 16.8284 23.1716 17.5 24 17.5Z" fill={fill} />
            <Path d="M8 17.5C8.82843 17.5 9.5 16.8284 9.5 16C9.5 15.1716 8.82843 14.5 8 14.5C7.17157 14.5 6.5 15.1716 6.5 16C6.5 16.8284 7.17157 17.5 8 17.5Z" fill={fill} />
        </Svg>
    );
}
