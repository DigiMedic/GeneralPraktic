import { Container, Title, Text, Stack, Paper, Group, TextInput, Textarea, Button, Box } from '@mantine/core';
import { useState } from 'react';
import type { JSX } from 'react';
import classes from './Kontakt.module.css';

export function Kontakt(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <Box className={classes.wrapper}>
      <div className={classes.gridBackground} />
      <Container size="lg" py={80} style={{ position: 'relative', zIndex: 1 }}>
        <Title order={1} ta="center" className={classes.pageTitle}>
          Kontakt
        </Title>

        <Stack gap="xl">
          {/* Kontaktní informace */}
          <Paper shadow="md" p="xl" radius="md" className={classes.contactInfo} style={{ position: 'relative', zIndex: 1 }}>
          <Stack gap="md">
            <div>
              <Text size="xl" fw={700} className={classes.companyName}>
                General Praktic s.r.o.
              </Text>
              <Text size="lg" fw={600} mt="xs">
                MUDr. Ruth Gratclová
              </Text>
            </div>

            <div>
              <Text size="lg" fw={500}>Jugoslávská 13 Brno</Text>
              <Text size="md" c="dimmed">roh ulic Jugoslávská a Merhautova</Text>
            </div>

            <Group gap="xl" mt="md">
              <div>
                <Text size="sm" c="dimmed">Email:</Text>
                <Text size="lg" fw={500}>
                  <a href="mailto:generalpraktic@seznam.cz" className={classes.contactLink}>
                    generalpraktic@seznam.cz
                  </a>
                </Text>
              </div>
              <div>
                <Text size="sm" c="dimmed">Telefon:</Text>
                <Text size="lg" fw={500}>
                  <a href="tel:+420545241051" className={classes.contactLink}>
                    +420 545 241 051
                  </a>
                </Text>
              </div>
            </Group>
          </Stack>
        </Paper>

        {/* Kontaktní formulář */}
        <Paper shadow="md" p="xl" radius="md" className={classes.formCard} style={{ position: 'relative' }}>
          <Title order={3} mb="lg">Kontaktujte nás</Title>

          {submitted ? (
            <Paper p="xl" className={classes.successMessage}>
              <Text size="lg" fw={600} ta="center">
                Děkujeme za odeslání!
              </Text>
            </Paper>
          ) : (
            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                <TextInput
                  label="Jméno"
                  placeholder="Vaše jméno"
                  required
                  size="md"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <TextInput
                  label="Email"
                  placeholder="vas@email.cz"
                  type="email"
                  required
                  size="md"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Textarea
                  label="Zpráva"
                  placeholder="Vaše zpráva..."
                  required
                  minRows={4}
                  size="md"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" size="lg" className={classes.submitButton}>
                  Odeslat
                </Button>
              </Stack>
            </form>
          )}
        </Paper>

        {/* Mapa */}
        <Paper shadow="md" p="xl" radius="md" className={classes.mapCard} style={{ position: 'relative' }}>
          <Title order={3} mb="lg">Ordinace</Title>
          <div className={classes.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.8!2d16.6237773!3d49.2040386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129457e4e0e0e1%3A0x0!2sJugoslávská%20770%2F13%2C%20613%2000%20Brno!5e0!3m2!1scs!2scz!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa ordinace"
            />
          </div>
          <Group justify="center" mt="md">
            <Button
              component="a"
              href="https://www.google.com/maps/dir/?api=1&destination=Jugoslávská%20770/13,%20613%2000%20Brno-sever-Zábrdovice,%20Česko"
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="md"
            >
              Navigovat k ordinaci
            </Button>
          </Group>
        </Paper>
      </Stack>
      </Container>
    </Box>
  );
}
