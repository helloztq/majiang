package request

import "encoding/json"
import "log"
import "errors"

const (
	CREATE_ROOM int = 1
	JOIN_ROOM   int = 2
)

type GameCmd struct {
	Cmd   int    `json:"cmd"`
	Param string `json:"param"`
}

func (cmd *GameCmd) getCmd() (ret int) {
	return cmd.Cmd
}

func (cmd *GameCmd) getParam() (ret *string) {
	return &cmd.Param
}

func NewGameCmd(cmd int, param string) (req *GameCmd) {
	req = &GameCmd{
		Cmd:   cmd,
		Param: param}

	return
}

func ParseGameCmd(msg []byte) (err error) {
	gameCmd := NewGameCmd(0, "")
	e := json.Unmarshal(msg, gameCmd)
	if e != nil {
		log.Fatal("parse error!", msg)
		err = e
	}

	switch gameCmd.Cmd {
	case CREATE_ROOM:
		log.Fatal("创建房间")
	case JOIN_ROOM:
		log.Fatal("加入房间")
	default:
		err = errors.New("Not exit Cmd")
	}

	return
}

func onCreateRoom() {

}

func onJoinRoom() {

}
