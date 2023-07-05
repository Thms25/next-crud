migrate((db) => {
  const collection = new Collection({
    "id": "lnvvdbj8ehlt71m",
    "created": "2023-06-29 14:51:02.670Z",
    "updated": "2023-06-29 14:51:02.670Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eth9hmia",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 99,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nkpmzmst",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 999,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lnvvdbj8ehlt71m");

  return dao.deleteCollection(collection);
})
