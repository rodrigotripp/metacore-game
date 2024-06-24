export type item = {
  itemId: number;
  itemType: string;
  chainId: string;
  pausedUntil: string | null;
  createdAt: string;
  visibility: string;
  itemLevel: number;
  isInsideBubble: boolean;
};
export type mainBoardType = {
  width: number;
  height: number;
  boardId: string;
  items: item[];
};
