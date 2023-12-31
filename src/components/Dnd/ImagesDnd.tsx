import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { imageArray } from "../../utils/models.ts";
import { useMediaQuery } from "@chakra-ui/react";
import ImagesItems from "./ImagesItems.tsx";

const imagesDnd = () => {
  const [languageImage, setLanguageImage] = useState<string[]>(imageArray);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setLanguageImage((items) => {
        const activeIndex = items.indexOf(active.id.toString());
        const overIndex = over ? items.indexOf(over?.id.toString()) : -1;

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext strategy={rectSortingStrategy} items={languageImage}>
        <SimpleGrid
          justifyItems="center"
          border="solid"
          borderWidth="1px"
          rounded="2xl"
          borderColor="gray.300"
          padding="2em"
          width={isHigherThan480 ? "100%" : "80%"}
          columns={{
            sm: 2,
            xl: 4,
          }}
          spacing="6"
        >
          {languageImage.map((image, index) => (
            <ImagesItems key={index} image={image}></ImagesItems>
          ))}
        </SimpleGrid>
      </SortableContext>
    </DndContext>
  );
};

export default imagesDnd;
