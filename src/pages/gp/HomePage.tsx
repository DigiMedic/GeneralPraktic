import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Anchor,
  Badge,
} from '@mantine/core';
import { IconClock, IconMapPin, IconPhone, IconStethoscope, IconCalendar, IconMail, IconArrowRight } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import classes from './HomePage.module.css';

const features = [
  {
    icon: IconCalendar,
    title: 'Online objednání',
    description: 'Objednejte se k lékaři rychle a pohodlně přes náš rezervační systém',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    icon: IconClock,
    title: 'Flexibilní ordinační hodiny',
    description: 'Brno i Těšany s ranními i odpoledními hodinami',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    icon: IconStethoscope,
    title: 'Komplexní péče',
    description: 'Preventivní prohlídky, očkování, závodní lékařská péče',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    icon: IconMapPin,
    title: 'Dvě ordinace',
    description: 'Brno - Jugoslávská 13 a Těšany pro vaše pohodlí',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

const services = [
  'Preventivní prohlídky',
  'Časná onkologická diagnostika',
  'Závodně-lékařská péče',
  'Návštěvní služba',
  'Očkování',
  'Vyšetření pro řidičský průkaz',
];

export function GPHomePage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box className={classes.wrapper}>
      {/* Animated Background */}
      <div className={classes.gridBackground} />

      {/* Announcement Bar */}
      <Box className={classes.announcements}>
        <Container size="xl">
          <Group justify="center" gap="xs">
            <Badge size="lg" variant="filled" color="red">Důležité</Badge>
            <Text size="sm">
              <strong>12.12. 2025 NEORDINUJEME</strong> - Žádosti o recepty:{' '}
              <Anchor href="mailto:generalpraktic@seznam.cz" c="blue.6" fw={600}>
                generalpraktic@seznam.cz
              </Anchor>
            </Text>
          </Group>
        </Container>
      </Box>

      {/* Hero Section with Gradient */}
      <div className={classes.hero}>
        <div className={classes.heroGlow} />
        <Container size="xl" className={classes.heroContainer}>
          <Stack gap="xl" align="center" ta="center">
            <Badge size="xl" variant="light" className={classes.heroBadge}>
              MUDr. Ruth Gratclová
            </Badge>
            <Title className={classes.heroTitle}>
              Vítejte v{' '}
              <span className={classes.gradientText}>General Praktic</span>
            </Title>
            <Text className={classes.heroSubtitle} maw={700}>
              Moderní lékařská péče s důrazem na prevenci a individuální přístup.
              Jsme tu pro vás v Brně a Těšanech.
            </Text>
            <Group gap="md">
              <Button
                size="xl"
                radius="xl"
                className={classes.shimmerButton}
                rightSection={<IconArrowRight size={20} />}
                onClick={() => navigate('/objednani')?.catch(console.error)}
              >
                Objednat se online
              </Button>
              <Button
                size="xl"
                radius="xl"
                variant="outline"
                className={classes.outlineButton}
                onClick={() => navigate('/kontakt')?.catch(console.error)}
              >
                Kontakt
              </Button>
            </Group>
          </Stack>
        </Container>
      </div>

      {/* Bento Grid Features */}
      <Box py={80}>
        <Container size="xl">
          <Stack gap="xl" mb={60} ta="center">
            <Title order={2} className={classes.sectionTitle}>
              Proč si vybrat General Praktic
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto">
              Poskytujeme komplexní lékařskou péči s moderním přístupem
            </Text>
          </Stack>

          <Grid gutter="lg">
            {features.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Card
                  className={classes.featureCard}
                  p="xl"
                  radius="lg"
                  style={{
                    background: feature.gradient,
                  }}
                >
                  <Stack gap="md" h="100%">
                    <Box className={classes.iconWrapper}>
                      <feature.icon size={32} stroke={2} color="white" />
                    </Box>
                    <Title order={3} c="white" size="h4">
                      {feature.title}
                    </Title>
                    <Text c="white" size="sm" opacity={0.9}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={80} className={classes.servicesSection}>
        <Container size="xl">
          <Grid gutter={60} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Badge size="lg" variant="light">
                  Naše služby
                </Badge>
                <Title order={2} className={classes.sectionTitle}>
                  Komplexní zdravotní péče pod jednou střechou
                </Title>
                <Text size="lg" c="dimmed">
                  Zajišťujeme široké spektrum lékařských služeb pro dospělé od 16 let
                </Text>
                <Button
                  size="lg"
                  variant="light"
                  rightSection={<IconArrowRight size={18} />}
                  onClick={() => navigate('/zamereni-cenik')?.catch(console.error)}
                >
                  Zobrazit ceník
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="sm">
                {services.map((service, index) => (
                  <Box key={index} className={classes.serviceItem}>
                    <Group gap="md">
                      <Box className={classes.checkmark}>✓</Box>
                      <Text size="lg" fw={500}>{service}</Text>
                    </Group>
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Office Hours Cards */}
      <Box py={80}>
        <Container size="xl">
          <Stack gap="xl" mb={60} ta="center">
            <Title order={2} className={classes.sectionTitle}>
              Ordinační hodiny
            </Title>
          </Stack>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card className={classes.officeCard} p="xl" radius="lg">
                <Stack gap="lg">
                  <Group>
                    <Box className={classes.locationIcon}>
                      <IconMapPin size={24} />
                    </Box>
                    <div>
                      <Title order={3} size="h4">Brno - Jugoslávská 13</Title>
                      <Text size="sm" c="dimmed">roh ulic Jugoslávská a Merhautova</Text>
                    </div>
                  </Group>

                  <Stack gap="sm" className={classes.hoursGrid}>
                    <Group justify="space-between">
                      <Text fw={600}>Po-Út, Čt-Pá</Text>
                      <Badge variant="light">7:30 – 12:30</Badge>
                    </Group>
                    <Group justify="space-between">
                      <Text fw={600}>Středa</Text>
                      <Badge variant="light">12:00 – 17:00</Badge>
                    </Group>
                  </Stack>

                  <Group className={classes.contactInfo}>
                    <IconPhone size={18} />
                    <Anchor href="tel:+420545241051">+420 545 241 051</Anchor>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card className={classes.officeCard} p="xl" radius="lg">
                <Stack gap="lg">
                  <Group>
                    <Box className={classes.locationIcon}>
                      <IconMapPin size={24} />
                    </Box>
                    <div>
                      <Title order={3} size="h4">Těšany</Title>
                      <Text size="sm" c="dimmed">Pobočka ordinace</Text>
                    </div>
                  </Group>

                  <Stack gap="sm" className={classes.hoursGrid}>
                    <Group justify="space-between">
                      <Text fw={600}>Úterý</Text>
                      <Badge variant="light">7:30 – 12:00</Badge>
                    </Group>
                    <Group justify="space-between">
                      <Text fw={600}>Čtvrtek</Text>
                      <Badge variant="light">14:00 – 17:00</Badge>
                    </Group>
                  </Stack>

                  <Group className={classes.contactInfo}>
                    <IconPhone size={18} />
                    <Anchor href="tel:+420733584749">+420 733 584 749</Anchor>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>

          <Group justify="center" mt={40}>
            <Button
              variant="light"
              size="lg"
              rightSection={<IconArrowRight size={18} />}
              onClick={() => navigate('/ordinacni-hodiny')?.catch(console.error)}
            >
              Kompletní ordinační hodiny
            </Button>
          </Group>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className={classes.ctaSection}>
        <Container size="xl">
          <Card className={classes.ctaCard} p="xl" radius="lg">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Stack gap="md">
                  <Title order={2} c="white">Potřebujete lékařskou péči?</Title>
                  <Text size="lg" c="white" opacity={0.9}>
                    Objednejte se online nebo nás kontaktujte telefonicky či emailem
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group justify="flex-end" gap="md">
                  <Button
                    size="lg"
                    variant="white"
                    leftSection={<IconMail size={18} />}
                    component="a"
                    href="mailto:generalpraktic@seznam.cz"
                  >
                    Email
                  </Button>
                  <Button
                    size="lg"
                    variant="white"
                    leftSection={<IconPhone size={18} />}
                    component="a"
                    href="tel:+420545241051"
                  >
                    Telefon
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
