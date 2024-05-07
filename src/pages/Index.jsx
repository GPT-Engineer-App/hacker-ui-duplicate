import { Box, Container, Heading, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaHackerNews } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Y Combinator introduces new AI startup accelerator",
    url: "https://news.ycombinator.com/item?id=123456",
  },
  {
    id: 2,
    title: "OpenAI releases GPT-4, revolutionizing AI once again",
    url: "https://news.ycombinator.com/item?id=654321",
  },
  {
    id: 3,
    title: "Exploring the depths of React 18's new features",
    url: "https://news.ycombinator.com/item?id=135792",
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Box display="flex" alignItems="center" gap={2}>
          <FaHackerNews size="2rem" color="orange" />
          <Heading as="h1" size="lg">
            Hacker News
          </Heading>
        </Box>
        <List spacing={3}>
          {newsItems.map((item) => (
            <ListItem key={item.id} p={2} _hover={{ bg: "gray.100" }}>
              <Link href={item.url} isExternal color="orange.500" fontWeight="bold">
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
        <Text fontSize="sm" color="gray.600">
          Clone of Hacker News UI
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
