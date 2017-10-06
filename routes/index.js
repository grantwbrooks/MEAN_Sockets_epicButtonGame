module.exports = function Route(app, server, theCounter){
    var io = require('socket.io').listen(server);

    // Root route to render the index.ejs view.
    app.get('/', function(req, res) {
        res.render("index", {count: theCounter});
    })

    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
        socket.on("button_clicked", function (data){
            console.log(theCounter);
            console.log(data);
            if(data.response == 'epic'){
                theCounter += 1;
            }
            else if( data.response == 'reset') {
                theCounter = 0;
            }
            io.emit('updated_counter', {response: theCounter});
        })
    })
};