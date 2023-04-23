import en_us              from "@applib/lang/data/en_us.json";
import de_de              from "@applib/lang/data/de_de.json";
import * as _             from "lodash";
import { SweetAlertIcon } from "sweetalert2";
import { ILang }          from "@app/Types/lang";

export interface IApiMessage {
	title? : string,
	text? : string,
	icon : SweetAlertIcon
}

export const SupportedLangs : Record<string, any> = {
	"de_de": de_de,
	"en_us": en_us
};

export const LangReadable : Record<string, string> = {
	"de_de": "Deutsch",
	"en_gb": "British English",
	"en_us": "English"
};

export function GetLanguage( Lang : string | undefined ) : ILang {
	if ( !Lang || Lang === "" || !Object.keys( SupportedLangs ).includes( Lang ) ) {
		Lang = "en_us";
	}

	const Fallback : ILang = _.cloneDeep( SupportedLangs.en_us );
	const LangData : ILang = _.cloneDeep( SupportedLangs[ Lang ] );

	return _.merge( Fallback, LangData );
}

export function GetApiMessage( Code? : keyof ILang["ApiMessgaes"] ) : IApiMessage | undefined {
	if ( !Code ) {
		return undefined;
	}
	const Lang = GetLanguage( window.localStorage.getItem( "lang" ) || undefined );
	return Lang.ApiMessgaes[ Code ];
}