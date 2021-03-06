import {
  Avatar,
  Tooltip,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const MotionAvatar = motion(Avatar);
const MotionIconButton = motion(IconButton);

export const reactIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 8]}
    label="React"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      filter={filter}
      size="md"
      name="react"
      bg="transparent"
      src="/react.png"
    />
  </Tooltip>
);

export const slateIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="SlateJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="2px"
      name="slate"
      bg="transparent"
      src="/slate.png"
    />
  </Tooltip>
);

export const jsIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="JavaScript"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="JavaScript"
      bg="transparent"
      src="/JSicon.png"
    />
  </Tooltip>
);

export const cssIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="CSS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="CSS3"
      bg="transparent"
      src="/css.png"
    />
  </Tooltip>
);

export const npmIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Npm"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="Npm"
      bg="transparent"
      src="/npmIcon.png"
    />
  </Tooltip>
);

export const nodeIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="NodeJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="NodeJS"
      bg="transparent"
      src="/nodejs.png"
    />
  </Tooltip>
);

export const chakraIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Chakra-Ui"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="chakra-ui"
      bg="transparent"
      src="/chakraui.svg"
    />
  </Tooltip>
);

export const rustIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Rust"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="Rust"
      bg="transparent"
      src="/rustIcon.png"
    />
  </Tooltip>
);

export const tauriIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Tauri.Studio"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      name="Tauri.Studio"
      bg="transparent"
      src="/tauriIcon.png"
    />
  </Tooltip>
);

export const nextjsIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="NextJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      bg="transparent"
      src="/NextJS.png"
      name="NextJS"
    />
  </Tooltip>
);

export const htmlIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="HTML5"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      bg="transparent"
      src="/html.png"
      name="HTML5"
    />
  </Tooltip>
);

export const nextjsIconAlt = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="NextJS"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      src="/NextJS.png"
      bg="#FFECD1"
      name="NextJS"
    />
  </Tooltip>
);
export const supabaseIcon = (filter) => (
  <Tooltip
    hasArrow
    offset={[0, 12]}
    label="Supabase"
    placement="bottom"
    openDelay={345}
    closeOnClick={false}
  >
    <MotionAvatar
      whileHover={{
        filter: "grayscale(0%)",
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      filter={filter}
      borderRadius="none"
      bg="transparent"
      src="/supabase.png"
      name="supabase"
    />
  </Tooltip>
);

export const gitHubIcon = (gitHubLink) => (
  <ChakraLink href={gitHubLink} target="_blank" rel="noopener">
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      aria-label="GitHub"
      _hover={{
        bg: "none",
      }}
      color="#001524"
      border="hidden"
      borderColor="none"
      isRound={true}
      icon={<BsGithub size="md" />}
    />
  </ChakraLink>
);

export const gitHubIconAlt = (gitHubLink) => (
  <ChakraLink href={gitHubLink} target="_blank" rel="noopener">
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      _hover={{
        bg: "none",
      }}
      aria-label="GitHub"
      color="#FFECD1"
      border="hidden"
      borderColor="none"
      isRound={true}
      icon={<BsGithub size="md" />}
    />
  </ChakraLink>
);

export const codeSandboxIcon = (
  <ChakraLink
    href={
      "https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/pages/index.js"
    }
    target="_blank"
    rel="noopener"
  >
    <MotionAvatar
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="md"
      borderRadius="none"
      bg="transparent"
      src="/codeSandbox.webp"
      name="codeSandbox"
    />
  </ChakraLink>
);

export const vercelIcon = (vercelLink) => (
  <ChakraLink href={vercelLink} target="_blank" rel="noopener">
    <MotionAvatar
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      borderRadius="none"
      bg="transparent"
      src="/vercel-icon-dark.png"
      name="vercelDark"
    />
  </ChakraLink>
);

export const vercelIconAlt = (vercelLink) => (
  <ChakraLink href={vercelLink} target="_blank" rel="noopener">
    <MotionAvatar
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      size="sm"
      borderRadius="none"
      bg="transparent"
      src="/vercel-icon-light.png"
      name="vercelLight"
    />
  </ChakraLink>
);
