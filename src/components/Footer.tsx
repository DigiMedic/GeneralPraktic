// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Container, Group, Stack, Text, Anchor } from '@mantine/core';
import type { JSX } from 'react';
import { Link } from 'react-router';
import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <Container size="xl" py="xl">
        <Stack gap="lg">
          <Group justify="space-between" align="flex-start">
            <Stack gap="xs">
              <Text size="lg" fw={700}>General Praktic s.r.o.</Text>
              <Text size="sm">MUDr. Ruth Gratclová</Text>
              <Text size="sm">Jugoslávská 13 Brno</Text>
              <Text size="sm" c="dimmed">roh ulic Jugoslávská a Merhautova</Text>
            </Stack>

            <Stack gap="xs">
              <Text size="md" fw={600}>Kontakt</Text>
              <Anchor href="mailto:generalpraktic@seznam.cz" size="sm">
                generalpraktic@seznam.cz
              </Anchor>
              <Anchor href="tel:+420545241051" size="sm">
                +420 545 241 051
              </Anchor>
              <Text size="sm" c="dimmed" mt="sm">
                Těšany: +420 733 584 749
              </Text>
            </Stack>

            <Stack gap="xs">
              <Text size="md" fw={600}>Navigace</Text>
              <Anchor component={Link} to="/" size="sm">Domů</Anchor>
              <Anchor component={Link} to="/ordinacni-hodiny" size="sm">Ordinační hodiny</Anchor>
              <Anchor component={Link} to="/zamereni-cenik" size="sm">Zaměření/Ceník</Anchor>
              <Anchor component={Link} to="/kontakt" size="sm">Kontakt</Anchor>
              <Anchor component={Link} to="/objednani" size="sm">Objednání</Anchor>
            </Stack>
          </Group>

          <Text c="dimmed" size="xs" ta="center" mt="md">
            &copy; {new Date().getFullYear()} General Praktic s.r.o. Všechna práva vyhrazena.
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
