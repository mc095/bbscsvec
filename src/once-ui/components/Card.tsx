"use client";

import React, { ReactNode, forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Flex, Heading, Text, IconButton } from '.'; // Adjust import based on your project structure
import styles from './Card.module.scss'; // Create this SCSS file for styles

interface CardProps {
    title?: string;
    description?: string;
    children?: ReactNode;
    padding?: string; // Add padding prop
    border?: string;  // Add border prop
    style?: React.CSSProperties;
    className?: string;
    onClose?: () => void; // Callback for close button
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ title, description, children, padding = "m", border = "neutral-medium", style, className, onClose }, ref) => {
        const [isVisible, setIsVisible] = useState(true);
        const [isFadingOut, setIsFadingOut] = useState(false);

        const handleClose = () => {
            setIsFadingOut(true);
            setTimeout(() => {
                setIsVisible(false);
                if (onClose) {
                    onClose(); // Call the onClose prop if provided
                }
            }, 300); // Match this duration with your CSS transition duration
        };

        useEffect(() => {
            // Clean up if the component is unmounted while fading out
            return () => setIsVisible(true);
        }, []);

        if (!isVisible) return null;

        return (
            <Flex
                ref={ref}
                className={classNames(styles.card, className, {
                    [styles.fadeOut]: isFadingOut, // Apply fade out class if fading out
                })}
                style={style}
                direction="column"
                padding="m"
                border="neutral-medium"
                radius="xl"
                background="neutral-weak"
                fillWidth
            >
                <Flex justifyContent="space-between" alignItems="center" position="relative">
                    {title && (
                        <Heading variant="heading-strong-l" marginBottom="s">
                            {title}
                        </Heading>
                    )}
                    <IconButton
                        icon="close" // Assuming you have an icon for close
                        size="s"
                        variant="tertiary"
                        tooltip="Close"
                        onClick={handleClose}
                        style={{ position: 'absolute', right: 10, top: 10 }} // Adjust position here
                    />
                </Flex>
                {description && (
                    <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
                        {description}
                    </Text>
                )}
                <Flex as="section" direction="column">
                    {children}
                </Flex>
            </Flex>
        );
    }
);

Card.displayName = "Card";

export { Card };
