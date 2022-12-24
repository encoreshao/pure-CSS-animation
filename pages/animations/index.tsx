/* eslint-disable react/jsx-key */

import Link from "next/link"

const Index = () => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-2 h-screen"
    >
      {
        [
          'coffee-machine', 'submarine', 'lighthouse', 'waves', 'split-menu',
          'block-revealing-effect', 'folding-panorama', 'simple-loading', 'box-loading',
          'colour-keyboard', 'fade-tags'
        ].map((name) => (
          <div key={name}
            className="cursor-pointer"
          >
            <Link
              href={`/animations/${encodeURIComponent(name)}`}
            >
              <div className="text-2xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  {name.split(/-/).map(i => i.toUpperCase()).join(' ')}
                </span>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Index
