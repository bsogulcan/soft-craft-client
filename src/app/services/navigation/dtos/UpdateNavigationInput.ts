export class UpdateNavigationInput {
  id: number;
  caption: string;
  index: number;
  visible: boolean;
  parentNavigationId: number | null;
  icon: string;
  projectId: number | null;
  entityId: number | null;
}
