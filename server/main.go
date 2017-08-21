package main

import (
	"flag"
	"log"
	"net/http"

	"majiang/server/request"

	"github.com/gorilla/websocket"
)

var addr = flag.String("addr", "localhost:8080", "http service address")
var upgrader = websocket.Upgrader{} // use default options

func onConnect(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer c.Close()
	log.Print("::::connect from: ", c.RemoteAddr().String())

	for {
		_, message, err := c.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}
		err = request.ParseGameCmd(message)
		if err != nil {
			log.Println("Error: ", err)
		}
	}
}

func main() {
	flag.Parse()
	log.SetFlags(0)
	http.HandleFunc("/connect", onConnect)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
