/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org. */

// This file contains branding-specific prefs for Have Browser.

// IMPOSTAZIONE DELLA SCHEDA INIZIALE (Apre la pagina di Nuova Scheda standard)
pref("browser.startup.homepage", "about:newtab");

// DISATTIVA I COLLEGAMENTI ESTERNI E LE PAGINE DI BENVENUTO DI MOZILLA
pref("startup.homepage_override_url", "about:blank");
pref("startup.homepage_welcome_url", "about:blank");
pref("startup.homepage_welcome_url.additional", "");
pref("browser.startup.homepage_override.mstone", "ignore");

// DISATTIVAZIONE COMPLETA DEGLI AGGIORNAMENTI (Evita che Firefox si sovrascriva ad Have)
pref("app.update.enabled", false);
pref("app.update.auto", false);
pref("app.update.interval", 999999999); 
pref("app.update.url.manual", "about:blank");
pref("app.update.url.details", "about:blank");

// DISATTIVA I LINK DELLE NOTE DI RILASCIO NEI MENU
pref("app.releaseNotesURL", "about:blank");
pref("app.releaseNotesURL.aboutDialog", "about:blank");
pref("app.releaseNotesURL.prompt", "about:blank");

pref("app.update.checkInstallTime.days", 999);
pref("app.update.badgeWaitTime", 0);

// Mantieni la console di sviluppo sbloccata
pref("devtools.selfxss.count", 5);
