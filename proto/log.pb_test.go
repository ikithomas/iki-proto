package proto

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func newLog() Log {
	return Log{
		Id:    1,
		Title: "test",
		Text:  "Friends",
	}
}

func TestLog_Getter(t *testing.T) {
	subject := newLog()
	assert.Equal(t, int64(1), subject.GetId())
	assert.Equal(t, "test", subject.GetTitle())
	assert.Equal(t, "Friends", subject.GetText())
}
