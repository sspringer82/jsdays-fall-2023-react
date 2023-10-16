# Aufgabe 5 - Liste filtern

Erzeuge in der List Komponente ein Eingabefeld und einen Button.

Erzeuge eine Ref auf das Eingabefeld.

Beim Klick auf den Button: filtere die Liste und zeige nur Einträge an, die den Suchbegriff enthalten.

Speichere den Suchstring in einem lokalen State der Komponente.

Liste Filtern:
```ts
persons.filter(person => person.firstName.includes(searchString)).map((person) => ())
```