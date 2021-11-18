import { Box, SimpleGrid, Avatar, useColorMode } from "@chakra-ui/react";

import { Feature } from "./projectFeatureCard";

import {
  reactIcon,
  slateIcon,
  jsIcon,
  chakraIcon,
  nextjsIcon,
  nextjsIconAlt,
  gitHubIcon,
  codeSandboxIcon,
  supabaseIcon,
  gitHubIconAlt,
  vercelIcon,
  vercelIconAlt,
} from "./Icons";

import useWindowDimensions from "@utils/Hooks/useWindowDimension";

export default function SimpleThreeColumns() {
  const { colorMode } = useColorMode();

  const { width } = useWindowDimensions();

  return (
    <Box p={{ base: 2, sm: 3, md: 6, lg: 8, xl: 25 }}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        columnGap={20}
        rowGap={{ base: 10 }}
      >
        <Feature
          image="/sample.jpg"
          title={"Customized Slate Editor"}
          text={
            "Fully custom Slate editor capable of live MD preview which will show you exactly what your post will look like on the page."
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  slateIcon("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  slateIcon("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework/src/components/Editor"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework/src/components/Editor"
                ),
            codeSandboxIcon,
          ]}
        />
        <Feature
          image="/sample.jpg"
          title={"Personal Blog"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  slateIcon("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                  supabaseIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  slateIcon("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                  supabaseIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/Zachs-Blog/tree/Slate-rework"
                ),
            ,
            colorMode === "light"
              ? vercelIcon("https://zachs-blog.vercel.app/")
              : vercelIconAlt("https://zachs-blog.vercel.app/"),
          ]}
        />
        <Feature
          image="/sample.jpg"
          title={"Personal Portfolio"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
          tag={
            width > 1100
              ? [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(100%)")
                    : nextjsIconAlt("grayscale(100%)"),
                  reactIcon("grayscale(100%)"),
                  chakraIcon("grayscale(100%)"),
                ]
              : [
                  colorMode === "light"
                    ? nextjsIcon("grayscale(0%)")
                    : nextjsIconAlt("grayscale(0%)"),
                  reactIcon("grayscale(0%)"),
                  chakraIcon("grayscale(0%)"),
                ]
          }
          icon={[
            colorMode === "light"
              ? gitHubIcon(
                  "https://github.com/ZachCodedThat/portfolio/tree/adding-pages"
                )
              : gitHubIconAlt(
                  "https://github.com/ZachCodedThat/portfolio/tree/adding-pages"
                ),
            colorMode === "light" ? vercelIcon("/") : vercelIconAlt("/"),
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}

// https://codesandbox.io/s/custom-slatejs-editor-wggz8?file=/src/components/CreatePost.js
// Code sandbox for editor.
