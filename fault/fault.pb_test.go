package fault

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func subject() Fault {
	return Fault{
		Code:    Fault_IOError,
		Message: "Something went wrong",
	}
}

func TestFault_Getter(t *testing.T) {
	subject := subject()
	assert.Equal(t, "IOError", subject.GetCode().String())
	assert.Equal(t, "Something went wrong", subject.GetMessage())
}

func TestFault_UnmarshalError(t *testing.T) {
	var f Fault
	b := []byte("^_^")
	err := proto.Unmarshal(b, &f)
	assert.Contains(t, err.Error(), "cannot parse invalid wire-format data")
}
