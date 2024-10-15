"use client";

import React from "react";
import { Flex, Text, IconButton, Avatar } from "@/once-ui/components";
import { Inter } from "next/font/google";
import classNames from "classnames";
import styles from "@/components/about/StudentProfileCard.module.scss";
import { StaticImageData } from "next/image";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

interface StudentProfileProps {
  name: string;
  role?: string;
  github?: string;
  linkedin?: string;
  avatarUrl?: string | StaticImageData; // Keep avatarUrl as optional
}

const StudentProfileCard: React.FC<StudentProfileProps> = ({
  name,
  role,
  github,
  linkedin,
  avatarUrl,
}) => {
  return (
    <Flex
      className={classNames(primary.variable)}
      direction="row"
      alignItems="center"
      padding="l"
      gap="m"
    >
      <Avatar
        size="xl"
        src={typeof avatarUrl === "string" ? avatarUrl : avatarUrl?.src} // Use the .src property if avatarUrl is StaticImageData
        className={styles["student-profile-card"]}
      />
      <Flex direction="column" gap="s" style={{ marginLeft: "m" }}>
        <Text variant="heading-strong-m" color="neutral-strong">
          {name}
        </Text>
        <Text
          className={styles.customRoleText} // Apply a custom class for styling
        >
          {role}
        </Text>
        {/* Conditionally render GitHub and LinkedIn only if URLs are provided */}
        {(github || linkedin) && (
          <Flex gap="m">
            {github && (
              <IconButton
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                icon="github"
                variant="primary"
                aria-label="GitHub"
              />
            )}
            {linkedin && (
              <IconButton
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                icon="linkedin"
                variant="primary"
                aria-label="LinkedIn"
              />
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default StudentProfileCard;
