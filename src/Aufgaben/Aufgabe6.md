# Aufgabe 6 - neue Datensätze anlegen

Implementiere eine neue Komponente Form in der Datei `Form.tsx`.

Setze für jede Eigenschaft des Person Typs ein Formularfeld um

Die Form-Komponente ist Kindkomponente der Liste.

In der List Komponente, setze eine Funktion save um, die die DAten zum Server schickt.

Übergib die save-Funktion an das Formular.

Beim Submit des Formulars, rufe die save-Funktion auf.

Bei erfolgreicher Speicherung, aktualisiere den State der Liste.

Speichern der Daten:
```ts
async function save(data:Person): Promise<void> {
  const response = await fetch('http://localhost:3001/persons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  const newPerson = await response.json();
  return newPerson;
}
```