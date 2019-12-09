# Configurator

The aim of this schema is to support the possibility of providing user with customizable booking options.

Each choice the user make will be accumulated into the total sum of the booking.

At the moment, only flat cost are given. In the future, schema may be extended to support cost per unit.

**Use cases**

- Rental cars that provides options for child seat, elder seat, additional care packages ...
- Taxi that provides child seats, elder care, bench
- Rail tickets that supports seat selection, additional luggages etc
- Public transit for students / child / elders

**Generating configurator**

`Configurator` is an object, with each of its key a customization. `type` property is given as instruction on how the choice should be made. `choices` will be the set of choices in which the users choose from. All choices requires an (kebab-cased) id, human readable name and cost. If the choices are more or equal to one, at least one choice is required to be `default: true`.

**Sample configurator**

```json
{
  "ticket": {
    "type": "oneOf",
    "name": "Ticket type",
    "choices": [
      {
        "id": "type-adult",
        "name": "Adult ticket",
        "default": true,
        "cost": {
          "amount": 5.5,
          "currency": "EUR"
        }
      },
      {
        "id": "type-child",
        "name": "Child ticket",
        "cost": {
          "amount": 2,
          "currency": "EUR"
        }
      },
      {
        "id": "type-student",
        "name": "Student ticket",
        "cost": {
          "amount": 2,
          "currency": "EUR"
        }
      }
    ]
  }
}
```

**Creating a selection**

`Selection` is an object, with each of its key is a key of the `Configurator` object. The value of each key is an array of ids of choices the user made.

**Sample configurator selection**

```json
{
  "ticket": ["type-adult"]
}
```
