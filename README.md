# 🪪 PIN GENERATOR

> [!WARNING]
> Ten projekt ma charakter wyłącznie edukacyjny i demonstracyjny. Nie jest powiązany z żadnym rządowym, państwowym ani oficjalnym systemem identyfikacji (np. PESEL, SSN itp.). Generowane identyfikatory nie są prawdziwymi numerami identyfikacyjnymi.

Projekt **pin-generator** służy do generowania unikalnego strukturalnego identyfikatora na podstawie zdefiniowanego formatu oraz parametrów wejściowych.

### Składnia numeru
Każdy wygenerowany PIN ma ściśle określoną strukturę założoną z 11. znaków. Składa się z czterech segmentów `[A][B][C][D]`.

`[A]` – płeć noworodka `[M/F]`

`[B]` – data urodzenia w formacie `[YYMMDD]`

`[C]` – losowy trzycyfrowy numer w przedziale `[000-999]`, generowany z użyciem Crypto API

`[D]` – cyfra kontrolna w przedziale `[0-9]`, obliczana jako reszta z dzielenia przez 10 sumy wszystkich cyfr ciągu