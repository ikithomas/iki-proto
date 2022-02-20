package fault

import "google.golang.org/protobuf/proto"

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

func InvalidParam(msg string) *Fault {
	return &Fault{
		Code:    Fault_InvalidParam,
		Message: msg,
	}
}

func IOError(msg string) *Fault {
	return &Fault{
		Code:    Fault_IOError,
		Message: msg,
	}
}

func InvalidProtoBuff(msg string) *Fault {
	return &Fault{
		Code:    Fault_InvalidProtoBuff,
		Message: msg,
	}
}

func InvalidJSON(msg string) *Fault {
	return &Fault{
		Code:    Fault_InvalidJSON,
		Message: msg,
	}
}

func InvalidBody(msg string) *Fault {
	return &Fault{
		Code:    Fault_InvalidBody,
		Message: msg,
	}
}

func DBError(msg string) *Fault {
	return &Fault{
		Code:    Fault_DBError,
		Message: msg,
	}
}
