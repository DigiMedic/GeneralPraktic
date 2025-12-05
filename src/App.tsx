// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { AppShell } from '@mantine/core';
import type { JSX } from 'react';
import { Router } from './Router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App(): JSX.Element {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />
      <AppShell.Main>
        <Router />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
