import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  DateInput,
  Button,
} from '@nextui-org/react';
import { item } from '@/types/types';
import { parseAbsoluteToLocal } from '@internationalized/date';

type Props = {
  handleClick: (itemSelected: item) => void;
} & item

function Cell(props: Props) {
  const {
    handleClick,
    itemType,
    chainId,
    itemId,
    isInsideBubble,
    itemLevel,
    pausedUntil,
    createdAt,
    visibility,
  } = props;
  return visibility === 'visible' ? (
    <Card className="cursor-pointer">
      <CardHeader className="flex gap-3 bg-[#cad0c4]">
        <div className="flex flex-col">
          <p className="text-small">{chainId}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-small text-default-500">{itemType}</p>
        <p className="text-md">{visibility}</p>
      </CardBody>
      <CardFooter className="overflow-auto">
        {pausedUntil ? (
          <DateInput
            className="overflow-auto"
            label="Paused Until"
            defaultValue={parseAbsoluteToLocal(pausedUntil)}
            labelPlacement="outside"
          />
        ) : (
          <DateInput
            className="overflow-auto"
            label="Created:"
            defaultValue={parseAbsoluteToLocal(createdAt)}
            labelPlacement="outside"
          />
        )}
      </CardFooter>
      <Divider />
      <Button
        color="primary"
        onClick={() => handleClick({
          itemType,
          chainId,
          pausedUntil,
          createdAt,
          visibility,
          itemId,
          itemLevel,
          isInsideBubble,
        })}
      >
        Edit
      </Button>
    </Card>
  ) : null;
}

export default Cell;
