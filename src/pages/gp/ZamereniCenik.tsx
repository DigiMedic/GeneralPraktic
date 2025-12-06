import { Container, Title, Text, Stack, Paper, List, Box } from '@mantine/core';
import type { JSX } from 'react';
import classes from './ZamereniCenik.module.css';

export function ZamereniCenik(): JSX.Element {
  return (
    <Box className={classes.wrapper}>
      <div className={classes.gridBackground} />
      <Container size="lg" py={80} style={{ position: 'relative', zIndex: 1 }}>
        <Stack gap="xl">
        {/* Zaměření */}
        <Paper shadow="md" p="xl" radius="md" className={classes.section}>
          <Title order={1} mb="xl" className={classes.sectionTitle}>
            Zaměření
          </Title>

          <Title order={2} size="h3" mb="md" c="dimmed">
            V rámci všeobecného lékařství poskytujeme:
          </Title>

          <List size="lg" spacing="md" className={classes.serviceList}>
            <List.Item>komplexní péči pro dospělé od 16 let</List.Item>
            <List.Item>preventivní prohlídky včetně časné onkologické diagnostiky</List.Item>
            <List.Item>závodně-lékařská péče</List.Item>
            <List.Item>návštěvní služba -možnost telef. konzultací pro registrované pacienty</List.Item>
            <List.Item>očkování hrazená státem (u dospělých jen očkování proti tetanu)</List.Item>
            <List.Item>
              nadstandartní očkování(klíšťová encefalitida, chřipka, žloutenky A+B, tyfus atd…)
            </List.Item>
            <List.Item>vyšetření pro řidičský, zbrojní a potravinářský průkaz</List.Item>
          </List>
        </Paper>

        {/* Ceník */}
        <Paper shadow="md" p="xl" radius="md" className={classes.section}>
          <Title order={1} mb="lg" className={classes.sectionTitle}>
            Ceník
          </Title>

          <Title order={2} size="h3" mb="xl" c="dimmed">
            Ceník lékařských výkonů nehrazených zdravotními pojišťovnami
          </Title>

          <Stack gap="md">
            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Prohlídka do zaměstnání
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                od 700 Kč
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Prohlídka do autoškoly
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                700 Kč <Text component="span" size="sm" c="dimmed">(500,- Studenti)</Text>
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Prohlídka na zbrojní pas
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                700 Kč <Text component="span" size="sm" c="dimmed">(500,- Studenti)</Text>
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Prodloužení platnosti ŘP
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                300 Kč
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Test na nádorové krvácení do tlustého střeva
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                300 Kč
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Aplikace očkovací látky, nehrazené ze zdravotního pojištění
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                200 Kč
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Administrativní úkony
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                od 300 Kč
              </Text>
            </div>

            <div className={classes.priceRow}>
              <Text size="lg" className={classes.serviceText}>
                Výpis ze zdravotní dokumentace
              </Text>
              <Text size="lg" fw={600} className={classes.priceText}>
                300 Kč <Text component="span" size="sm" c="dimmed">(500,- na počkání)</Text>
              </Text>
            </div>
          </Stack>
        </Paper>
      </Stack>
      </Container>
    </Box>
  );
}
