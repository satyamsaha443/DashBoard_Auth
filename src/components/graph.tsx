import React from 'react'

type Props = {}

export default function Graph({ }: Props) {
    return (
        <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="pt-6 text-center bg-white rounded">
                <h4 className="mb-2 text-xs text-gray-500">Engaged Users</h4>
                <p className="mb-1 text-4xl font-bold">1 450</p>
                <span className="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">+115</span>
                <div className="chart" data-type="area-small" data-variant="indigo"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="pt-6 text-center bg-white rounded">
                <h4 className="mb-2 text-xs text-gray-500">Total Profit</h4>
                <p className="mb-1 text-4xl font-bold">$9,054</p>
                <span className="inline-block py-1 px-2 mb-2 text-xs text-white bg-red-500 rounded-full">-$1,535</span>
                <div className="chart" data-type="area-small" data-variant="blue"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="pt-6 text-center bg-white rounded">
                <h4 className="mb-2 text-xs text-gray-500">Click Counter</h4>
                <p className="mb-1 text-4xl font-bold">73.5%</p>
                <span className="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">+5.64%</span>
                <div className="chart" data-type="area-small" data-variant="green"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="pt-6 text-center bg-white rounded">
                <h4 className="mb-2 text-xs text-gray-500">Visit Duration</h4>
                <p className="mb-1 text-4xl font-bold">0m 50s</p>
                <span className="inline-block py-1 px-2 mb-2 text-xs text-white bg-green-500 rounded-full">+15s</span>
                <div className="chart" data-type="area-small" data-variant="orange"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}