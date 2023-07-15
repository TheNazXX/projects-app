import { ProjectInterface, SessionInterface } from "@/common.types"

export interface ProjectFormProps {
  type: string;
  session: SessionInterface;
  project?: ProjectInterface
};