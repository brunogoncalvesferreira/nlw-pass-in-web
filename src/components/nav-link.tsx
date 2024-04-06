import { ComponentProps, ReactNode } from "react"

interface NavLinkProps extends ComponentProps<'a'> { // extender atributos html tag a para o componente
  children: ReactNode
}
export function NavLink({children, ...props} : NavLinkProps) {
  return (
      <a {...props} className='text-sm font-medium text-zinc-300'>
        {children}
      </a>
  )
}