module.exports.array = function (array) {
    return {
        findIndex: function (userId) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].id == userId) {
                    return i;
                }
                if (i == array.length - 1) return -1
            }
        },
        delete: function (userId) {
            array.splice(this.findIndex(userId), 1)
            return array;
        },
        update: function (userId, data) {
            array[this.findIndex(userId)] = data;
            return array;
        },
        getData: function (userId) {
            return array[this.findIndex(userId)];
        }
    }
}