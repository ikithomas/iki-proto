package log

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func subject() Log {
	return Log{
		Id:    1,
		Title: "test",
		Text:  "Friends",
	}
}

func TestLogGetter(t *testing.T) {
	subject := subject()
	assert.Equal(t, int64(1), subject.GetId())
	assert.Equal(t, "test", subject.GetTitle())
	assert.Equal(t, "Friends", subject.GetText())
}
