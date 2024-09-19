import { Metadata } from "next";
import CreatePlanClient from "./CreatePlanClient";

export const metadata: Metadata = {
  title: "Create Plan | Beanly Coffee",
};

export default function CreatePlan() {
  return <CreatePlanClient />;
}
