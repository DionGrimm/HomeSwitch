const express = require("express")
const app = express()

const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 80

let groups = [true, false]
let pi = false

app.use("/", express.static("app/dist"))


io.on("connection", function(socket){
	console.log("client connected")

	socket.emit("whodis")

	for (let i = 0; i < groups.length; i++) {
		socket.emit("set", {
			group: i,
			state: groups[i]
		})
	}

	socket.on("set", data => {
		io.sockets.emit("set", data)
		groups[data.group] = data.state
	})

	socket.on("srv", data => {
		console.log("srv")
		if (pi) {
			pi.emit("srv", data)
		}
	})

	socket.on("ident", data => {
		console.log("Pi ident")
		pi = socket
	})
})

http.listen(port, () => console.log(`Server listening on port ${port}!`))
