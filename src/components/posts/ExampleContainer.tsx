import type { ComponentChild } from "preact";

type ExampleContainerProps = {
  children: ComponentChild;
  title: string;
  instructions?: string;
};

export function ExampleContainer(props: ExampleContainerProps) {
  return (
    <div class="rounded-md shadow bg-gray-50 dark:bg-gray-700 not-prose">
      <div class="py-2 mb-2 px-3">
        <p class="font-medium mb-1">{props.title}</p>
        {props.instructions && (
          <p
            class="text-sm"
            dangerouslySetInnerHTML={{ __html: props.instructions || "" }}
          />
        )}
      </div>
      <div class="py-2 px-3">{props.children}</div>
    </div>
  );
}
