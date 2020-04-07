// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const serverFile = require('../server');
const app = serverFile.server;

describe("POST /device/addDevice", () => {
    test("It adds a device to the devices collection", async (done) => {
        const newDevice = await request(app)
          .post("/device/addDevice")
          .send({
            "name": "A Oven",
            "properties": {
                "TEMP": 24,
                "Time": 60
            },
            "categoryId": 1586283824286
          });        
        expect(newDevice.request._data).toHaveProperty('name');
        expect(typeof newDevice.request._data.properties).toBe('object');
        expect(newDevice.statusCode).toBe(200);
        done();
    });
});

describe("POST /device/addDevice", () => {
    test("It adds a device to the devices collection", async (done) => {
        const newDevice = await request(app)
          .post("/device/addDevice")
          .send({
            "name": "A Oven",
            "properties": "hello",
            "categoryId": 1586283824286
          });        
        expect(newDevice.request._data).toHaveProperty('name');
        expect(typeof newDevice.request._data.properties).toBe('object');
        done();
    });
});