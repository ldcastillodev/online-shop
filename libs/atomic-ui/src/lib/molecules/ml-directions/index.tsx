import React from 'react'

export interface Direction {
  label: string
}

export interface MlDirectionsProps {
  directions: Direction[]
}

export const MlDirections = ({ directions }: MlDirectionsProps) => {
  return (
    <div>
      <div className="flex flex-row items-start ml-3">
        <span className=" font-bold mb-4 text-16 lg:text-20 ">Directions</span>
      </div>
      <div className="relative">
        {directions.map((direction, index) => (
          <div key={index} className={`flex items-baseline h-10 lg:h-12`}>
            <div className="flex flex-col items-center mr-2 w-10">
              <div
                className={`rounded-full flex items-center justify-center ${
                  index === 0 || index === directions.length - 1
                    ? `w-6 h-6 bg-primary-100 border-primary-100 ${index === directions.length - 1 ? '' : 'mb-[1px]'}`
                    : `w-2 h-2 bg-primary-500 border-primary-500`
                }`}
              >
                {(index === 0 || index === directions.length - 1) && (
                  <div className="rounded-full w-3 h-3 bg-primary-500 border-primary-500"></div>
                )}
              </div>
              {index !== directions.length - 1 && (
                <div
                  className={`w-0.5 bg-neutrals-400 rounded-full ${
                    index === 0 ? ' -z-[1] h-5 lg:h-7' : 'mt-0.5 -z-[1] h-7 lg:h-9'
                  } ${index === directions.length - 2 ? 'h-5 lg:h-7' : ''}`}
                ></div>
              )}
            </div>
            <div className="flex items-baseline w-full">
              <span className="text-neutrals-700 text-14">{direction.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
