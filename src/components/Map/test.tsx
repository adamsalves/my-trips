import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: -23.5444866,
        longitude: -46.6865875
      }
    }
    render(<Map places={[place]} />)
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
