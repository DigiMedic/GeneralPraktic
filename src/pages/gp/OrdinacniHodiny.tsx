import { Container, Title, Text, Stack, Paper, Group, Box } from '@mantine/core';
import type { JSX } from 'react';
import classes from './OrdinacniHodiny.module.css';

export function OrdinacniHodiny(): JSX.Element {
  return (
    <Box className={classes.wrapper}>
      <div className={classes.gridBackground} />
      <Container size="lg" py={80} style={{ position: 'relative', zIndex: 1 }}>
        <Title order={1} ta="center" className={classes.pageTitle}>
          Ordinační hodiny
        </Title>

      <Stack gap="xl">
        {/* Jugoslávská */}
        <Paper shadow="md" p="xl" radius="md" className={classes.officeCard}>
          <Title order={2} mb="xl" className={classes.officeTitle}>
            Jugoslávská - Ordinační hodiny
          </Title>

          <Stack gap="lg">
            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Po</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
              </div>
            </Group>

            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Út</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
              </div>
            </Group>

            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Stř</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>12:00 – 17:00 - 17:00-18:00 pozvaní*</Text>
              </div>
            </Group>

            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Čt</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
              </div>
            </Group>

            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Pá</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>7:30 – 12:30 - 13:00-14:00 pozvaní*</Text>
              </div>
            </Group>
          </Stack>

          <Text size="md" mt="xl" fw={500}>
            Odběry krve probíhají od 7.30
          </Text>
          <Text size="sm" mt="md" c="dimmed">
            * je doba pro pacienty, kteří potřebují vyšetření na invaliditu, lázně, atd.
          </Text>
        </Paper>

        {/* Těšany */}
        <Paper shadow="md" p="xl" radius="md" className={classes.officeCard}>
          <Title order={2} mb="xl" className={classes.officeTitle}>
            Těšany - Ordinační hodiny
          </Title>

          <Stack gap="lg">
            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Út</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>7:30 – 12:00 - 12:30-14:00</Text>
              </div>
            </Group>

            <Group justify="space-between" className={classes.dayRow}>
              <div className={classes.dayLabel}>
                <Title order={3}>Čt</Title>
              </div>
              <div className={classes.timeInfo}>
                <Text size="xl" fw={500}>14:00-17:00</Text>
              </div>
            </Group>
          </Stack>

          <Text size="md" mt="xl" fw={500}>
            Odběry krve probíhají od 7.30
          </Text>
          <Text size="sm" mt="md" c="dimmed">
            * je doba pro pacienty, kteří potřebují vyšetření na invaliditu, lázně, atd.
          </Text>
          <Text size="lg" mt="xl" fw={600} className={classes.contactHighlight}>
            Kontakt na ordinaci Těšany: ‭+420 733 584 749‬
          </Text>
        </Paper>
      </Stack>
      </Container>
    </Box>
  );
}
