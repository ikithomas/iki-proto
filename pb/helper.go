package pb

type Marshallable interface {
	ToWire() []byte
}
