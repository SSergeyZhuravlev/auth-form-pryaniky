import React, { FC } from 'react';

export interface ITitleProps {
    type: string,
    children: React.ReactNode,
    className?: string,
}

export const Title: FC<ITitleProps> = ({ type, children, className }) => React.createElement(type, {}, children, className);