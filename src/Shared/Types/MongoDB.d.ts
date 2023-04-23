import { EDesignerSize } from "@shared/Enum/EDesignerSize";
import { ERoles }        from "@shared/Enum/ERoles";
import { IMod }          from "@shared/Types/ModQuery";

export interface IMongoDB {
	_id : string,
	__v : number,
	createdAt? : string,
	updatedAt? : string
}

export interface IMO_Blueprint extends IMongoDB {
	name : string,
	DesignerSize : EDesignerSize,
	description : string,
	tags : string[],
	mods : string[],
	likes : string[],
	owner : string,
	downloads : number,
	blacklisted? : boolean
}

export interface IMO_BlueprintPack extends IMongoDB {
	name : string,
	description : string,
	tags : string[],
	mods : string[],
	likes : string[],
	owner : string,
	downloads : number,
	blacklisted? : boolean,
	blueprints : string[]
}

export interface IMO_UserAccount extends IMongoDB {
	username : string,
	hash? : string,
	salt? : string,
	email : string,
	role : ERoles
}

export interface IMO_Tag extends IMongoDB {
	DisplayName : string;
}

export interface IMO_Mod extends IMongoDB, IMod {
}

export interface IMO_UserAccountToken extends IMongoDB {
	userid : string,
	token : string,
	expire : Date
}