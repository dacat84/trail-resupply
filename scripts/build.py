#!/usr/bin/env python3
"""Baut data/resupply.json: PCT detailliert (scripts/pct.py), andere Trails aus trail-food grob geschätzt (data/other_stops.json)."""
import json, re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
from pct import P

stops = []
for (name, mile, off, acc, gro, po, eat, bed, camp, out, wash, use, box, boxRec, avg, de, en) in P:
    stops.append({"trail": "PCT", "name": name, "mile": mile, "off": off, "acc": acc,
                  "s": {"gro": gro, "po": po, "eat": eat, "bed": bed, "camp": camp, "out": out, "wash": wash},
                  "use": use, "box": box, "boxRec": boxRec, "avg": avg, "de": de, "en": en})

GRO = {"super": 3, "market": 2, "gas": 1, "none": 0}
for s in json.loads((ROOT / "data" / "other_stops.json").read_text(encoding="utf-8")):
    if s["trail"] == "PCT":
        continue
    g = GRO[s["tier"]]
    txt = (s.get("note", "") + " " + s["name"]).lower()
    m = re.search(r"(\d+)\s*mi", s.get("note_en", ""))
    acc = "hitch" if "hitch" in txt else ("shuttle" if "shuttle" in txt or "bus" in txt else None)
    stops.append({"trail": s["trail"], "name": s["name"], "mile": s["mile"], "off": float(m.group(1)) if m else None, "acc": acc,
                  "s": {"gro": g, "po": 1 if g >= 2 else 0, "eat": 1 if g >= 1 else 0, "bed": 1 if g >= 2 else 0,
                        "camp": None, "out": 1 if s.get("outdoor") else 0, "wash": 1 if g >= 3 else 0},
                  "use": None, "box": None, "boxRec": s["tier"] == "none" or "Paket empfohlen" in s.get("note", "") or "Paket nötig" in s.get("note", ""),
                  "avg": False, "est": True, "de": s.get("note", ""), "en": s.get("note_en", s.get("note", ""))})

trails = json.loads((ROOT / "data" / "trails_meta.json").read_text(encoding="utf-8"))
import hashlib
ver = hashlib.md5(json.dumps([(s["trail"], s["name"], s["mile"]) for s in stops]).encode()).hexdigest()[:8]
out = {"trails": trails, "stops": stops, "ver": ver}
(ROOT / "data" / "resupply.json").write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print(len(stops), "Stops")
