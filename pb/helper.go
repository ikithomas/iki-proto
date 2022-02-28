package pb

type Marshallable interface {
	ToProto() []byte
}
