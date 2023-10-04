module.exports = {
    add(data, item) {
        data.push(item);
        return data;
    },
    find(data, key, value) {
        for (let i = 0; i < data.length; i++) {
            if (data[i][key] == value) {
                return {
                    data: data[i],
                    index: i
                }
            }
        }
        return { index: -1 };
    },
}