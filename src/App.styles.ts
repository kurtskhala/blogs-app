// components/button.ts
import { cva } from "class-variance-authority";

export const header = cva(["header", "ml-4"], {
  variants: {
    margin: {
      small: ["ml-4"],
      medium: ["ml-10"],
    },
  },
});
