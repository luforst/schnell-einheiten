# schnell-einheiten

## Zweck

Es handelt sich hierbei um eine Abfrageseite für den Unterricht in Physik und anderen Naturwissenschaften.
Die Seite fragt Größen, Formelzeichen und die zugehörigen Einheiten und Werte für Konstanten ab.

## Funktionsweise

- Es sind drei Tabellenfelder vorhanden, die zunächst blanko sind.
- Darunter befinden sich drei Knöpfe zum Anzeigen der Tabellenfelderinhalte.
- Durch Klicken auf ein Feld wird der Inhalt des jeweiligen Felds eingeblendet.
- Durch Klicken auf "neue Inhalte laden" werden neue Inhalte in die Tabellenfelder geladen und ausgeblendet.
- Die Inhalte sind in verschiedene Themenbereiche gegliedert, die auf der rechten Seite aufgelistet sind. Dort können sie ausgewählt werden.

## Anpassung der Inhalte

**Achtung:** _In contentdb.js können bisher keine zusätzlichen Themenbereiche eingegeben oder ihre Namen geändert werden! Änderung der Arraynamen führt dazu, dass die Seite nicht mehr korrekt funktioniert!_

Die Inhalte werden aus der Datei contentdb.js entnommen. Diese kann ggf. angepasst werden, die jeweiligen Themenbereiche sind englisch bezeichnet.

Die verwendete Syntax ist die eines Javascript-Arrays.
Ein Themenbereichs-Array stellt sich wie folgt dar:
```javascript
const themenbereich = [
			["Größe", "FZ", "Einheit/Wert"],
			["Größe2", "FZ2", "Einheit2/Wert2"],
			["Größe3", "FZ3", "Einheit3/Wert3"]
			];
```


Zusätzliche Größen können eingefügt werden, indem ein Unterarray hinzugefügt wird. Beispiel:
```javascript
["Wuppdizität", "w", "1 Yi"]
```
**Achtung:** _Jeder einzelne Unterarray benötigt aus syntaktischen Gründen ein Komma hinter der schließenden Klammer, **außer dem letzten Unterarray, hier kein Komma!**_

LaTeX-Befehle können im String "Einheit/Wert" verwendet werden.
**Hinweis:** Ein LaTeX-Backslash muss doppelt als \\\\ eingegeben werden.

Damit eine Lücke zwischen dem Einheitensymbol und einer eventuellen Angabe des ausgeschriebenen Einheitennamens entsteht, ist
```javascript
\\\\,
```
einzugeben, was dem LaTeX-Befehl \\, entspricht.

