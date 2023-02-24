import _ from "lodash";
import { clearCell } from "../api";
import { Context } from "../context";
import { handleCopy } from './copy'
export function handleCutByClick(ctx: Context, triggerType?: string) {
  handleCopy(ctx);
  const { copyRange } = ctx.luckysheet_copy_save!;
  if (copyRange && copyRange[0]) {
    const [rowS, rowE] = copyRange[0].row;
    const [colS, colE] = copyRange[0].column;
    for (let rIdx = rowS; rIdx <= rowE; rIdx++) {
      for (let cIdx = colS; cIdx <= colE; cIdx++) {
        clearCell(ctx, rIdx, cIdx, { id: ctx.currentSheetId });
      }
    }
  }
  ctx.luckysheet_paste_iscut = true;
}
