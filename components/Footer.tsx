import { Container, Box, Text } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>SKV Dapp template (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          I've used the eleven tool dapp template to start learn.
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Tikapo
          </Text>{' '}
          ⚡{' '}
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://twitter.com/Tikapo1"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            tikapo
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
