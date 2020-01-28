

const DataStore = require("nedb-promise");

db = new DataStore({
    filename: "./mydata.db",
    autoload: true
});

getPostits = async () => {
    const getAll = await db.find({});
    return getAll
}

newPostits = async (content) => {
    const newPost = await db.insert(content);
    return newPost

}

removePostits = async (id) => {
    const numRemoved = await db.remove({
        _id: id
    });
    if (numRemoved > 0) {
        return true
    }

}

updatePostits = async (id, body) => {
    update = await db.update({ _id: id }, {
        $set: {
            content: body.content
        }
    });

};
module.exports = { getPostits, newPostits, removePostits, updatePostits }