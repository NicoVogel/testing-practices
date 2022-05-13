import { appScaffoldPO } from "./app-scaffold"
import { dateTimePickerPOFactory } from "./components/date-time-picker"

export const view1PO = {
  get dateTimePicker() {
    return dateTimePickerPOFactory(appScaffoldPO.content.find("date-time-picker-v1"));
  }
}
