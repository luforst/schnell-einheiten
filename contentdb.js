const topicList = ["SI-Basiseinheiten", "Wärmelehre", "Mechanik", "Elektrizitätslehre", "Atom- und Kernphysik", "Akustik", "Optik"];
const arrayList = ["basicSI", "thermodyn", "mechanics", "electrics", "nuclear", "acoustics", "optics"];

const basicSI = [
		["Zeit", "t", "1 s \\, \\textrm{(Sekunde)}"],
		["Masse", "m", "1 kg \\, \\textrm{(Kilogramm)}"],
		["Länge, Strecke", "l, s", "1 m \\, \\textrm{(Meter)}"],
		["el. Stromstärke", "I", "1 A \\, \\textrm{(Ampere)}"],
		["absolute Temperatur", "T", "1 K \\, \\textrm{(Kelvin)}"],
		["Stoffmenge", "n", "1 \\, mol"],
		["Lichtstärke", "I<sub>V</sub>", "1 \\, cd \\, \\textrm{(Candela)}"],
		["Lichtgeschwindigkeit", "c<sub>0</sub>", "299.792.458 \\frac{m}{s} \\approx 300.000 \\frac{km}{s}"],
		];

const thermodyn = [
		["absolute Temperatur", "T", "1 K \\, \\textrm{(Kelvin)}"],
		["Celsius-Temperatur", "&theta;, &#977;", "1 °C \\, \\textrm{(Grad Celsius)}"],
		["Leistung, Energiestrom", "P", "1 \\frac{J}{s} = 1 V \\cdot A = 1 W \\textrm{(Watt)}"],
		["Energie", "E", "1 J \\, \\textrm{(Joule)}"],
		["Wärme", "Q", "1 J \\, \\textrm{(Joule)}"],
		["spezifische Wärmekapazität", "c", "1 \\frac{J}{kg \\cdot K}"],
		["Arbeit", "&Delta;E, W", "1 1 J \\, \\textrm{(Joule)}"],
		["Wirkungsgrad", "&eta;", "1 = 100% \\, \\textrm{(dimensionslose Dezimalzahl < 1)"]
		];

const mechanics = [
		["Geschwindigkeit", "v", "1 \\frac{m}{s}"],
		["Impuls", "\\vec{p}", "\\frac{kg \\cdot m}{s}"],
		["Kraft", "F", "1 N \\, \\textrm{(Newton)}"],
		["Erd- / Fallbeschleunigung", "g", "9,81\\frac{m}{s^2} = 9,81 \\frac{N}{kg}"],
		["Beschleunigung", "a", "1 \\frac{m}{s^2}"],
		["Druck", "p", "1 \\frac{N}{m^2} = 1 Pa \\, \\textrm{(Pascal)}"],
		["Dichte", "&rho;", "1 \\frac{kg}{m^3}"],
		["Federkonstante", "D", "1 \\frac{N}{m}"],
		["Reibungskoeffizient", "&mu;", "1 \\, \\textrm{(dimensionslose Dezimalzahl)}"]
		];

const electrics = [
		["el. Stromstärke", "I", "1 A \\, \\textrm{(Ampere)}"],
		["el. Widerstand", "R", "1 \\Omega \\, \\textrm{(Ohm)}"],
		["el. Spannung", "U", "1 V \\, \\textrm{(Volt)}"],
		["el. Potential", "&Phi;, &phi;, &#981;", "1 V \\, \\textrm{(Volt)}"],
		["el. Ladung", "Q", "1 C \\, \\textrm{(Coulomb)}"],
		["Lorentzkraft", "F<sub>L</sub>", "1 N \\, \\textrm{(Newton)}"]
		];

const nuclear = [
		["Aktivität", "A", "1 Bq \\, \\textrm{(Becquerel)}"],
		["Energiedosis", "D", "1 Gy \\, \\textrm{(Gray)}"],
		["Äquivalentdosis", "H", "1 Sv \\, \\textrm{(Sievert)}"],
		["Ionendosis", "J", "1 \\frac{A \\cdot s}{kg} = 1 \\frac{Q}{kg} = 1 R \\, \\textrm{(Röntgen)}"],
		["Ordnungs-, Kernladungs- oder Protonenzahl", "Z", "1 \\, \\textrm{dimensionslose Anzahl}"],
		["Neutronenzahl", "N", "1 \\, \\textrm{dimensionslose Anzahl}"],
		["Nukleonenzahl, Massenzahl", "A", "1 \\, \\textrm{dimensionslose Anzahl}"]
		];

const acoustics = [
		["Frequenz", "f", "\\frac{1}{s} = 1 Hz \\, \\textrm{(Hertz)}"]
		["Schalldruckpegel", "L<sub>p</sub>", "1 dB \\, \\textrm{(Dezibel)} = 0,1 B \\, \\textrm{(Bel)}"]
		];

const optics = [
		["Brennweite", "f", "1 m"],
		["Brechwert, Brechkraft", "D", "\\frac{1}{m} = 1 dpt \\, \\textrm{(Dioptrie)}"],
		["Bildgröße", "B", "1 m"],
		["Bildweite", "b", "1 m"],
		["Gegenstandsgröße", "G", "1 m"],
		["Gegenstandsweite", "g", "1 m"],
		["Wellenlänge", "&lambda;", "1 m"]
		];

/* NACHFOLGENDEN ABSCHNITT NICHT ÄNDERN!
 * DO NOT ALTER THE FOLLOWING PART!
 */

if (topicList.length != arrayList.length) {
	alert("Fehler: topicList und arrayList haben verschieden viele Elemente!\nBitte contentdb.js prüfen!");
	document.write("<h1>Fehler</h1>topicList und arrayList haben verschieden viele Elemente!<br />Bitte contentdb.js prüfen!");
}
