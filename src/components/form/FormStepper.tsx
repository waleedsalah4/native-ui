"use client";
import { JSX, useState } from "react";
import { CompleteStepIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/utils";

interface FormStepperProps {
  currentStep: number;
  steps: string[];
}

function FormStepper({ currentStep, steps }: FormStepperProps) {
  return (
    <>
      <div className="flex justify-center p-4">
        {steps?.map((step, i) => (
          <div
            key={step}
            className={cn(
              "relative flex w-40 flex-col items-center justify-center gap-2 transition-all duration-1000 ease-in-out",
              {
                "ease-in-out before:absolute before:top-[27.33333%] before:right-2/4 before:h-[3px] before:w-full before:-translate-y-2/4 before:bg-[#2713C2] before:transition-all before:duration-1000 before:content-['']":
                  i !== 0,
              },
              {
                "text-[#2713C2]": currentStep === i,
              }
            )}
          >
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#2713C2] bg-white font-semibold text-[#2713C2]",
                {
                  "border-none": i + 1 <= currentStep,
                }
              )}
            >
              <CompleteStepIcon
                className={cn(
                  "opacity-0 transition-all duration-1000 ease-in-out",
                  {
                    "draw-checkmark opacity-100": i <= currentStep,
                  }
                )}
              />
              <span
                className={cn(
                  "absolute opacity-100 transition-all duration-1000 ease-out",
                  {
                    "opacity-0": i <= currentStep,
                  }
                )}
              >
                0{i + 1}
              </span>
            </div>
            <p
              className={cn("mt-1 text-sm font-medium text-[#2713C2]", {
                "text-black": i <= currentStep,
              })}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
const steps = ["Select item", "Book a item", "choose branch", "Review"];

const childrenArray: { [key: number]: JSX.Element } = {
  1: <div>step1</div>,
  2: <div>step2</div>,
  3: <div>step3</div>,
  4: <div>step4</div>,
};

export default function FormStepperUsage() {
  const [currentStep, setCurrentStep] = useState(0);
  const currentChild = childrenArray[currentStep];
  return (
    <div className="flex flex-col gap-y-4">
      <FormStepper steps={steps} currentStep={currentStep} />
      <div className="flex items-center justify-center p-4 py-2 text-black">
        {currentChild}
      </div>
      <div className="flex justify-end gap-4 p-4">
        <button
          className="rounded border border-gray-200 p-2 text-black disabled:text-gray-400"
          onClick={() => {
            if (currentStep >= 1) {
              setCurrentStep((prev) => prev - 1);
            }
          }}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          className="rounded bg-[#2713C2] p-2 disabled:bg-gray-400"
          onClick={() => {
            if (currentStep >= 0) {
              setCurrentStep((prev) => prev + 1);
            }
          }}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
