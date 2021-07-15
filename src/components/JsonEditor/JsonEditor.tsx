import { FC } from "react";
import JSONInput from "react-json-editor-ajrm";
import { LOCALE_ENGLISH } from "./constants";
import { JSONInputProperties } from "./types";

const JsonEditor: FC<JSONInputProperties> = (props) => (
  <JSONInput {...props} locale={props.locale || LOCALE_ENGLISH} />
);

export default JsonEditor;
