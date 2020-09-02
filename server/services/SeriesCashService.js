//Due to the limited time,
// the implementation of storing query data was performed without using the database.
// In case of extended time, or working on the project, the database will be used.

const Storage = [];
let getStorage = function () {
    return Storage
};
let setStorage = function (reponse) {
    let serial = Storage.find(serial => serial.seriesName === reponse.data.name);
    if (serial) {
        serial.accessCount += 1;
    } else {
        Storage.push({
            accessCount: 1,
            seriesName: reponse.data.name,
        });
    }
    Storage.sort((s1, s2) => {
        return s2.accessCount - s1.accessCount
    }).slice(0, 5);
    return Storage
};
module.exports.getStorage = getStorage;
module.exports.setStorage = setStorage;
