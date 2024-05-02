import tkinter as tk

class PromilleRechnerGUI(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Promille-Rechner")
        self._create_widgets()

    def _create_widgets(self):
        # Textfelder für die Eingabe
        self._alkohol_label = tk.Label(self, text="Alkohol in Gramm:")
        self._alkohol_label.pack()
        self._alkohol_entry = tk.Entry(self)
        self._alkohol_entry.pack()

        self._gewicht_label = tk.Label(self, text="Körpergewicht in kg:")
        self._gewicht_label.pack()
        self._gewicht_entry = tk.Entry(self)
        self._gewicht_entry.pack()

        self._geschlecht_label = tk.Label(self, text="Geschlecht:")
        self._geschlecht_label.pack()
        self._geschlecht_var = tk.StringVar(value="m")
        self._geschlecht_male_radio = tk.Radiobutton(self, text="männlich", variable=self._geschlecht_var, value="m")
        self._geschlecht_female_radio = tk.Radiobutton(self, text="weiblich", variable=self._geschlecht_var, value="w")
        self._geschlecht_male_radio.pack()
        self._geschlecht_female_radio.pack()

        self._stunden_label = tk.Label(self, text="Stunden seit dem Trinken:")
        self._stunden_label.pack()
        self._stunden_entry = tk.Entry(self)
        self._stunden_entry.pack()

        # Button zum Berechnen des Promillewerts
        self._calculate_button = tk.Button(self, text="Promille berechnen", command=self._calculate_promille)
        self._calculate_button.pack()

        # Label zur Anzeige des Promillewerts
        self._promille_label = tk.Label(self, text="Promille: ")
        self._promille_label.pack()

    def _calculate_promille(self):
        try:
            # Holen der Werte aus den Textfeldern
            alkohol_menge = float(self._alkohol_entry.get())
            koerpergewicht = float(self._gewicht_entry.get())
            geschlecht = self._geschlecht_var.get()
            stunden = float(self._stunden_entry.get())

            # Berechnung des Promillewerts
            if geschlecht == "m":
                r = 0.7
            else:
                r = 0.6
            promille = (alkohol_menge / (koerpergewicht * r)) - (0.15 * stunden)
            promille = max(0, promille)  # Promillewert ist nie negativ
            self._promille_label.config(text=f"Promille: {promille:.2f}")
        except ValueError:
            # Fehlermeldung, wenn die Eingabe ungültig ist
            self._promille_label.config(text="Ungültige Eingabe")

if __name__ == "__main__":
    app = PromilleRechnerGUI()
    app.mainloop()