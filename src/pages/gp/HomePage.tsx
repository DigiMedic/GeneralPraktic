import { Container, Title, Text, Stack, Box, Button, Group, Paper } from '@mantine/core';
import type { JSX } from 'react';
import { Link } from 'react-router';
import classes from './HomePage.module.css';

export function GPHomePage(): JSX.Element {
  return (
    <Container size="lg" className={classes.container}>
      <Stack gap="xl" py="xl">
        {/* Aktuální informace */}
        <Paper shadow="sm" p="xl" radius="md" className={classes.announcementBox}>
          <Title order={2} className={classes.announcementTitle}>
            12.12. 2025
          </Title>
          <Title order={1} c="red" fw={700} ta="center" mt="md">
            NEORDINUJEME
          </Title>
          <Text size="lg" mt="xl" ta="center">
            Žádosti o recepty můžete psát na email:
          </Text>
          <Text size="xl" fw={600} ta="center" mt="sm">
            <a href="mailto:generalpraktic@seznam.cz" className={classes.emailLink}>
              generalpraktic@seznam.cz
            </a>
          </Text>
          <Text size="lg" ta="center" mt="md">
            nebo
          </Text>
          <Text size="lg" ta="center" mt="sm">
            medevio.cz/general-praktic
          </Text>
          <Text size="xl" fw={600} ta="center" mt="xl" c="dimmed">
            DĚKUJEME, ŽE NEVOLÁTE ZBYTEČNĚ
          </Text>
        </Paper>

        {/* Quick Actions */}
        <Group justify="center" gap="lg" mt="xl">
          <Button
            component={Link}
            to="/objednani"
            size="xl"
            radius="md"
            className={classes.primaryButton}
          >
            OBJEDNAT
          </Button>
          <Button
            component="a"
            href="mailto:generalpraktic@seznam.cz"
            size="xl"
            radius="md"
            variant="outline"
            className={classes.secondaryButton}
          >
            Žádost o recepty
          </Button>
        </Group>

        {/* Ordinační hodiny - přehled */}
        <Box mt="xl">
          <Title order={2} ta="center" mb="xl">
            Ordinační hodiny
          </Title>

          <Stack gap="lg">
            {/* Jugoslávská */}
            <Paper shadow="sm" p="lg" radius="md">
              <Title order={3} mb="md">Jugoslávská - Ordinační hodiny</Title>
              <Stack gap="sm">
                <Group justify="space-between">
                  <Text fw={600}>Po</Text>
                  <Text>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Út</Text>
                  <Text>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Stř</Text>
                  <Text>12:00 – 17:00 - 17:00-18:00 pozvaní*</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Čt</Text>
                  <Text>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Pá</Text>
                  <Text>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
                </Group>
              </Stack>
              <Text size="sm" mt="md" c="dimmed">
                Odběry krve probíhají od 7.30
              </Text>
              <Text size="sm" mt="xs" c="dimmed">
                * je doba pro pacienty, kteří potřebují vyšetření na invaliditu, lázně, atd.
              </Text>
            </Paper>

            {/* Těšany */}
            <Paper shadow="sm" p="lg" radius="md">
              <Title order={3} mb="md">Těšany - Ordinační hodiny</Title>
              <Stack gap="sm">
                <Group justify="space-between">
                  <Text fw={600}>Út</Text>
                  <Text>7:30 – 12:00 - 12:30-14:00</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={600}>Čt</Text>
                  <Text>14:00-17:00</Text>
                </Group>
              </Stack>
              <Text size="sm" mt="md" c="dimmed">
                Odběry krve probíhají od 7.30
              </Text>
              <Text size="sm" mt="md" fw={600}>
                Kontakt na ordinaci Těšany: ‭+420 733 584 749‬
              </Text>
            </Paper>
          </Stack>

          <Group justify="center" mt="xl">
            <Button component={Link} to="/ordinacni-hodiny" variant="light" size="lg">
              Zobrazit více informací
            </Button>
          </Group>
        </Box>
      </Stack>
    </Container>
  );
}
