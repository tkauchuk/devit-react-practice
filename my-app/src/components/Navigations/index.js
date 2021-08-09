import {Navigations} from './Navigations';
import {memo} from "react";
import isEqual from "lodash/isEqual"

export default memo(Navigations, isEqual);