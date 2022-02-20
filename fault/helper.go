package fault

import (
	"fmt"

	"google.golang.org/protobuf/proto"
)

func (f *Fault) Byte() []byte {
	b, err := proto.Marshal(f)
	if err != nil {
		panic(err)
	}
	return b
}

func (f *Fault) CodeStr() string {
	return f.Code.String()
}

////////////////////////////////////////////////////////////////////////////////
// Builder
/////

func InvalidParam(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_InvalidParam,
		Message: fmt.Sprintf(format, args...),
	}
}

func IOError(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_IOError,
		Message: fmt.Sprintf(format, args...),
	}
}

func InvalidProtoBuff(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_InvalidProtoBuff,
		Message: fmt.Sprintf(format, args...),
	}
}

func InvalidJSON(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_InvalidJSON,
		Message: fmt.Sprintf(format, args...),
	}
}

func InvalidBody(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_InvalidBody,
		Message: fmt.Sprintf(format, args...),
	}
}

func DBError(format string, args ...interface{}) *Fault {
	return &Fault{
		Code:    Fault_DBError,
		Message: fmt.Sprintf(format, args...),
	}
}
