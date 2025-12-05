// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { AppShell, Burger, Container, Group, Text, Stack, Button, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { JSX } from 'react';
import { Link, useNavigate } from 'react-router';
import classes from './Header.module.css';

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Ordinační hodiny', href: '/ordinacni-hodiny' },
  { name: 'Zaměření/Ceník', href: '/zamereni-cenik' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Objednání', href: '/objednani' },
];

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell.Header>
      <Container size="xl">
        <div className={classes.inner}>
          <UnstyledButton className={classes.logoButton} onClick={() => navigate('/')?.catch(console.error)}>
            <Stack gap={0}>
              <Text size="xl" fw={700} className={classes.logoText}>
                General Praktic
              </Text>
              <Text size="sm" c="dimmed">
                MUDr. Ruth Gratclová
              </Text>
            </Stack>
          </UnstyledButton>

          <Group gap={0} className={classes.links}>
            {navigation.map((link) => (
              <Link key={link.name} to={link.href} className={classes.link}>
                {link.name}
              </Link>
            ))}
          </Group>

          <Button
            component="a"
            href="mailto:generalpraktic@seznam.cz"
            variant="light"
            className={classes.contactButton}
          >
            Kontakt
          </Button>

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </AppShell.Header>
  );
}
