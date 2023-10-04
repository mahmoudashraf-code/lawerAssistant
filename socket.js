module.exports = function (io) {
    let users = [];
    io.on("connection", (soket) => {
        if (findUsers(users, soket.handshake.query) == -1) {
            users.push(soket);
            io.emit('users', getUsers(users));
            soket.on("disconnect", () => {
                io.emit("cancelCall", soket.handshake.query);
                users.splice(findUsers(users, soket.handshake.query), 1);
                io.emit('users', getUsers(users));
            });
            soket.on("openCall", (user) => {
                let item = getItem(users, user);
                item.join(user.id);
                soket.join(user.id);
                item.emit("openCall", soket.handshake.query, user.id);
            });
            soket.on("cancelCall", (user) => {
                getItem(users, user).emit("cancelCall", soket.handshake.query);
            });
            soket.on("message", (room, m) => {
                soket.to(room).broadcast.emit(room, m);
            });
        } else {
            soket.emit('errorsFromServer', "sorry");
        }
    });
}
function getUsers(users) {
    let data = [];
    users.forEach(element => {
        data.push(element.handshake.query)
    });
    return data;
}
function findUsers(users = [], user) {
    return users.findIndex(ele => {
        return ele.handshake.query.id == user.id;
    })
}
function getItem(users = [], user) {
    return users.find(ele => {
        return ele.handshake.query.id == user.id;
    })
}