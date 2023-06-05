import { MlMap, MlMapProps } from '../../molecules'
import { AtIconInformative, AtIconInformativeProps } from '../../atoms'

export interface OrMapTileProps extends MlMapProps {
  details?: Pick<AtIconInformativeProps, 'icon' | 'label' | 'title'>[]
}

export const OrMapTile = ({ details, ...map }: OrMapTileProps) => (
  <div className="w-full">
    <MlMap {...map} />
    <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-y-8">
      {details?.map((d, i) => (
        <AtIconInformative key={i} {...d} />
      ))}
    </div>
  </div>
)
