Requirement: To provide APIs for a console where we can maintain home appliances.

Design:
  -> Every device has a category like AC, FAN, OVEN, TV.. etc, so created a collection for categories where i maintain categories and the properties  like TEMP, SWING, FANSPEED, TIME.. etc
  -> A user can add categories as well as a device.
  -> developed this using NODE, Express, mongoose and mongodb

Dependencies:
  node, npm

Installation and checks:
  npm install
  mongo server should be up and running
  -> mongod (command to run mongo server)

Start server:
  npm test

Have written test-cases using jest library.

APIs corresponding to the requirements:

--------------
Category APIs:
--------------
-> Add category: {
    API: category/addCategory,
    METHOD: POST,
    BODY: {
      name: String,
      properties: [String],
    }

-> Delete category: {
    API: category/deleteCategory,
    METHOD: DELETE,
    QUERY: { id: 1234}
}

-> List of categories: {
    API: category/listOfCategories,
    METHOD: GET,
    QUERY: {id: 1234}
}

-> Edit category: {
    API: category/editCategory,
    METHOD: POST,
    body: {
      id: 1234,
      properties: [String]
    }
}

------------
Device APIs:
------------
-> Add Device: {
    API: device/addDevice,
    METHOD: POST,
    BODY: {
      name: String,
      properties: {},
      categoryId: String,
      location: String (not mandatory),
    }

-> Delete device: {
    API: device/deleteDevice,
    METHOD: DELETE,
    QUERY: { id: 1234}
}

-> List of devices: {
    API: device/categoryWiseDevices,
    METHOD: GET,
    QUERY: {id: 1234} (not mandatory)
}

-> Edit device: {
    API: device/editDevice,
    METHOD: POST,
    body: {
      id: 1234,
      newObject: object,
    }
}