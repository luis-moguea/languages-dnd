import { Image } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMediaQuery } from "@chakra-ui/react";

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

  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Image
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      width={isHigherThan480 ? "50px" : "80px"}
      src={image}
    />
  );
};

export default ImagesItems;
