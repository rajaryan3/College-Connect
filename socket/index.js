import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: ['http://localhost:3000' , 'http://localhost:5000']
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user._id === userData._id) && users.push({ ...userData, socketId });
    console.log(socketId)
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user._id === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected ')

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        console.log(userData)
        // io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        console.log(data + 'user name :\n' + user.first_name )
        io.to(user.socketId).emit('getMessage', data)
        // io.emit('getMessage' , data)
        console.log('emmited...')
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})