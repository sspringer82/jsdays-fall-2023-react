# Aufgabe 4 - löschen

https://github.com/sspringer82/jsdays-fall-2023-react

Füge in die ListItem Komponente einen Button hinzu, der beim Click den DAtensatz löscht.

Die ListItem Komponente erhält eine onDelete-Prop, die du aus der Elternkomponente weitergibst.

In der List Komponente: Implementiere eine handleDelete Funktion, die die Id des zu löschenden Datensatzes erhält, einen delete call ans Backend durchführt und den State aktualisiert.

Delete Call:
```ts
fetch(url, {method: 'DELETE'}).then(response => ...)
```

State aktualisieren:
```ts
  setState(prevState => prevState.filter(item => item.id !== id));
```

