// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import type { JSX } from 'react';
import { Route, Routes } from 'react-router';
import { GPHomePage, OrdinacniHodiny, ZamereniCenik, Kontakt, Objednani } from './pages/gp';

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<GPHomePage />} />
      <Route path="/ordinacni-hodiny" element={<OrdinacniHodiny />} />
      <Route path="/zamereni-cenik" element={<ZamereniCenik />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/objednani" element={<Objednani />} />
    </Routes>
  );
}
