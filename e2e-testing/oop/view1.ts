import { BaseContentPO } from "./base-content";
import { DateTimePickerPO } from "./components/date-time-picker";

export class View1PO extends BaseContentPO {
  getDateTimePicker() {
    return new DateTimePickerPO(() => this.base.find("date-time-picker-v1"))
  }
}
