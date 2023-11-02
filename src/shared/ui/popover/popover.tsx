import { Popover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type HPopoverButtonType = {
  trigger: ReactNode;
  children: ReactNode;
};

export const HPopover = (props: HPopoverButtonType) => {
  const { trigger, children } = props;

  return (
    <Popover>
      {({ close, open }) => (
        <>
          <Popover.Button>{trigger}</Popover.Button>

          <div className="absolute right-0">
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Popover.Panel static className="relative">
                {children}
              </Popover.Panel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  );
};
