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

- przeciąganie myszą: obrót cząsteczki najbliższej początkowi układu,
- strzałki: przesunięcie cząsteczki w rzucie,
- `x`, `y`, `z`: rzut wzdłuż osi krystalograficznych,
- `R`: reset bieżącej rundy,
- `Spacja`: pokaż/ukryj poprawne upakowanie.

## Dane

Aplikacja zawiera przykładowe zestawy danych krystalograficznych i promienie van der Waalsa według Bondiego. Dla każdego przykładu pokazane są parametry komórki elementarnej, grupa przestrzenna, liczba `Z`, operacje symetrii i link do źródła CIF/COD, jeżeli jest dostępny.

Wersja przeglądarkowa jest przygotowana tak, żeby można było rozszerzyć ją o import CIF z Crystallography Open Database.

## GitHub Pages

Repozytorium zawiera workflow `.github/workflows/pages.yml`, który publikuje statyczną stronę z gałęzi `main` do GitHub Pages.
