# Upakowanie

Mini gra edukacyjna do przewidywania upakowania cząsteczek w komórce elementarnej kryształu.

## Uruchomienie lokalne

Projekt jest statyczny i nie wymaga instalacji zależności.

```powershell
node scripts/dev-server.js
```

Następnie otwórz `http://localhost:8080`.

Można też otworzyć `index.html` bezpośrednio w przeglądarce, ale lokalny serwer lepiej odpowiada zachowaniu GitHub Pages.

## Sterowanie

- przeciąganie myszą w lewo/prawo: obrót cząsteczki najbliższej początkowi układu wokół osi pionowej,
- przeciąganie myszą w górę/dół: obrót tej cząsteczki wokół osi poziomej,
- strzałki: przesunięcie cząsteczki w rzucie,
- `x`, `y`, `z`: rzut wzdłuż osi krystalograficznych,
- `R`: reset bieżącej rundy,
- `Spacja`: pokaż/ukryj poprawne upakowanie.
- pionowy suwak przy planszy: zmniejszenie lub zwiększenie wymiaru obrazu na ekranie.

## Dane

Aplikacja zawiera przykładowe zestawy danych krystalograficznych i promienie van der Waalsa według Bondiego. Dla każdego przykładu pokazane są parametry komórki elementarnej, grupa przestrzenna, liczba `Z`, operacje symetrii i link do źródła CIF/COD, jeżeli jest dostępny.

Wersja przeglądarkowa jest przygotowana tak, żeby można było rozszerzyć ją o import CIF z Crystallography Open Database.

Panel `Źródło danych` pozwala przełączać warianty źródłowe, np. COD/CIF, PubChem oraz źródła metodologiczne: International Tables for Crystallography i Bondi 1964 dla promieni van der Waalsa.

## Dziennik pracy

Dziennik zmian projektowych jest prowadzony w `WORKLOG.md`.

## GitHub Pages

Repozytorium zawiera workflow `.github/workflows/pages.yml`, który publikuje statyczną stronę z gałęzi `main` do GitHub Pages.
