import { Activity } from "../types";

export interface IActivity extends Activity {
  getData(): Activity;
}
