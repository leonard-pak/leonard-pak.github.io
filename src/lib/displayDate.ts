import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import "dayjs/locale/en";
import "dayjs/locale/ru";

dayjs.extend(localizedFormat);

export default (date: Date, local: 'ru' | 'en') => dayjs(date).locale(local).format("ll").toUpperCase();
