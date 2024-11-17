import type { GlobalAfterChangeHook } from "payload";
import { revalidateTag } from "next/cache";

export const revalidateMenu: GlobalAfterChangeHook = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating menu`);
  revalidateTag("global_menu");
  return doc;
};
