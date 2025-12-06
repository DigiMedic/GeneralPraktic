import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
  Anchor,
} from '@mantine/core';
import { IconClock, IconMapPin, IconPhone, IconStethoscope, IconCalendar, IconMail } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import classes from './HomePage.module.css';

const quickLinks = [
  {
    icon: IconCalendar,
    title: 'Online objednání',
    description: 'Objednejte se k lékaři rychle a pohodlně',
    href: '/objednani',
    color: 'blue',
  },
  {
    icon: IconClock,
    title: 'Ordinační hodiny',
    description: 'Přehled ordinačních hodin obou ordinací',
    href: '/ordinacni-hodiny',
    color: 'teal',
  },
  {
    icon: IconStethoscope,
    title: 'Naše služby',
    description: 'Kompletní péče pro dospělé od 16 let',
    href: '/zamereni-cenik',
    color: 'cyan',
  },
  {
    icon: IconMapPin,
    title: 'Kontakt',
    description: 'Kde nás najdete a jak nás kontaktovat',
    href: '/kontakt',
    color: 'violet',
  },
];

const officeHours = [
  {
    title: 'Brno - Jugoslávská 13',
    phone: '+420 545 241 051',
    hours: [
      { day: 'Po-Út, Čt-Pá', time: '7:30 – 12:30' },
      { day: 'Středa', time: '12:00 – 17:00' },
    ],
  },
  {
    title: 'Těšany',
    phone: '+420 733 584 749',
    hours: [
      { day: 'Úterý', time: '7:30 – 12:00' },
      { day: 'Čtvrtek', time: '14:00 – 17:00' },
    ],
  },
];

export function GPHomePage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0">
      {/* Announcement Bar */}
      <Box className={classes.announcements}>
        <span>
          <strong>12.12. 2025 NEORDINUJEME</strong> - Žádosti o recepty:{' '}
          <Anchor href="mailto:generalpraktic@seznam.cz">generalpraktic@seznam.cz</Anchor>
        </span>
      </Box>

      {/* Hero Section */}
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(74, 144, 226, 0.3) 0%, rgba(53, 122, 189, 0.5) 100%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.heroContainer}>
          <Title className={classes.heroTitle}>
            Vítejte v <span className={classes.heroHighlight}>General Praktic</span>
          </Title>
          <Text className={classes.heroSubtitle}>
            Komplexní lékařská péče pro dospělé v Brně a Těšanech
          </Text>
          <Group mt={30}>
            <Button
              size="xl"
              radius="xl"
              className={classes.heroButton}
              onClick={() => navigate('/objednani')?.catch(console.error)}
            >
              Objednat se online
            </Button>
            <Button
              size="xl"
              radius="xl"
              variant="white"
              onClick={() => navigate('/kontakt')?.catch(console.error)}
            >
              Kontaktovat ordinaci
            </Button>
          </Group>
        </Container>
      </div>

      {/* Quick Links */}
      <Box p="lg">
        <Container>
          <Grid gutter="lg">
            {quickLinks.map((item, index) => (
              <Grid.Col key={`link-${index}`} span={{ base: 12, xs: 6, md: 3 }}>
                <Card
                  shadow="md"
                  radius="md"
                  className={classes.card}
                  p="xl"
                  onClick={() => navigate(item.href)?.catch(console.error)}
                  style={{ cursor: 'pointer', height: '100%' }}
                >
                  <item.icon size={40} stroke={1.5} color={`var(--mantine-color-${item.color}-6)`} />
                  <Text size="lg" fw={500} mt="md">
                    {item.title}
                  </Text>
                  <Text size="sm" c="dimmed" mt="sm">
                    {item.description}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Office Hours */}
      <Box p="lg" bg="white">
        <Container>
          <Title order={2} ta="center" mb="xl">
            Ordinační hodiny
          </Title>
          <Grid gutter="lg">
            {officeHours.map((office, index) => (
              <Grid.Col key={`office-${index}`} span={{ base: 12, md: 6 }}>
                <Card shadow="md" radius="md" p="xl" className={classes.officeCard}>
                  <Group mb="md">
                    <IconMapPin size={24} color="var(--mantine-color-blue-6)" />
                    <Text size="lg" fw={600}>
                      {office.title}
                    </Text>
                  </Group>
                  <Group mb="lg">
                    <IconPhone size={20} />
                    <Anchor href={`tel:${office.phone.replace(/\s/g, '')}`} size="sm">
                      {office.phone}
                    </Anchor>
                  </Group>
                  <Stack gap="sm">
                    {office.hours.map((item, idx) => (
                      <Group key={`hour-${idx}`} justify="space-between">
                        <Text size="sm" fw={500}>
                          {item.day}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {item.time}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
          <Group justify="center" mt="xl">
            <Button
              variant="light"
              size="lg"
              onClick={() => navigate('/ordinacni-hodiny')?.catch(console.error)}
            >
              Zobrazit kompletní ordinační hodiny
            </Button>
          </Group>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box p="lg">
        <Container>
          <Card shadow="md" radius="md" p="xl" className={classes.contactCard}>
            <Group justify="space-between" align="flex-start">
              <Stack gap="md" style={{ flex: 1 }}>
                <Title order={3}>Potřebujete pomoc?</Title>
                <Text size="md" c="dimmed">
                  Kontaktujte nás telefonicky, emailem nebo se objednejte online
                </Text>
                <Group>
                  <Button
                    leftSection={<IconMail size={18} />}
                    variant="light"
                    component="a"
                    href="mailto:generalpraktic@seznam.cz"
                  >
                    Email
                  </Button>
                  <Button
                    leftSection={<IconPhone size={18} />}
                    variant="light"
                    component="a"
                    href="tel:+420545241051"
                  >
                    Telefon
                  </Button>
                </Group>
              </Stack>
            </Group>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
