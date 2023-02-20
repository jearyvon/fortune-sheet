import _ from "lodash";
import { Context } from "../context";
import { handleCopy } from './copy'
export function handleCutByClick(ctx: Context, triggerType?: string) {
  handleCopy(ctx);
  ctx.luckysheet_paste_iscut = true;
}
