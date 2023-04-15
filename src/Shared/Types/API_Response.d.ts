/** @format */
import { Blueprint } from "@etothepii/satisfactory-file-parser";

type ResponseBase<T = any> = {
	Success : boolean;
	Auth : boolean;
	Data? : T;
	Reached : boolean;
	MessageCode? : string;
}

export type IAPIResponseBase<T = any> = ResponseBase<T>;

export type TResponse_AnyData<MessageOpt extends boolean = false> = IAPIResponseBase<MessageOpt>;

// ----------------------------------------
// ----------------- Auth -----------------
// ----------------------------------------

export type TResponse_Auth_SignUp = IAPIResponseBase<{
	Token : string;
}>;
export type TResponse_Auth_SignIn = TResponse_Auth_SignUp;
export type TResponse_Auth_Vertify = IAPIResponseBase<>;

// -------------------------------------------
// ----------------- BP_Util -----------------
// -------------------------------------------

export type TResponse_BPU_ParseBlueprint = IAPIResponseBase<Blueprint>;