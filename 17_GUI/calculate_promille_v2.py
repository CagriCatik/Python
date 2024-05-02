class PromilleRechner:
    def __init__(self, geschlecht, alter, groesse, gewicht, bier, wein, likoer, schnaps, dauer):
        self.geschlecht = geschlecht
        self.alter = alter
        self.groesse = groesse
        self.gewicht = gewicht
        self.bier = bier
        self.wein = wein
        self.likoer = likoer
        self.schnaps = schnaps
        self.dauer = dauer

    def berechne_promille(self):
        if self.geschlecht == 'm':
            r = 0.68
        else:
            r = 0.55

        bier_promille = self.bier * 0.05 * 0.8 / (self.gewicht * r)
        wein_promille = self.wein * 0.10 * 0.8 / (self.gewicht * r)
        likoer_promille = self.likoer * 0.25 * 0.8 / (self.gewicht * r)
        schnaps_promille = self.schnaps * 0.40 * 0.8 / (self.gewicht * r)

        gesamt_promille = bier_promille + wein_promille + likoer_promille + schnaps_promille - (0.15 * self.dauer)
        gesamt_promille = max(0, gesamt_promille)  # Promillewert ist nie negativ

        return gesamt_promille
    

promille_rechner = PromilleRechner('m', 25, 180, 80, 3, 2, 1, 0, 1)
promille = promille_rechner.berechne_promille()
print(promille)