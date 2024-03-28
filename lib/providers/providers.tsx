'use client';

import { PropsWithChildren } from "react"

import {NextUIProvider} from "@nextui-org/react";


/**
 * This component wraps all providers into a single component.
 */
export const Providers = ({
                            children,
                          }: PropsWithChildren) => {
  return (
    <>
      {children}
    </>
  )
}
