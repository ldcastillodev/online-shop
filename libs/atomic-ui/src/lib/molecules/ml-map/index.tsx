import { Wrapper } from '@googlemaps/react-wrapper'
import { Map, MapProps } from './components/map'

export interface MlMapProps extends MapProps {
  apiKey: string
  className?: string
}

export const MlMap = ({ apiKey, className = 'w-full h-[12rem] lg:h-[23rem]', ...props }: MlMapProps) => (
  <div className={className}>
    <Wrapper apiKey={apiKey}>
      <Map {...props} />
    </Wrapper>
  </div>
)
