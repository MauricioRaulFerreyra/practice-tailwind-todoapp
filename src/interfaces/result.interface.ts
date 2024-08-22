export interface IResult {
  combine: null;
  destination: Destination;
  draggableId: string;
  mode: string;
  reason: string;
  source: Destination;
  type: string;
}

interface Destination {
  droppableId: string;
  index: number;
}
