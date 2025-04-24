const mongoose = require('mongoose');

async function connect() {
    try {
        const databaseUrl = 'mongodb+srv://ThuQue:Que231104@nguyenque.6tzlm9p.mongodb.net/ComicStore?retryWrites=true&w=majority&appName=NguyenQue';
        await mongoose.connect(databaseUrl);
        console.log('Kết nối database thành công!');
    } catch (error) {
        console.log(`Lỗi: ${error}`);
    }
}


module.exports = { connect };
