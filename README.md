# 🪪 PIN GENERATOR

> [!WARNING]
> Ten projekt ma charakter wyłącznie edukacyjny i demonstracyjny. Nie jest powiązany z żadnym rządowym, państwowym ani oficjalnym systemem identyfikacji (np. PESEL, SSN itp.). Generowane identyfikatory nie są prawdziwymi numerami identyfikacyjnymi.

Projekt **pin-generator** służy do generowania unikalnego kodu alfanumerycznego znaków na podstawie zdefiniowanego formatu oraz parametrów wejściowych.

### Składnia numeru
Każdy wygenerowany PIN ma ściśle określoną strukturę założoną z 11. znaków. Składa się z czterech segmentów `[A][B][C][D]`.

<!--
SYNTAX PIN:

PIN składa się z czterech segmentów: [A][B][C][D]. Po rozpisaniu segmentów, wygląda to tak: [M/F][YYMMDD][000-999][0-9].

[A][B][C][D] -> [M/F][YYMMDD][000-999][0-9]

[A] -> [M/F] = płeć noworodka
[B] -> [YYMMDD] = data narodzin
[C] -> [000-999] = losowy numer / ew. jakieś równianie gdzie bierzemy godzinę narodzin
[D] -> [0-9] = cyfra kontrolna (wymyślić algorytm) / ew. dodanie do siebie wszystkich cyfr i modulo

PIN ma również generować UUID dla noworodka.
-->

<!--
TODO:
- rozwinąć opis projektu,
- rozwinąć wątek bezpieczeństwa i losowości,
- rozpisać format (syntax) tego numeru,
- zrobić walidację,
-->
