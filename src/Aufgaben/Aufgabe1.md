# Aufgabe 1 liste rendern

Erzeuge eine neue Komponente List in der Datei `List.tsx` und binde sie in der App-Komponente ein.

Stelle eine Liste von Personendatensätzen dar.

Speichere die Personendaten in einer lokalen Variablen.

Optional: wenn keine Datensätze vorhanden sind, zeige eine entsprechende Meldung an.

```ts
export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zip: string;
  country: string;
};
```

```json
[
    {
      "id": 1,
      "firstName": "Hans",
      "lastName": "Müller",
      "street": "Hauptstraße 1",
      "city": "Berlin",
      "zip": "10115",
      "country": "Deutschland"
    },
    {
      "id": 2,
      "firstName": "Anna",
      "lastName": "Schmidt",
      "street": "Musterweg 2",
      "city": "Hamburg",
      "zip": "20095",
      "country": "Deutschland"
    },
    {
      "id": 3,
      "firstName": "Michael",
      "lastName": "Schulz",
      "street": "Lindenallee 3",
      "city": "München",
      "zip": "80331",
      "country": "Deutschland"
    }]
```

