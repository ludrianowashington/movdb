import { format, parseISO } from "date-fns";
import locale from "date-fns/locale/pt-BR";

export function getFormattedDate(date, code = "PP") {
  if (!date) return "";
  return format(parseISO(date), code, { locale });
}
