import { updateQuantitySchema } from "@/app/api/cartItem/route";
import { z } from "zod";

export type UpdateQuantity = z.infer<typeof updateQuantitySchema>