package core

type ParlamentOpenDataError struct {
	IsParlamentOpenDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewParlamentOpenDataError(code string, msg string, ctx *Context) *ParlamentOpenDataError {
	return &ParlamentOpenDataError{
		IsParlamentOpenDataError: true,
		Sdk:              "ParlamentOpenData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ParlamentOpenDataError) Error() string {
	return e.Msg
}
