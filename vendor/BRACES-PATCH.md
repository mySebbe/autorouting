# Lokaler Braces-Sicherheitsfix

Dieser Tarball enthält `braces` mit einer Tiefenbegrenzung gegen GHSA-vfj7-8cjw-p6xm. Die Paketversion `3.0.4-local.4` kennzeichnet ausdrücklich einen lokalen Fix und ist keine Upstream-Veröffentlichung. Ein unabhängiger GPT-5.6-Sol-Daybreak-Review deckte zwei zusätzliche Fehler im übernommenen Fork auf; die Elternknotenübergabe in `stringify` und eine Debug-Ausgabe in `compile` wurden korrigiert. Ein Nachreview zeigte außerdem einen bereits in `braces` 3.0.3 vorhandenen Fehler beim Auflösen unausgeglichener Klammern; dieser lokale Fix korrigiert die AST-Elternverknüpfung. Weitere Reviews fanden Umgehungen des Bereichslimits bei absteigenden Zahlen, eigenen Schrittweiten und durch `fill-range` umgewandelten Werten wie Leerzeichen; die Begrenzung wurde an dessen Zahlenkonvertierung angepasst. Die Anzahl wird vor dem Vergleich exakt auf ganze Ergebnisse abgerundet; ungültige Limits werden abgelehnt.

Quelle: [micromatch/braces PR #72](https://github.com/micromatch/braces/pull/72), Commit `28d440b5dd449dbf1fe6f3506cf94ecca4d02660`. Der Quellcode liegt unter `vendor/braces-depth-guard/`, die MIT-Lizenz unter `vendor/braces-depth-guard/LICENSE`. Der Tarball wurde daraus mit `npm pack --ignore-scripts` erstellt.

SHA-256 des Tarballs: `ffcbe18204e9d1013e6cb6be0cfa74c6685af761f4015ab3055950b6ef7d9e79`. Beim Paketwechsel zu einer offiziellen gepatchten Version die lokale Kopie und das Override entfernen.

Die Verarbeitung von Anführungszeichen wurde auf das Upstream-Verhalten zurückgeführt. Nicht geschlossene Quotes lassen nachfolgende Klammermuster wörtlich; ein eigener Regressionstest prüft dies zusammen mit der Tiefengrenze.
