package proto

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/proto"
)

func newUser() User {
	return User{
		Id:       1,
		Username: "ikithomas",
		Password: "password",
		Email:    "thomas@ikithomas.com",
		Nickname: "Thomas",
	}
}

func TestUserGetter(t *testing.T) {
	subject := newUser()
	assert.Equal(t, "Thomas", subject.GetNickname())
	assert.Equal(t, "password", subject.GetPassword())
	assert.Equal(t, "ikithomas", subject.GetUsername())
	assert.Equal(t, "thomas@ikithomas.com", subject.GetEmail())
	assert.Equal(t, int64(1), subject.GetId())
}

func TestUserReset(t *testing.T) {
	subject := newUser()
	subject.Reset()
	assert.Zero(t, subject.GetNickname())
	assert.Zero(t, subject.GetPassword())
	assert.Zero(t, subject.GetUsername())
	assert.Zero(t, subject.GetEmail())
	assert.Zero(t, subject.GetId())
}

func TestUserSerialization(t *testing.T) {
	expected := newUser()
	var actual User

	b, err := proto.Marshal(&expected)
	assert.NoError(t, err)
	proto.Unmarshal(b, &actual)
	assert.Equal(t, actual.String(), expected.String())
}
