import { Container, Title, Text, Stack, Paper, Button, Group } from '@mantine/core';
import type { JSX } from 'react';
import classes from './Objednani.module.css';

export function Objednani(): JSX.Element {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl">
        Objednání
      </Title>

      <Stack gap="xl">
        <Paper shadow="md" p="xl" radius="md" ta="center" className={classes.infoBox}>
          <Text size="lg" mb="md">
            Pro objednání k lékařské prohlídce použijte prosím náš online rezervační systém.
          </Text>
        </Paper>

        {/* Lékařská prohlídka */}
        <Paper shadow="md" p="xl" radius="md" className={classes.serviceCard}>
          <Group align="flex-start" gap="xl">
            <div className={classes.imageContainer}>
              <div className={classes.placeholderImage}>
                <Text size="xl" c="white" fw={600}>
                  Lékařská
                  <br />
                  prohlídka
                </Text>
              </div>
            </div>

            <Stack gap="md" style={{ flex: 1 }}>
              <Title order={2}>Lékařská prohlídka</Title>
              <Text size="lg" c="dimmed">
                Objednání na preventivní prohlídku, lékařskou prohlídku do zaměstnání, autoškoly nebo na
                zbrojní průkaz.
              </Text>
              <Group gap="md" mt="md">
                <Button
                  component="a"
                  href="https://www.generalpraktic.cz/booking-calendar/lékařská-prohlídka"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className={classes.bookButton}
                >
                  Objednat
                </Button>
              </Group>
            </Stack>
          </Group>
        </Paper>

        {/* Alternativní kontakt */}
        <Paper shadow="md" p="xl" radius="md" className={classes.alternativeContact}>
          <Title order={3} mb="md" ta="center">
            Jiný způsob objednání
          </Title>
          <Stack gap="md" ta="center">
            <Text size="lg">
              Můžete nás také kontaktovat telefonicky nebo emailem:
            </Text>
            <Group justify="center" gap="xl">
              <div>
                <Text size="sm" c="dimmed">Telefon:</Text>
                <Text size="xl" fw={600}>
                  <a href="tel:+420545241051" className={classes.contactLink}>
                    +420 545 241 051
                  </a>
                </Text>
              </div>
              <div>
                <Text size="sm" c="dimmed">Email:</Text>
                <Text size="xl" fw={600}>
                  <a href="mailto:generalpraktic@seznam.cz" className={classes.contactLink}>
                    generalpraktic@seznam.cz
                  </a>
                </Text>
              </div>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
