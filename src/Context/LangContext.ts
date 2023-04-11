import { createContext }  from "react";
import { IuseLang }       from "../Lib/hooks/useLang";
import { SupportedLangs } from "../Lib/lang/lang";

export default createContext<IuseLang>( {
	AllCodes: [],
	Code: "",
	Lang: SupportedLangs.en_us,
	setLang() : void {
	}
} );