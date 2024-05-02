import tkinter as tk

class PromilleRechnerGUI:
    def __init__(self, master):
        self.master = master
        self.master.title("Promillerechner")

        # Eingabefelder
        self.geschlecht_var = tk.StringVar(value="m")
        self.alter_var = tk.IntVar(value=18)
        self.groesse_var = tk.IntVar(value=170)
        self.gewicht_var = tk.IntVar(value=70)
        self.bier_var = tk.IntVar(value=0)
        self.wein_var = tk.IntVar(value=0)
        self.likoer_var = tk.IntVar(value=0)
        self.schnaps_var = tk.IntVar(value=0)
        self.dauer_var = tk.IntVar(value=0)

        # Geschlecht-Auswahl
        self.geschlecht_label = tk.Label(self.master, text="Geschlecht:")
        self.geschlecht_label.grid(row=0, column=0, sticky="w")
        self.geschlecht_m_button = tk.Radiobutton(self.master, text="Männlich", variable=self.geschlecht_var, value="m")
        self.geschlecht_m_button.grid(row=0, column=1, sticky="w")
        self.geschlecht_w_button = tk.Radiobutton(self.master, text="Weiblich", variable=self.geschlecht_var, value="w")
        self.geschlecht_w_button.grid(row=0, column=2, sticky="w")

        # Alter-Eingabe
        self.alter_label = tk.Label(self.master, text="Alter:")
        self.alter_label.grid(row=1, column=0, sticky="w")
        self.alter_entry = tk.Entry(self.master, textvariable=self.alter_var)
        self.alter_entry.grid(row=1, column=1, sticky="w")

        # Größe-Eingabe
        self.groesse_label = tk.Label(self.master, text="Größe (cm):")
        self.groesse_label.grid(row=2, column=0, sticky="w")
        self.groesse_entry = tk.Entry(self.master, textvariable=self.groesse_var)
        self.groesse_entry.grid(row=2, column=1, sticky="w")

        # Gewicht-Eingabe
        self.gewicht_label = tk.Label(self.master, text="Gewicht (kg):")
        self.gewicht_label.grid(row=3, column=0, sticky="w")
        self.gewicht_entry = tk.Entry(self.master, textvariable=self.gewicht_var)
        self.gewicht_entry.grid(row=3, column=1, sticky="w")

        # Bier-Eingabe
        self.bier_label = tk.Label(self.master, text="Bier (0,33l Flaschen):")
        self.bier_label.grid(row=4, column=0, sticky="w")
        self.bier_entry = tk.Entry(self.master, textvariable=self.bier_var)
        self.bier_entry.grid(row=4, column=1, sticky="w")

        # Wein-Eingabe
        self.wein_label = tk.Label(self.master, text="Wein (0,2l Gläser):")
        self.wein_label.grid(row=5, column=0, sticky="w")
        self.wein_entry = tk.Entry(self.master, textvariable=self.wein_var)
        self.wein_entry.grid(row=5, column=1, sticky="w")

        # Likör-Eingabe
        self.likoer_label = tk.Label(self.master, text="Likör (2cl Schnapsgläser):")
        self.likoer_label.grid(row=6, column=0, sticky="w")
        self.likoer_entry = tk.Entry(self.master, textvariable=self.likoer_var)
        self.likoer_entry.grid(row=6, column=1, sticky="w")

        # Schnaps-Eingabe
        self.schnaps_label = tk.Label(self.master, text="Schnaps (2cl Schnapsgläser):")
        self.schnaps_label.grid(row=7, column=0, sticky="w")
        self.schnaps_entry = tk.Entry(self.master, textvariable=self.schnaps_var)
        self.schnaps_entry.grid(row=7, column=1, sticky="w")

        # Dauer-Eingabe
        self.dauer_label = tk.Label(self.master, text="Dauer (Stunden):")
        self.dauer_label.grid(row=8, column=0, sticky="w")
        self.dauer_entry = tk.Entry(self.master, textvariable=self.dauer_var)
        self.dauer_entry.grid(row=8, column=1, sticky="w")

        # Berechnen-Button
        self.berechnen_button = tk.Button(self.master, text="Berechnen", command=self.berechne_promille)
        self.berechnen_button.grid(row=9, column=0, sticky="w")

        # Ausgabe-Label
        self.ausgabe_label = tk.Label(self.master, text="")
        self.ausgabe_label.grid(row=9, column=1, sticky="w")


    def berechne_promille_einzelgetraenk(self, geschlecht, bier, wein, likoer, schnaps, gewicht, dauer, gesamt_promille):
        if geschlecht == 'm':
            r = 0.68
        else:
            r = 0.55
        k = 0.8 if geschlecht == 'm' else 0.6
        alkohol_masse = bier * 0.33 * 0.05 + wein * 0.2 * 0.12 + likoer * 0.02 * 0.25 + schnaps * 0.02 * 0.4
        promille = alkohol_masse / (gewicht * r) - k * dauer
        gesamt_promille += promille if promille > 0 else 0
        return gesamt_promille

        return gesamt_promille

    def berechne_promille(self):
        geschlecht = self.geschlecht_var.get()
        alter = self.alter_var.get()
        groesse = self.groesse_var.get()
        gewicht = self.gewicht_var.get()
        bier = self.bier_var.get()
        wein = self.wein_var.get()
        likoer = self.likoer_var.get()
        schnaps = self.schnaps_var.get()
        dauer = self.dauer_var.get()

        gesamt_promille = 0.0
        gesamt_promille = self.berechne_promille_einzelgetraenk(geschlecht, bier, wein, likoer, schnaps, gewicht, dauer, gesamt_promille)
        gesamt_promille = max(0, gesamt_promille)  # Promillewert ist nie negativ

        ausgabe_text = f"Promille: {gesamt_promille:.2f}"
        self.ausgabe_label.config(text=ausgabe_text)



if __name__ == "__main__":
    root = tk.Tk()
    root.title("Promillerechner")
    app = PromilleRechnerGUI(root)
    root.mainloop()