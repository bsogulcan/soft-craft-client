export class CreateNavigationInput {
  caption: string;
  index: number;
  visible: boolean = true;
  parentNavigationId: number | null;
  icon: string;
  projectId: number | null;
  entityId: number | null;
}
