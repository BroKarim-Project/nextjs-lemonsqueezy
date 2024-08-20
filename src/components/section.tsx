import React from 'react';
import SectionSvg from '@/../public/assets/svg/SectionSvg'

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string | number;
  customPaddings?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`
      } ${className || ''}`}
    >
      {children}

      <div className="w-0.25 bg-stroke-1 lg:left-7.5 pointer-events-none absolute left-5 top-0 hidden h-full md:block xl:left-10" />
      <div className="w-0.25 bg-stroke-1 lg:right-7.5 pointer-events-none absolute right-5 top-0 hidden h-full md:block xl:right-10" />

      {crosses && (
        <>
          <div
            className={`left-7.5 right-7.5 h-0.25 bg-stroke-1 absolute top-0 hidden ${
              crossesOffset && crossesOffset
            } pointer-events-none right-10 lg:block xl:left-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
