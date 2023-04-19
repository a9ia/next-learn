package main

import (
	"fmt"
	"log"
	"os"

	"github.com/ethereum/go-ethereum/rpc"
	"github.com/joho/godotenv"
)

type Block struct {
	Number string
}

var url string

func getURL() string {
	err := godotenv.Load(".env.local")
	if err != nil {
		log.Fatalf("Some error occured. Err: %s", err)
	}

	network := os.Getenv("NETWORK")

	projectId := os.Getenv("PROJECTID")

	return "https://" + network + ".infura.io/v3/" + projectId
}

func init() {
	url = getURL()
}
func main() {
	client, err := rpc.Dial(url)
	if err != nil {
		log.Fatalf("Could not connect to Infura: %v", err)
	}
	var lastBlock Block
	err = client.Call(&lastBlock, "eth_getBlockByNumber", "latest", true)
	if err != nil {
		fmt.Println("Cannot get the latest block:", err)
		return
	}

	fmt.Printf("Latest block: %v\n", lastBlock.Number)
}
