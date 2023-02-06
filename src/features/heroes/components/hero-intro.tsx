import { Paper, Text, Title } from "@mantine/core";

interface HeroIntroProps {
  title: string;
  subtitle: string;
}

export const HeroIntro = ({ title, subtitle }: HeroIntroProps) => {
  return (
    <Paper shadow="xs" p="lg" mb="lg">
      <Title
        order={1}
        transform="uppercase"
        align="center"
        mt="xl"
        mb="md"
        color="white"
        sx={{ fontSize: "3.2rem" }}
      >
        {title}
      </Title>

      <Text
        align="center"
        color="white"
        w={1000}
        mr="auto"
        ml="auto"
        sx={{ fontSize: "1.5rem" }}
      >
        {subtitle}
      </Text>
    </Paper>
  );
};
