"use client";

import { mailchimp } from '@/app/resources';
import { Button, Flex, Heading, Text } from '@/once-ui/components';
import { Background } from '@/once-ui/components/Background';
import { useTranslations } from 'next-intl';

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export const Mailchimp = (
    { newsletter }: { newsletter: NewsletterProps }
) => {
    const t = useTranslations();

    const handleRedirect = () => {
        window.location.href = 'https://medium.com/@bbscsvec'; // Replace with your Medium profile link
    };

    return (
        <Flex
            style={{ overflow: 'hidden' }}
            position="relative"
            fillWidth padding="l" radius="l" marginBottom="m"
            direction="column" alignItems="center" align="center"
            background="surface" border="neutral-medium" borderStyle="solid-1">
            <Background
                position="absolute"
                gradient={mailchimp.effects.gradient}
                dots={mailchimp.effects.dots}
                lines={mailchimp.effects.lines} />
            <Heading style={{ position: 'relative' }}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button
                    id="mc-embedded-subscribe"
                    size="m"
                    onClick={handleRedirect}>
                    {t("newsletter.button")}
                </Button>
            </div>
        </Flex>
    );
}
