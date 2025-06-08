# Propozycja Tech Stack dla DocIndexer

## Backend
- **.NET Core**:  
  Wydajny, skalowalny i dobrze wspierany framework, który pozwala na szybkie wdrożenie API.  
- **Entity Framework Core**:  
  Ułatwia zarządzanie bazą danych dzięki ORM (Object-Relational Mapping).  

---

## Przechowywanie Metadanych i Statystyk

### Opcja 1: SQLite
- **Zalety**:  
  - Lekka baza danych, idealna na potrzeby MVP.  
  - Nie wymaga skomplikowanej konfiguracji ani serwera.  
  - Umożliwia szybkie prototypowanie i lokalne testowanie.  
  - Wystarczająca na początkowy etap projektu, gdy liczba użytkowników i dokumentów jest ograniczona.  
  - Możliwość łatwej migracji do bardziej zaawansowanego rozwiązania (np. PostgreSQL lub SQL Server) w przyszłości.  

### Opcja 2: Azure Table Storage
- **Zalety**:  
  - Proste i tanie rozwiązanie do przechowywania danych w formacie klucz-wartość.  
  - Dobrze integruje się z Azure Blob Storage.  
  - Skalowalne i tanie rozwiązanie w chmurze.  
  - Idealne do przechowywania prostych danych, takich jak metadane dokumentów i statystyki użytkowników.  

---

## Propozycja Struktury Danych

### Tabela Metadanych
- `DocumentId`: Unikalny identyfikator dokumentu.  
- `FileName`: Nazwa pliku.  
- `UploadDate`: Data wgrania.  
- `SummaryVersion`: Wersja streszczenia.  
- `Category`: Kategoria dokumentu.  

### Tabela Statystyk
- `UserId`: Unikalny identyfikator użytkownika.  
- `DocumentId`: Powiązanie z dokumentem.  
- `Action`: Typ akcji (np. "accept", "reject", "edit").  
- `Timestamp`: Data i czas akcji.  

---

## Dlaczego to podejście?

### Prostota
- SQLite i Azure Table Storage są łatwe w implementacji i wystarczające na potrzeby MVP.  

### Skalowalność
- W przypadku wzrostu projektu można łatwo przejść na bardziej zaawansowane rozwiązania, takie jak PostgreSQL lub Cosmos DB.  

### Integracja z .NET
- Zarówno SQLite, jak i Azure Table Storage mają dobre wsparcie w ekosystemie .NET.  

---

## Rekomendacja
1. **Na etapie MVP**:  
   - Użyj **SQLite** do przechowywania metadanych i statystyk, ponieważ jest szybkie i łatwe w konfiguracji.  
2. **Jeśli projekt wymaga chmurowego rozwiązania od razu**:  
   - Wybierz **Azure Table Storage**, które dobrze współpracuje z Azure Blob Storage.