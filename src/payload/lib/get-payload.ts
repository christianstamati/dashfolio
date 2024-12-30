import configPromise from "@payload-config";
import { getPayload as payload } from "payload";
export default function getPayload() {
  return payload({ config: configPromise });
}
