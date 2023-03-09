import { Link } from "@remix-run/react"

export const NavigationBar = () => {
  const links = [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/menu',
      label: 'Menu'
    },
    {
      to: '/orders',
      label: 'Orders'
    }
  ]
  return (
    <nav className={'p-4 bg-gray-300'}>
      {
        links.map(link => <Link className={'p-1 m-4 bg-blue-500 font-bold text-white rounded'} to={link.to}>{link.label}</Link>)
      }
    </nav>
  )
}
