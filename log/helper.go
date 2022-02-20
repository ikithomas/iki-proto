package log

import "google.golang.org/protobuf/proto"

func (l *Log) Byte() []byte {
	b, err := proto.Marshal(l)
	if err != nil {
		panic(err)
	}
	return b
}

func (l *Logs) Byte() []byte {
	b, err := proto.Marshal(l)
	if err != nil {
		panic(err)
	}
	return b
}
