# DocIndexer - Podsumowanie Sesji

## Pytania
1. **Jaki jest dokładny profil docelowego użytkownika aplikacji?**  
   Domain expert w swojej branży (oil and gas, energy renewables, maritime). Przeciętny poziom techniczny w softwarze.

2. **Jakie są najczęstsze przypadki użycia dokumentów?**  
   raporty, umowy

3. **Jakie są typowe źródła dokumentów?**  
   Raczej będą to pliki generowane przez wiele osób lub czasem szczególowe standardy (otrzymane z zewnątrz).

4. **Jakie metadane są kluczowe z punktu widzenia użytkownika?**  
   Kategoria dokumentu - raport, standard, faktura, zmiana ceny, umowa, propozycja umowy; Domena - oil and gas / maritime / ogolne itp

5. **Jaka jest definicja „akceptacji wyniku”?**  
   zatwierdzenie summary oraz  klasyfikacji,jeśli akceptacja odrzucona to uzasadnienie od użytkownika

6. **W jaki sposób ma przebiegać proces rejestracji i logowania?**  
   Najprostsze logowanie

7. **Czy aplikacja będzie wielojęzyczna?**  
   Tylko angielski

8. **Czy użytkownik może edytować summary/kategoryzację?**  
   Tak, powinien móc.

9. **Jak długo przechowywane będą dane i dokumenty?**  
   Na tą chwile tylko zapis i kasacja na życzenie uzytkownika, nic wiecej.

10. **Jakie są minimalne wymagania dotyczące poziomu zabezpieczenia danych na etapie MVP?**
Żadne

11. **Czy planowana jest skalowalność rozwiązania?**  
W przyszlosci, na ten moment w ogole sie tym nie martwimy, wystarczy nam 10 dokumentow konkurencyjnie

12. **Jakie technologie i narzędzia są preferowane do realizacji MVP?**  
React, na backendzie python

13. **Czy użytkownik ma mieć dostęp do historii swoich działań lub wersji dokumentów?**
Tak, byloby fajnie gdybysmy widzieli liste uploadowanych dokumentow przez uzytkownika i po wejsciu w detale ich summary. Moze w przyszlosci fajnie by bylo rozwazyc jakis dashboard z dokumentami.

14. **Czy przewiduje się jakąś formę onboardingu/edukacji użytkownika w aplikacji?**
Nie, ma byc ultra prosta i intuicyjna

15. **Jakie dane będą wykorzystywane do analizy kryterium sukcesu?**  
Tak, koniecznie powinnismy prowadzic statystyki akceptacji / odrzucenia / edycji 

16. **Czy przewiduje się ograniczenia co do wielkości pliku PDF?**
Nie wiecej niz 1000 stron i 50MB

17. **Jak będą obsługiwane błędy w parsowaniu i generowaniu summary/kategoryzacji?**
Bledem dla uzytkownika, ze cos poszlo nie tak i komunikatem sprobuj ponownie. Po stronie apki, zapisem do bazy bledu

18. **Czy aplikacja ma być dostępna z poziomu przeglądarki, desktopu czy mobile?**
Tylko web.

19. **Czy planowana jest integracja z systemem powiadomień?**  
Nie

20. **Czy w zakresie MVP należy przewidzieć dashboard administracyjny lub panel raportowania?**
Nie

---

## Rekomendacje
1. **Dopracować profile użytkowników** oraz ich potrzeby i oczekiwania, aby właściwie dobrać funkcjonalności i UX.
-> Pierwszy etap MVP to forma UI dla expertow domenowych do testów. Poznamy tak ich potrzeby i accuracy systemu - nastepnie powinien to byc automat zintegrowany z platformami do przechowywania.
2. **Jasno określić zakres metadanych** i zdefiniować wymagania dotyczące poziomu zabezpieczenia już na etapie MVP.-> na tą chwile tylko zbierzemy te metadane, jesli jest to wystarczaco proste. W przyszlosci bedziemy musieli przeniesc zabezpieczenia do wyniku summary i markdown.
3. **Zdefiniować i udokumentować kryteria „akceptacji wyniku”** oraz proces obsługi odrzuceń, by umożliwić analizę efektywności systemu. -> odrzucenie = kompletne odrzucenie lub edycja wiecej niż 50%.
4. **Zaprojektować prosty i intuicyjny flow** uploadu, podsumowania oraz akceptacji, z możliwością rozwoju o kolejne opcje w przyszłości.
5. **Uwzględnić opcję przechowywania i przeglądania historii dokumentów** oraz działań użytkownika.
6. **Zaplanować zbieranie danych operacyjnych** do analizy realizacji KPI (np. statystyki akceptacji/odrzuceń).
7. **Wskazać wymagania dotyczące wydajności i skalowalności** rozwiązania nawet na etapie MVP.
8. **Przeprowadzić analizę ryzyk dotyczących zgodności z przepisami RODO** (lub innych regulacji) w kontekście przechowywania dokumentów i metadanych.
9. **Zarekomendować mechanizm zarządzania błędami**, umożliwiający użytkownikowi informowanie o nieprawidłowościach i szybki feedback do zespołu. -> logowanie erroru w db oraz contact form na UI.
10. **Uwzględnić w projekcie możliwość łatwego rozwoju** w kierunku integracji z innymi systemami w kolejnych fazach (np. API-first design). -> sekcja about -> future plans.