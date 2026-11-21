# Trail Resupply

Mobiler Resupply-Planer für US-Langstrecken-Trails (PCT, CDT, AT, Colorado Trail, JMT, Arizona Trail, PNT, Long Trail, Tahoe Rim Trail, Wonderland Trail, Superior Hiking Trail).

**Live:** https://dacat84.github.io/trail-resupply/

- Trail, Richtung und Start wählen, Tagesdistanz (km/mi) und Reserve einstellen
- Nächste Stops mit Distanz, Lauftagen und Tagen Essen
- Pro Ort: Laden (Supermarkt bis Tankstelle), Post, Essen, Unterkunft, Camping, Outfitter, Dusche/Wäsche, Weg in den Ort (am Trail, zu Fuß, trampen, Shuttle, Boot)
- PCT: wie viele Hiker dort halten und Boxen schicken (Halfway Anywhere PCT Hiker Survey 2025)
- „Üblich“: der typische Resupply-Plan mit Etappen bei deinem Tempo, als eigene Route übernehmbar
- „Ab hier weiter“ baut Etappe für Etappe deine Route
- Englisch/Deutsch/Spanisch/Französisch (nach Browsersprache), Einstellungen bleiben im Browser

Essen planen: [Trail Food Planer](https://dacat84.github.io/trail-food/)

## Daten

| Datei | Inhalt |
|---|---|
| `scripts/pct.py` | PCT-Stops detailliert (Services, Zugang, Umfragewerte, Notizen DE/EN) |
| `data/other_stops.json`, `data/trails_meta.json` | Andere Trails (aus trail-food), Services aus Ladengröße geschätzt |
| `scripts/build.py` | Baut `data/resupply.json` |

`python3 scripts/build.py` nach Änderungen ausführen. Ohne Gewähr, Läden und Zugänge ändern sich jede Saison.
