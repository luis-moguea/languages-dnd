import { Image } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  image: string;
}

const ImagesItems = ({ image }: Props) => {
  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({ id: image });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Image
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      width="100px"
      src={image}
    />
  );
};

export default ImagesItems;
